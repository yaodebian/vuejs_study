<template>
  <div id="template_difinition">
    <h2>模板定义替代品</h2>
    <!-- 1. 内联模板 -->
    <h3>1.内联模板</h3>
    <my-component inline-template>
      <div>
        <p>These are compiled as the component's own template.</p>
        <p>Not parent's transclusion content.</p>
      </div>
    </my-component>
    <!-- 但是，inline-template会让你模板的作用域变得更加难以理解，并且在代码管理上不好 -->
    <br>

    <!-- 2. X-Templates -->
    <h3>2.X-Templates</h3>
    <!-- <introduce></introduce> -->
    <p>目前发现仅在通过script</p>
  </div>
</template>
<!--
<script type="text/x-template" id="introduce-template">
  <p>Hello I am yaodebian</p>
</script>
-->
<script>
import Vue from 'vue'
Vue.component('introduce', {
  template: '#introduce-template'
})
export default {
  data () {
    return {}
  },
  components: {
    'my-component': {}
  }
}
</script>
<style>

</style>
