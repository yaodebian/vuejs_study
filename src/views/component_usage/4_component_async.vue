<template>
  <div>
    <h2>异步组件</h2>
    <asyncComponentTest></asyncComponentTest>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  },
  components: {
    'asyncComponentTest': () => import('@/components/asyncComponentTest')
  }
}
</script>
<style>

</style>
