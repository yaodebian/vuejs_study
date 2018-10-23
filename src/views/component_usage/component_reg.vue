<template>
  <div id="component_reg">
    <h2>组件注册</h2>
    <global-component1 msg="全局组件注册：短横线分隔命名"></global-component1>
    <global-component2 msg="全局组件注册：驼峰式命名-短横线分隔写法"></global-component2>
    <globalComponent2 msg="全局组件注册：驼峰式命名-驼峰式写法"></globalComponent2>
    <local-component1 msg="局部组件注册：短横线分隔命名-短横线分隔写法"></local-component1>
    <localComponent2 msg="局部组件注册：驼峰式命名-短横线分隔写法"></localComponent2>
    <localComponent2 msg="局部组件注册：驼峰式命名-驼峰式写法"></localComponent2>
  </div>
</template>
<script>
import Vue from 'vue'
// 全局注册组件
// kebab-case命名(短横线分隔命名)：组件使用只能是短横线分隔
Vue.component('global-component1', {
  props: ['msg'],
  template: "<ul><li v-text='msg'></li></ul>"
})
// PascalCase驼峰式命名：使用时两种命名方式均可
Vue.component('globalComponent2', {
  props: ['msg'],
  template: "<ul><li v-text='msg'></li></ul>"
})
export default {
  data () {
    return {
      username: ''
    }
  },
  methods: {
    add (input) {
      console.log(input)
    }
  },
  components: {
    'local-component1': {
      props: ['msg'],
      template: "<ul><li v-text='msg'></li></ul>"
    },
    'localComponent2': {
      props: ['msg'],
      template: "<ul><li v-text='msg'></li></ul>"
    }
  }
}
</script>
<style>
li {
  list-style: none outside none;
}
</style>
