<!-- 列表页 -->
<template>
  <section class="list-wrap">
    <div class="top">

    </div>
    <div class="bottom">
      <ul>
        <li v-for="(item, index) in summaryInfoList" :key="index">{{item.title}}</li>
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
    summaryInfoList: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/list.less';
</style>
