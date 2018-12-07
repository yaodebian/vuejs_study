<template>
  <div>
    <div @click="isFolder ? toggle() : ''">
      <i :class="['iconfont', isFolder ? 'icon-wenjianjia': 'icon-wenjian']"></i>
      <span v-text="model.menuName"></span>
    </div>
    <ul v-show="open" v-if="isFolder">
      <li><tree-folder-item v-for="(item, index) in model.childTreeNodes" :key="index" :model="item"></tree-folder-item></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'tree-folder-item',
  props: ['model'],
  components: {},
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
  }
}
</script>
