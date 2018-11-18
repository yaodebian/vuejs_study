<template>
  <div id="app">
    <h2>递归组件与组件间循环引用</h2>
    <!-- 递归组件 -->
    <!-- 因为无限循环递归，所以报错RangeError: Maximum call stack size exceeded -->
    <!-- <h3>递归组件</h3>
    <Recursion></Recursion>
    <br> -->

    <!-- 组件间循环引用 -->
    <h3>组件间循环引用</h3>
    <li v-for="folder in folders" :key="folder.name">
      <tree-folder :folder="folder"></tree-folder>
    </li>
  </div>
</template>

<script>
import TreeFolder from '@/components/tree-folder'
import Recursion from '@/components/recursion-component'
export default {
  name: 'App',
  data () {
    return {
      folders: [
        {
          name: 'folder1',
          children: [
            {
              name: 'folder1 - folder1',
              children: [
                {
                  name: 'folder1 - folder1 - folder1'
                }
              ]
            },
            {
              name: 'folder1 - folder2',
              children: [
                {
                  name: 'folder1 - folder2 - folder1'
                },
                {
                  name: 'folder1 - folder2 - folder2'
                }
              ]
            }
          ]
        },
        {
          name: 'folder2',
          children: [
            {
              name: 'folder2 - folder1',
              children: [
                {
                  name: 'folder2 - folder1 - folder1'
                }
              ]
            },
            {
              name: 'folder2 - folder2',
              children: [
                {
                  name: 'folder2 - folder2 - folder1'
                }
              ]
            }
          ]
        },
        {
          name: 'folder 3',
          children: [
            {
              name: 'folder3 - folder1',
              children: [
                {
                  name: 'folder3 - folder1 - folder1'
                }
              ]
            },
            {
              name: 'folder3 - folder2',
              children: [
                {
                  name: 'folder3 - folder2 - folder1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  components: {
    TreeFolder,
    Recursion
  }
}
</script>

<style>

</style>
