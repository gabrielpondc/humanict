<template>
  <view class="walking">
    <view class="walking--head">
      <text>Walking for {{walking.distance}} m</text>
      <text>{{walking.steps[walking.steps.length-1].assistant_action}}，</text>
      <text>About {{(fmt_duration)}} min</text>
    </view>
  </view>
</template>

<script>
import store from "@/store";
import * as helpers from "@/utils/helpers";

export default {
  props: ["walking"],
  data() {
    return {};
  },
  computed: {
    fmt_duration() {
      return Math.ceil(parseInt(this.walking.duration) / 60);
    }
  },

  methods: {}
};
</script>

<style lang="less" scoped>
.walking {
  margin-bottom: 20rpx;

  .walking--head {
    font-size: 30rpx;
    color: #bbb;
  }
}
</style>
