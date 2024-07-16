<template>
  <div class="container">
    <div class="title">
      <span>{{ '| ' + "地区销量趋势 " }}</span>
      <span class="iconfont icon-xiangxiajiantou" style="display: inline-block;width: 30px;height: 30px;"></span>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>
<style scoped lang='scss'>
.title {
  color: #f60;
  font-size: 0.3646rem;
  position: absolute;
  left: 0.1042rem;
  top: 0.1042rem;
  z-index: 10;
}

.title span:nth-child(2) {
  margin-left: 0.0521rem;
  font-size: 0.3646rem;
  cursor: pointer;
}
</style>
