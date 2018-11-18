import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

// 组件运用
import ComponentIndex from '@/views/component_usage/index'
import ComponentReg from '@/views/component_usage/1_component_reg'
import ComponentChat from '@/views/component_usage/2_component_chat'
import ComponentDynamic from '@/views/component_usage/3_component_dynamic'
import ComponentAsync from '@/views/component_usage/4_component_async'
import ComponentSlot from '@/views/component_usage/5_component_slot'
import RecursionCircle from '@/views/component_usage/6_recursionCom_and_circleReferences'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/component',
      name: 'component',
      component: ComponentIndex,
      children: [
        {
          path: 'component_reg',
          name: 'component_reg',
          component: ComponentReg
        },
        {
          path: 'component_chat',
          name: 'component_chat',
          component: ComponentChat
        },
        {
          path: 'component_dynamic',
          name: 'component_dynamic',
          component: ComponentDynamic
        },
        {
          path: 'component_async',
          name: 'component_async',
          component: ComponentAsync
        },
        {
          path: 'component_slot',
          name: 'component_slot',
          component: ComponentSlot
        },
        {
          path: 'recursion_circle',
          name: 'recursion_circle',
          component: RecursionCircle
        }
      ]
    }
  ]
})
