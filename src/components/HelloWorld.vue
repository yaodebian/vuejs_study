<template>
  <div class="hello">
    <h1>welcome to vuejs study</h1>
    <nav v-for="nav in link" v-bind:key="nav.name">
      <h2 v-text="nav.name"></h2>
      <ul>
        <li v-for="item in nav.list" v-bind:key="item.key"><router-link :to="item.path" v-text="item.name"></router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      link: [
        {
          name: 'vuejs组件开发',
          list: [
            {
              name: '1.组件注册',
              path: '/component/component_reg'
            },
            {
              name: '2.组件通信',
              path: '/component/component_chat'
            },
            {
              name: '3.动态组件',
              path: '/component/component_dynamic'
            },
            {
              name: '4.异步组件',
              path: '/component/component_async'
            },
            {
              name: '5.组件插槽',
              path: '/component/component_slot'
            },
            {
              name: '6.递归组件与组件间循环引用',
              path: '/component/recursion_circle'
            },
            {
              name: '7.访问元素&组件',
              path: '/component/ele_com_access'
            },
            {
              name: '8.程序化的事件侦听器',
              path: '/component/pro_ev_listener'
            },
            {
              name: '9.模板定义替代品',
              path: '/component/template_definition'
            },
            {
              name: '10.控制更新',
              path: '/component/control_update'
            }
          ]
        }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
