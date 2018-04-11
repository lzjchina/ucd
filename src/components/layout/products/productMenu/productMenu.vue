<template>
  <div class="productMenu">
      <q-toolbar inverted color="dark" class="column">
        <div class="row items-center" style="width: 100%;height: 64px;border-bottom: 1px solid #e5e5e5;">
          <q-toolbar-title class="productMenuTitle">
            HUAWEI VR 2 + 198 Bundle
          </q-toolbar-title>
          <q-tabs slot="navigation" class="productMenuTabBar">
              <q-route-tab style="font-weight:bold;" slot="title"  :to="item.to" replace hide="icon" :label="item.tabName"  v-for="(item, index) in tab" :key="item.id"><span class="bottomLine"></span></q-route-tab>
          </q-tabs>
          <div>
            <router-link  class="buy" to="/Products">BUY</router-link>
          </div>
        </div>
        <router-view />
      </q-toolbar>
  </div>
</template>

<script>
import {
  QToolbar,
  QToolbarTitle,
  QBtn,
  QIcon,
  QRouteTab,
  QTabs,
  QSideLink
} from 'quasar'
export default {
  components: {
    QToolbar,
    QToolbarTitle,
    QBtn,
    QIcon,
    QRouteTab,
    QTabs,
    QSideLink
  },
  data () {
    return {
      num: 0,
      tab: [
        {
          id: 1,
          tabName: 'OVERVIEW',
          checked1: 'checkedTitle',
          checkedline: 'bottomLined',
          to: `/Products/Overview`
        },
        {
          id: 2,
          tabName: 'GALLERY',
          checked1: 'fontColor',
          checkedline: 'bottomLine',
          to: `/Products/Gallery`
        },
        {
          id: 3,
          tabName: 'TECHSPEC',
          checked1: 'fontColor',
          checkedline: 'bottomLine',
          to: `/Products/TechSpec`
        },
        {
          id: 4,
          tabName: 'REVIEWS',
          checked1: 'fontColor',
          checkedline: 'bottomLine',
          to: `/Products/Reviews`
        }
      ]
    }
  }
}
</script>
<style lang="stylus">
.productMenu
  width 100%
  min-width 1000px
  .q-toolbar
    padding 0
    .q-tab
      width 130px
  .q-toolbar > .q-btn
      margin 0 0.5rem
      font-size 14px
  .buy
     margin 0 40px 0 10px 
     border-radius 20px
     background #6dd6a9
     color #fff
     padding 5px 25px
     cursor pointer
     font-size 14px
  .q-tabs-head
      background #fff
  .q-tab .q-tab-label
      color #252525 
  .q-tabs-position-top .q-tabs-bar
      color #000
      border-bottom-width 4px
      border-radius 2px
      width 25px
      margin 0 auto
      display none
  .q-tabs-normal .q-tabs-bar
    width 25px
    margin 0 auto
    display none
  .productMenuTitle
    font-weight bold
    font-size 24px
  .productMenu .q-tab.active .q-tab-icon, .productMenu .q-tab.active .q-tab-label
    color #252525 
    font-weight bold
  .productMenu .q-tab .q-tab-label
    font-weight bold !important
  .productMenuTabBar
    display flex
    justify-content flex-start
    align-items center
  .fontColor
    border 0
    background none
    margin 0 20px
    font-weight bold
    font-size 14px
    outline none
    cursor pointer
    color #b7b7b7
  .checkedTitle
    border 0
    background none
    margin 0 20px
    font-weight bold
    color #252525
    font-size 14px
    outline none
    cursor pointer
  .bottomLine
    width 25px
    height 4px
    background #fff
    margin 9px auto 0
    border-radius 4px
  .active>.bottomLine
    width 25px
    height 4px
    background #252525
    margin 9px auto 0
    border-radius 4px
  .TabBarBox
    cursor pointer
    display block
</style>