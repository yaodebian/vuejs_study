import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ComponentIndex from '@/views/component_usage/index'
import ComponentReg from '@/views/component_usage/component_reg'
import ComponentChat from '@/views/component_usage/component_chat'
import ComponentDynamic from '@/views/component_usage/component_dynamic'
import ComponentAsync from '@/views/component_usage/component_async'

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
        }
      ]
    }
  ]
})
