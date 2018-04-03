<!-- 详情页 -->
<template>
  <section class="main-wrap">
    <div class="intro">
      <!-- <div>德玛西亚 detail</div> -->
    </div>
    <div class="img-wrap">
      <ul>
        <li v-for="(item, index) in pageInfo.imgList" :key="index">
          <img :src="item">
        </li>
      </ul>
    </div>
    <div class="refresh-wrap" @click="backForward">
      <span>返回</span>
    </div>
  </section>
</template>

<script>
import pageInfoList from '@/file/pageInfoList.json'
export default {
  data () {
    return {
      pageId: sessionStorage.getItem('pageId'),
      pageInfo: {},
      pageInfoList: pageInfoList
    }
  },
  mounted () {
    this.getPageInfo()
  },
  methods: {
    // 获取页面详情
    getPageInfo () {
      let listLength = this.pageInfoList.length
      console.log('listLength', listLength)
      this.pageInfoList.find(item => {
        // return item.
      })
      for (let i = 0; i < listLength; i++) {
        if (this.pageId === this.pageInfoList[i].id) {
          this.pageInfo = this.pageInfoList[i]
        }
      }
    },
    // 返回
    backForward () {
      this.$router.push('list')
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/demaxiya/detail.less';
</style>
