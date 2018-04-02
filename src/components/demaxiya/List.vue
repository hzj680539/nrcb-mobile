<!-- 列表页 -->
<template>
  <section class="list-wrap">
    <div class="top">
      welcome to 德玛西亚
    </div>
    <div class="bottom">
      <ul>
        <li v-for="(item, index) in summaryInfoList" :key="index" @click="selectTitle(item.href)">
          <a href="javascript:void(0)">{{item.title}}</a>
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
    pages: {
      type: Number,
      default: 1
    },
    summaryInfoList: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    selectTitle (href) {
      this.$emit('selectTitle', href)
    },
    pageChange (pageNum) {
      this.$emit('pageChange', pageNum)
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/list.less';
</style>
