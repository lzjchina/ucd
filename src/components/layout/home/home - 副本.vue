<template>
  <div class="box">
    <div class="item1">
      <q-gallery-carousel
      :src="silde"
      class="imagesbox responsive"
      />
    </q-gallery-carousel>
    <router-link
    v-for="(item, index) in banner.items"
    :key="item.id"
    v-if="index==parseInt(banner.select)"
    to="/Products"
    tag="a"
    >
    <div class="banner-title">
      <p class="banner-name">{{item.name}}</p>
      <p><span class="banner-price">{{item.price}}</span> <span class="banner-category">{{item.type}}</span></p>
      <q-btn class="banner-btn">BUY</q-btn>
    </div>
  </router-link>
</div>
<div class="item2">
  <div class="products-title">
    <p class="products-title1">New Products</p>
  </div>
  <div class="products-img">
    <router-link
    class="new-products"
    v-for="(item, index) in products.items"
    :key="item.id"
    v-if="index >= products.items.length-4"
    to="/Products"
    tag="a"
    >
    <q-transition
    appear
    enter="fadeIn"
    leave="fadeOut"
    >
    <img
    width="100%"
    :src="item.image"
    :title="item.name"
    >
  </q-transition>
  <p class="products-name" :title="item.name">{{ item.name }}</p>
  <p class="price-type">
    <span class="products-price">${{ item.price }}</span>
    <span class="products-type">{{ item.type }}</span>
  </p>
</router-link>
</div>
</div>
<div class="item3">
  <div class="featured-title">
    <p class="featured-title1">Featured Products</p>
  </div>
  <div class="featured">
    <div class="new-featured">
      <router-link
      v-for="(item, index) in featured.items"
      :key="item.id"
      v-if="index==parseInt(featured.select)||index==parseInt(featured.select)+1 || index==parseInt(featured.select)+2"
      to=""
      tag="a"
      class="featuredBox"
      >
      <div class="featured-img">
        <img
        width="100%"
        :src="item.image"
        :title="item.name"
        >
      </div>
      <div class="featured-font">
        <div class="featured-body">
          <p class="featured-name" :title="item.name">{{ item.name }}</p>
          <p class="featuredprice-type">
            <span class="featured-price">${{ item.price }}</span>
            <span class="featured-type">{{ item.type }}</span>
          </p>
          <p class="featured-describe">{{ item.describe }}</p>
          <p><q-btn class="featured-btn1">Explore</q-btn> <q-btn class="featured-btn2" @click="addGoods(item)">BUY</q-btn></p>
        </div>
      </div>
    </router-link>
  </div>
</div>
<div class="see-all">
  <a @click="jupmSearch()"><q-btn class="see-all-btn1">See all products<img src="statics/images/Homepage/add.png" style="padding:0 0 0 8%; width: 14% "></q-btn></a>
</div>
<div class="bottom-hr"><div class="bottom-hr2"></div></div>
</div>
<div class="item4">
  <div class="sign-up">
    <p class="sign-title">
      Join the Commerce Family  
    </p>
    <p class="sign-title2">
      Don’t sleep on all the latest from Commerce.
    </p>
    <div class="signup-input">
      <div class="signup-input2">
        <q-input v-model="text" inverted class="sign-input"/>
        <q-btn class="signup-btn1">Sign up <img src="statics/images/Homepage/right.png" style="padding:0 0 0 8%; width: 14% "></q-btn>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import {
  QBtn,
  QGallery,
  QGalleryCarousel,
  QTransition,
  QInput,
  QIcon,
  QToggle
} from 'quasar'
import homeBanner from 'data/home-banner.json'
import newProducts from 'data/home-newproducts.json'
import featuredProducts from 'data/home-featured.json'
export default {
  components: {
    QBtn,
    QGallery,
    QGalleryCarousel,
    QTransition,
    QInput,
    QIcon,
    QToggle
  },
  data () {
    // console.log(banner)
    return {
      banner: homeBanner.data,
      products: newProducts.data,
      featured: featuredProducts.data,
      text: 'Enter your Phone Number',
      num: 5,
      email: 'email',
      password: 'password',
      area: 'Before you begin with Quasar, it is a good idea to get acquainted with ES6 and have a fairly good knowledge about how Vue works.',
      texterr: 'Quasar rulz',
      error: true,
      error2: false,
      loading: true,
      // silde: homeBanner.data.items.map(function (item, index, arr) {
      //   // console.log(index)
      //   // console.log(item.image)
      //   // console.log(arr.length)
      //   if (index >= arr.length - 3) {
      //     return item.image
      //   }
      // })
      silde: [
        homeBanner.data.items[homeBanner.data.items.length - 1].image,
        homeBanner.data.items[homeBanner.data.items.length - 2].image,
        homeBanner.data.items[homeBanner.data.items.length - 3].image,
        homeBanner.data.items[homeBanner.data.items.length - 4].image,
        homeBanner.data.items[homeBanner.data.items.length - 5].image
      ]
    }
  },
  methods: {
    addGoods (item) {
      // sessionStorage.setItem('goods', JSON.stringify([]))
      let array = item
      array.number = 1
      if (array.byStages) {
        array.setMeal = array.setMeals[0]
      }
      let buy = JSON.parse(sessionStorage.getItem('goods'))
      let isPut = true
      buy.map((b) => {
        if (b.id === item.id) {
          b.number++
          isPut = false
        }
      })
      if (isPut) {
        buy.push(array)
      }
      sessionStorage.setItem('goods', JSON.stringify(buy))
      // console.log(JSON.parse(sessionStorage.getItem('goods')))
    },
    jupmSearch () {
      this.$router.push('/Market/Search')
    }
  }
}
</script>
<style lang="stylus">
.box
  display flex
  flex-direction column
  justify-content center
  .item1
    width 100%
    .imagesbox .q-carousel-toolbar
      display none
    .imagesbox .q-icon .material-icons
      width 80px
      height 80px
    .q-carousel-left-button i, .q-carousel-right-button i
      padding 8px
    .banner-title
      position absolute
      z-index 100
      height calc(300/1920*100vw)
      margin -15.6% 0 0 3%
    .banner-name
      font-size calc(64/1920*100vw)
      font-weight bold
      color #252525
      margin-bottom 18%
    .banner-price
      font-size calc(32/1920*100vw)
      color #252525
    .banner-category
      font-size calc(32/1920*100vw)
      color #fff
      margin-left calc(24/1920*100vw)
    .banner-btn
      font-size calc(14/1920*100vw)
      color #252525
      background white
      width calc(110/1920*100vw)
      height calc(52/1920*100vw)
      border-radius 50px
      opacity 0.80
      box-shadow:0px 0px 0px #fff
      margin 3.2% 0 0 0
      font-family 'Myriad Pro'
  .item2
    display flex
    flex-direction column
    justify-content center
    align-items flex-start 
    width 100%
    .products-title
      display: flex;
      justify-content: center;
      width 100%
      font-weight bold
      font-size calc(24/1920*100vw)
      color #252525
      .products-title1
        width 81.6%
        font-weight bold
        font-size calc(24/1920*100vw)
        color #252525
        margin 4% 0 2% 0
    .products-img
      display flex
      flex-direction row
      justify-content center
      align-items flex-start
      width 100%
    .new-products
      width 18%
      display flex
      flex-direction column
      justify-content center
      align-items flex-start 
      // border 1px solid #f1f1f1
      border 2px solid transparent
      margin 0.8% 1.5% 0.8% 1.5%
      &:hover
        border 2px solid #252525
      &.active
        border 2px solid #252525
    .products-name
      width 100%
      color #252525
      font-weight bold
      font-size calc(18/1920*100vw)
      text-align center
      padding 0px 16px 0px 16px
      line-height 1
      margin 0 0 2% 0
    .price-type
      width 100%
      text-align center
      padding 0px 8px 0px 8px
      font-size calc(16/1920*100vw)
      margin 0 0 16% 0
    .products-price
      color #252525
    .products-type
      color #c1c0bf
  .item3
    display flex
    flex-direction column
    justify-content center
    align-items flex-start 
    width 100%
    .featured-title
      display: flex;
      justify-content: center;
      width 100%
      font-weight bold
      font-size calc(24/1920*100vw)
      color #252525
    .featured-title1
        width 81.6%
        font-weight bold
        font-size calc(24/1920*100vw)
        color #252525
        margin 3% 0 3% 0
    .featured
      display flex
      flex-direction row
      justify-content center
      align-items flex-start
      width 100%
      .new-featured
        width 81.4%
        position relative
      .featured-img
        width 88%
        margin 0 0 3.2% 12%
    .featuredBox:nth-child(even) .featured-img
      width 88%
      margin 0 12% 3.2% 0
    .featuredBox:nth-child(even) .featured-font
      width calc(464/1920*100vw)
      height calc(370/1920*100vw)
      background #fff
      border 1px solid #f1f1f1
      position absolute
      margin-top -27.3%
      display flex
      justify-content center
      align-items center
      right 0
    .featured-font
      width calc(464/1920*100vw)
      height calc(370/1920*100vw)
      background #fff
      border 1px solid #f1f1f1
      position absolute
      margin-top -27.3%
      display flex
      justify-content center
      align-items center
    .featured-body
      width calc(324/1920*100vw)
    .featured-name
      font-size calc(24/1920*100vw)
      font-weight bold
      color #252525
      line-height 1
      margin 4% 0 0 0
    .featuredprice-type
      line-height 1
      margin 4% 0 6% 0
    .featured-price
      font-size calc(16/1920*100vw)
      color #252525
      line-height 1
      margin 1% 0 25 0
    .featured-type
      font-size calc(16/1920*100vw)
      color #c1c0bf
      line-height 0
    .featured-describe
      width calc(324/1920*100vw)
      font-size calc(14/1920*100vw)
      color #b2b2b2
      margin-bottom calc(48/1920*100vw)
      line-height calc(24/1920*100vw)
    .featured-btn1
      width calc(112/1920*100vw)
      height calc(36/1920*100vw)
      background #fff
      border 1px solid #e5e5e5
      border-radius 50px
      font-size calc(12/1920*100vw)
      color #252525
      box-shadow 0 0 0 white
      font-weight normal
      min-width 72px
      min-height 24px
    .featured-btn2
      width calc(80/1920*100vw)
      height calc(36/1920*100vw)
      background #252525
      border-radius 50px
      font-size calc(12/1920*100vw)
      color #fff
      box-shadow 0 0 0 white
      margin-left calc(24/1920*100vw)
      font-weight normal
      min-width 54px
      min-height 24px
  .see-all
    display flex
    justify-content center
    align-items flex-start
    width 100%
    .see-all-btn1
      background #252525
      font-size calc(16/1920*100vw)
      color #fff
      width calc(302/1920*100vw)
      height calc(64/1920*100vw)
      border-radius 50px
      font-weight normal
      margin 0 0 3.2% 0
      min-width 180px
      box-shadow 0 0 0 white
  .bottom-hr
    width 100%
    height 1px
    margin 0 0 3.2% 0
    display flex
    justify-content center
    .bottom-hr2
      width 81.2%
      background #e5e5e5
  .item4
    width 100%
    display flex
    justify-content center
    align-items flex-start
    .sign-up
      width 81.2%
    .sign-title
      width 100%
      color #252525
      font-weight bold
      font-size calc(24/1920*100vw)
      text-align center
      line-height 1
    .sign-title2
      width 100%
      color #b2b2b2
      font-size calc(14/1920*100vw)
      text-align center
      line-height 1
    .signup-input
      display flex
      justify-content center
      align-items flex-start
    .signup-input2
      display flex
      justify-content space-between
      align-items center
      width calc(548/1920*100vw)
      height calc(64/1920*100vw)
      background #fff !important
      border-radius 50px
      border 1px solid #b2b2b2
      margin 6% 0 6% 0
    .sign-input
      width calc(360/1920*100vw)
      height calc(50/1920*100vw)
      background rgba(0,0,0,0) !important
      color #b2b2b2 !important
      font-size calc(14/1920*100vw)
      box-shadow 0 0 0 white
      margin 0 0 0 6%
    .signup-btn1
      width calc(136/1920*100vw)
      height calc(64/1920*100vw)
      background rgba(0,0,0,0) !important
      color #252525 !important
      font-size calc(14/1920*100vw)
      box-shadow 0 0 0 white
      border 1px solid #b2b2b2
      border-width 0 0 0 1px
      min-width 80px
      border-radius 0 50px 50px 0
      padding 0
  .q-if-inverted .q-if-control
    color #000
  .q-if-dark .q-input-target
    color #b2b2b2
  .q-btn-standard
    min-height 24px
  .q-gallery-carousel-quickview
    box-shadow 0 0 0 white
</style>