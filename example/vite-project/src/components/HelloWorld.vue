<script setup lang="ts">
import { ref } from 'vue'
import { logGitInfo, dowloadZip } from 'f-com'
import JSZip from 'jszip'

logGitInfo({ name: 'vite-project' })

defineProps<{ msg: string }>()

const srcs = [
  "https://img.zcool.cn/community/01ccd862a6ec5c0002c313f73b210c.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
  "https://img.zcool.cn/community/01f3d062a6ec600002c45e37966330.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
  "https://img.zcool.cn/community/01b99962a6ec680002c313f7811013.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
  "https://img.zcool.cn/community/01778862a6ec6d0002c313f7c23267.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
  "https://img.zcool.cn/community/01a88d62a6ec710002c313f733fbbd.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
  "https://img.zcool.cn/community/01205b62a6ec770002c45e37060a36.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
  "https://img.zcool.cn/community/01e08962a6ec7d0002c313f7ea6b54.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
  "https://img.zcool.cn/community/01afb662a6ec820002c313f7359613.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
  "https://img.zcool.cn/community/014d9262a6ec890002c45e3714ffac.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
  "https://img.zcool.cn/community/01811e62a6ec920002c45e37f52b29.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100"
]
const btn = ref('dowloadZip')
const dowload = function() {
  btn.value = '正在下载'
  console.log(btn.value)
  dowloadZip({ src: srcs, JsZip: JSZip, fileName: 'test-dl.zip', removeParams: true }).then(() => {
    btn.value = 'dowloadZip'
  })
}

</script>

<template>
  <h1 class="text-red-700 text-center text-2xl mt-7">{{ msg }}</h1>
  <div class="m-5 p-5 shadow rounded-md">
    <button class="bg-red-400 py-2 rounded-full px-5 focus:bg-red-500 text-white" @click="dowload">{{ btn }}</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
