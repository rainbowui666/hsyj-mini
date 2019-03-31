<template >
  <view class="head_message">
      <input :value="valueData" disabled="true"/>
  </view>
</template>

<script>
export default {
  props: {
    valueData: {
      type: String,
      default: null
    }
  },
  methods: {
  }
};
</script>

<style>
.head_message{
  background-color: #fff;
  height: 40px;
}
.head_message input{
  height: 30px;
  width: 96%;
  background-color: rgba(211, 207, 207, 0.6);
  margin: 5px 2%;
  position: absolute;
  font-size: 14px;
}
</style>
