<template>
  <q-layout ref="layout" class="myorder-layout-left">
   <!-- 导航 -->
    <!-- <router-view name="orderLeft" /> -->
    <!-- 子路由在此注入 -->
    <q-layout ref="layout">
      <!-- <router-view name="orderTop" /> -->
      <!-- <router-view name="orderContent" /> -->
  </q-layout>
  </q-layout>
</template>
<style lang="stylus">
.myorder-layout-left
  main
    min-height calc(100vh - 88px) !important
</style>
