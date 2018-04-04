<!-- 列表页 -->
<template>
  <section class="list-wrap">
    <div class="top">
      <!-- 德玛西亚 -->
    </div>
    <div class="bottom">
      <ul>
        <li v-for="(item, index) in titleList" :key="index" @click="selectTitle(item.id)">
          <a href="javascript:void(0)">{{item.title}}</a>
        </li>
      </ul>
    </div>
    <div class="refresh-wrap" @click="refresh">
      <span>刷新</span>
    </div>
  </section>
</template>

<script>
import summaryInfoList from '@/filesDema/summaryInfoList.json'

export default {
  data () {
    return {
      pageRows: 12,
      summaryInfoList: summaryInfoList,
      titleList: []
    }
  },
  mounted () {
    this.refresh()
  },
  methods: {
    // 获取num个随机数
    getRandomNum (num) {
      let listLength = this.summaryInfoList.length
      let count = 0
      let numArray = []
      for (let i = 0; i < listLength && count < num; i++) {
        let randomNum = Math.floor(Math.random() * listLength)
        if (!numArray.includes(randomNum)) {
          numArray.push(randomNum)
          ++count
        }
      }
      return numArray
    },
    // 获取标题信息列表
    getTitleList (titleIdArr) {
      let titleList = []
      for (let i = 0; i < titleIdArr.length; i++) {
        titleList.push(this.summaryInfoList[titleIdArr[i]])
      }
      return titleList
    },
    // 刷新，换一批
    refresh () {
      let titleIdArr = this.getRandomNum(this.pageRows)
      this.titleList = this.getTitleList(titleIdArr)
    },
    // 进入详情页
    selectTitle (id) {
      sessionStorage.setItem('pageId', id)
      this.$router.push('detail')
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/demaxiya/list.less';
</style>
