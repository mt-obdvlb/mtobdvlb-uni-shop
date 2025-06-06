// /src/pages/hot/hot.vue
<script lang="ts" setup>
// 热门推荐页 标题和url

import { getHotRecommendAPI } from '@/services/hot.ts'
import { onLoad } from '@dcloudio/uni-app'
import type { SubTypeItem } from '@/types/hot'
import { ref } from 'vue'

const hotMap = [
  { type: '1', title: '特惠推荐', url: '/hot/preference' },
  { type: '2', title: '爆款推荐', url: '/hot/inVogue' },
  { type: '3', title: '一站买全', url: '/hot/oneStop' },
  { type: '4', title: '新鲜好物', url: '/hot/new' },
]
const query = defineProps<{
  type: string
}>()
const currentHot = hotMap.find((item) => item.type === query.type)
uni.setNavigationBarTitle({ title: currentHot!.title })

const bannerPicture = ref('')
const subTypes = ref<
  (SubTypeItem & {
    finish?: boolean
  })[]
>([])
const activeIndex = ref(0)

const getHotRecommendData = async () => {
  const res = await getHotRecommendAPI(currentHot!.url)
  bannerPicture.value = res.result.bannerPicture
  subTypes.value = res.result.subTypes
}

const onScrolltolower = async () => {
  // 获取下一页数据
  const currentTypes = subTypes.value[activeIndex.value]
  if (currentTypes.goodsItems.page < currentTypes.goodsItems.pages) {
    currentTypes.goodsItems.page++
  } else {
    currentTypes.finish = true
    return uni.showToast({
      title: '没有更多数据了',
      icon: 'none',
    })
  }
  const res = await getHotRecommendAPI(currentHot!.url, {
    subType: currentTypes.id,
    page: currentTypes.goodsItems.page,
    pageSize: currentTypes.goodsItems.pageSize,
  })
  const newGoods = res.result.subTypes[activeIndex.value].goodsItems.items
  currentTypes.goodsItems.items.push(...newGoods)
  console.log(currentTypes)
}

onLoad(() => {
  getHotRecommendData()
})
</script>

<template>
  <view class="viewport">
    <!-- 推荐封面图 -->
    <view class="cover">
      <image :src="bannerPicture"></image>
    </view>
    <!-- 推荐选项 -->
    <view class="tabs">
      <text
        v-for="(item, index) in subTypes"
        :key="item.id"
        :class="{ active: index === activeIndex }"
        class="text"
        @tap="activeIndex = index"
        >{{ item.title }}
      </text>
    </view>
    <!-- 推荐列表 -->
    <scroll-view
      v-for="(item, index) in subTypes"
      v-show="activeIndex === index"
      :key="item.id"
      class="scroll-view"
      scroll-y
      @scrolltolower="onScrolltolower"
    >
      <view class="goods">
        <navigator
          v-for="goods in item.goodsItems.items"
          :key="goods.id"
          :url="`/pages/goods/goods?id=${goods.id}`"
          class="navigator"
          hover-class="none"
        >
          <image :src="goods.picture" class="thumb"></image>
          <view class="name ellipsis">{{ goods.name }} </view>
          <view class="price">
            <text class="symbol">¥</text>
            <text class="number">{{ goods.price }}</text>
          </view>
        </navigator>
      </view>
      <view class="loading-text">
        {{ item.finish ? '没有更多数据了' : '加载中...' }}
      </view>
    </scroll-view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  background-color: #f4f4f4;
}

.viewport {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 180rpx 0 0;
  position: relative;
}

.cover {
  width: 750rpx;
  height: 225rpx;
  border-radius: 0 0 40rpx 40rpx;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
}

.scroll-view {
  flex: 1;
}

.tabs {
  display: flex;
  justify-content: space-evenly;
  height: 100rpx;
  line-height: 90rpx;
  margin: 0 20rpx;
  font-size: 28rpx;
  border-radius: 10rpx;
  box-shadow: 0 4rpx 5rpx rgba(200, 200, 200, 0.3);
  color: #333;
  background-color: #fff;
  position: relative;
  z-index: 9;

  .text {
    margin: 0 20rpx;
    position: relative;
  }

  .active {
    &::after {
      content: '';
      width: 40rpx;
      height: 4rpx;
      transform: translate(-50%);
      background-color: #27ba9b;
      position: absolute;
      left: 50%;
      bottom: 24rpx;
    }
  }
}

.goods {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 20rpx 20rpx;

  .navigator {
    width: 345rpx;
    padding: 20rpx;
    margin-top: 20rpx;
    border-radius: 10rpx;
    background-color: #fff;
  }

  .thumb {
    width: 305rpx;
    height: 305rpx;
  }

  .name {
    height: 88rpx;
    font-size: 26rpx;
  }

  .price {
    line-height: 1;
    color: #cf4444;
    font-size: 30rpx;
  }

  .symbol {
    font-size: 70%;
  }

  .decimal {
    font-size: 70%;
  }
}

.loading-text {
  text-align: center;
  font-size: 28rpx;
  color: #666;
  padding: 20rpx 0 50rpx;
}
</style>
