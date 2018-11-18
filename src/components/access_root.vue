<template>
  <div id="access_root">
    <root-data></root-data>
  </div>
</template>
<script>
export default {
  name: 'access_root',
  data () {
    return {}
  },
  components: {
    // 这里的$root是指main.js中初始化的vue实例
    // 我们可以将这个$root当作一个全局的store来使用，不过这仅适用于小型项目(只有少量组件)，对于大型项目(复杂度比较高就不适用了)
    'root-data': {
      template: `
        <div>
          <p>rootname: {{this.$root.name}}</p>
          <p>rootage: {{this.$root.age}}</p>
        </div>
      `
    }
  }
}
</script>
<style>

</style>
