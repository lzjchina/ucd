<template>
  <div class="marketBox">
    <div class="marketTop">
      <r-heard :searchString="searchString" />
    </div>
    <div
      class="marketContent"
    >
      <transition appear :enter-active-class="enter" :leave-active-class="leave" >
        <router-view :searchString="searchString"/>
      </transition>
    </div>
  </div>
</template>
<script>
import RHeard from 'components/layout/common/nav/nav'
export default {
  components: { RHeard },
  data () {
    return {
      enter: 'animated fadeInRightBig',
      leave: 'animated fadeOutLeftBig',
      searchString: '',
      openModelState: false
    }
  },
  methods: {
    setValue (val) {
      this.searchString = val
    },
    openModel (val) {
      this.openModelState = val
      // console.log(this.openModelState.length > 0 && this.openModelState !== 'close')
    }
  },
  created () {
    this.$root.eventHub.$on('setSearchString', (target) => {
      this.setValue(target)
    })
    this.$root.eventHub.$on('openModel', (target) => {
      this.openModel(target)
    })
  }
}
</script>
<style lang="stylus">
.marketBox
  position relative
  .marketTop
    width 100vw
    max-width 100%
    position absolute
    top 0
    z-index 20
    .layout
      height 88px
      min-height 88px
  .marketContent
    width 100vw
    max-width 100%
    min-height 100vh
    position absolute
    top 0
    z-index 10
  .overflow
    overflow hidden
    height 100vh
</style>
