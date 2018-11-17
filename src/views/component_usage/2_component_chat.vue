<template>
  <div id="component_chat">
    <h2>组件通信</h2>
    <!-- 1.通过prop父组件向子组件传递数据 -->
    <p-to-s name="露西"></p-to-s>
    <br>
    <!-- 2.通过事件子组件向负组件传递数据 -->
    <div>
      <s-to-p name="杰克" @tofather="tellDadName"></s-to-p>
      <p>son: 爸爸的名字是{{dadName}}。</p>
    </div>
    <br>
    <!-- 3.兄弟组件之间传递数据 -->
    <brother1 thing="便担"></brother1>
    <brother2></brother2>
  </div>
</template>
<script>
import Vue from 'vue'
// 准备一个空的vue实例来实现兄弟组件之间的数据传递

let temp = new Vue()
export default {
  data () {
    return {
      dadName: '',
      num: 1
    }
  },
  components: {
    // 父向子传递数据
    'p-to-s': {
      props: ['name'],
      template: `<div>
                  <p>son: 爸爸，妈咪的名字是什么？</p>
                  <p>father: 你妈妈的名字叫{{name}}。</p>
                </div>`
    },
    // 子向父传递数据
    's-to-p': {
      props: ['name'],
      template: `<p>father: 宝贝，那我的名字是什么？</p>`,
      mounted () {
        this.$emit('tofather', this.name)
      }
    },
    // 兄弟之间传递数据
    'brother1': {
      props: ['thing'],
      template: `<div>
                  <p>brother1: 大哥，你的{{thing}}又忘带了！！！</p>
                  <button @click="send">通知</button>
                </div>`,
      methods: {
        send () {
          temp.$emit('tobrother', this.thing)
        }
      }
    },
    'brother2': {
      data () {
        return {
          thing: ''
        }
      },
      template: `<p>brother2: 谢谢弟弟，之后肯定不会忘记带{{thing}}了！！！</p>`,
      methods: {
        getThing (thing) {
          this.thing = thing
        }
      },
      mounted () {
        temp.$on('tobrother', this.getThing)
      }
    }
  },
  methods: {
    tellDadName (dadName) {
      this.dadName = dadName
    }
  }
}
</script>
<style>

</style>
