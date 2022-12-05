<script setup lang="ts">
import { ref } from 'vue'
import { logGitInfo, dowloadZip } from 'f-com'
import JSZip from 'jszip'

logGitInfo({ name: 'vite-project' })

defineProps<{ msg: string }>()

const srcs = [
    "https://img.zcool.cn/community/018qm015eahq0brygvyq7f3131.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01j4nhjimnbueyfoo5g3vg3735.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01oxq3unkxvgwgnfk3esyg3335.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01x1nt5cpmqtd3hpxtwtqe3439.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01lqvjelilx8rkdqcafbvi3031.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01ictg9b5oiilezm19zclx3634.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01yr4ian2jhx4avesa6t813339.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01wa9qof0tbwlhsyrx2ewk3236.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/012d1raaxswjsd1txbfznt3431.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01ctbedzl0hg8fouekkhbs3832.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01etq3kabsg0xflqqz9jfr3239.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01aidrjysqzfruwacbyn3n3037.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/011cphjcx7em5dr5jjpxto3830.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01adwltsth7eikpumyzgrz3230.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/015f5ye37dlri5soeck4sv3730.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100",
    "https://img.zcool.cn/community/01nkhcoioudjpvhyiiuo4p3830.jpg?x-oss-process=image/auto-orient,1/resize,m_lfit,w_1280,limit_1/sharpen,100/format,webp/quality,q_100"
]
const btn = ref('dowloadZip')
const dowload = function() {
  btn.value = '正在下载'
  console.log(btn.value)
  dowloadZip({ src: srcs, JsZip: JSZip, fileName: 'test-dl.zip'}).then(res => {
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
