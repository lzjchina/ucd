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
      if (routerPath.indexOf('/Products') >= 0 && event.deltaY > 10) {
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
              path: '/ProductMenu/Overview'
            })
          }
          else {
            this.$router.push({
              path: this.prevRouter
            })
          }
        }
      }
      else if (routerPath === '/ProductMenu/Overview' || routerPath === '/ProductMenu/Gallery' || routerPath === '/ProductMenu/TechSpec' || routerPath === '/ProductMenu/Reviews') {
        if (event.view.scrollY === 0 && event.deltaY < -10) {
          this.prevRouter = routerPath
          this.$router.push({
            path: '/Products'
          })
        }
      }
    }
  }
}
</script>

<style></style>
