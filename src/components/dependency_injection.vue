<template>
  <div id="dependency_injection">
    <button @click="changeData">changeData</button>
    <div>
      <span>name: {{name}}</span>
      <span>age: {{age}}</span>
    </div>
    <!-- 父组件的name、age值改变了，但是子组件的却仍然是初始化的值 -->
    <ancestor-data></ancestor-data>
  </div>
</template>
<script>
export default {
  name: 'dependency_injection',
  data () {
    return {
      data: [
        {
          name: 'yaodebian',
          age: 20
        },
        {
          name: 'lee',
          age: 48
        }
      ],
      name: 'yaodebian',
      age: 20
    }
  },
  provide () {
    return {
      name: this.name,
      age: this.age
    }
  },
  methods: {
    changeData () {
      if (this.name === 'yaodebian') {
        this.name = this.data[1].name
        this.age = this.data[1].age
      } else {
        this.name = this.data[0].name
        this.age = this.data[0].age
      }
    }
  },
  components: {
    'ancestor-data': {
      inject: ['name', 'age'],
      template: `
        <div>
          <p>ancestorname: {{this.name}}</p>
          <p>ancestorage: {{this.age}}</p>
        </div>
      `
    }
  }
}
</script>
<style>

</style>
