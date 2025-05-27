<script lang="ts" setup>
import CustomNavbar from '@/pages/index/components/CustomNavbar.vue'
import XtxSwiper from '@/components/XtxSwiper.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home.ts'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from '@/pages/index/components/CategoryPanel.vue'
import HotPanel from '@/pages/index/components/HotPanel.vue'
import XtxGuess from '@/components/XtxGuess.vue'
import type { XtxGuessInstance } from '@/types/components'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryItem[]>([])
const hotList = ref<HotItem[]>([])
const guessRef = ref<XtxGuessInstance>()
const isTriggered = ref(false)

const getHomeBannerData = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
const getHomeCategoryData = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

const getHomeHotData = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

const onScrollToLower = () => {
  guessRef.value?.getMore()
  console.log('上拉加载更多')
}

const onRefresherrefresh = async () => {
  isTriggered.value = true
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHomeHotData()])
  isTriggered.value = false
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHomeHotData()
})
</script>

<template>
  <CustomNavbar />
  <scroll-view
    :refresher-triggered="isTriggered"
    class="scroll-view"
    refresher-enabled
    scroll-y
    @refresherrefresh="onRefresherrefresh"
    @scrolltolower="onScrollToLower"
  >
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <HotPanel :list="hotList" />
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: #f7f7f7;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .scroll-view {
    flex: 1;
  }
}
</style>
