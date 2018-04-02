<!-- 主页面 -->
<template>
  <section class="container">
    <div @click="handleToggleDrawer" class="show-menu">{{!isDrawerShow ? '显示菜单' : '隐藏菜单'}}</div>
    <vue-drawer-layout ref="drawer">
      <div class="drawer" slot="drawer">
        <aside-bar/>
      </div>
      <div class="content" slot="content">
        <list v-if="showSummaryList" :summaryInfoList="summaryInfoList"/>
        <detail v-else :pageInfoList="pageInfoList"/>
      </div>
    </vue-drawer-layout>
  </section>
</template>

<script>
import AsideBar from './Aside.vue'
import List from './List.vue'
import Detail from './Detail.vue'
const $ = window.$

export default {
  data () {
    return {
      isDrawerShow: false,
      showSummaryList: true,
      summaryInfoList: [
        // {"id": 1,
        //   "title": "你好ad打算发放大的司法所 list"
        // }
      ],
      pageInfoList: [
        {
          id: 1,
          title: '你好ad打算发放大的司法所 detail',
          imgList: ['xxxxxxxxxx.jpg', 'xxxxxxxxxx.jpg', 'xxxxxxxxxx.jpg']
        }
      ]
    }
  },
  components: {
    AsideBar,
    List,
    Detail
  },
  mounted () {
    this.getSummaryInfo()
  },
  methods: {
    getSummaryInfo () {
      let that = this
      $.getJSON('file/demo.json', function (data) {
        that.summaryInfoList = data
      })
    },
    handleToggleDrawer () {
      console.log('handleToggleDrawer')
      this.isDrawerShow = !this.isDrawerShow
      this.$refs.drawer.toggle()
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/index.less';
</style>
