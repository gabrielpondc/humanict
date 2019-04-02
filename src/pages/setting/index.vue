<template>
  <view>

    <view class="head">
      <image class="logo" mode="scaleToFill" src="/static/image/logo.png" />
      <view class="name">Urban Public Transpotation</view>
    </view>

    <view class="listTitle">Setting</view>
    <view class="list">
      <view class="item" @click="bindSettingTap">
        <view class="main">Setting</view>
        <view class="sub">Please open the location</view>
      </view>
      <view class="item" @click="bindClearTap">
        <view class="main">Clear Cache</view>
        <view class="sub">Clear history</view>
      </view>
    </view>

    <view class="listTitle">operation</view>
    <view class="list">
      <view class="item">
        <view class="main">share</view>
        <view class="sub">학번</view>
        <button class="button-share" open-type="share"></button>
      </view>
    </view>

    <!-- <view class="listTitle">新功能</view>
    <view class="list">
      <view class="item" @click="bindSoterTap">
        <view class="main">生物认证</view>
        <view class="sub">SoterAuthentication</view>
      </view>
    </view> -->

  </view>
</template>

<script>
import store from "@/store";

export default {
  data() {
    return {};
  },

  components: {},

  methods: {
    bindSettingTap() {
      wx.openSetting({
        success: res => {
          let authSetting = res.authSetting;
          if (authSetting["scope.userLocation"]) {
          } else {
            wx.showToast({
              title: "Please Open Location",
              icon: "none"
            });
          }
        }
      });
    },

    bindClearTap() {
      const success = res => {
        if (res.tapIndex == 0) {
          // wx.clearStorageSync();
          store.commit("route/clearHistorys");
        }
      };

      wx.showActionSheet({
        itemList: ["Clear"],
        itemColor: "#FF3B30",
        success
      });
    }

    // bindSoterTap() {
    //   wx.checkIsSupportSoterAuthentication({
    //     success(res) {
    //       console.log(res);
    //       // res.supportMode = [] 不具备任何被SOTER支持的生物识别方式
    //       // res.supportMode = ['fingerPrint'] 只支持指纹识别
    //       // res.supportMode = ['fingerPrint', 'facial'] 支持指纹识别和人脸识别
    //     }
    //   });

    //   wx.startSoterAuthentication({
    //     requestAuthModes: ["facial"],
    //     challenge: "123456",
    //     authContent: "请用指纹解锁",
    //     success(res) {
    //       console.log(res);
    //     },
    //     fail(err) {
    //       console.log(err);
    //     }
    //   });
    // }
  },

  created() {},

  onShareAppMessage(res) {
    return {
      title: "Urban Publlic Transportation",
      path: "/pages/route/main",
      imageUrl: "/static/image/logo.png"
    };
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
