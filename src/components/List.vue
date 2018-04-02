<!-- 列表页 -->
<template>
  <aside class="aside-wrap">
    <div>列表</div>
    <div>
      <ul>
        <li v-for="item in category" :key="item.id">{{item.title}}</li>
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
        title: 'hello world',
        path: ''
      },{
        id: 1,
        title: 'hello world',
        path: ''
      },{
        id: 1,
        title: 'hello world',
        path: ''
      },{
        id: 1,
        title: 'hello world',
        path: ''
      },{
        id: 1,
        title: 'hello world',
        path: ''
      }]
    }
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/list.less';
</style>
