<template>
  <div class="flex mobileBox">
    <div class="flex mobileTop"><router-view name="top" /></div>
    <div class="flex mobileContent"><router-view name="content" /></div>
    <div class="flex mobileBottom"><router-view name="bottom" /></div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
.mobileBox
  width 100vw
  max-width 100%
  min-height 100vh
  
</style>
