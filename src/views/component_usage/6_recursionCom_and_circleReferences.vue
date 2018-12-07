<template>
  <div id="app">
    <h2>递归组件与组件间循环引用</h2>
    <!-- 递归组件 -->
    <!-- 因为无限循环递归，所以报错RangeError: Maximum call stack size exceeded -->
    <h3>递归组件</h3>
    <!-- <Recursion></Recursion> -->
    <p>由于无限递归循环，所以会报错，详见注释代码</p>
    <br>

    <!-- 组件间循环引用 -->
    <h3>组件间循环引用</h3>
    <li v-for="folder in folders" :key="folder.name">
      <tree-folder :folder="folder"></tree-folder>
    </li>
    <br>

    <!-- 递归组件实战 -->
    <h3>递归组件实战</h3>
    <ul>
      <li v-for="(model, index) in menus" :key="index"><RecursionTreeFolder :model="model"></RecursionTreeFolder></li>
    </ul>
    <br>

    <!-- 组件循环引用实战 -->
    <h3>组件循环引用实战</h3>
    <RecursionCiteMenus :model="menus"></RecursionCiteMenus>
  </div>
</template>

<script>
import TreeFolder from '@/components/tree-folder'
import Recursion from '@/components/recursion-component'
import RecursionTreeFolder from '@/components/recursion-component-test'
import RecursionCiteMenus from '@/components/recursion_cite_menus'
export default {
  name: 'recursion_and_circleReferences',
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
      ],
      menus: [
        {
          menuName: '奴隶社会',
          childTreeNodes: [
            {
              menuName: '非洲',
              childTreeNodes: [
                {
                  menuName: '古埃及文明',
                  childTreeNodes: [
                    {
                      menuName: '金字塔'
                    }
                  ]
                }
              ]
            },
            {
              menuName: '亚洲',
              childTreeNodes: [
                {
                  menuName: '两河流域文明',
                  childTreeNodes: [
                    {
                      menuName: '汉谟拉比法典'
                    }
                  ]
                },
                {
                  menuName: '古印度',
                  childTreeNodes: [
                    {
                      menuName: '种姓制度'
                    },
                    {
                      menuName: '佛教的创立'
                    }
                  ]
                },
                {
                  menuName: '欧洲',
                  childTreeNodes: [
                    {
                      menuName: '希腊',
                      childTreeNodes: [
                        {
                          menuName: '希腊城邦'
                        },
                        {
                          menuName: '雅典民主'
                        }
                      ]
                    },
                    {
                      menuName: '罗马',
                      childTreeNodes: [
                        {
                          menuName: '城邦'
                        },
                        {
                          menuName: '帝国的征服与扩张'
                        }
                      ]
                    },
                    {
                      menuName: '希腊罗马古典文化',
                      childTreeNodes: [
                        {
                          menuName: '建筑艺术'
                        },
                        {
                          menuName: '公历'
                        }
                      ]
                    }
                  ]
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
    Recursion,
    RecursionTreeFolder,
    RecursionCiteMenus
  }
}
</script>

<style>
</style>
