<template>
  <div id="control_update">
    <h2>控制更新</h2>
    <!-- 1. 强制更新 -->
    <h3>1. 强制更新</h3>
    <button @click="forceUpdate">强制更新</button>
    <br><br>

    <!-- 2. 通过v-once创建低开销的静态组件 -->
    <h3>2. 通过 v-once 创建低开销的静态组件</h3>
    <v-once-component></v-once-component>
  </div>
</template>
<script>
import Vue from 'vue'
Vue.component('v-once-component', {
  data () {
    return {
      name: 'yaodebian',
      age: 20
    }
  },
  template: `
    <div v-once>
      <input type="text" v-model="name" />
      <input type="text" v-model="age" />
      <p v-text="name"></p>
      <p v-text="age"></p>
    </div>
  `
})
export default {
  data () {
    return {}
  },
  methods: {
    forceUpdate () {
      this.$forceUpdate()
    }
  }
}
</script>
<style>

</style>
