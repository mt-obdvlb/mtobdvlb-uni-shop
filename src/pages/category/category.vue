<script lang="ts" setup>
//
import { getHomeBannerAPI } from '@/services/home.ts'
import type { ComputedRef } from 'vue'
import { computed, ref } from 'vue'
import type { BannerItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { getCategoryTopAPI } from '@/services/category.ts'
import type { CategoryChildItem, CategoryTopItem } from '@/types/category'
import PageSkeleton from '@/pages/category/components/PageSkeleton.vue'

const bannerList = ref<BannerItem[]>([])
const categoryList = ref<CategoryTopItem[]>([])
const activeIndex = ref(0)
const isLoading = ref(true)

const getBannerData = async () => {
  const res = await getHomeBannerAPI(2)
  // console.log(res)
  bannerList.value = res.result
}

const getCategoryTopData = async () => {
  const res = await getCategoryTopAPI()
  categoryList.value = res.result
}

const subCategoryList: ComputedRef<CategoryChildItem[]> = computed(() => {
  return categoryList.value[activeIndex.value]?.children || []
})

onLoad(() => {
  isLoading.value = true
  getBannerData()
  getCategoryTopData()
  isLoading.value = false
})
</script>

<template>
  <PageSkeleton v-if="isLoading" />
  <view v-else class="viewport">
    <!-- 搜索框 -->
    <view class="search">
      <view class="input">
        <text class="icon-search">女靴</text>
      </view>
    </view>
    <!-- 分类 -->
    <view class="categories">
      <!-- 左侧：一级分类 -->
      <scroll-view class="primary" scroll-y>
        <view
          v-for="(item, index) in categoryList"
          :key="item.id"
          :class="{ active: index === activeIndex }"
          class="item"
          @tap="activeIndex = index"
        >
          <text class="name">{{ item.name }}</text>
        </view>
      </scroll-view>
      <!-- 右侧：二级分类 -->
      <scroll-view class="secondary" scroll-y>
        <!-- 焦点图 -->
        <XtxSwiper :list="bannerList" class="banner" />
        <!-- 内容区域 -->
        <view v-for="item in subCategoryList" :key="item.id" class="panel">
          <view class="title">
            <text class="name">{{ item.name }}</text>
            <navigator class="more" hover-class="none"> 全部 </navigator>
          </view>
          <view class="section">
            <navigator
              v-for="goods in item.goods"
              :key="goods.id"
              :url="`/pages/goods/goods?id=${goods.id}`"
              class="goods"
              hover-class="none"
            >
              <image :src="goods.picture" class="image"></image>
              <view class="name ellipsis">{{ goods.name }} </view>
              <view class="price">
                <text class="symbol">¥</text>
                <text class="number">{{ goods.price }} </text>
              </view>
            </navigator>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>

<style lang="scss">
page {
  height: 100%;
  overflow: hidden;
}

.viewport {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.search {
  padding: 0 30rpx 20rpx;
  background-color: #fff;

  .input {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 64rpx;
    padding-left: 26rpx;
    color: #8b8b8b;
    font-size: 28rpx;
    border-radius: 32rpx;
    background-color: #f3f4f4;
  }
}

.icon-search {
  &::before {
    margin-right: 10rpx;
  }
}

/* 分类 */
.categories {
  flex: 1;
  min-height: 400rpx;
  display: flex;
}

/* 一级分类 */
.primary {
  overflow: hidden;
  width: 180rpx;
  flex: none;
  background-color: #f6f6f6;

  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96rpx;
    font-size: 26rpx;
    color: #595c63;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      left: 42rpx;
      bottom: 0;
      width: 96rpx;
      border-top: 1rpx solid #e3e4e7;
    }
  }

  .active {
    background-color: #fff;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 8rpx;
      height: 100%;
      background-color: #27ba9b;
    }
  }
}

.primary .item:last-child::after,
.primary .active::after {
  display: none;
}

/* 二级分类 */
.secondary {
  background-color: #fff;

  .carousel {
    height: 200rpx;
    margin: 0 30rpx 20rpx;
    border-radius: 4rpx;
    overflow: hidden;
  }

  .panel {
    margin: 0 30rpx 0rpx;
  }

  .title {
    height: 60rpx;
    line-height: 60rpx;
    color: #333;
    font-size: 28rpx;
    border-bottom: 1rpx solid #f7f7f8;

    .more {
      float: right;
      padding-left: 20rpx;
      font-size: 24rpx;
      color: #999;
    }
  }

  .more {
    &::after {
      font-family: 'erabbit' !important;
      content: '\e6c2';
    }
  }

  .section {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 20rpx 0;

    .goods {
      width: 150rpx;
      margin: 0rpx 30rpx 20rpx 0;

      &:nth-child(3n) {
        margin-right: 0;
      }

      image {
        width: 150rpx;
        height: 150rpx;
      }

      .name {
        padding: 5rpx;
        font-size: 22rpx;
        color: #333;
      }

      .price {
        padding: 5rpx;
        font-size: 18rpx;
        color: #cf4444;
      }

      .number {
        font-size: 24rpx;
        margin-left: 2rpx;
      }
    }
  }
}
</style>
