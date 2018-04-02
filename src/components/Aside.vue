<!-- 列表页 -->
<template>
  <aside class="aside-wrap">
    <div class="top">
      <div class="img-wrap">
        <img src="~@/assets/images/fanleni.jpg" alt="">
      </div>
    </div>
    <div class="bottom">
      <ul>
        <li v-for="item in category" :key="item.id">
          <!-- <div>{{item.title}}</div> -->
          <router-link tag="div" :to="item.path">{{item.title}}</router-link>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      category: [{
        id: 1,
        title: '德玛西亚',
        path: 'dema'
      }, {
        id: 2,
        title: '艾欧尼亚',
        path: 'aiou'
      }, {
        id: 3,
        title: '诺克萨斯',
        path: 'nuoke'
      }, {
        id: 4,
        title: '裁决之地',
        path: 'caijue'
      }, {
        id: 5,
        title: '班德尔城',
        path: 'bande'
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/aside.less';
</style>
