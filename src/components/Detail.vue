<!-- 详情页 -->
<template>
  <section class="main-wrap">
    <div class="intro">

    </div>
    <div class="summary-info">
      <ul>
        <li v-for="(item, index) in pageInfoList" :key="index">
          <div>{{item.title}}</div>
          <p v-for="(img, i) in item.imgList" :key="i">
            <img :src="img">
          </p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: {
    pageInfoList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/detail.less';
</style>
