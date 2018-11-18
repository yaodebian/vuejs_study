<template>
  <div id="access_parent">
    <parent-data></parent-data>
  </div>
</template>
<script>
export default {
  name: 'access_parent',
  data () {
    return {
      name: 'yaodebian',
      age: 20
    }
  },
  components: {
    'parent-data': {
      template: `
        <div>
          <p>parentname: {{this.$parent.name}}</p>
          <p>parentage: {{this.$parent.age}}</p>
        </div>
      `
    }
  }
}
</script>
<style>

</style>
