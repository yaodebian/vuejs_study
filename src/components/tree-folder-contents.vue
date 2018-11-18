<template>
  <ul>
    <li v-for="child in children" :key="child.name">
      <tree-folder v-if="child.children" :folder="child"></tree-folder>
      <span v-else>{{ child.name }}</span>
    </li>
  </ul>
</template>
<script>
import TreeFolder from '@/components/tree-folder'
export default {
  props: ['children'],
  components: {
    TreeFolder
  }
}
</script>
<style>

</style>
