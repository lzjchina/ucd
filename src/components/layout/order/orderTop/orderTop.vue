<template>
  <q-layout
    ref="layout"
  >
   <!-- 导航 -->
    <div class="box orderTopBox">
      <div class="nav">
        <q-tabs slot="navigation" calss="myorder-navigation">
          <q-route-tab slot="title" to="/Order/MyOrder/AllOrders" replace label="All Orders " class="navigation-list"/>
          <q-route-tab slot="title" to="#" replace label="Waiting for Payment" class="navigation-list"/>
          <q-route-tab slot="title" to="#" replace label="On Process" class="navigation-list"/>
          <q-route-tab slot="title" to="#" replace label="Waiting for Evaluation" class="navigation-list"/>
          <q-route-tab slot="title" to="#" replace label="Finished" class="navigation-list"/>
          <q-route-tab slot="title" to="#" replace label="Refund" class="navigation-list"/>
        </q-tabs>
      </div>
      <div class="search">
        <q-search class="myorder-search" value=''/>
      </div>
    </div>
    <!-- 子路由在此注入 -->
  <router-view />
  </q-layout>

</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea,
  QSearch,
  QField
} from 'quasar'
export default {
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QSearch,
    QField
  }
}
</script>
<style lang="stylus">
.orderTopBox
  width calc(1516 / 1920 * 100vw)
  padding 0 0 0 2%
  display flex
  flex-direction row !important
  justify-content space-between !important
  align-items center
  flex-wrap nowrap !important
  .material-icons
    background url('~statics/images/Homepage/search.png') top center no-repeat
    color rgba(255,255,255,0)
    width 20px
    height 20px
  .q-if-control-before
    margin-right 8px
  .q-ripple-container
    color #fff
  .q-tabs-head
    background rgba(0,0,0,0)
  .q-tab-label
    color #b2b2b2
    font-weight 500
    font-family HelveticalNeue
    font-size 14px
    &:hover
      color #252525
    &.active
      color #252525
  .search
    align-self flex-end
    .q-if
      display flex
      flex-direction row-reverse
      padding 0
      padding-left 10px
      margin 0 0 0 0
    .relative-position
      position static
  .no-wrap
    width 100%
  .q-tabs-panes
    width calc(338/1920*100vw)
  .myorder-search
    width calc(338/1920*100vw)
    height 48px
    border 1px solid #e5e5e5
    color #e5e5e5
    font-size 12px
  .nav
    width 100%
    .q-tabs-head
      padding 0 0 0 0
</style>
