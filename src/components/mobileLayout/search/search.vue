<template>
  <div class="searchDiv">
    <div class="banner">
      <img src="~statics/mobileImages/search/search_banne.jpg" width="100%">
    </div>
    <div class="filterTop">
      <div class="left" @click="open = true">
        <i></i><span>Filter</span>
      </div>
      <div class="right">
        <span>Sort by:</span>
        <q-select
          class="search-sort"
          v-model="select"
          :options="selectOptions"
        />
      </div>
    </div>
    <div class="productsDiv flex">
      <router-link class="product" v-for="(item, index) in products.data" :key="item.id" to="/" v-if="index<pagination.currentPage*pagination.display&&index>=(pagination.currentPage-1)*pagination.display">
        <div class="productImage"><img :src="item.image" width="100%"></div>
        <div class="productName"><span>{{item.name}}</span></div>
        <div class="productOther"><span>${{item.price}}</span><span>{{item.type}}</span></div>
      </router-link>
    </div>
    <div class="productsPage">
      <div class="left" v-bind:class="{'no':pagination.currentPage===1}" @click="subPage"><i></i></div>
      <div class="content">
        <input type="number" v-model="pagination.currentPage">
        <span>of</span>
        <span>{{total}}</span>
      </div>
      <div class="right" v-bind:class="{'no':pagination.currentPage===total}" @click="addPage"><i></i></div>
    </div>
    <q-modal class="filterDiv" v-model="open">
      <div class="main">
        <div class="title"><span>Reset</span><i @click="open = false">x</i></div>
        <div class="done">Done</div>
        <div class="content">
          <div class="filterProducts">
            <div class="top"><span class="title">Products</span><i @click="filterProducts.type.Products.open=!filterProducts.type.Products.open" v-bind:class="{'show':filterProducts.type.Products.open,'hide':!filterProducts.type.Products.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.Products.open">
              <span class="active">Contract Phone</span>
              <span>Phone</span>
              <span>Accessories</span>
              <span>Plans</span>
            </div>
          </div>
          <div class="filterProducts">
            <div class="top"><span class="title">Brand</span><i @click="filterProducts.type.Brand.open=!filterProducts.type.Brand.open" v-bind:class="{'show':filterProducts.type.Brand.open,'hide':!filterProducts.type.Brand.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.Brand.open">
              <span>Contract Phone</span>
              <span>Phone</span>
              <span>Accessories</span>
              <span>Plans</span>
            </div>
          </div>
          <div class="filterColor">
            <div class="top"><span class="title">Color</span><i @click="filterProducts.type.Color.open=!filterProducts.type.Color.open" v-bind:class="{'show':filterProducts.type.Color.open,'hide':!filterProducts.type.Color.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.Color.open">
              <div v-for="item in filterProducts.type.Color.data" class="active"><i :style="{background: `url(${item.image}) center no-repeat`, backgroundSize: '100% 100%'}">{{item.name}}</i><span>{{item.name}}</span></div>
            </div>
          </div>
          <div class="filterProducts">
            <div class="top"><span class="title">Memory</span><i @click="filterProducts.type.Memory.open=!filterProducts.type.Memory.open" v-bind:class="{'show':filterProducts.type.Memory.open,'hide':!filterProducts.type.Memory.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.Memory.open">
              <span>Contract Phone</span>
              <span>Phone</span>
              <span>Accessories</span>
              <span>Plans</span>
            </div>
          </div>
          <div class="filterProducts">
            <div class="top"><span class="title">Connection</span><i @click="filterProducts.type.Connection.open=!filterProducts.type.Connection.open" v-bind:class="{'show':filterProducts.type.Connection.open,'hide':!filterProducts.type.Connection.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.Connection.open">
              <span>Contract Phone</span>
              <span>Phone</span>
              <span>Accessories</span>
              <span>Plans</span>
            </div>
          </div>
          <div class="filterProducts">
            <div class="top"><span class="title">ProductType</span><i @click="filterProducts.type.ProductType.open=!filterProducts.type.ProductType.open" v-bind:class="{'show':filterProducts.type.ProductType.open,'hide':!filterProducts.type.ProductType.open}">x</i></div>
            <div class="content transition" :open="filterProducts.type.ProductType.open">
              <span>Contract Phone</span>
              <span>Phone</span>
              <span>Accessories</span>
              <span>Plans</span>
            </div>
          </div>
        </div>
      </div>
    </q-modal>
  </div>
</template>

<script>
import {
  QSelect,
  QModal
} from 'quasar'
import productsData from 'data/offerings-data.json'
export default {
  components: {
    QSelect,
    QModal
  },
  data () {
    console.log(productsData.data)
    return {
      open: false,
      select: 'goog',
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        }
      ],
      products: {
        data: productsData.data
      },
      pagination: {
        currentPage: 1,
        display: 8
      },
      filterProducts: {
        type: {
          Products: {
            open: true,
            select: []
          },
          Brand: {
            open: false,
            select: []
          },
          Color: {
            open: true,
            select: [],
            data: [
              {
                image: 'statics/mobileImages/search/color/black.png',
                name: 'Black'
              },
              {
                image: 'statics/mobileImages/search/color/blue.png',
                name: 'Blue'
              },
              {
                image: 'statics/mobileImages/search/color/brown.png',
                name: 'Brown'
              },
              {
                image: 'statics/mobileImages/search/color/basil.png',
                name: 'Basil'
              },
              {
                image: 'statics/mobileImages/search/color/gray.png',
                name: 'Gray'
              },
              {
                image: 'statics/mobileImages/search/color/mixed.png',
                name: 'Mixed'
              },
              {
                image: 'statics/mobileImages/search/color/orange.png',
                name: 'Orange'
              },
              {
                image: 'statics/mobileImages/search/color/pink.png',
                name: 'Pink'
              },
              {
                image: 'statics/mobileImages/search/color/red.png',
                name: 'Red'
              },
              {
                image: 'statics/mobileImages/search/color/white.png',
                name: 'White'
              },
              {
                image: 'statics/mobileImages/search/color/yellow.png',
                name: 'Yellow'
              }
            ]
          },
          Memory: {
            open: false,
            select: []
          },
          Connection: {
            open: false,
            select: []
          },
          ProductType: {
            open: false,
            select: []
          }
        }
      }
    }
  },
  computed: {
    total: function () {
      let display = this.pagination.display
      let length = this.products.data.length
      return Math.ceil(length / display)
    }
  },
  methods: {
    addPage () {
      let currentPage = this.pagination.currentPage
      let total = this.pagination.total
      this.pagination.currentPage = currentPage++ >= total ? total : currentPage
    },
    subPage () {
      let currentPage = this.pagination.currentPage
      this.pagination.currentPage = currentPage-- <= 1 ? 1 : currentPage
    }
  }
}
</script>

<style lang="stylus">
.q-popover .q-item
  font-size .28rem
.searchDiv
  padding-bottom .64rem
  padding-top 1.28rem
  display flex
  flex-direction column
  >.banner
    width 100%
    height 48vw
  >.filterTop
    height 1.1rem
    padding 0 .4rem
    border-bottom 1px solid #e5e5e5
    display flex
    justify-content space-between
    align-items center
    position relative
    >div
      display flex
      margin 0
      cursor pointer
      align-items center
      font-size .28rem
    >.left
      >i
        width .26rem
        height .2rem
        display flex
        justify-content center
        align-items center
        background url('~statics/mobileImages/search/ico_fiter.png') center no-repeat
        background-size 100% 100%
      >span
        margin-left .2rem
        font-weight bold
    >.right
      >span
        color #666666
        margin-right .16rem
      >div
        color #252525
        font-weight bold
  >.productsDiv
    font-size .28rem
    padding .48rem
    >.product
      width 50%
      display flex
      flex-direction column
      justify-content center
      >div
        display flex
        justify-content center
        align-items flex-start
      >.productName
        height 1.26rem
        font-weight bold
        padding-top .28rem
        display -webkit-box
        /* autoprefixer: off */ 
        -webkit-box-orient vertical
        /* autoprefixer: on */
        -webkit-line-clamp 3
        overflow hidden
        text-align center
      >.productOther
        height 1rem
        padding-top .08rem
        >span
          padding 0 .1rem
          &:first-child
            color #252525
            font-weight bold
          &:last-child
            color #c1c0bf
  >.productsPage
    height .64rem
    font-size .28rem
    display flex
    justify-content space-between
    align-items center
    .left, .right
      width .64rem
      height .64rem
      margin 0 .24rem
      cursor pointer
      &.no>i
        background url('~statics/mobileImages/search/ico_page_no.png') center no-repeat
        background-size 100% 100%
      >i
        width 100%
        height 100%
        display flex
        justify-content center
        align-items center
        background url('~statics/mobileImages/search/ico_page.png') center no-repeat
        background-size 100% 100%
    >.left
      transform rotate(180deg)
    >.content
      >input
        width .64rem
        height .64rem
        padding 0 .12rem
        border 2px solid #e5e5e5
        border-radius .08rem
        text-align center
      >span
        color #b2b2b2
        padding 0 .12rem
.filterDiv
  .modal-content
    background rgba(0, 0, 0, .5)
    >.main
      width calc(100vw - .48rem)
      min-height calc(100vh - .48rem)
      margin .24rem
      background #fff
      >.title
        width 100%
        height 1.16rem
        padding 0 .48rem
        display flex
        justify-content space-between
        align-items center
        >span
          font-size .28rem
          color #66bbff
          cursor pointer
          // font-weight bold
        >i
          width .25rem
          height .26rem
          display flex
          justify-content center
          align-items center
          font-size 0
          background url('~statics/mobileImages/search/ico_close.png') center no-repeat
          background-size 100% 100%
          cursor pointer
      >.done
        width calc(100% - .96rem)
        height .96rem
        margin .28rem .48rem .38rem
        display flex
        justify-content center
        align-items center
        border-radius .48rem
        background #252525
        color #fff
        font-size .32rem
        cursor pointer
      >.content
        border-top 2px solid #e5e5e5
        width calc(100% - .96rem)
        margin 0 .48rem
        >.filterProducts
          width 100%
          border-bottom 2px solid #e5e5e5
          >.top
            height .96rem
            padding 0 .18rem
            display flex
            justify-content space-between
            align-items center
            >.title
              font-size .28rem
              font-weight bold
            >i
              font-size 0
              width .16rem
              height .16rem
              cursor pointer
            >.show
              background url('~statics/mobileImages/search/ico_hide.png') center no-repeat
              background-size 100% 100%
            >.hide
              background url('~statics/mobileImages/search/ico_show.png') center no-repeat
              background-size 100% 100%
          >.content
            display flex
            flex-direction column
            height 0
            overflow hidden
            >span
              // flex-shrink 0
              padding .16rem .18rem
              font-size .28rem
              color #666666
              &.active
                font-weight bold
            &[open='open']
              padding .2rem 0
              height auto
        >.filterColor
          width 100%
          border-bottom 2px solid #e5e5e5
          >.top
            height .96rem
            padding 0 .18rem
            display flex
            justify-content space-between
            align-items center
            >.title
              font-size .28rem
              font-weight bold
            >i
              font-size 0
              width .16rem
              height .16rem
              cursor pointer
            >.show
              background url('~statics/mobileImages/search/ico_hide.png') center no-repeat
              background-size 100% 100%
            >.hide
              background url('~statics/mobileImages/search/ico_show.png') center no-repeat
              background-size 100% 100%
          >.content
            width 5.2rem
            display flex
            flex-wrap wrap
            height 0
            overflow hidden
            >div
              // flex-shrink 0
              padding .16rem .18rem
              font-size .24rem
              color #666666
              display flex
              flex-direction column
              justify-content center
              align-items center
              >i
                font-size 0
                width .64rem
                height .64rem
              >span
                font-size 0
                height .48rem
                display flex
                justify-content center
                align-items center
                word-break keep-all
              &.active
                >i
                  border 1px solid #69d7a8
                  border-radius 50%
                >span
                  font-size .24rem
            &[open='open']
              padding .2rem 0
              height auto
</style>
