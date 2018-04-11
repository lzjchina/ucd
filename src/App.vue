<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app" @mousewheel.stop="paperScroll">
    <router-view />
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
  data () {
    return {
      prevRouter: ''
    }
  },
  methods: {
    paperScroll: function (event) {
      var routerPath = this.$route.fullPath
      if (routerPath === '/Products' && event.deltaY > 10 && (routerPath.indexOf('/Overview') < 0 && routerPath.indexOf('/Gallery') < 0 && routerPath.indexOf('/TechSpec') < 0 && routerPath.indexOf('/Reviews'))) {
        var flag = true
        var target = event.target
        for (var i = 0; i < 100; i++) {
          if (target.className === 'scroll-box') {
            flag = false
            break
          }
          else {
            if (target.parentNode) {
              target = target.parentNode
            }
            else {
              break
            }
          }
        }
        if (flag) {
          if (this.prevRouter === '') {
            this.$router.push({
              path: '/Products/Overview'
            })
          }
          else {
            this.$router.push({
              path: this.prevRouter
            })
          }
        }
      }
      if (routerPath === '/Products/Overview' || routerPath === '/Products/Gallery' || routerPath === '/Products/TechSpec' || routerPath === '/Products/Reviews') {
        if (event.view.scrollY === 0 && event.deltaY < -10) {
          this.prevRouter = routerPath
          this.$router.push({
            path: '/Products'
          })
        }
      }
      // this.$router.push({
      //   path: '/Gallery'
      // })
    }
  }
}
</script>

<style></style>
