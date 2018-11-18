<template>
  <div id="pro_ev_listener">
    <!-- 程序化的事件侦听器(下面的栗子有些问题，代码仅供用途参考) -->
    <h2>程序化的事件侦听器(下面的栗子有些问题，代码仅供用途参考)</h2>
    <input ref="dateInput" v-model="date" type="date">
    <p v-text="date"></p>
  </div>
</template>
<script>
import Pikaday from 'pikaday'
export default {
  name: 'pro_ev_listener',
  data () {
    return {
      date: null
    }
  },
  mounted: function () {
    var picker = new Pikaday({
      field: this.$refs.dateInput,
      format: 'YYYYMMDD'
    })

    this.$once('hook:beforeDestroy', function () {
      picker.destroy()
    })
  }
}
</script>
<style>

</style>
