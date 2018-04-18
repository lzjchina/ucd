<template>
  <div class="column mobileBox">
    <div class="flex mobileTop"><r-global-heard :transparent.sync="transparent" /></div>
    <div class="flex mobileContent"><router-view /></div>
  </div>
</template>

<script>
import RGlobalHeard from 'components/mobileLayout/globalHeard/globalHeard'
export default {
  components: {
    RGlobalHeard
  },
  data () {
    return {
      transparent: false
    }
  },
  mounted () {
    // console.log(this.$route, this.$route.path === '/Home')
    if (this.$route.path === '/Home') {
      this.transparent = true
    }
    else if (this.$route.path === '/products') {
      this.transparent = true
    }
    else {
      this.transparent = false
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(to)
      if (to.path === '/Home') {
        this.transparent = true
      }
      else {
        this.transparent = false
      }
    }
  }
}
</script>

<style lang="stylus">
.mobileBox
  width 100vw
  max-width 100%
  min-height 100vh
  position relative
  // background #999
  .mobileTop
    position fixed
    top 0
    left 0
    z-index 2000
  .mobileContent
    // height 300vh
</style>
