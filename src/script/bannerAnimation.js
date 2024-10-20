/**
 * @name: bannerAnimation
 * @author: sand
 * @date: 2024-07-22 10:31
 * @description：bannerAnimation
 * @update: 2024-07-22 10:31
 */

const tbEl = document.getElementById('cheGuevaraFeTurbulence')
const imgEL = document.getElementsByClassName('VPImage')[0]
const tl = new gsap.timeline({
    paused: true,
    // 无限重复
    repeat: -1,
    // 每次重复之间的延迟时间（2秒）
    repeatDelay: 2,
    // 动画反向播放
    yoyo: true,
    onUpdate: () => {
        if (window.location.pathname !== '/') {
            console.log(window.location.pathname)
            tl.kill()
            return
        }

        tbEl.setAttribute('baseFrequency', `0 ${ val.value }`)
    }
})

const val = {
    value: 0
}

tl.to(val, {
    value: 0.4,
    duration: 0.1
})

tl.to(val, {
    value: 0.00001,
    duration: 0.1
})

tl.to(val, {
    value: 0.4,
    duration: 0.1
})

tl.to(val, {
    value: 0,
    duration: 0.1
})

imgEL.onload = () => {
    tl.play()
}

if (imgEL.complete && tbEl) {
    tl.play()
}

if (!tbEl) {
    tl.kill()
}

