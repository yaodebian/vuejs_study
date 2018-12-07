<template>
  <div>
    <ul>
      <li v-for="(item, index) in model" :key="index">
        <RecursionCiteItem :model="item"></RecursionCiteItem>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tree-folder-menus',
  props: ['model'],
  data () {
    return {}
  },
  components: {
    RecursionCiteItem: () => import('./recursion_cite_item.vue')
  }
}
</script>
