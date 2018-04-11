import Vue from 'vue'
import VueRouter from 'vue-router'

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
      component: load('layout/common/index/index'),
      children: [
        { path: 'Home', component: load('layout/home/home') }
      ]
    },
    {
      path: '/Market',
      redirect: '/Market/Search',
      component: load('layout/common/index/index'),
      children: [
        { path: 'Search', component: load('layout/search/search') }, // 搜索页
        { path: 'Shoppingbag', component: load('layout/shoppingBag/shoppingBag') }, // 购物车页
        { path: 'Checkout', component: load('layout/checkOut/checkOut') }, // 商品确认页
        { path: 'Payment', component: load('layout/payment/payment') } // 支付页
      ]
    },
    {
      path: '/', // 个人订单页
      redirect: '/Order',
      component: load('layout/common/index/index'),
      children: [
        {
          path: 'Order',
          redirect: '/Order/MyOrder',
          component: load('layout/order/orderMenu/orderMenu'),
          children: [
            {
              path: 'MyOrder',
              redirect: '/Order/MyOrder/AllOrders',
              component: load('layout/order/orderTop/orderTop'),
              children: [
                { path: 'AllOrders', component: load('layout/order/orderContent/orderContent') }
              ]
            },
            { path: 'Commerce', component: load('layout/order/commerce/commerce') } // 个人中心页
          ]
        }
      ]
    },
    {
      path: '/', // 商品详情页
      redirect: '/Products',
      component: load('layout/common/index/index'),
      children: [
        { path: 'Products', component: load('layout/products/productContent/productContent') }
      ]
    },
    {
      path: '/Products', // 商品详情页
      component: load('layout/products/productMenu/productMenu'),
      children: [
        { path: 'Overview', component: load('layout/products/overview/overview') },
        { path: 'Gallery', component: load('layout/products/gallery/gallery') },
        { path: 'Techspec', component: load('layout/products/techSpec/techSpec') },
        { path: 'Reviews', component: load('layout/products/reviews/reviews') }
      ]
    },
    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})
