<template>
  <div>
    <h2>组件应用: {{area}}</h2>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data () {
    return {
      area: ''
    }
  },
  methods: {
    usage (area) {
      this.area = area
    }
  }
}
</script>
<style>

</style>
