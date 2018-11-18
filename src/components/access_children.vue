<template>
  <div id="access_children">
    <base-input ref="child"></base-input>
    <p>获取子组件实例数据：</p>
    <div v-if="isChildMounted">
      <span>childname: {{$refs.child.name}}</span>
      <span>childage: {{$refs.child.age}}</span>
    </div>
    <br>
    <button @click="focus">focus children input</button>
  </div>
</template>
<script>
export default {
  name: 'access_children',
  data () {
    return {
      name: 'yaodebian',
      age: 20,
      isChildMounted: false
    }
  },
  methods: {
    focus () {
      this.$refs.child.focus()
    }
  },
  mounted () {
    this.isChildMounted = true
  },
  components: {
    'base-input': {
      data () {
        return {
          name: 'yaodebian',
          age: 20
        }
      },
      template: `
        <div>
          <input ref="input" type="text">
          <button @click="focus">focus</button>
        </div>
      `,
      methods: {
        focus () {
          this.$refs.input.focus()
        }
      }
    }
  }
}
</script>
<style>

</style>
