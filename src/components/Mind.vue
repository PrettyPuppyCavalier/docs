<script setup lang="ts">
import { reactive, ref, computed, inject, Ref } from "vue"
import Mindmap from '@/lib/mindmap/vue3-mindmap.mjs';

const props = defineProps({
  /**
   * 数据
   */
  data: {
    type: Array,
    default: []
  },
  height: {
    type: [ Number, String ],
    default: 800
  }
})

const locale = ref<'zh' | 'en' | 'ptBR'>('zh')
type checkbox = {
  [key: string]: {
    value: boolean,
    disabled?: boolean
  }
}
const checkboxList = reactive<checkbox>({
  // 是否显示居中按钮
  'center-btn': {value: true},
  // 是否显示缩放按钮
  'fit-btn': {value: true},
  // 是否显示撤销重做按钮
  timetravel: {value: false},
  // 是否显示下载按钮
  'download-btn': {value: false},
  // 是否显示添加节点按钮
  'add-node-btn': {value: false},
  keyboard: {value: false},
  // 是否可缩放、拖移
  zoom: {value: true},
  // 设置节点是否可拖拽
  drag: {value: false},
  // 是否可编辑
  edit: {value: false},
  contextmenu: {value: false},
  // 设置缩放范围
  'sharp-corner': {value: false},
  vertical: {value: false}
})

const rangeList = reactive({
  branch: {value: 4, min: 1, max: 6},
  'x-gap': {value: 84, min: 0, max: 100},
  'y-gap': {value: 18, min: 0, max: 100}
})

const data = computed(() => props.data || [])
const onChange = (e) => console.log('update:model-value', e)
</script>

<template>
  <!--  <div class="mind-map-op-wrap">
      <div>
        <label for="language-select">Language</label>
        <select id="language-select" v-model="locale">
          <option value="zh">简体中文</option>
          <option value="en">English</option>
          <option value="ptBR">Brazilian Portuguese</option>
        </select>
      </div>
      <div v-for="(item, key) in checkboxList" :key="key">
        <input type="checkbox" :name="key.toString()" v-model="item.value" :disabled="item.disabled">
        <label :for="key.toString()">{{ key }}</label>
      </div>
      <div v-for="(item, key) in rangeList" :key="key">
        <input type="range" :name="key" v-model.number="item.value" :min="item.min" :max="item.max">
        <label :for="key">{{ key }}（{{ item.value }}）</label>
      </div>
    </div>-->
  <Mindmap
      class="mind-map-wrap"
      v-model="data"
      :style="{height: height + 'px'}"
      :branch="rangeList['branch'].value"
      :x-gap="rangeList['x-gap'].value"
      :y-gap="rangeList['y-gap'].value"
      :zoom="checkboxList['zoom'].value"
      :fit-btn="checkboxList['fit-btn'].value"
      :center-btn="checkboxList['center-btn'].value"
      :download-btn="checkboxList['download-btn'].value"
      :drag="checkboxList['drag'].value"
      :edit="checkboxList['edit'].value"
      :add-node-btn="checkboxList['add-node-btn'].value"
      :sharp-corner="checkboxList['sharp-corner'].value"
      :ctm="checkboxList['contextmenu'].value"
      :timetravel="checkboxList['timetravel'].value"
      @update:model-value="onChange"
      :locale="locale"
  />
</template>

<style lang="less">
.mind-map-wrap {
  width: 100%;
  height: 800px;
}

.mind-map-op-wrap {
  width: 100%;
  flex-wrap: wrap;
  background-color: white;
  padding: 12px;
  display: flex;
  gap: 10px;
  overflow: scroll;

  div {
    display: flex;
    align-items: center;
    gap: 5px;
  }
}
</style>
