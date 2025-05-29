<!--
此文件为开发者工具生成，生成时间: 2025/5/29上午8:44:25
使用方法：
在 /Users/mtobdvlb/baiduSync/Code/Project/mtobdvlb-uni-shop/dist/dev/mp-weixin/pages/category/category.wxml 引入模板

```
<import src="category.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 /Users/mtobdvlb/baiduSync/Code/Project/mtobdvlb-uni-shop/dist/dev/mp-weixin/pages/category/category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="sk-container">
    <view class="viewport viewport">
      <view class="search search">
        <view class="input input">
          <text
            class="icon-search sk-transparent sk-text-14-2857-409 sk-text sk-pseudo sk-pseudo-circle"
          >
            女靴
          </text>
        </view>
      </view>
      <view class="categories categories">
        <scroll-view :scroll-y="true" class="primary primary">
          <view class="active item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-504 sk-text"> 居家 </text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-630 sk-text"> 美食 </text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-887 sk-text"> 服饰 </text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-790 sk-text"> 母婴 </text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-139 sk-text"> 个护 </text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-725 sk-text"> 严选 </text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-731 sk-text"> 数码 </text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-790 sk-text"> 运动 </text>
          </view>
          <view class="item sk-pseudo sk-pseudo-circle">
            <text class="name sk-transparent sk-text-14-2857-897 sk-text"> 杂项 </text>
          </view>
        </scroll-view>
        <scroll-view :scroll-y="true" class="secondary secondary">
          <view is="components/XtxSwiper" class="banner banner">
            <view class="carousel XtxSwiper--carousel">
              <swiper :autoplay="false" :circular="true" :current="0" :interval="3000">
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(0%, 0px) translateZ(0px);
                  "
                >
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
                <swiper-item
                  style="
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform: translate(100%, 0px) translateZ(0px);
                  "
                >
                  <navigator class="navigator XtxSwiper--navigator" hover-class="none">
                    <image class="image XtxSwiper--image sk-image" mode="aspectFill"></image>
                  </navigator>
                </swiper-item>
              </swiper>
              <view class="indicator XtxSwiper--indicator">
                <text class="active XtxSwiper--active dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
                <text class="dot XtxSwiper--dot"></text>
              </view>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-26-4706-420 sk-text"> 居家生活用品 </text>
              <navigator
                class="more sk-transparent sk-text-30-8824-680 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
              >
                全部
              </navigator>
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-586 sk-text">
                  钻石陶瓷涂层多用锅18cm 小奶锅
                </view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity"> ¥ </text>
                  <text class="number sk-transparent sk-text-14-2857-362 sk-text"> 149.00 </text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-885 sk-text">
                  极光限定 珠光蓝珐琅锅
                </view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity"> ¥ </text>
                  <text class="number sk-transparent sk-text-14-2857-903 sk-text"> 199.00 </text>
                </view>
              </navigator>
            </view>
          </view>
          <view class="panel panel">
            <view class="title title">
              <text class="name sk-transparent sk-text-26-4706-192 sk-text"> 收纳 </text>
              <navigator
                class="more sk-transparent sk-text-30-8824-471 sk-text sk-pseudo sk-pseudo-circle"
                hover-class="none"
              >
                全部
              </navigator>
            </view>
            <view class="section section">
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-131 sk-text">
                  给衣柜减减肥，真空防潮压缩袋
                </view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity"> ¥ </text>
                  <text class="number sk-transparent sk-text-14-2857-248 sk-text"> 79.00 </text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-934 sk-text">
                  爆款明星好物，抽屉式透明储物柜
                </view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity"> ¥ </text>
                  <text class="number sk-transparent sk-text-14-2857-55 sk-text"> 129.00 </text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-531 sk-text">
                  衣柜省空间神器，棉麻涤·收纳挂袋
                </view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity"> ¥ </text>
                  <text class="number sk-transparent sk-text-14-2857-959 sk-text"> 55.00 </text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-128 sk-text">
                  换季好帮手，大容量防尘衣物收纳袋
                </view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity"> ¥ </text>
                  <text class="number sk-transparent sk-text-14-2857-188 sk-text"> 69.00 </text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-762 sk-text">
                  可水洗的布艺收纳盒
                </view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity"> ¥ </text>
                  <text class="number sk-transparent sk-text-14-2857-451 sk-text"> 29.90 </text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
                <view class="name ellipsis sk-transparent sk-text-14-2857-65 sk-text">
                  开发员自留款，带滚轮双层脏衣篓
                </view>
                <view class="price price">
                  <text class="symbol sk-transparent sk-opacity"> ¥ </text>
                  <text class="number sk-transparent sk-text-14-2857-988 sk-text"> 125.00 </text>
                </view>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
              <navigator class="goods goods" hover-class="none">
                <image class="image sk-image"></image>
              </navigator>
            </view>
          </view>
        </scroll-view>
      </view>
    </view>
  </view>
</template>

<style>
/*
此文件为开发者工具生成，生成时间: 2025/5/29上午8:44:25

在 /Users/mtobdvlb/baiduSync/Code/Project/mtobdvlb-uni-shop/dist/dev/mp-weixin/pages/category/category.wxss 中引入样式
```
@import "./category.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
*/
.sk-transparent {
  color: transparent !important;
}

.sk-text-14-2857-409 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 39.0698rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-504 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-630 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-887 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-790 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-139 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-725 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-731 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-14-2857-897 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 34.186rpx;
  position: relative !important;
}

.sk-text-26-4706-420 {
  background-image: linear-gradient(
    transparent 26.4706%,
    #eeeeee 0%,
    #eeeeee 73.5294%,
    transparent 0%
  ) !important;
  background-size: 100% 59.3023rpx;
  position: relative !important;
}

.sk-text-30-8824-680 {
  background-image: linear-gradient(
    transparent 30.8824%,
    #eeeeee 0%,
    #eeeeee 69.1176%,
    transparent 0%
  ) !important;
  background-size: 100% 59.3023rpx;
  position: relative !important;
}

.sk-text-14-2857-586 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}

.sk-opacity {
  opacity: 0 !important;
}

.sk-text-14-2857-362 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-885 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}

.sk-text-14-2857-903 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-26-4706-192 {
  background-image: linear-gradient(
    transparent 26.4706%,
    #eeeeee 0%,
    #eeeeee 73.5294%,
    transparent 0%
  ) !important;
  background-size: 100% 59.3023rpx;
  position: relative !important;
}

.sk-text-30-8824-471 {
  background-image: linear-gradient(
    transparent 30.8824%,
    #eeeeee 0%,
    #eeeeee 69.1176%,
    transparent 0%
  ) !important;
  background-size: 100% 59.3023rpx;
  position: relative !important;
}

.sk-text-14-2857-131 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}

.sk-text-14-2857-248 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-934 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}

.sk-text-14-2857-55 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-531 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}

.sk-text-14-2857-959 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-128 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}

.sk-text-14-2857-188 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-762 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}

.sk-text-14-2857-451 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-text-14-2857-65 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 29.3023rpx;
  position: relative !important;
}

.sk-text-14-2857-988 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 31.7442rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
