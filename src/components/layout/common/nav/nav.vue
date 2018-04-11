<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout :view='view' style="overflow: hidden" class="navTop" position="top">
    <q-tabs slot="navigation" class="q-tabs-logo">
      <q-tab slot="title" hide="label" class="logo">
         <img src="~assets/logo.png" class="responsive">
      </q-tab>
    </q-tabs>
    <!-- Navigation Tabs -->
    <q-tabs slot="navigation" class="q-tabs-left">
        <!-- <q-route-tab slot="title" disable to="/Home" hide="label" class="logo">
          <img src="~assets/logo.png" class="responsive">
        </q-route-tab> -->
        <q-route-tab slot="title" default="true" to="/" inline hide="icon" label="STORE" />
        <q-route-tab slot="title" to="/" inline hide="icon" label="SUPPORT" />
    </q-tabs>
    <q-tabs slot="navigation" class="q-tabs-right">
      <q-tab slot="title" hide="label" class="search">
        <q-btn flat color="BrightBlack" icon="ion-ios-search-strong" class="tabBtn" @click="search" />
      </q-tab>
      <q-tab slot="title" hide="label">
        <q-btn round color="BrightBlack" class="tabBtn" @click="showPopup('shoppingBag')">
          <img src="statics/shopping-card.png" alt="" >
        </q-btn>
      </q-tab>
    </q-tabs>
    <q-tabs slot="navigation" class="q-tabs-input" v-show="text" v-search-focus="text" @focus="text=true" @blur="text=false">
      <q-tab slot="title" hide="icon">
        <!-- <q-input type="text"color="BrightBlack" v-model="searching" v-search-focus="text" /> -->
        <q-input type="text" v-bind:class="{ 'q-if-focused':text }" color="BrightBlack" v-model="searching" @keyup.enter.native="searchAll" />
      </q-tab>
      <q-tab hide="icon">
        <div class="search-tabs">
          <div class="search-tab" v-for="item in searchData">
            <div class="search-tab-title">
              {{ item.title }}
              <span
                class="clear"
                v-if="item.title === 'History' && item.value.length > 0"
                @click="clearHistory"
              >
                clear
              </span>
            </div>
            <div class="search-tab-ul">
              <ul color="BrightBlack">
                <li class="search-tab-li" v-for="(value, index) in item.value" v-bind:class="{ 'active':(active.searchState.state==index&&active.searchState.type==item.type) }" @click="searching=value;text=true;isActive('searchState', item.type, index);searchAll(this, value)">{{ value }}</li>
              </ul>
            </div>
          </div>
        </div>
      </q-tab>
    </q-tabs>
    <div class="popupBox" v-if="popup.length > 0">
      <div class="popupShoppingBag" v-if="popup==='shoppingBag'">
        <div class="popupShoppingBagMask"></div>
        <div class="popupShoppingBagBox">
          <div class="shoppingBagHead">
            <q-tabs slot="navigation" class="q-tabs-left">
              <q-tab slot="title" class="signOut" label="SIGN OUT" @click="showPopup('signOut')" v-if="usered===true">
                <img src="~statics/shoppingBag/signOut.png">
              </q-tab>
              <q-tab slot="title" class="signIn" label="SIGN IN" @click="showPopup('showSignIn')" v-if="usered===false">
                <img src="~statics/shoppingBag/signOut.png">
              </q-tab>
              <q-route-tab slot="title" to="/Order/Commerce" class="myCommerce" label="MY COMMERCE">
                <img src="~statics/shoppingBag/myCommerce.png">
              </q-route-tab>
              <q-route-tab slot="title" to="/Market/shoppingBag" class="ShoppingBag" :label="bagNumber">
                <img src="~statics/shoppingBag/bag.png">
              </q-route-tab>
            </q-tabs>
          </div>
          <div class="shoppingBagBody">
            <div class="shoppingBagPackage" v-if="packageAll.length > 0" v-for="(item, index) in packageAll">
              <div class="packageItem">
                <div class="packageItemImgBox">
                  <img class="packageItemImg" :src="item.image" />
                </div>
                <div class="packageItemImformation">
                  <div class="packageItemName">{{item.name}}</div>
                  <div class="itemAttr" v-for="(value, key) in item.attr">{{key}}:{{value}}</div>
<!--                   <div class="packageItemMemory">{{item.packageItemDetail3}}</div>
                  <div class="packageItemPrimary">{{item.packageItemDetail4}}</div>
                  <div class="packageItemColor">{{item.packageItemDetail5}}</div> -->
                </div>
                <div class="packageItemNumber">X{{item.number}}</div>
                <div class="horizon"></div>
              </div>
              <div class="packageItem">
                <div class="packageItemImgBox">
                  <img class="packageItemImg" :src="item.setMeal.image" />
                </div>
                <div class="packageItemImformation">
                  <div class="packageItemName">{{item.setMeal.name}}</div>
                  <div class="itemAttr" v-for="(value, key) in item.setMeal.attr">{{key}}:{{value}}</div>
<!--                   <div class="packageItemMemory">{{item.setMeal.packageItemDetail3}}</div>
                  <div class="packageItemPrimary">{{item.setMeal.packageItemDetail4}}</div>
                  <div class="packageItemColor">{{item.setMeal.packageItemDetail5}}</div> -->
                </div>
                <div class="packageItemNumber">X{{item.number}}</div>
                <div class="horizon"></div>
              </div>
              <div class="subTotalBox">
                <div class="subTotal">subtotal</div>
                <div class="upfrontBox"><div class="upfront">upfront:</div><div class="upfrontNumber">${{item.price}}</div></div>
                <div class="monthlyBox"><div class="monthly">monthly:</div><div class="monthlyNumber">${{item.setMeal.price}}</div></div>
              </div>
            </div>
            <div class="shoppingBagItem" v-if="itemAll.length > 0" v-for="(item, index) in itemAll">
              <div class="itemImgBox">
                <img class="itemImg" :src="item.image" />
              </div>
              <div class="itemImformation">
                <div class="itemName">{{item.name}}</div>
                <div class="itemAttr" v-for="(value, key) in item.attr">{{key}}:{{value}}</div>
<!--                 <div class="itemMemory">{{item.itemDetail3}}</div>
                <div class="itemPrimary">{{item.itemDetail4}}</div>
                <div class="itemColor">{{item.itemDetail5}}</div> -->
              </div>
              <div class="itemNumber">X{{item.number}}</div>
              <div class="remove" @click="removeItem(item, index)">删除</div>
              <div class="horizon"></div>
            </div>
          </div>
          <div class="shoppingBagFoot">
            <div class="upfrontBox"><div class="upfront">upfront</div><div class="upfrontNumber">${{upfront}}</div></div>
            <div class="vertical"></div>
            <div class="monthlyBox"><div class="monthly">monthly</div><div class="monthlyNumber">${{monthly}}</div></div>
            <div class="checkOut" @click="jumpCheckOut()">CHECK OUT</div>
          </div>
        </div>
        <div class="popupShoppingBagClose" @click="showPopup('close')">
          <img src="~statics/shoppingBag/close.png">
        </div>
      </div>
      <div class="signUpBox" v-if="popup==='signUp'">
        <h3>SIGN UP</h3>
        <div class="close" @click="showPopup('close')"></div>
        <div class="type">
          <div class="phone">Phone Number</div>
          <div class="email">Email</div>
        </div>
        <input placeholder="Account Name" class="account">
        <input placeholder="Phone Number" class="phone">
        <input placeholder="Password" class="password">
        <input placeholder="Confirm Password" class="confirmPassword">
        <div class="verificationBox">
          <input placeholder="Enter Verification Code" class="verification">
          <button onfocus="this.blur();" class="sendVerification">SEND</button>
        </div>
        <button onfocus="this.blur();" class="signUp" @click="showPopup('close')">SIGN UP</button>
        <div class="other">
          <span class="haveAccount">Already have an account?</span>
          <span class="signIn" @click="showPopup('showSignIn')">Sign In</span>
        </div>
      </div>
      <div class="signInBox" v-if="popup==='signIn'">
        <h3>SIGN IN</h3>
        <div class="close" @click="showPopup('close')"></div>
        <input placeholder="Account Name /Email /Phone Number" class="account">
        <input placeholder="Password" class="password">
        <div class="verificationBox">
          <input placeholder="Verification Code" class="verification">
          <button onfocus="this.blur();" class="getVerification"></button>
        </div>
        <button onfocus="this.blur();" class="signIn" @click="showPopup('signInSignIn')">SIGN IN</button>
        <div class="other">
          <span class="forget">Forget Your Password?</span>
          <span class="signUp" @click="showPopup('showSignUp')">Sign UP</span>
        </div>
        <div class="otherSignIn">
          <div class="horizonBox">
            <div class="horizon"></div>
            <span>Or sign in via</span>
            <div class="horizon"></div>
          </div>
          <div class="WeChat"></div>
        </div>
      </div>
      <div class="globalMask" v-if="popup==='signIn' || popup==='signUp'"></div>
    </div>
<!--     <transition appear :enter-active-class="enter" :leave-active-class="leave" >
      <router-view :searchString="searchString"/>
    </transition> -->

    <!-- Footer
    <q-toolbar slot="footer">
      ...
    </q-toolbar> -->

  </q-layout>
</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QBtn,
  QTabs,
  QTab,
  QRouteTab,
  QInput,
  QList,
  QListHeader,
  QItem,
  QItemSide,
  QSideLink,
  QItemMain
} from 'quasar'
import searchData from 'data/search.json'
// import allData from 'data/allData.json'
export default {
  name: 'r-heard',
  props: {
    searchString: {
      type: String,
      default: ''
    }
  },
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QBtn,
    QTabs,
    QTab,
    QRouteTab,
    QInput,
    QList,
    QListHeader,
    QItem,
    QItemSide,
    QSideLink,
    QItemMain
  },
  data () {
    return {
      upfront: 0,
      monthly: 0,
      packageAll: [],
      itemAll: [],
      popup: '',
      usered: false,
      bagNumber: 'SHOPPING BAG',
      searchData: searchData.data,
      allData: [],
      text: false,
      searching: '',
      // searchString: '',
      active: {
        searchState: {
          type: null,
          state: null
        }
      },
      enter: 'animated fadeInRightBig',
      leave: 'animated fadeOutLeftBig',
      view: 'hhh lpr fff'
    }
  },
  methods: {
    showPopup (type) {
      this.$root.eventHub.$emit('openModel', type)
      // console.log(type)
      switch (type) {
        case 'shoppingBag':
          this.popup = type
          var _goods = JSON.parse(sessionStorage.getItem('goods'))
          if (_goods) {
            this.allData = []
            this.packageAll = []
            this.itemAll = []
            this.upfront = 0
            this.monthly = 0
            _goods.map((g) => {
              if (g.byStages) {
                this.packageAll.push(g)
              }
              else {
                this.itemAll.push(g)
              }
            })
            this.allData = JSON.parse(sessionStorage.getItem('goods'))
          }
          let ts = this
          this.allData.map(function (item, index) {
            console.log(item)
            if (item.byStages) {
              ts.monthly += (parseInt(item.setMeal.price) * item.number)
            }
            else {
              ts.upfront += (parseInt(item.attr.Upfront) * item.number)
            }
          })
          // console.log(this.allData)
          // var _goods = JSON.parse(sessionStorage.getItem('goods'))
          // if (_goods) {
          //   this.packageAll = []
          //   this.itemAll = []
          //   this.upfront = 0
          //   this.monthly = 0
          //   for (var i = 0; i < _goods.item.number; i++) {
          //     if (this.itemAll[0]) {
          //       this.itemAll[0].itemNumber++
          //     }
          //     else {
          //       this.itemAll.push(this.allData.item.detail)
          //     }
          //     this.upfront += 12
          //   }
          //   for (var p = 0; p < _goods.package.number; p++) {
          //     this.packageAll.push(this.allData.package.detail)
          //     this.upfront += 1149
          //     this.monthly += 198
          //   }
          // }
          break
        case 'signOut':
          this.popup = ''
          this.usered = false
          break
        case 'showSignIn':
          this.popup = 'signIn'
          break
        case 'showSignUp':
          this.popup = 'signUp'
          break
        case 'signUpSignIn':
          this.popup = ''
          break
        case 'signInSignIn':
          this.popup = ''
          this.usered = true
          break
        case 'close':
          this.popup = ''
          break
      }
    },
    search (el) {
      // console.log(this.searchData)
      this.text = !this.text
      // this.$set(this.text, !this.text)
      // this.$refs['inputSearch'].focus()
    },
    isActive (type, src, value) {
      this.active[type].type = src
      this.active[type].state = value
      // this.$set(this.active[src], value)
    },
    searchAll (el, val) {
      var value = val || el.target.value
      var isExist = false
      this.searchData[1].value.map(function (itme) {
        if (itme.toUpperCase() === value.toUpperCase()) {
          isExist = true
        }
      })
      if (!isExist && value !== '') {
        this.searchData[1].value.push(value)
      }
      // this.searchString = value
      this.$root.eventHub.$emit('setSearchString', value)
      // console.log(this.$router.query)
      if (value !== '') {
        this.$router.push({
          path: '/Market/Search',
          query: {
            search: value
          }
        })
      }
      else {
        this.$router.push({
          path: '/Market/Search',
          query: {}
        })
      }
    },
    clearHistory () {
      this.searchData[1].value = []
    },
    removeItem (item, index) {
      this.itemAll.splice(index, 1)
      // console.log(item)
      let _goods = JSON.parse(sessionStorage.getItem('goods'))
      let array = []
      _goods.map(function (g) {
        if (g.id !== item.id) {
          array.push(g)
        }
      })
      // console.log(_goods)
      sessionStorage.setItem('goods', JSON.stringify(array))
    },
    jumpCheckOut () {
      this.$router.push('/Market/Checkout')
    }
  },
  directives: {
    searchFocus: {
      componentUpdated: function (el, {value}) {
        // console.log(el)
        // console.log(el.querySelector('.search-tab-li'))
        // console.log(value)
        // if (value && !el.querySelector('.search-tab-li')) {
        if (value) {
          el.querySelector('input').focus()
        }
        else el.querySelector('input').blur()
      }
    }
  },
  // 接着在父组件内
  // watch $route 决定使用哪种过渡
  watch: {
    '$route' (to, from) {
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.transitionName = toDepth < fromDepth ? 'fadeOutLeftBig' : 'fadeInRightBig'
      // console.log(to.path.split('/'))
      // console.log(from.path.split('/'))
      const toDepth = to.path.split('/')[1]
      // const fromDepth = from.path.split('/')[1]
      // console.log(toDepth)
      // console.log(fromDepth)
      this.enter = toDepth === 'Home' ? 'animated fadeInLeftBig' : 'animated fadeInRightBig'
      // if (toDepth === 'ProductContent') {
      //   this.enter = 'animated fadeInTopBig'
      // }
      // else if (toDepth === 'Home') {
      //   this.enter = 'animated fadeInLeftBig'
      // }
      // else {
      //   this.enter = 'animated fadeInRightBig'
      // }
      this.leave = toDepth === 'Home' ? 'animated fadeOutRightBig' : 'animated fadeOutLeftBig'
      // this.leave = toDepth === 'ProductContent' ? 'animated fadeOutRightBig' : 'animated fadeOutLeftBig'
      // console.log(to)
      // console.log(from)

      // var routerPath = this.$route.fullPath
      // if (routerPath.indexOf('/ProductContent') >= 0) {
      //   this.view = 'hHh lpr fff'
      // }
      // else {
      //   this.view = 'hhh lpr fff'
      // }
    }
  },
  mounted () {
    // var routerPath = this.$route.fullPath
    // if (routerPath.indexOf('/ProductContent') >= 0) {
    //   this.view = 'hHh lpr fff'
    // }
    // else {
    //   this.view = 'hhh lpr fff'
    // }
    var _goods = JSON.parse(sessionStorage.getItem('goods'))
    console.log(_goods)
    // if (!_goods) {
    //   _goods = {
    //     item: {
    //       number: 0
    //     },
    //     package: {
    //       number: 0
    //     }
    //   }
    //   sessionStorage.goods = JSON.stringify(_goods)
    // }
    if (_goods) {
      _goods.map((g) => {
        if (g.byStages) {
          this.packageAll.push(g)
        }
        else {
          this.itemAll.push(g)
        }
      })
      console.log(this.packageAll)
      console.log(this.itemAll)
      this.allData = JSON.parse(sessionStorage.getItem('goods'))
    }
    // console.log(json.parse(allData));
    // console.log(this.view)
  }
}
</script>
<style lang="stylus">
main, .layout, .layout-header, .layout-footer
  // position static !important
.navTop
  .globalMask
    opacity: 0.4
    position: fixed
    background-color: #000
    left: 0%
    top: 0%
    z-index: 1111
    width: 100%
    height: 100%
  .signUpBox
    position: fixed
    background-color: #fefefe
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    z-index: 9999999
    width: 510px
    height: 660px
    padding: 25px 40px
    >*
      width: 100%
    >h3
      font-size: 24px
      color: #252525
      margin: 0px
      font-weight: bold
    >.close
      position: absolute
      width: 18px
      height: 18px
      right: 40px
      top: 25px
      background-color: #000
      cursor: pointer
      background: url('~statics/sign/close.png') center center / auto auto no-repeat
    >.type
      margin-top: 24px
      height: 40px
      line-height: 40px
      font-size: 14px
      font-weight: bold
      >div
        float: left
        cursor: pointer
      >.email
        margin-left: 32px
        color: #b2b2b2
    input:-moz-placeholder
      color: #b2b2b2
    input::-moz-placeholder
      color: #b2b2b2
    input:-ms-input-placeholder
      color: #b2b2b2
    input::-webkit-input-placeholder
      color: #b2b2b2
    input
      padding: 0
      margin-bottom: 16px
      height: 56px
      font-size: 14px
      line-height: 32px
      padding: 12px 20px
      color: #b2b2b2
      border: 1px solid #b2b2b2
    >.verificationBox
      margin-bottom: 40px
      height: 56px
      font-size: 14px
      line-height: 32px
      >*
        height: 100%
        float: left
        display: inline-block
      >.verification
        width: 320px
      >.sendVerification
        font-weight: bold
        height: 100%
        width: 108px
        text-align: center
        line-height: 56px
        border: 1px solid #b2b2b2
        border-left: none
        background-color: #fff
        cursor: pointer
    >.signUp
      height: 64px
      background-color: #000
      border: none
      border-radius: 32px
      color: #fff
      cursor: pointer
      margin-bottom: 30px
    >.other
      padding: 0px 20px
      height: 14px
      display: flex
      justify-content: space-between
      line-height: 14px
      >*
        cursor: pointer
      .haveAccount
        color: #b2b2b2
      .signIn
        padding-right: 24px
        font-weight: bold
        background: url('~statics/sign/arrow_R.png') center right / auto auto no-repeat
  .signInBox
    position: fixed
    background-color: #fefefe
    left: 50%
    top: 50%
    transform: translate(-50%, -50%)
    z-index: 9999999
    width: 510px
    height: 660px
    padding: 25px 40px
    >*
      width: 100%
    >h3
      font-size: 24px
      color: #252525
      margin: 0px
      font-weight: bold
      margin-bottom: 64px
    >.close
      position: absolute
      width: 18px
      height: 18px
      right: 40px
      top: 25px
      background: url('~statics/sign/close.png') 100% 100% / auto auto no-repeat
      cursor: pointer
    input:-moz-placeholder
      color: #b2b2b2
    input::-moz-placeholder
      color: #b2b2b2
    input:-ms-input-placeholder
      color: #b2b2b2
    input::-webkit-input-placeholder
      color: #b2b2b2
    input
      padding: 0
      margin-bottom: 16px
      height: 56px
      font-size: 14px
      line-height: 32px
      padding: 12px 20px
      color: #b2b2b2
      border: 1px solid #b2b2b2
    >.verificationBox
      margin-bottom: 40px
      height: 56px
      font-size: 14px
      line-height: 32px
      >*
        height: 100%
        float: left
        display: inline-block
      >.verification
        width: 320px
      >.getVerification
        height: 100%
        width: 108px
        text-align: center
        line-height: 56px
        border: 1px solid #b2b2b2
        border-left: none
        background-color: #fff
        cursor: pointer
        background: url('~statics/sign/verification.png') center center / auto auto no-repeat
    >.signIn
      height: 64px
      background-color: #000
      border: none
      border-radius: 32px
      color: #fff
      cursor: pointer
      margin-bottom: 30px
    >.other
      padding: 0px 20px
      height: 14px
      display: flex
      justify-content: space-between
      line-height: 14px
      margin-bottom: 40px
      >*
        cursor: pointer
      .forget
        color: #6abcfc
      .signUp
        padding-right: 24px
        font-weight: bold
        background: url('~statics/sign/arrow_R.png') center right / auto auto no-repeat
    >.otherSignIn
      .horizonBox
        height: 14px
        display: flex
        margin-bottom: 36px
        .horizon
          width: 148px
          margin: 6.5px 0px
          border-top: 1px solid #e5e5e5
        span
          flex: 1
          display: block
          line-height: 14px
          height: 14px
          color: #666666
          text-align: center
      .WeChat
        width: 44px
        height: 33px
        margin: 0 auto
        background-color: #f00
        cursor: pointer
        background: url('~statics/sign/wechat.png') center center / auto auto no-repeat
  .layout-header
    width 100vw
    max-width 100%
    height 88px
    box-shadow none
    display flex
    align-items center
    justify-content space-between
    position absolute
    z-index 40
  .layout-page-container
    // display none
    // position relative
    // z-index 10
    main 
      // height 0 !important
      // min-height auto !important
      position absolute
      top 0
      .popupBox
        width 100vw
        max-width 100%
        height 100vh
        position absolute
        top 0
        left 0
        z-index 100
        overflow hidden
  .q-tabs-head
    height 56px
    background none
    position relative
    z-index 10
  .q-tabs-logo
    margin-left 40px
    .q-tab
      color #252525
  .logo
    z-index 50
    .q-tabs-bar
      display none
  .q-tabs-left
    width 100%
    .q-tab
      color #252525
      margin-left 20px
      margin-right 20px
    .q-tabs-bar
      color #252525
      border 2px solid currentColor
      // width 24px
      // left 50%
      // right 50%
      // margin-left -12px
      // margin-right -12px
    .q-tabs-normal .q-tab-label
      opacity 0.4
  .q-tabs-right
    z-index 50
    .q-tab
      color #252525
      margin-left 20px
      margin-right 20px
    .q-tabs-bar
      display none
  .search .tabBtn
    width 24px
    height 56px
  .tabBtn
    width 56px
    height 56px
    .on-left
      margin-right 0
  .tabBtn:hover
    .q-focus-helper
      opacity 0
  .tabBtn:not([disabled]):active
    box-shadow none
  .q-tabs-input
    width 544px
    position absolute
    top 20px
    right 110px
    z-index 40
    .q-tab
      color #252525
      // background-color #fff !important
      .q-tabs-bar
        border 0
    .q-if:before, .q-if:after
      height 4px
    .q-input-target
      width 504px
      padding-left 16px
    .q-if
      margin-top 8px
      margin-bottom 0
      // padding-top 0
      padding-bottom 16px
    .q-tabs-panes
      position relative
      top -4px
      z-index 50
      .q-tab
       cursor: auto;
      .q-tabs-bar
        display none
    .search-tabs
      width calc(100% - 16px)
      display flex
      flex-direction column
      border-left 1px solid #b2b2b2
      border-right 1px solid #b2b2b2
      border-bottom 1px solid #b2b2b2
      margin 0 8px
      background #fff
      .search-tab
        margin 8px 8px 0
        text-transform none
        &:first-child
          border-bottom 1px solid #b2b2b2
      .search-tab-title
        position relative
        margin 16px 8px
        color #b2b2b2
        .clear
          position absolute
          right 0
          z-index 100
          cursor pointer
      .search-tab-ul
        ul
          display flex
          flex-wrap: wrap;
          max-width 100%
          padding 4px 8px
          li
            margin-right 40px
            list-style none
            cursor pointer
            &:hover
              color #6dd6a9
            &.active
              color #6dd6a9
  @media (min-width: 992px)
    .q-tabs-logo
      .q-tab
        padding 0
      .q-tabs-head:not(.scrollable)
        padding 0
    .q-tabs-left .q-tab
      width 100px
      padding 0
      margin 0
      // margin-left 20px
      // margin-right 20px
    .q-tabs-right .q-tab
      padding 0
      margin-left 20px
      margin-right 20px
    .q-tabs-input
      .q-tab
        padding 0
        margin-left 20px
        margin-right 20px
      .q-tabs-head:not(.scrollable)
        padding 0
    .q-tabs-head:not(.scrollable)
      padding 0 20px
  .q-ripple-container
    display none
  .navigationTop .q-tabs-panes
    display flex
    justify-content space-between
  .navigationLeft
    display flex
  .navigationRight
    display flex
  .layout-page
    // width 99vw
    display flex
    // overflow hidden
  .text-BrightBlack
    color #252525
  .bg-BrightBlack
    background #252525 !important
  .popupShoppingBag
    position fixed
    top 0
    left 0
    width 100vw
    height 100vh
    z-index 2001
    .popupShoppingBagMask
      position fixed
      top 0
      left 0
      width 100vw
      height 100vh
      z-index 2002
      background-color rgba(0, 0, 0, 0.4)
    .popupShoppingBagBox
      position fixed
      height 100vh
      width 500px
      top 0
      right 0
      z-index 2003
      background-color #fff
      padding-top 45px
      .shoppingBagHead
        margin 0 30px
        border-bottom 1px solid #eaeaea
        .q-tabs-head
          height 150px
          padding 0
          .q-tabs-scroller
            width 100%
            display block
            .q-tabs-bar
              display none
            >.q-tab
              width 100%
              height 50px
              display block
              .q-tabs-bar
                display none
              .q-tab-label
                height 50px
                line-height 50px;
                position relative;
                left 50px;
              img
                width 20px
                height 20px
                position absolute
                left 0
                top 15px
      .shoppingBagFoot
        position absolute
        display flex
        height 56px
        width 100%
        background-color #f5f5f5
        bottom 0
        >div
          flex 1
        .vertical
          border-left 1px solid #EAEAEA
          width 0
          height 40px
          margin 8px 0px
          flex 0
        .upfrontBox
          padding 10px 0
          font-weight bold
          font-size 10px
          >div
            display block
            height 18px
            line-height 18px
            text-align center
        .monthlyBox
          padding 10px 0
          font-size 10px
          font-weight bold
          >div
            display block
            height 18px
            line-height 18px
            text-align center
        .checkOut
          background-color #69d7a8
          font-weight bold
          text-align center
          line-height 56px
          font-size 12px
          color #fff
          cursor pointer
      .shoppingBagBody
        max-height calc(100vh - 282px)
        // overflow-y scroll
        margin 15px 22px 15px 32px
        padding-bottom 15px
        overflow-y auto
        .shoppingBagPackage
          .packageItem
            height 110px
            padding 15px 0
            position relative
            >div
              display inline-block
              float left
            .packageItemImgBox
              width 80px
              height 80px
              margin-right 20px
              >img
                width 80px
                height 80px
            .packageItemImformation
              width 230px
              height 80px
              .packageItemName
                height 30px
                line-height 30px
                font-size 14px
                font-weight bold
              .packageItemMemory
                height 16px
                line-height 16px
                font-size 10px
              .packageItemPrimary
                height 16px
                line-height 16px
                font-size 10px
              .packageItemColor
                height 16px
                line-height 16px
                font-size 10px
            .packageItemNumber
              width 85px
              font-size 12px
              line-height 30px
              text-align center
            .horizon
              width 330px
              height 0px
              border-bottom 1px solid #eaeaea
              position absolute
              bottom 0px
              right 0px
          .packageItemnth-last-child(2)
            .horizon
              display none
          .subTotalBox
            width 100%
            height 30px
            padding 0 12px
            background-color #f5f5f5
            border-top 1px solid #e5e5e5
            border-bottom 1px solid #e5e5e5
            color #666666
            font-weight bold
            >div
              display inline-block
              float left
              height 100%
              font-size 14px
              line-height 30px
            .subTotal
              width 90px
            .upfrontBox
              width 150px
              >div
                display inline-block
                float left
              >.upfrontNumber
                color #000
            .monthlyBox
              width 150px
              >div
                display inline-block
                float left
              >.monthlyNumber
                color #000
        .shoppingBagItem
          height 110px
          padding 15px 0
          position relative
          >div
            display inline-block
            float left
          .itemImgBox
            width 80px
            height 80px
            margin-right 20px
            >img
              width 80px
              height 80px
          .itemImformation
            width 230px
            height 80px
            .itemName
              height 30px
              line-height 30px
              font-size 14px
              font-weight bold
            .itemAttr
              height 16px
              line-height 16px
              font-size 10px
            .itemMemory
              height 16px
              line-height 16px
              font-size 10px
            .itemPrimary
              height 16px
              line-height 16px
              font-size 10px
            .itemColor
              height 16px
              line-height 16px
              font-size 10px
          .itemNumber
            width 85px
            font-size 12px
            line-height 30px
            text-align center
          .remove
            width 85px
            font-size 12px
            line-height 50px
            text-align center
            cursor pointer
          .horizon
            width 100%
            height 0px
            border-bottom 1px solid #eaeaea
            position absolute
            bottom 0px
            right 0px
      .shoppingBagBody::-webkit-scrollbar
        width10px
      .shoppingBagBody::-webkit-scrollbar-button
        display none
      .shoppingBagBody::-webkit-scrollbar-track
        background #eaeaea
        display none
      .shoppingBagBody::-webkit-scrollbar-thumb
        background #eaeaea
        border-radius:5px
      .shoppingBagBody::-webkit-scrollbar-corner
        background #eaeaea
      .shoppingBagBody::-webkit-scrollbar-resizer 
        background #FF0BEE
    .popupShoppingBagClose
      position fixed
      height 56px
      width 56px
      top 16px
      right 40px
      z-index 2004
      background-color #000
      border-radius 50%
      overflow hidden
      cursor pointer
</style>