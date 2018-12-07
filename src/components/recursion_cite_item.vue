<template>
  <div>
    <div @click="isFolder ? toggle() : ''">
      <i :class="['iconfont', isFolder ? 'icon-wenjianjia': 'icon-wenjian']"></i>
      <span v-text="model.menuName"></span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <RecursionCiteMenus :model="model.childTreeNodes"></RecursionCiteMenus>
    </ul>
  </div>
</template>
<script>
import RecursionCiteMenus from '@/components/recursion_cite_menus'
export default {
  name: 'recursion_cite_item',
  props: ['model'],
  data () {
    return {
      open: false
    }
  },
  computed: {
    isFolder: function () {
      return this.model.childTreeNodes && this.model.childTreeNodes.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  },
  components: {
    RecursionCiteMenus
  }
}
</script>
