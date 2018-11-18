<template>
  <p>
    <span>{{ folder.name }}</span>
    <tree-folder-contents :children="folder.children"></tree-folder-contents>
  </p>
</template>
<script>
export default {
  props: ['folder'],
  data () {
    return {}
  },
  components: {
    // 官方文档给出的是require
    // this.$options.components.TreeFolderContents = require('@/components/tree-folder-contents.vue')
    // 在基于vue-cli@2.9.2按照上面的写法还是会报错
    // Failed to mount component: template or render function not defined.
    // 所以我们应该改为基于es6的写法异步加载一个组件如下
    TreeFolderContents: () => import('./tree-folder-contents.vue')
  }
}
</script>
