/**
 * @name: watermark
 * @author: Docs
 * @date: 2024-05-12 00:16
 * @description：加密混淆：javascript-obfuscator watermark.js --compact true --self-defending true --string-array true --string-array-index-shift true --string-array-wrappers-type function --string-array-wrappers-count 5 --string-array-wrappers-chained-calls true --transform-object-keys true --unicode-escape-sequence true
 * @update: 2024-05-12 00:16
 */

const currentScript = document.currentScript
const props = {
    /**
     * 水印的宽度，content 的默认值是它自己的宽度 默认值: 120
     */
    width: currentScript.getAttribute('data-width') ?? 120,
    /**
     * 水印的高度， content 的默认值是它自己的高度 默认值: 64
     */
    height: currentScript.getAttribute('data-height') ?? 64,
    /**
     * 水印的旋转角度, 单位 ° 默认值: -22
     */
    rotate: currentScript.getAttribute('data-rotate') ?? -22,
    /**
     * 水印图片，建议使用 2x 或 3x 图像
     */
    image: currentScript.getAttribute('data-image'),
    /**
     * 水印文本内容  string | array<string>
     */
    content: getContent(currentScript.getAttribute('data-content')),
    /**
     * 文字样式
     * @param {string} color
     */
    font: currentScript.getAttribute('data-font') ?? {
        // 字体颜色 string
        color: 'rgba(0,0,0,.08)',
        // 字体大小 number
        fontSize: 12,
        // 字重 'normal' | 'light' | 'weight' | number
        fontWeight: 'normal',
        // 字体
        fontFamily: 'sans-serif',
        // 字体样式 'none' | 'normal' | 'italic' | 'oblique'
        fontStyle: 'normal',
        // 	文本对齐 'left' | 'right' | 'center'| 'start' | 'end'
        textAlign: 'center',
        // 文本基线 'top' | 'hanging' | 'middle' | 'alphabetic' | 'ideographic' | 'bottom'
        textBaseline: 'top'
    },
    /**
     * 水印元素的z-index值 默认值: 9
     */
    zIndex: currentScript.getAttribute('data-z-index') ?? 1,
    /**
     * 水印之间的间距 默认值: [100, 100]
     */
    gap: currentScript.getAttribute('data-gap')?.split(',').map(item => Number(item)) ?? [ 30, 30 ],
    /**
     * 水印从容器左上角的偏移 默认值: [gap[0]/2, gap[1]/2]
     */
    offset: currentScript.getAttribute('data-offset')?.split(',').map(item => Number(item))
}
let color = getContentColor()// props.font?.color ?? 'rgba(0,0,0,.15)'
const fontSize = props.font?.fontSize ?? 16
const fontWeight = props.font?.fontWeight ?? 'normal'
const fontStyle = props.font?.fontStyle ?? 'normal'
const fontFamily = props.font?.fontFamily ?? 'sans-serif'
const textAlign = props.font?.textAlign ?? 'center'
const textBaseline = props.font?.textBaseline ?? 'top'

const gapX = props.gap[0]
const gapY = props.gap[1]
const gapXCenter = gapX / 2
const gapYCenter = gapY / 2
const offsetLeft = props.offset?.[0] ?? gapXCenter
const offsetTop = props.offset?.[1] ?? gapYCenter

const containerRef = document.body
let watermarkRef = null
let stopObservation = false

const FontGap = 3

function getContent(c) {
    let content = c
    try {
        // 尝试解析传入的参数
        let contentArray = JSON.parse(c)

        // 如果成功解析，并且返回的是数组，则直接使用解析后的数组
        if (Array.isArray(contentArray)) {
            content = contentArray
        }
    }
    catch (error) {
        console.log(error)
        // 如果解析失败，或者返回的不是数组，则将 content 视为字符串处理
        content = [ c ]
    }

    return content
}

function getContentColor() {
    const htmlClasses = document.documentElement.classList
    // 检查是否包含暗黑模式的 class
    const isDarkMode = htmlClasses.contains('dark')
    // 更新水印颜色
    return isDarkMode ? 'rgba(255, 255, 255, 0.04)' : 'rgba(0, 0, 0, 0.08)'

}

function toLowercaseSeparator(key) {
    return key.replace(/([A-Z])/g, '-$1').toLowerCase()
}

function getStyleStr(style) {
    return Object.keys(style).map(
        (key) =>
            `${ toLowercaseSeparator(key) }: ${ style[key] };`
    ).join(' ')
}

// Get single clips
function getClips(
    content,
    rotate,
    ratio,
    width,
    height,
    font,
    gapX,
    gapY
) {
    // ================= Text / Image =================
    const [ ctx, canvas, contentWidth, contentHeight ] = prepareCanvas(
        width,
        height,
        ratio
    )

    if (content instanceof HTMLImageElement) {
        // Image
        ctx.drawImage(content, 0, 0, contentWidth, contentHeight)
    }
    else {
        // Text
        const {
            color,
            fontSize,
            fontStyle,
            fontWeight,
            fontFamily,
            textAlign,
            textBaseline
        } = font
        const mergedFontSize = Number(fontSize) * ratio

        ctx.font = `${ fontStyle } normal ${ fontWeight } ${ mergedFontSize }px/${ height }px ${ fontFamily }`
        ctx.fillStyle = color
        ctx.textAlign = textAlign
        ctx.textBaseline = textBaseline
        content.forEach((item, index) => {
            ctx.fillText(
                item ?? '',
                contentWidth / 2,
                index * (mergedFontSize + FontGap * ratio)
            )
        })
    }

    // ==================== Rotate ====================
    const angle = (Math.PI / 180) * Number(rotate)
    const maxSize = Math.max(width, height)
    const [ rCtx, rCanvas, realMaxSize ] = prepareCanvas(maxSize, maxSize, ratio)

    // Copy from `ctx` and rotate
    rCtx.translate(realMaxSize / 2, realMaxSize / 2)
    rCtx.rotate(angle)
    if (contentWidth > 0 && contentHeight > 0) {
        rCtx.drawImage(canvas, -contentWidth / 2, -contentHeight / 2)
    }

    // Get boundary of rotated text
    function getRotatePos(x, y) {
        const targetX = x * Math.cos(angle) - y * Math.sin(angle)
        const targetY = x * Math.sin(angle) + y * Math.cos(angle)
        return [ targetX, targetY ]
    }

    let left = 0
    let right = 0
    let top = 0
    let bottom = 0

    const halfWidth = contentWidth / 2
    const halfHeight = contentHeight / 2
    const points = [
        [ 0 - halfWidth, 0 - halfHeight ],
        [ 0 + halfWidth, 0 - halfHeight ],
        [ 0 + halfWidth, 0 + halfHeight ],
        [ 0 - halfWidth, 0 + halfHeight ]
    ]
    points.forEach(([ x, y ]) => {
        const [ targetX, targetY ] = getRotatePos(x, y)
        left = Math.min(left, targetX)
        right = Math.max(right, targetX)
        top = Math.min(top, targetY)
        bottom = Math.max(bottom, targetY)
    })

    const cutLeft = left + realMaxSize / 2
    const cutTop = top + realMaxSize / 2
    const cutWidth = right - left
    const cutHeight = bottom - top

    // ================ Fill Alternate ================
    const realGapX = gapX * ratio
    const realGapY = gapY * ratio
    const filledWidth = (cutWidth + realGapX) * 2
    const filledHeight = cutHeight + realGapY

    const [ fCtx, fCanvas ] = prepareCanvas(filledWidth, filledHeight)

    function drawImg(targetX = 0, targetY = 0) {
        fCtx.drawImage(
            rCanvas,
            cutLeft,
            cutTop,
            cutWidth,
            cutHeight,
            targetX,
            targetY,
            cutWidth,
            cutHeight
        )
    }

    drawImg()
    drawImg(cutWidth + realGapX, -cutHeight / 2 - realGapY / 2)
    drawImg(cutWidth + realGapX, +cutHeight / 2 + realGapY / 2)

    return [ fCanvas.toDataURL(), filledWidth / ratio, filledHeight / ratio ]
}

function getMarkStyle() {
    const markStyle = {
        zIndex: props.zIndex,
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        backgroundRepeat: 'repeat'
    }

    /** Calculate the style of the offset */
    let positionLeft = offsetLeft - gapXCenter
    let positionTop = offsetTop - gapYCenter
    if (positionLeft > 0) {
        markStyle.left = `${ positionLeft }px`
        markStyle.width = `calc(100% - ${ positionLeft }px)`
        positionLeft = 0
    }
    if (positionTop > 0) {
        markStyle.top = `${ positionTop }px`
        markStyle.height = `calc(100% - ${ positionTop }px)`
        positionTop = 0
    }
    markStyle.backgroundPosition = `${ positionLeft }px ${ positionTop }px`

    return markStyle
}

const destroyWatermark = () => {
    if (watermarkRef) {
        watermarkRef.remove()
        watermarkRef = undefined
    }
}

function getPixelRatio() {
    return window.devicePixelRatio || 1
}

function getMarkSize(ctx) {
    let defaultWidth = 120
    let defaultHeight = 64
    const image = props.image
    const content = props.content
    const width = props.width
    const height = props.height

    if (!image && ctx.measureText) {
        ctx.font = `${ Number(fontSize) }px ${ fontFamily }`
        const sizes = content.map((item) => {
            const metrics = ctx.measureText(item)

            return [
                metrics.width,
                // Using `actualBoundingBoxAscent` to be compatible with lower version browsers (eg: Firefox < 116)
                metrics.fontBoundingBoxAscent !== undefined
                    ? metrics.fontBoundingBoxAscent + metrics.fontBoundingBoxDescent
                    : metrics.actualBoundingBoxAscent + metrics.actualBoundingBoxDescent
            ]
        })
        defaultWidth = Math.ceil(Math.max(...sizes.map((size) => size[0])))
        defaultHeight =
            Math.ceil(Math.max(...sizes.map((size) => size[1]))) * content.length +
            (content.length - 1) * FontGap
    }

    return [ width ?? defaultWidth, height ?? defaultHeight ]
}

function prepareCanvas(
    width,
    height,
    ratio = 1
) {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const realWidth = width * ratio
    const realHeight = height * ratio
    canvas.setAttribute('width', `${ realWidth }px`)
    canvas.setAttribute('height', `${ realHeight }px`)
    ctx.save()

    return [ ctx, canvas, realWidth, realHeight ]
}


const appendWatermark = (base64Url, markWidth) => {
    if (containerRef && watermarkRef) {
        stopObservation = true
        watermarkRef.setAttribute(
            'style',
            getStyleStr({
                ...getMarkStyle(),
                backgroundImage: `url('${ base64Url }')`,
                backgroundSize: `${ Math.floor(markWidth) }px`
            })
        )
        containerRef?.append(watermarkRef)
        // Delayed execution
        setTimeout(() => {
            stopObservation = false
        })
    }
}

function renderWatermark() {
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')
    const image = props.image
    const content = props.content
    const rotate = props.rotate

    if (ctx) {
        if (!watermarkRef) {
            watermarkRef = document.createElement('div')
        }

        const ratio = getPixelRatio()
        const [ markWidth, markHeight ] = getMarkSize(ctx)

        const drawCanvas = (drawContent) => {
            const [ textClips, clipWidth ] = getClips(
                drawContent || '',
                rotate,
                ratio,
                markWidth,
                markHeight,
                {
                    color: color,
                    fontSize: fontSize,
                    fontStyle: fontStyle,
                    fontWeight: fontWeight,
                    fontFamily: fontFamily,
                    textAlign: textAlign,
                    textBaseline: textBaseline
                },
                gapX,
                gapY
            )

            appendWatermark(textClips, clipWidth)
        }

        if (image) {
            const img = new Image()
            img.onload = () => {
                drawCanvas(img)
            }
            img.onerror = () => {
                drawCanvas(content)
            }
            img.crossOrigin = 'anonymous'
            img.referrerPolicy = 'no-referrer'
            img.src = image
        }
        else {
            drawCanvas(content)
        }
    }
}

function reRendering(
    mutation,
    watermarkElement
) {
    let flag = false
    // Whether to delete the watermark node
    if (mutation.removedNodes.length && watermarkElement) {
        flag = Array.from(mutation.removedNodes).includes(watermarkElement)
    }
    // Whether the watermark dom property value has been modified
    if (mutation.type === 'attributes' && mutation.target === watermarkElement) {
        flag = true
    }
    return flag
}

function onMutate(mutations) {
    if (stopObservation) {
        return
    }
    mutations.forEach((mutation) => {
        if (reRendering(mutation, watermarkRef)) {
            destroyWatermark()
            renderWatermark()
        }
    })
}

function useMutationObserver(containerRef, onMutate, options) {
    const observer = new MutationObserver(onMutate)

    observer.observe(containerRef, options)

    // 返回一个清除监听器的函数
    return () => {
        observer.disconnect()
    }
}

const clearObserver = useMutationObserver(containerRef, onMutate, {
    attributes: true,
    subtree: true,
    childList: true
})

const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            // 更新水印颜色
            color = getContentColor()
            // 重新渲染水印
            destroyWatermark()
            renderWatermark()
        }
    })
})

// 监听 HTML 根元素（<html>）的属性变化
observer.observe(document.documentElement, {attributes: true})

// 当不再需要监听时，调用 disconnect 方法
// observer.disconnect();

// 当不再需要监听时，调用清除函数
// clearObserver();

renderWatermark()


