<!-- 主页面 -->
<template>
  <section>
    <vue-drawer-layout>
      <div class="drawer" slot="drawer">
        <list/>
      </div>
      <div class="content" slot="content">
        <detail/>
      </div>
    </vue-drawer-layout>
  </section>
</template>

<script>
import List from './List.vue'
import Detail from './Detail.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    List,
    Detail
  }
}
</script>

<style lang="less" scoped>
  @import '~@/assets/styles/index.less';
</style>
