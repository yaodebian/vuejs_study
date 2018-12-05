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
import EleComAccess from '@/views/component_usage/7_ele_&_com_access'
import ProEvListener from '@/views/component_usage/8_program_event_listeners'
import TemplateDefinition from '@/views/component_usage/9_template_definition'
import ControlUpdate from '@/views/component_usage/10_control_update'

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
        },
        {
          path: 'ele_com_access',
          name: 'ele_com_access',
          component: EleComAccess
        },
        {
          path: 'pro_ev_listener',
          name: 'pro_ev_listener',
          component: ProEvListener
        },
        {
          path: 'template_definition',
          name: 'template_definition',
          component: TemplateDefinition
        },
        {
          path: 'control_update',
          name: 'control_update',
          component: ControlUpdate
        }
      ]
    }
  ]
})
