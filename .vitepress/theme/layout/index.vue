<script lang="ts" setup>
import { Ref, inject, onMounted, computed } from 'vue'
import { useData } from 'vitepress'
import { ElTag, ElSpace } from 'element-plus'
import DefaultTheme from 'vitepress/theme'
import { usePageId } from '../composables'

import Giscus from '@giscus/vue'

const pageId = usePageId()
const {isDark, page, theme, frontmatter} = useData()
const DEV = inject<Ref<boolean>>('DEV')
const {footer, comment, visitor} = theme.value
const {Layout} = DefaultTheme
const showSponsor = computed(() => {
  const isBook = frontmatter.value?.tags && Array.isArray(frontmatter.value.tags) && frontmatter.value.tags.length > 0
  const sponsor = frontmatter.value?.sponsor

  return isBook && sponsor
})
const sponsorCode = computed(() => {
  const sponsor = frontmatter.value?.sponsor

  if (showSponsor.value) {
    return sponsor
  }

  // 默认广告
  return 'data:image/png;base64,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'
})

onMounted(() => {
  // console.log('frontmatter-----', frontmatter)
  // console.log('pageId-----', frontmatter.value?.pageId)
})
</script>
<template>
  <Layout>
    <template #home-hero-image>
      <svg class="image-bg" xmlns="http://www.w3.org/2000/svg">
        <filter id="cheGuevara" x="-20%" y="-20%" width="140%" height="140%" filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse" color-interpolation-filters="linearRGB">
          <feTurbulence id="cheGuevaraFeTurbulence" type="fractalNoise" baseFrequency="0 0.4" numOctaves="2" seed="2"
                        stitchTiles="stitch" x="0%" y="0%" width="100%" height="100%" result="turbulence"/>
          <feDisplacementMap in="SourceGraphic" in2="turbulence" scale="30" xChannelSelector="R" yChannelSelector="B"
                             x="0%" y="0%" width="100%" height="100%" result="displacementMap"/>
        </filter>
        <image x="0" y="0" width="100%" height="100%" href="@/public/assets/banner.png" style="filter: url(#cheGuevara);"/>
      </svg>
    </template>
    <template #doc-before>
      <div class="doc-before">
        <el-space class="tags">
          <el-tag type="primary" v-for="tag in frontmatter.tags" :key="tag">{{ tag }}</el-tag>
        </el-space>

        <div class="visitor-wrap" v-if="visitor && !DEV">
          <img
              class="visitor"
              :src="`https://visitor-badge.imlete.cn/?id=${visitor.badgeId}.${pageId}&type=uv&label=UV`"
              title="当前页面独立访问数"
              onerror="this.style.display='none'"
          />
          <img
              class="visitor"
              :src="`https://visitor-badge.imlete.cn/?id=${visitor.badgeId}.${pageId}&type=pv&label=PV`"
              title="当前页面累计访问数"
              onerror="this.style.display='none'"
          />
        </div>
      </div>
    </template>

    <template v-if="comment && frontmatter.comment !== false" #doc-after>
      <div class="doc-comments">
        <Giscus
            id="comments"
            mapping="specific"
            :term="pageId"
            strict="1"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="top"
            :theme="isDark ? 'dark' : 'light'"
            lang="zh-CN"
            loading="lazy"
            v-bind="{ ...comment }"
        />
      </div>
    </template>

    <template #aside-ads-after>
      <div class="card">
        <p v-if="showSponsor">作者收款码，与本站无关</p>
        <p v-if="showSponsor">对您有帮助可以投币感谢作者</p>
        <img class="image-src" :src="sponsorCode" alt="">
      </div>
    </template>
  </Layout>

</template>
<style lang="less" scoped>
.doc-comments {
  margin-top: 30px;
}

.card {
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px;
  margin-top: 20px;
  border-radius: 12px;
  text-align: center;
  line-height: 18px;
  font-size: 12px;
  font-weight: 500;
  background-color: var(--vp-carbon-ads-bg-color);
}

.doc-before {
  display: flex;
  justify-content: space-between;

  .tags {
    margin-bottom: 10px;
  }
}

.visitor-wrap {
  height: 32px;
  display: grid;
  grid-gap: 0 16px;
  margin-left: auto;
  grid-auto-flow: column;
  align-items: center;
  justify-content: right;
  grid-template-columns: auto;
}

.image-bg {
  position: absolute;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  width: 192px;
  height: 192px;
  transform: translate(-50%, -50%);
}

@media (min-width: 640px) {
  .image-bg {
    width: 256px;
    height: 256px;
  }
}

@media (min-width: 960px) {
  .image-bg {
    width: 320px;
    height: 320px;
  }
}
</style>
