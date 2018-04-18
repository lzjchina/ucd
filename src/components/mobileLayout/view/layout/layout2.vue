<template>
  <div class="column mobileBox">
    <div class="flex mobileTop"><r-other-heard :type.sync="type" /></div>
    <div class="flex mobileContent"><router-view /></div>
  </div>
</template>

<script>
import ROtherHeard from 'components/mobileLayout/otherHeard/otherHeard'
export default {
  components: {
    ROtherHeard
  },
  data () {
    return {
      type: 'order'
    }
  },
  mounted () {
    // console.log(this.$route)
    if (this.$route.path.toUpperCase() === '/SIGN') {
      this.type = 'sign'
    }
    else if (this.$route.path.toUpperCase() === '/MARKET/CHECKOUT/ADDRESS') {
      this.type = 'address'
    }
    else if (this.$route.path.toUpperCase() === '/MARKET/PAYMENT') {
      this.type = 'payment'
    }
    else {
      this.type = 'order'
    }
  },
  watch: {
    '$route' (to, from) {
      // console.log(to)
      if (to.path.toUpperCase() === '/SIGN') {
        this.type = 'sign'
      }
      else if (this.$route.path.toUpperCase() === '/MARKET/CHECKOUT/ADDRESS') {
        this.type = 'address'
      }
      else if (this.$route.path.toUpperCase() === '/MARKET/PAYMENT') {
        this.type = 'payment'
      }
      else {
        this.type = 'order'
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
