<script lang="ts" setup>
import { ref } from 'vue'
import type { BannerItem } from '@/types/home'

const activeIndex = ref(0)

const props = defineProps<{
  list: BannerItem[]
}>()

const onChange: UniHelper.SwiperOnChange = (ev) => {
  activeIndex.value = ev.detail?.current
}
</script>

<template>
  <view class="carousel">
    <swiper :autoplay="false" :circular="true" :interval="3000" @change="onChange">
      <swiper-item v-for="item in list" :key="item.id">
        <navigator class="navigator" hover-class="none" url="/pages/index/index">
          <image :src="item.imgUrl" class="image" mode="aspectFill"></image>
        </navigator>
      </swiper-item>
    </swiper>
    <!-- 指示点 -->
    <view class="indicator">
      <text
        v-for="(item, index) in list"
        :key="item.id"
        :class="{ active: index === activeIndex }"
        class="dot"
      ></text>
    </view>
  </view>
</template>

<style lang="scss">
/* 轮播图 */
.carousel {
  height: 280rpx;
  position: relative;
  overflow: hidden;
  transform: translateY(0);
  background-color: #efefef;

  .indicator {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 16rpx;
    display: flex;
    justify-content: center;

    .dot {
      width: 30rpx;
      height: 6rpx;
      margin: 0 8rpx;
      border-radius: 6rpx;
      background-color: rgba(255, 255, 255, 0.4);
    }

    .active {
      background-color: #fff;
    }
  }

  .navigator,
  .image {
    width: 100%;
    height: 100%;
  }
}
</style>
