<template>
  <div id="ele_com_access">
    <!-- 访问根实例 -->
    <h2>访问根实例</h2>
    <AccessRoot></AccessRoot>
    <br>

    <!-- 访问父实例 -->
    <h2>访问父实例</h2>
    <AccessParent></AccessParent>
    <br>

    <!-- 访问子组件实例或子元素(即通过ref来进行访问，另外它是非响应式的) -->
    <h2>访问子组件实例或子元素(即通过ref来进行访问，另外它是非响应式的)</h2>
    <AccessChildren></AccessChildren>
    <br>

    <!-- 依赖注入(非响应式) -->
    <h2>依赖注入(非响应式)</h2>
    <DenpendencyInjection></DenpendencyInjection>
  </div>
</template>
<script>
import AccessRoot from '@/components/access_root'
import AccessParent from '@/components/access_parent'
import AccessChildren from '@/components/access_children'
import DenpendencyInjection from '@/components/dependency_injection'
export default {
  name: 'ele_com_access',
  data () {
    return {}
  },
  components: {
    AccessRoot,
    AccessParent,
    AccessChildren,
    DenpendencyInjection
  }
}
</script>
<style>

</style>
