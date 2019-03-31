<template >
  <view class='icon-group'>
    <view class='icon-group-item' v-for='(item,index) in list' :key='index'>
      <view class='icon-group-item-inner' v-if="!item.isButton">
      <wux-icon :type='item.icon' :size='item.size' :color='item.color' @click="click(item,index)"/>
      <view class='icon-group-item-label' @click="click(item,index)">{{ item.label }}</view>
      </view>
      <button v-else size='default' :open-type="item.openType" @click="click(item,index)">
        <wux-icon :type='item.icon' :size='item.size' :color='item.color'/>
        <view class='icon-group-item-label'>{{ item.label }}</view>
      </button> 
      
    </view>
  </view>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: []
    },
    iconClick: {
      type: Function,
      default: null
    }
  },
  methods: {
    click (item, index) {
      if (this.iconClick) {
        this.iconClick(item, index)
      }
    }
  }
};
</script>

<style>
.icon-group {
  display: flex;
  justify-content: space-between;
  width: 93%;
  margin: 0 auto;
}
.icon-group-item {
  font-size: 16px;
  display: flex;
  line-height: 24px;
}
.icon-group-item-inner{
  display: flex;
}
.icon-group-item-label{
  margin-left: 4px;
}
</style>
