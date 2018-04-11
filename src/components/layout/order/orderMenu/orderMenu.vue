<template>
  <q-layout ref="layout" class="myorder-layout-left">
    <q-scroll-area slot="left" style="width: 100%; height: 100%" class="myorder-left">
      <q-list-header class="myorder-title">My Order</q-list-header>
      <q-side-link item to="/Order/commerce">
        <q-item-main label="Personal Center" class="myorder-list"/>
      </q-side-link>
      <q-side-link item to="#">
        <q-item-main label="Notification" class="myorder-list"/>
      </q-side-link>
      <q-side-link item to="/Order/MyOrder/AllOrders">
        <q-item-main label="My Order" class="myorder-list"/>
      </q-side-link>
      <q-side-link item to="#">
        <q-item-main label="My Account" class="myorder-list"/>
      </q-side-link>
      <q-side-link item to="#">
        <q-item-main label="Favorites" class="myorder-list"/>
      </q-side-link>
      <q-side-link item to="#">
        <q-item-main label="Browsing History" class="myorder-list"/>
      </q-side-link>
      <q-side-link item to="#">
        <q-item-main label="My Comments" class="myorder-list"/>
      </q-side-link>
      <q-side-link item to="#">
        <q-item-main label="Customer Service" class="myorder-list"/>
      </q-side-link>
    </q-scroll-area>
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
// .marketBox .marketContent
//   margin-top calc(88/1920*100vw)
.myorder-layout-left
  margin-top 88px
  position relative !important
  .layout-aside-left
    width calc(300/1920*100vw)
  .myorder-left
    overflow hidden
    color #b2b2b2
    background rgba(0,0,0,0)
    font-size calc(14/1920*100vw)
    .q-item.router-link-active
      background rgba(0,0,0,0)
      color #252525
    .q-item-link:hover
      background rgba(0,0,0,0)
      color #252525
    .layout-aside-left
      width calc(300/1920*100vw)
    .myorder-left
      overflow hidden
      color #b2b2b2
      background rgba(0,0,0,0)
      font-size calc(14/1920*100vw)
  .myorder-list
    margin-left calc(64/1920*100vw)
    font-size calc(16/1920*100vw)
  .myorder-title
    color #252525
    font-size calc(24/1920*100vw)
    margin-left calc(64/1920*100vw)
    padding-top 2.6%
    .q-tabs-head
      background rgba(0,0,0,0)
      color #2c2c2c
  .navigation-list
    font-size calc(16/1920*100vw)
    color #2c2c2c
    text-transform capitalize
    padding 0 8px 0 8px
    font-weight normal
    .q-tab-label
      opacity 1.0
    .no-wrap
      width 100%
    .layout-header
      box-shadow 0 0 0 white
    .q-tabs-normal .q-tabs-bar
      color #2c2c2c
    .q-tabs-bar
      display none
    .q-tabs-head
      min-height 32px
      margin 0.6% 0 0 0
    .q-if-control
      font-size calc(24/1920*100vw)
      color #777777
      opacity 1.0
    .q-if-control:hover
      opacity 1.0
    .q-if:before
      display none
    .q-if:after
      display none
    .q-if
      margin 0 0 0 0
      color #e5e5e5
    .q-item-label:hover
      color #252525

</style>

