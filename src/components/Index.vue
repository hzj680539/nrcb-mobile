<!-- 主页面 -->
<template>
  <section class="container">
    <div @click="handleToggleDrawer" class="show-menu">{{!isDrawerShow ? '显示菜单' : '隐藏菜单'}}</div>
    <vue-drawer-layout ref="drawer">
      <div class="drawer" slot="drawer">
        <aside-bar/>
      </div>
      <div class="content" slot="content">
        <!-- <list v-show="showSummaryList" :pages="pages" :summaryInfoList="summaryInfoListByPage" @selectTitle="selectTitle" @pageChange="pageChange"/>
        <detail v-show="!showSummaryList" :pageInfo="pageInfoByHref"/> -->
        <router-view/>
      </div>
    </vue-drawer-layout>
  </section>
</template>

<script>
import AsideBar from './Aside.vue'
// import List from './List.vue'
// import Detail from './Detail.vue'
// import summaryInfoList from '@/file/summaryInfoList.json'
// import pageInfoList from '@/file/pageInfoList.json'

export default {
  data () {
    return {
      // currentPage: 1,
      // rows: 12, // 每页显示数量
      isDrawerShow: false
      // showSummaryList: true,
      // summaryInfoList: summaryInfoList,
      // pageInfoList: pageInfoList,
      // pageInfoByHref: {}
    }
  },
  components: {
    AsideBar
    // List,
    // Detail
  },
  mounted () {
  },
  methods: {
    handleToggleDrawer () {
      console.log('handleToggleDrawer')
      this.isDrawerShow = !this.isDrawerShow
      this.$refs.drawer.toggle()
    },
    selectTitle (href) {
      console.log(href)
      this.showSummaryList = false
      this.pageInfoList.forEach(item => {
        if (item.href === href) {
          this.pageInfoByHref = item
        }
      })
    },
    pageChange (pageNum) {
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/index.less';
</style>
