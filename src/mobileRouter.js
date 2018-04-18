import Vue from 'vue'
import VueRouter from 'vue-router'
// import { Platform } from 'quasar'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    {
      path: '/', // 首页
      redirect: '/Home',
      component: load('mobileLayout/view/layout/layout'),
      children: [
        { path: 'Home', component: load('mobileLayout/home/home') }
      ]
    },
    {
      path: '/Market',
      redirect: '/Market/Search',
      component: load('mobileLayout/view/layout/layout'),
      children: [
        { path: 'Search', component: load('mobileLayout/search/search') }, // 搜索页
        { path: 'Commerce', component: load('mobileLayout/commerce/commerce') }, // 个人中心页
        // { path: 'Shoppingbag', component: load('mobileLayout/common/shoppingBag/shoppingBag') }, // 购物车页
        { path: 'Checkout', component: load('mobileLayout/checkOut/checkOut') } // 商品确认页
        // { path: 'Payment', component: load('mobileLayout/payment/payment') } // 支付页
      ]
    },
    {
      path: '/',
      redirect: '/Sign',
      component: load('mobileLayout/view/layout/layout2'),
      children: [
        { path: 'Sign', component: load('mobileLayout/sign/sign') } // 登陆注册页
      ]
    },
    {
      path: '/Market',
      redirect: '/Market/Commerce/MyOrder',
      component: load('mobileLayout/view/layout/layout2'),
      children: [
        { path: 'Commerce/MyOrder', component: load('mobileLayout/commerce/order/order') }, // 个人订单页
        { path: 'Checkout/Address', component: load('mobileLayout/checkOut/address/address') }, // 添加地址
        { path: 'Payment', component: load('mobileLayout/payment/payment') } // 支付页
      ]
    },
    {
      path: '/', // 商品详情页
      redirect: '/Products',
      component: load('mobileLayout/view/layout/layout'),
      children: [
        { path: 'Products', component: load('mobileLayout/products/productContent') }
      ]
    },
    // {
    //   path: '/Market',
    //   redirect: '/Market/Checkout/Address',
    //   component: load('mobileLayout/view/layout/layout2'),
    //   children: [
    //     { path: 'Checkout/Address', component: load('mobileLayout/checkOut/address/address') } // 添加地址
    //   ]
    // },
    // {
    //   path: '/', // 个人订单页
    //   redirect: '/Order',
    //   component: load('mobileLayout/common/globalHeard/globalHeard'),
    //   children: [
    //     {
    //       path: 'Order',
    //       redirect: '/Order/MyOrder',
    //       component: load('mobileLayout/order/orderMenu/orderMenu'),
    //       children: [
    //         {
    //           path: 'MyOrder',
    //           redirect: '/Order/MyOrder/AllOrders',
    //           component: load('mobileLayout/order/orderTop/orderTop'),
    //           children: [
    //             { path: 'AllOrders', component: load('mobileLayout/order/orderContent/orderContent') }
    //           ]
    //         },
    //         { path: 'Commerce', component: load('mobileLayout/order/commerce/commerce') } // 个人中心页
    //       ]
    //     }
    //   ]
    // },
    // {
    //   path: '/', // 商品详情页
    //   redirect: '/Products',
    //   component: load('mobileLayout/common/mobileLayout/mobileLayout'),
    //   children: [
    //     { path: 'Products', component: load('mobileLayout/products/productContent/productContent') }
    //   ]
    // },
    // {
    //   path: '/Products', // 商品详情页
    //   component: load('mobileLayout/products/productMenu/productMenu'),
    //   children: [
    //     { path: 'Overview', component: load('mobileLayout/products/overview/overview') },
    //     { path: 'Gallery', component: load('mobileLayout/products/gallery/gallery') },
    //     { path: 'Techspec', component: load('mobileLayout/products/techSpec/techSpec') },
    //     { path: 'Reviews', component: load('mobileLayout/products/reviews/reviews') }
    //   ]
    // },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
