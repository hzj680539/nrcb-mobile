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
          <div>{{item.title}}</div>
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
        title: 'Hello world',
        path: ''
      }, {
        id: 2,
        title: 'hello world',
        path: ''
      }, {
        id: 3,
        title: 'hello world',
        path: ''
      }, {
        id: 4,
        title: 'hello world',
        path: ''
      }, {
        id: 5,
        title: 'hello world',
        path: ''
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/aside.less';
</style>
