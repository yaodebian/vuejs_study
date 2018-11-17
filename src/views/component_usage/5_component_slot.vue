<template>
  <div id="component_slot">
    <h2>组件插槽</h2>
    <!-- first demo演示 -->
    <com-slot1 url="https://github.com/yaodebian">yaodebian</com-slot1>
    <br>
    <br>

    <!-- 具名插槽 -->
    <!-- 1. 通过template来进行插槽内容设置 -->
    <com-slot2>
      <template slot="header">
        <h2>Here might be a page title</h2>
      </template>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <template slot="footer">
        <h2>Here's some contact info</h2>
      </template>

      <p>last tip</p>

    </com-slot2>
    <!-- 2. 通过普通元素来进行插槽内容设置 -->
    <com-slot2>
      <h2 slot="header">Here might be a page title</h2>

      <p>A paragraph for the main content.</p>
      <p>And another one.</p>

      <h2 slot="footer">Here's some contact info</h2>

      <p>last tip</p>

    </com-slot2>
    <br>

    <!-- 默认插槽演示及运用 -->
    <!-- 当没有设置插槽内容时，会使用默认插槽内容 -->
    <com-slot3></com-slot3>
    <!-- 当设置插槽内容，使用手动设置的插槽内容 -->
    <com-slot3>yaodebian</com-slot3>
    <br>
    <br>

    <!-- 编译作用域 -->
    <com-slot4 tag="test">
      <!-- 由于以下的tag、name、age是在父组件的作用域下，故而会报错 -->
      <!-- <h2>{{tag}}</h2>
      <p>name: {{name}}</p>
      <p>age: {{age}}</p> -->

      <!-- 默认的内容是在组件作用域中，故而编译正确 -->
    </com-slot4>
    <br>

    <!-- 作用域插槽 -->
    <com-slot5 v-bind:todos="todos">
      <!-- 将 `slotProps` 定义为插槽作用域的名字 -->
      <!-- <template slot-scope="slotProps"> -->
        <!-- 为待办项自定义一个模板，-->
        <!-- 通过 `slotProps` 定制每个待办项。-->
        <!-- <span v-if="slotProps.todo.isComplete">✓</span> -->
        <!-- {{ slotProps.todo.text }} -->
      <!-- </template> -->

      <!-- 或者直接用一个div来表示(2.5.0+版本可以用任何元素) -->
      <!-- <div slot-scope="slotProps"> -->
        <!-- 发现同时写两个slotProps会使用后面那个 -->
        <!-- 为待办项自定义一个模板，-->
        <!-- 通过 `slotProps` 定制每个待办项。-->
        <!-- <span v-if="slotProps.todo.isComplete">✓</span> -->
        <!-- {{ slotProps.todo.text }} -->
      <!-- </div> -->

      <!-- 解构用法 -->
      <template slot-scope="{ todo }">
        <span v-if="todo.isComplete">✓</span>
        {{ todo.text }}
      </template>
    </com-slot5>
    <br>
  </div>
</template>
<script>
export default {
  data () {
    return {
      todos: [
        {
          id: 1,
          text: 'yaodebian',
          isComplete: true
        },
        {
          id: 2,
          text: 'jack',
          isComplete: false
        },
        {
          id: 3,
          text: 'lucy',
          isComplete: false
        },
        {
          id: 4,
          text: 'lee',
          isComplete: true
        }
      ]
    }
  },
  components: {
    // first demo演示
    'com-slot1': {
      props: ['url'],
      template: `
        <a v-bind:href="url">
          <slot></slot>
        </a>
      `
    },
    // 具名插槽(通过name来进行内容分发)
    'com-slot2': {
      template: `
        <div class="container">
          <header>
            <!-- 我们希望把页头放这里 -->
            <slot name="header"></slot>
          </header>
          <main>
            <!-- 我们希望把主要内容放这里 -->
            <!-- 这是一个默认插槽，对于组件标签中未匹配的内容均会通过它来呈现(按照编写顺序) -->
            <slot></slot>
          </main>
          <footer>
            <!-- 我们希望把页脚放这里 -->
            <slot name="footer"></slot>
          </footer>
        </div>
      `
    },
    // 默认插槽演示及运用
    'com-slot3': {
      template: `
        <button>
          <slot>submit</slot>
        </button>
      `
    },
    // 编译作用域
    'com-slot4': {
      props: ['tag'],
      data () {
        return {
          name: 'yaodebian',
          age: 21
        }
      },
      template: `
        <div>
          <slot>
            <h2>{{tag}}</h2>
            <p>name: {{name}}</p>
            <p>age: {{age}}</p>
          </slot>
        </div>
      `
    },
    // 作用域插槽
    'com-slot5': {
      props: ['todos'],
      template: `
        <ul>
          <li
            v-for="todo in todos"
            v-bind:key="todo.id"
          >
            <!-- 我们为每个 todo 准备了一个插槽，-->
            <!-- 将 'todo' 对象作为一个插槽的 prop 传入。-->
            <slot v-bind:todo="todo">
              <!-- 回退的内容 -->
              {{ todo.text }}
            </slot>
          </li>
        </ul>
      `
    }
  }
}
</script>
<style>
</style>
