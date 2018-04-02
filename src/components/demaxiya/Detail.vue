<!-- 详情页 -->
<template>
  <section class="main-wrap">
    <div class="intro">
      <div>{{pageInfo.title}}</div>
    </div>
    <div class="summary-info">
      <ul>
        <li v-for="(item, index) in pageInfo.imgList" :key="index">
          <img :src="item">
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
    pageInfo: {
      type: Object,
      default () {
        return {
          title: '',
          imgList: []
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/detail.less';
</style>
