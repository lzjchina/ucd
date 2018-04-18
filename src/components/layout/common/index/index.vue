<template>
  <div class="marketBox" @mousewheel="paperScroll" @click.stop="allowScroll">
    <div
      v-bind:class="[navSwitch ? 'show' : 'hide', BGWhite ? 'BGWhite' : 'BGTransparent']"
      class="marketTop"
      ref="marketTop"
    >
      <r-heard :searchString="searchString" />
    </div>
    <div v-bind:class="[productMenuSwitch ? 'show' : 'hide', navSwitch ? 'twoNav' : 'oneNav']" class="productMenuBox">
      <t-productMenu />
    </div>
    <div
      class="marketContent"
      v-bind:class="marketContentClass"
    >
      <transition appear :enter-active-class="enter" :leave-active-class="leave" >
        <router-view :searchString="searchString"/>
      </transition>
    </div>
    <div
      class="navigation"
      v-bind:class="[navigationSwitch ? 'show' : 'hide', navSwitch ? 'twoNav' : 'oneNav', navigationShow ? 'menuShow' : 'menuHide']"
    >
      <div class="move">
        <div class="products-layout-top">
          <div class="second-filter-title-left">
            <div class="search-filter-Reset">
              <div
                class="filter-filter"
                @click="filterSwitch"
              >
                <img src="statics/search/images/new/ico_fiter.png" style="margin-right:4px;"><span>Filter</span>
              </div>
              <div
                class="filter-clear"
                @click="typeReset"
              >Reset</div>
            </div>
          </div>
        </div>
        <div class="container-top">
          <div class="second-filter-title-right">
            <div class="second-filter-title-number">
              <span>{{offeringsLength}} Results</span>
            </div>
            <div class="second-filter-title-select">
              <span style="color:#666666">Sort by: </span>
              <q-select
                color="secondary"
                v-model="sortType"
                :options="options"
                @change="sortTypeSelect"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="search-filter-Reset-hr"></div>
    </div>
  </div>
</template>
<script>
import {
  QSelect
} from 'quasar'
import RHeard from 'components/layout/common/nav/nav'
import TProductMenu from 'components/layout/common/productMenu/productMenu'
import searchOfferings from 'data/offerings-data.json'
export default {
  components: {
    QSelect,
    RHeard,
    TProductMenu
  },
  data () {
    return {
      options: [
        {
          label: 'Popularity',
          value: 'pop'
        },
        {
          label: 'Name A-Z',
          value: 'name'
        },
        {
          label: 'Best Sellers',
          value: 'sales'
        },
        {
          label: 'Newest',
          value: 'shelfTime'
        },
        {
          label: 'Price Low-High',
          value: 'low'
        },
        {
          label: 'Price High-Low',
          value: 'high'
        }
      ],
      active: {
        type: 'All',
        color: '',
        memory: ''
      },
      sortType: 'pop',
      scrollTop: 0,
      offeringsLength: searchOfferings.data.length,
      offeringsInit: searchOfferings.data,
      navigationSwitch: true,
      navigationShow: false,
      navSwitch: true,
      productMenuSwitch: true,
      BGWhite: false,
      scroll: true,
      enter: 'animated fadeInRightBig',
      leave: 'animated fadeOutLeftBig',
      searchString: '',
      openModelState: false
    }
  },
  mounted () {
    this.socket.$on('toIndexSearchChange', function (length) {
      this.offeringsLength = length
    }.bind(this))
    this.socket.$on('toIndexClick', function (length) {
      this.navigationSwitch = false
    }.bind(this))
    this.socket.$on('toIndexSignIn', function () {
      this.socket.$emit('toNavSignIn')
    }.bind(this))
    window.addEventListener('scroll', this.handleScroll)
  },
  computed: {
    marketContentClass: function () {
      return {
        oneNav: this.$route.fullPath.toLowerCase().indexOf('productmenu') >= 0 && !this.navSwitch,
        twoNav: this.$route.fullPath.toLowerCase().indexOf('productmenu') >= 0 && this.navSwitch,
        noNav: this.$route.fullPath.toLowerCase().indexOf('productmenu') < 0
      }
    // },
    // filterOfferings: function () {
    //   var _data = this.offerings
    //   if (this.sortType === 'low') _data = _.orderBy(_data, 'price', 'asc')
    //   else if (this.sortType === 'high') _data = _.orderBy(_data, 'price', 'desc')
    //   else if (this.sortType === 'shelfTime') _data = _.orderBy(_data, 'shelfTime', 'desc')
    //   else _data = _.orderBy(_data, this.sortType)
    //   if (this.active.type !== '' && this.active.type !== 'All') {
    //     var _type = this.active.type
    //     _data = _data.filter(function (item) {
    //       return item.type === _type
    //     })
    //   }
    //   if (this.active.color !== '') {
    //     var _color = this.active.color
    //     _data = _data.filter(function (item) {
    //       return item.color === _color
    //     })
    //   }
    //   if (this.active.memory !== '') {
    //     var _memory = this.active.memory
    //     _data = _data.filter(function (item) {
    //       return item.memory === _memory
    //     })
    //   }
    //   return _data
    }
  },
  methods: {
    typeReset () {
      this.socket.$emit('toSearchTypeReset')
    },
    sortTypeSelect () {
      console.log(this.select)
      this.socket.$emit('toSearchSortTypeSelect', this.select)
    },
    filterSwitch () {
      this.socket.$emit('toSearchFilterSwitch')
    },
    setValue (val) {
      this.searchString = val
    },
    openModel (val) {
      this.openModelState = val
      // console.log(this.openModelState.length > 0 && this.openModelState !== 'close')
    },
    allowScroll: function () {
      this.scroll = true
    },
    paperScroll: function (event) {
      // var routerPath = this.$route.fullPath
      // console.log(this.$route)
      var _routerPath = this.$route.path.toLowerCase()
      // console.log(event)
      // this.socket.$emit('toNavSearchHide')
      if (_routerPath === '/home') {
        event.preventDefault()
        if (this.scroll) {
          // 上
          if (event.deltaY < 0) {
            this.navSwitch = true
            if (window.scrollY <= window.innerHeight) {
              this.BGWhite = false
              this.scroll = false
              var upHeight = window.scrollY
              var upMove = setInterval(function () {
                if ((upHeight - 8) <= 0) {
                  upHeight = 0
                  window.scrollTo(0, upHeight)
                  clearInterval(upMove)
                }
                else {
                  upHeight -= 8
                  window.scrollTo(0, upHeight)
                }
              }, 0.1)
            }
            else if (window.scrollY <= (window.innerHeight + 100)) {
              window.scrollTo(0, window.innerHeight)
            }
            else {
              var upTargetHeight = window.scrollY - 100
              window.scrollTo(0, upTargetHeight)
            }
          }
          // 下
          else if (event.deltaY > 0) {
            this.navSwitch = false
            if (window.scrollY < window.innerHeight) {
              this.BGWhite = true
              this.scroll = false
              var downHeight = window.scrollY
              var downMove = setInterval(function () {
                if ((downHeight + 8) >= window.innerHeight) {
                  downHeight = window.innerHeight
                  window.scrollTo(0, downHeight)
                  clearInterval(downMove)
                }
                else {
                  downHeight += 8
                  window.scrollTo(0, downHeight)
                }
              }, 0.1)
            }
            else if (window.scrollY >= window.innerHeight) {
              var downTargetHeight = window.scrollY + 100
              window.scrollTo(0, downTargetHeight)
            }
          }
        }
        else {
          if (window.scrollY === window.innerHeight || window.scrollY === 0) {
            this.scroll = true
          }
        }
      }
      else if (_routerPath === '/productmenu') {
        // 上
        this.BGWhite = true
        if (event.deltaY < 0) {
          this.navSwitch = true
        }
        // 下
        else if (event.deltaY > 0) {
          this.navSwitch = false
        }
      }
      else if (_routerPath === '/market/search') {
        // event.preventDefault()
        // 上
        this.BGWhite = true
        if (event.deltaY < 0) {
          this.navSwitch = true
          if ((window.scrollY - 100) < 279) {
            // this.navigationSwitch = false
            if (window.scrollY <= 100) {
              this.BGWhite = false
            }
          }
          else {
            // this.navigationSwitch = true
          }
        }
        // 下
        else if (event.deltaY > 0) {
          this.navSwitch = false
          if ((window.scrollY + 100) >= 279) {
            // this.navigationSwitch = true
          }
          else {
            // this.navigationSwitch = false
          }
        }
      }
      else {
        console.log('--------------')
        this.BGWhite = true
        // 上
        if (event.deltaY < 0) {
          this.navSwitch = true
          if (window.scrollY <= 100) {
            this.BGWhite = false
          }
        }
        // 下
        else if (event.deltaY > 0) {
          this.navSwitch = false
          this.BGWhite = true
        }
      }
    },
    handleScroll: function () {
      var _routerPath = this.$route.path.toLowerCase()
      if (_routerPath.indexOf('/market/search') >= 0) {
        var _scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var _offsetTop = document.querySelector('.searchNavigation').offsetTop
        this.BGWhite = true
        // 上
        if (_scrollTop < this.scrollTop) {
          // this.navSwitch = true
          if (_scrollTop < _offsetTop) {
            this.navigationSwitch = false
            if (_scrollTop === 0) {
              this.BGWhite = false
            }
          }
          else {
            this.navigationSwitch = true
          }
        }
        // 下
        else if (_scrollTop > this.scrollTop) {
          if (_scrollTop > _offsetTop) {
            this.navigationSwitch = true
            this.navigationShow = true
          }
          else {
            this.navigationSwitch = false
          }
        }
        if (window.scrollY < window.innerHeight) {
          let val = (window.scrollY / (318 / 1920 * window.innerWidth)).toFixed(3)
          this.$refs.marketTop.style.backgroundColor = `rgba(255, 255, 255, ${val})`
        }
        else {
          this.$refs.marketTop.style.backgroundColor = `rgba(255, 255, 255, 1)`
        }
        this.scrollTop = _scrollTop
      }
    }
  },
  created () {
    this.$root.eventHub.$on('setSearchString', (target) => {
      this.setValue(target)
    })
    this.$root.eventHub.$on('openModel', (target) => {
      this.openModel(target)
    })
    if (this.$route.fullPath.indexOf('ProductMenu') >= 0) {
      this.navSwitch = false
      this.BGWhite = true
      this.productMenuSwitch = true
      this.navigationSwitch = false
    }
    else if (this.$route.fullPath.indexOf('/Market/Search') >= 0) {
      this.navigationSwitch = false
      this.navSwitch = false
      this.BGWhite = false
      this.productMenuSwitch = false
    }
    else {
      this.navigationSwitch = false
      this.navSwitch = true
      this.productMenuSwitch = false
    }
  },
  watch: {
    '$route' (to, from) {
      var toRoutePath = to.fullPath.toLowerCase()
      if (toRoutePath.indexOf('productmenu') >= 0) {
        this.navSwitch = false
        this.BGWhite = true
        this.productMenuSwitch = true
        this.navigationSwitch = false
      }
      else if (toRoutePath.indexOf('/market/search') >= 0) {
        this.navigationSwitch = false
      }
      else {
        this.navigationSwitch = false
        this.BGWhite = false
        this.navSwitch = true
        this.productMenuSwitch = false
      }
    }
  }
}
</script>
<style lang="stylus">
@keyframes navDown {
  from {top: -88px}
  to {top: 0px}
}
@keyframes navUp {
  from {top: 0px}
  to {top: -88px}
}
@keyframes menuDown {
  from {top: 0px}
  to {top: 88px}
}
@keyframes menuUp {
  from {top: 88px}
  to {top: 0px}
}
@keyframes menuShow {
  from {top: -82px}
  to {top: 0px}
}
.marketBox
  position relative
  >.navigation.oneNav
    top: 0px
    animation: menuUp .3s
  >.navigation.twoNav.menuShow
    top: 88px
    animation: menuDown .3s
  >.navigation.hide
    display none
  >.navigation.show
    display flex
  >.navigation.menuShow
    top: 0px
    animation: menuShow .3s
  >.navigation
    position fixed
    z-index 99999
    //position relative
    z-index 100
    background-color #fff
    width 100%
    display flex
    justify-content center
    align-items center
    flex-direction column
    >.move
      width 100%
      display flex
      justify-content flex-start
      align-items center
      >.products-layout-top
        height 64px
        margin-left 32px
        >.second-filter-title-left
          width 100%
          >.search-filter-Reset
            height: 63px
            width: 262px
            display: -ms-flexbox
            display: flex
            -ms-flex-pack: start
            justify-content: flex-start
            -ms-flex-align: center
            align-items: center
            >.filter-filter
              font-size 14px
              width 80px
              border-right 1px solid #e5e5e5
              margin 0 0 0 28px
            >.filter-clear
              width 80px
              color #6abcfc
              margin-left 16px
              span
                text-transform none
                justify-content flex-start
                font-size 14px
      >.container-top
        height 64px
        margin-right 32px
        margin-left 16px
        width 83.4%
        >.second-filter-title-right
          height 63px
          margin: 0 16px 0 0;
          display: -ms-flexbox
          display: flex
          -ms-flex-pack: justify
          justify-content: space-between
          -ms-flex-align: center
          align-items: center
          >.second-filter-title-number
            font-size 14px
            color #666666
            display flex
          >.second-filter-title-select
            font-size 14px
            color #666666
            display flex
            align-items center
            .q-if
              display flex
              flex-direction row
              padding 0 0 0 4px
              margin 0
            .q-input-target
              font-size 14px
            .q-if-control
              font-size calc(24/1920*100vw)
            .q-if:before
              height 0px
            .q-if:after
              height 0px
    >.search-filter-Reset-hr
      width 96%
      height 1px
      background #e5e5e5
      margin-bottom 1.4%
      margin-top -10px
  .productMenuBox
    width: 100vw
    max-width: 100%
    position: fixed
    top: 0
    z-index: 19
    background-color: #fff
  .productMenuBox.show
    display: block
  .productMenuBox.hide
    display: none
  .productMenuBox.twoNav
    top: 88px
    animation: menuDown .3s
  .productMenuBox.oneNav
    top: 0px
    animation: menuUp .3s
  .marketTop
    width 100vw
    max-width 100%
    position fixed
    top 0
    z-index 20
    .layout
      height 88px
      min-height 88px
  .marketTop.BGWhite
    background-color rgba(255, 255, 255, 1)
  .marketTop.show
    animation: navDown .3s
  .marketTop.hide
    top: -88px
    animation: navUp .3s
  .marketContent.oneNav
    padding-top 65px
    // top: 65px
  .marketContent.twoNav
    top: 153px
  .marketContent
    width 100vw
    max-width 100%
    min-height 100vh
    position absolute
    top 0
    z-index 10
  .overflow
    overflow hidden
    height 100vh
</style>
