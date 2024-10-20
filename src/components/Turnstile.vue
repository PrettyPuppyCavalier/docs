<script setup lang="ts">
import { useData } from "vitepress"
import { ref, defineProps, defineEmits, onMounted, onBeforeMount, computed } from 'vue'
import type { PropType } from 'vue'

const turnstileSrc = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
const turnstileLoadFunction = 'cfTurnstileOnLoad'

declare global {
  interface Window {
    turnstile: any;
    [turnstileLoadFunction]: any;
  }
}

declare interface VueTurnstileData {
  resetTimeout?: ReturnType<typeof setTimeout>;
  widgetId?: string;
}

const emit = defineEmits([ 'update:modelValue', 'error', 'unsupported', 'expired', 'before-interactive', 'after-interactive' ])
const props = defineProps({
  siteKey: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    required: true
  },
  resetInterval: {
    type: Number,
    required: false,
    default: 295 * 1000
  },
  size: {
    type: String as PropType<'normal' | 'flexible' | 'compact'>,
    required: false,
    default: 'normal'
  },
  language: {
    type: String,
    required: false,
    default: 'auto'
  },
  action: {
    type: String,
    required: false,
    default: ''
  },
  appearance: {
    type: String as PropType<'always' | 'execute' | 'interaction-only'>,
    required: false,
    default: 'always'
  },
  renderOnMount: {
    type: Boolean,
    required: false,
    default: true
  }
})

let turnstileState = typeof window !== 'undefined' ? (window.turnstile !== undefined ? 'ready' : 'unloaded') : 'unloaded'
let turnstileLoad: {
  resolve: (value?: unknown) => void;
  reject: (value?: unknown) => void;
}

const {isDark} = useData()
const resetTimeout = ref()
const widgetId = ref()
const turnstile = ref()

const turnstileOptions = computed(() => {
  return {
    sitekey: props.siteKey,
    theme: isDark.value ? 'dark' : 'light',
    language: props.language,
    size: props.size,
    action: props.action,
    appearance: props.appearance,
    // 挑战成功后调用的 JavaScript 回调。回调会传递一个可以验证的令牌
    callback: callback,
    // 发生错误（例如网络错误或挑战失败）时调用的 JavaScript 回调。请参阅客户端错误。 https://developers.cloudflare.com/turnstile/troubleshooting/client-side-errors/
    'error-callback': errorCallback,
    // 当令牌过期且不重置小部件时调用的 JavaScript 回调。
    'expired-callback': expiredCallback,
    // 当 Turnstile 不支持特定客户端/浏览器时调用 JavaScript 回调。
    'unsupported-callback': unsupportedCallback,
    // 在挑战进入交互模式之前调用的 JavaScript 回调。
    'before-interactive-callback': beforeInteractiveCallback,
    // 当挑战离开交互模式时调用 JavaScript 回调。
    'after-interactive-callback': afterInteractiveCallback
  }
})

const afterInteractiveCallback = () => {
  emit('after-interactive')
}

const beforeInteractiveCallback = () => {
  emit('before-interactive')
}

const expiredCallback = () => {
  emit('expired')
}

const unsupportedCallback = () => {
  emit('unsupported')
}

const errorCallback = (code: string) => {
  emit('error', code)
}

const callback = (token: string) => {
  emit('update:modelValue', token)
  startResetTimeout()
}

const reset = () => {
  if (window.turnstile) {
    emit('update:modelValue', '')
    window.turnstile.reset()
  }
}

const remove = () => {
  if (widgetId.value) {
    window.turnstile.remove(widgetId.value)
    widgetId.value = undefined
  }
}

const render = () => {
  widgetId.value = window.turnstile.render(turnstile.value, turnstileOptions.value)
}

const startResetTimeout = () => {
  resetTimeout.value = setTimeout(() => {
    reset()
  }, props.resetInterval)
}

onMounted(async () => {
  const turnstileLoadPromise = new Promise((resolve, reject) => {
    turnstileLoad = {resolve, reject}
    if (turnstileState === 'ready') resolve(undefined)
  })

  window[turnstileLoadFunction] = () => {
    turnstileLoad.resolve()
    turnstileState = 'ready'
  }

  const ensureTurnstile = () => {
    if (turnstileState === 'unloaded') {
      turnstileState = 'loading'
      const url = `${ turnstileSrc }?onload=${ turnstileLoadFunction }&render=explicit`
      const script = document.createElement('script')
      script.src = url
      script.async = true
      script.addEventListener('error', () => {
        turnstileLoad.reject('Failed to load Turnstile.')
      })
      document.head.appendChild(script)
    }
    return turnstileLoadPromise
  }

  await ensureTurnstile()

  if (props.renderOnMount) {
    render()
  }
})

onBeforeMount(() => {
  remove()
  clearTimeout(resetTimeout.value)
})
</script>

<template>
  <div ref="turnstile"></div>
</template>

<style scoped lang="less">

</style>