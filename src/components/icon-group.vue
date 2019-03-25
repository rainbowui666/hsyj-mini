<template >
  <view class='icon-group'>
    <view class='icon-group-item' v-for='(item,index) in list' :key='index'>
      <wux-icon :type='item.icon' :size='item.size' :color='item.color'/>
      <view>{{ item.number }}</view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    }
  }
};
</script>

<style>
.icon-group {
  display: flex;
  justify-content: space-between;
  width: 93%;
}
.icon-group-item {
  font-size: 16px;
  display: flex;
  line-height: 24px;
}
</style>
