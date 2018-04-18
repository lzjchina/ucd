<template>
  <q-layout
    ref="layout"
    :view="layoutStore.view"
    :left-breakpoint="layoutStore.leftBreakpoint"
    :right-breakpoint="layoutStore.rightBreakpoint"
    :reveal="layoutStore.reveal"
    class="search-layout search-box"
  >
    <div slot="header">
      <div class="heardTopbg" style="background: url(statics/search/images/banner/banner1.png) top center no-repeat; background-size: cover;">
        <div class="heardToptext">
          <span class="heardToptext-type">/ Accessories</span><br>
          <span class="heardToptext-name">Inspire wrist envy.</span>
        </div>
        <div class="heardTop-search-body">
          <q-search class="heardTop-search" value=''/>
        </div>
      </div>
    </div>
    <!-- 搜索导航条 -->
    <div
      class="navigation searchNavigation"
      slot="navigation"
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
              <div class="filter-clear" @click="clearType">Reset</div>
            </div>
          </div>
        </div>
        <div class="container-top">
          <div class="second-filter-title-right">
            <div class="second-filter-title-number">
              <span>{{filterOfferings.length}} Results</span>
            </div>
            <div class="second-filter-title-select">
              <span style="color:#666666">Sort by: </span>
              <q-select
                color="secondary"
                v-model="sortType"
                :options="options"
                @change="typeSelect"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="search-filter-Reset-hr"></div>
    </div>
    <!-- 搜索导航条 -->
    <q-scroll-area slot="left" style="width: 100%; height: 100%;">
      <div class="products-layout filterBox">
        <!-- 左边第1层 -->
        <div class="products-list-title">
          <span class="products-title flex">Products</span>
          <q-icon
            :name="filter.f1.name"
            @click="openFilter(filter.f1.state, 'f1')"
          />
        </div>
        <div class="filter-type column" v-if="!filter.f1.state">
          <ul class="column">
            <li 
              v-for="(item, index) in products" 
              :key="index" 
              @click="select('products', item[0])"
              v-bind:class="{'active':item[1]===true}"
            >{{item[0]}}</li>
          </ul>  
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第1层 end-->
        <!-- 左边第2层 -->
        <div class="products-list-title">
          <span class="products-title flex">Brand</span>
          <q-icon
            :name="filter.f2.name"
            @click="openFilter(filter.f2.state, 'f2')"
          />
        </div>
        <div class="filter-type column" v-if="!filter.f2.state">
          <ul class="column">
            <li
              v-for="(item, index) in brand"
              :key="index"
              @click="select('brand', item[0])"
              v-bind:class="{'active':item[1]===true}"
            >{{item[0]}}</li>
          </ul>
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第2层 end-->
        <!-- 左边第3层 -->
        <div class="filter-color">
          <div class="products-list-title">
            <span class="products-title flex">Color</span>
            <q-icon
             :name="filter.f3.name"
             @click="openFilter(filter.f3.state, 'f3')"
            />
          </div>
          <div class="select-color-body column" v-if="!filter.f3.state">
            <div class="flex">
              <div class="btn-border"
                v-for="(item, index) in color"
                :key="index"
                @click="select('color', item[0])"
                v-bind:class="{'active':item[1]===true}"
              >
                <q-btn
                  round
                  :color="item[0]"
                >
                <span
                >{{item[0]}}</span>
                </q-btn>
              </div>
            </div>
          </div>
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第3层 end-->
        <!-- 左边第4层 -->
        <div class="products-list-title">
          <span class="products-title flex">Memory</span>
          <q-icon
            :name="filter.f4.name"
            @click="openFilter(filter.f4.state, 'f4')"
          />
        </div>
        <div class="filter-memory column" v-if="!filter.f4.state">
          <div class="select-memory-body column">
            <ul class="column">
              <li
                v-for="(item, index) in memory"
                :key="index"
                @click="select('memory', item[0])"
                v-bind:class="{'active':item[1]===true}"
              >
                {{item[0]}} BG
               <!--  <q-icon name="ion-android-close" @click.stop="clearMemory" /> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第4层 end-->
        <!-- 左边第5层 -->
        <div class="products-list-title">
          <span class="products-title flex">Connection</span>
          <q-icon
            :name="filter.f5.name"
            @click="openFilter(filter.f5.state, 'f5')"
          />
        </div>
        <div class="filter-type column" v-if="!filter.f5.state">
          <ul class="column">
            <li 
              v-for="(item, index) in connection"
              :key="index" 
              @click="select('connection', item[0])"
              v-bind:class="{'active':item[1]===true}"
            >{{item[0]}}</li>
          </ul>
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第5层 end-->
        <!-- 左边第6层 -->
        <div class="products-list-title">
          <span class="products-title flex">Products Type</span>
          <q-icon
            :name="filter.f6.name"
            @click="openFilter(filter.f6.state, 'f6')"
          />
        </div>
        <div class="filter-type column" v-if="!filter.f6.state">
          <ul class="column">
            <li 
              v-for="(item, index) in productsType"
              :key="index" 
              @click="select('productsType', item[0])"
              v-bind:class="{'active':item[1]===true}"
              v-if="item[2] || more"
            >{{item[0]}}</li>
          </ul>
          <span @click="moreToggle" class="filter-type-more">More</span>  
        </div>
        <div class="search-left-hr"></div>
        <!-- 左边第6层 end-->
      </div>
    </q-scroll-area>
    <div class="container">
      <div class="search-offerings">
        <router-link
          class="offering BrightBlack"
          v-for="(item, index) in filterOfferings"
          :key="item.id"
          v-if="index<current*12&&index>=(current-1)*12"
          to="/Products"
          tag="a"
        >
        <q-transition
          appear
          enter="fadeIn"
          leave="fadeOut"
        >
          <div class="offering-box text-BrightBlack">
            <div class="offering-img">
              <img
                width="100%"
                :src="item.image"
                :title="item.name"
              >
            </div>
            <div class="offering-text">
              <p class="offering-name" :title="item.name">{{ item.name }}</p>
              <p class="offering-price">
                <span style="font-weight: bold;">${{ item.price }}</span><span style="opacity: 0.4;margin-left: 8px;" :title="item.type">{{ item.type }}</span>
              </p>
            </div>
          </div>
        </q-transition>
        </router-link>
      </div>
      <center class="no-tip" v-if="filterOfferings.length === 0">
        Sorry, the system has not found the relevant goods !
      </center>
      <div style="height: auto;display: flex; justify-content: center; margin-right: 20px; padding-top: 52px; padding-bottom: 135px">
        <r-pagination
          :total="filterOfferings.length"
          :display="display"
          :current.sync="current"
        />
      </div>
    </div>
  </q-layout>
</template>
<script>
import {
  QLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QScrollArea,
  QPagination,
  QChip,
  QSelect,
  QTransition
} from 'quasar'
import _ from 'lodash'
import layoutStore from './layout-store'
import searchBanner from 'data/search-banner.json'
import searchOfferings from 'data/offerings-data.json'
import RPagination from 'components/pagination'
export default {
  props: ['searchString'],
  components: {
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
    QScrollArea,
    QPagination,
    QChip,
    QSelect,
    QTransition,
    RPagination
  },
  data () {
    return {
      banner: searchBanner.data,
      offerings: searchOfferings.data,
      offeringsInit: searchOfferings.data,
      layoutStore: layoutStore,
      // page: 1,
      display: 12,
      current: 1,
      sortType: 'pop',
      more: false,
      searchName: this.$route.query.search,
      filter: {
        f1: {
          state: false,
          name: 'ion-close'
        },
        f2: {
          state: true,
          name: 'ion-plus'
        },
        f3: {
          state: true,
          name: 'ion-plus'
        },
        f4: {
          state: true,
          name: 'ion-plus'
        },
        f5: {
          state: true,
          name: 'ion-plus'
        },
        f6: {
          state: true,
          name: 'ion-plus'
        }
      },
      active: {
        products: [],
        brand: [],
        color: [],
        memory: [],
        connection: [],
        productsType: []
      },
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
      products: [
        ['Contract Phone', false],
        ['Phone', false],
        ['Accessories', false],
        ['Plans', false]
      ],
      brand: [
        ['Huawei', false],
        ['Others', false]
      ],
      color: [
        ['dark', false],
        ['white', false],
        ['deep-purple', false],
        ['blue', false],
        ['teal', false],
        ['cyan', false],
        ['green', false],
        ['light-green', false],
        ['yellow', false],
        ['amber', false],
        ['lime', false],
        ['pink', false],
        ['orange', false],
        ['red', false],
        ['purple', false]
      ],
      memory: [
        [16, false],
        [32, false],
        [64, false],
        [128, false],
        [256, false]
      ],
      connection: [
        ['Airplay', false],
        ['Bluetooth', false],
        ['Wireless', false]
      ],
      productsType: [
        ['All Cases', false, true],
        ['Cases & Covers', false, true],
        ['Headphones', false, true],
        ['Sperkers', false, true],
        ['Snap On Cases', false, true],
        ['Charges', false, true],
        ['Batteries', false, true],
        ['1', false, false],
        ['2', false, false],
        ['3', false, false],
        ['4', false, false],
        ['5', false, false],
        ['6', false, false],
        ['7', false, false]
      ]
    }
  },
  methods: {
    HotPageSub () {
      this.banner.select = this.banner.select - 2 < 0 ? 0 : this.banner.select - 2
    },
    HotPageAdd () {
      this.banner.select = this.banner.select + 2 >= this.banner.total ? this.banner.total - 2 : this.banner.select + 2
    },
    moreToggle () {
      this.more = !this.more
    },
    selectProducts (products) {
      this.active.products = products
      this.current = 1
    },
    clearType () {
      this.active.products = []
      this.active.brand = []
      this.active.color = []
      this.active.memory = []
      this.active.connection = []
      this.active.productsType = []
      for (var p = 0; p < this.products.length; p++) {
        this.products[p][1] = false
      }
      for (var b = 0; b < this.brand.length; b++) {
        this.brand[b][1] = false
      }
      for (var c = 0; c < this.color.length; c++) {
        this.color[c][1] = false
      }
      for (var m = 0; m < this.memory.length; m++) {
        this.memory[m][1] = false
      }
      for (var con = 0; con < this.connection.length; con++) {
        this.connection[con][1] = false
      }
      for (var pt = 0; pt < this.productsType.length; pt++) {
        this.productsType[pt][1] = false
      }
      this.current = 1
    },
    select (type, item) {
      console.log(type)
      console.log(item)
      switch (type) {
        case 'products':
          var productsFlag = true
          for (var P = 0; P < this.products.length; P++) {
            if (this.products[P][0] === item) {
              if (this.products[P][1]) {
                productsFlag = false
              }
              this.products[P][1] = !this.products[P][1]
            }
          }
          console.log(productsFlag)
          for (var p = 0; p < this.active.products.length; p++) {
            if (this.active.products[p] === item) {
              this.active.products.splice(p, 1)
              productsFlag = false
              break
            }
          }
          console.log(productsFlag)
          if (productsFlag) {
            this.active.products.push(item)
          }
          console.log(this.active.products)
          console.log(this.products)
          break
        case 'brand':
          var brandFlag = true
          for (var B = 0; B < this.brand.length; B++) {
            if (this.brand[B][0] === item) {
              if (this.brand[B][1]) {
                brandFlag = false
              }
              this.brand[B][1] = !this.brand[B][1]
            }
          }
          for (var b = 0; b < this.active.brand.length; b++) {
            if (this.active.brand[b] === item) {
              this.active.brand.splice(b, 1)
              brandFlag = false
              break
            }
          }
          if (brandFlag) {
            this.active.brand.push(item)
          }
          console.log(this.active.brand)
          break
        case 'color':
          var colorFlag = true
          for (var C = 0; C < this.color.length; C++) {
            if (this.color[C][0] === item) {
              if (this.color[C][1]) {
                colorFlag = false
              }
              this.color[C][1] = !this.color[C][1]
            }
          }
          for (var c = 0; c < this.active.color.length; c++) {
            if (this.active.color[c] === item) {
              this.active.color.splice(c, 1)
              colorFlag = false
              break
            }
          }
          if (colorFlag) {
            this.active.color.push(item)
          }
          console.log(this.active.color)
          break
        case 'memory':
          var memoryFlag = true
          for (var M = 0; M < this.memory.length; M++) {
            if (this.memory[M][0] === item) {
              if (this.memory[M][1]) {
                memoryFlag = false
              }
              this.memory[M][1] = !this.memory[M][1]
            }
          }
          for (var m = 0; m < this.active.memory.length; m++) {
            if (this.active.memory[m] === item) {
              this.active.memory.splice(m, 1)
              memoryFlag = false
              break
            }
          }
          if (memoryFlag) {
            this.active.memory.push(item)
          }
          console.log(this.active.memory)
          break
        case 'connection':
          var connectionFlag = true
          for (var CON = 0; CON < this.connection.length; CON++) {
            if (this.connection[CON][0] === item) {
              if (this.connection[CON][1]) {
                connectionFlag = false
              }
              this.connection[CON][1] = !this.connection[CON][1]
            }
          }
          for (var con = 0; con < this.active.connection.length; con++) {
            if (this.active.connection[con] === item) {
              this.active.connection.splice(con, 1)
              connectionFlag = false
              break
            }
          }
          if (connectionFlag) {
            this.active.connection.push(item)
          }
          console.log(this.active.connection)
          break
        case 'productsType':
          var productsTypeFlag = true
          for (var PT = 0; PT < this.productsType.length; PT++) {
            if (this.productsType[PT][0] === item) {
              if (this.productsType[PT][1]) {
                productsTypeFlag = false
              }
              this.productsType[PT][1] = !this.productsType[PT][1]
            }
          }
          for (var pt = 0; pt < this.active.productsType.length; pt++) {
            if (this.active.productsType[pt] === item) {
              this.active.productsType.splice(pt, 1)
              productsTypeFlag = false
              break
            }
          }
          if (productsTypeFlag) {
            this.active.productsType.push(item)
          }
          console.log(this.active.productsType)
          break
        default:
      }
    },
    pagechange: function (p) {
      this.current = p
      // console.log('pagechange', p)
    },
    typeSelect: function (p) {
      this.current = 1
    },
    openFilter (state, key) {
      if (state) {
        this.filter[key].state = false
        this.filter[key].name = 'ion-close'
      }
      else {
        this.filter[key].state = true
        this.filter[key].name = 'ion-plus'
      }
    },
    filterSwitch () {
      if (this.layoutStore.leftBreakpoint === 996) {
        this.layoutStore.leftBreakpoint = 10000
      }
      else if (this.layoutStore.leftBreakpoint === 10000) {
        this.layoutStore.leftBreakpoint = 996
      }
    }
  },
  created () {
    this.$root.eventHub.$on('pagechange', (target) => {
      this.pagechange(target)
    })
  },
  mounted () {
    this.socket.$on('toSearchTypeReset', function () {
      // this.active.products = []
      // this.active.brand = []
      // this.active.color = []
      // this.active.memory = []
      // this.active.connection = []
      // this.active.productsType = []
      // this.current = 1
      this.clearType()
    }.bind(this))
    this.socket.$on('toSearchSortTypeSelect', function (type) {
      this.sortType = type
    }.bind(this))
    this.socket.$on('toSearchFilterSwitch', function () {
      this.filterSwitch()
    }.bind(this))
  },
  computed: {
    filterOfferings: function () {
      var _data = []
      // 获取数据
      if (this.active.products.length || this.active.brand.length || this.active.color.length || this.active.memory.length || this.active.connection.length || this.active.productsType.length) {
        if (this.active.products.length !== 0) {
          for (var p = 0; p < this.active.products.length; p++) {
            var _products = this.active.products[p]
            var _productsData = this.offerings.filter(function (item) {
              console.log(item)
              return item.products === _products
            })
            _data = _data.concat(_productsData)
          }
        }
        if (this.active.brand.length !== 0) {
          for (var b = 0; b < this.active.brand.length; b++) {
            var _brand = this.active.brand[b]
            var _brandData = this.offerings.filter(function (item) {
              console.log(item)
              return item.brand === _brand
            })
            _data = _data.concat(_brandData)
          }
        }
        if (this.active.color.length !== 0) {
          for (var c = 0; c < this.active.color.length; c++) {
            var _color = this.active.color[c]
            var _colorData = this.offerings.filter(function (item) {
              console.log(item)
              return item.color === _color
            })
            _data = _data.concat(_colorData)
          }
        }
        if (this.active.memory.length !== 0) {
          for (var m = 0; m < this.active.memory.length; m++) {
            var _memory = this.active.memory[m]
            var _memoryData = this.offerings.filter(function (item) {
              console.log(item)
              return item.memory === _memory
            })
            _data = _data.concat(_memoryData)
          }
        }
        if (this.active.connection.length !== 0) {
          for (var con = 0; con < this.active.connection.length; con++) {
            var _connection = this.active.connection[con]
            var _connectionData = this.offerings.filter(function (item) {
              console.log(item)
              return item.connection === _connection
            })
            _data = _data.concat(_connectionData)
          }
        }
        if (this.active.productsType.length !== 0) {
          for (var pT = 0; pT < this.active.productsType.length; pT++) {
            var _productsType = this.active.productsType[pT]
            var _productsTypeData = this.offerings.filter(function (item) {
              console.log(item)
              return item.productsType === _productsType
            })
            _data = _data.concat(_productsTypeData)
          }
        }
        // 去重复
        var _data2 = []
        for (var d1 = 0; d1 < _data.length; d1++) {
          if (_data2.length === 0) {
            _data2.push(_data[d1])
          }
          else {
            var repeatFlag = false
            for (var d2 = 0; d2 < _data2.length; d2++) {
              if (_data[d1].id === _data[d2].id) {
                repeatFlag = true
                break
              }
            }
            if (!repeatFlag) {
              _data2.push(_data[d1])
            }
          }
        }
        _data = _data2
      }
      else {
        _data = this.offerings
      }
      // 排序
      if (this.sortType === 'low') _data = _.orderBy(_data, 'price', 'asc')
      else if (this.sortType === 'high') _data = _.orderBy(_data, 'price', 'desc')
      else if (this.sortType === 'shelfTime') _data = _.orderBy(_data, 'shelfTime', 'desc')
      else _data = _.orderBy(_data, this.sortType)
      this.socket.$emit('toIndexSearchChange', _data.length)
      // this.socket.$emit('toIndexClick')
      return _data
    }
  },
  watch: {
    searchString: {
      handler (curVal, oldVal) {
        if (this.$route.query.search !== '' && this.$route.query.search !== null && this.$route.query.search !== undefined) {
          this.current = 1
          // console.log(this.offeringsInit)
          var offerings = this.offeringsInit.filter(function (item) {
            return Object.keys(item).some(function (key) {
              // console.log(item[key])
              return String(item['name']).toLowerCase().indexOf(curVal.toLowerCase()) > -1
            })
          })
          this.offerings = offerings
        }
        else this.offerings = this.offeringsInit
      },
      deep: true
    }
  }
}
</script>
<style lang="stylus">
.q-popover
  box-shadow 0 0 0 white
  border 1px solid #b2b2b2
  .q-list
    padding 0
    .q-item
      padding 0 16px
      min-height 32px
      min-width 140px
      background #fff
    .q-item.active
      background rgba(0, 0, 0, 0)
      color #b2b2b2
    .q-item-label
      font-size 14px
      border-bottom 1px solid #e5e5e5
      line-height 2.6
      &:hover
        color #b2b2b2
      &:active
        color #b2b2b2
.search-box
  width 100%
  position absolute
  .q-ripple-container
    display none !important
  .navigation
    width 100%
    display flex
    justify-content center
    align-items center
    flex-direction column
  .move
    width 100%
    display flex
    justify-content flex-start
    align-items center
  .products-layout-top
    height 64px
    margin-left 32px
    .search-filter-Reset
      height 63px
  .container-top
    height 64px
    margin-right 32px
    margin-left 16px
    // padding-right 16px
    width 83.4%
    .material-icons
      color rgba(0, 0, 0, 0)
      background url('~statics/search/images/new/down.png') top center no-repeat
      height 7px
    .q-if-focused
      .material-icons
        color rgba(0, 0, 0, 0)
        background url('~statics/search/images/new/down.png') top center no-repeat
        height 7px
        transform scale(1,-1)
    .second-filter-title-right
      height 63px
  .layout-header
    box-shadow none
    transform: translateY(0px)
  .layout-page-container.transition-generic
    padding-top 0 !important
  .q-item
     font-size calc(14/1920*100vw)
  .layout-page
   overflow visible
  .layout-aside.fixed.on-layout
    box-shadow none
  .heardTopbg
    position relative
    display flex
    height calc(318/1920*100vw)
    flex-direction column
    justify-content center
    align-items center
    .heardToptext
      line-height 1.6
      .heardToptext-type
       color #666666
       font-size calc(24/1920*100vw)
      .heardToptext-name
       color #252525
       font-size calc(34/1920*100vw)
       font-weight bold
  .heardTop-search-body
    width 100%
    display flex
    flex-direction column
    justify-content center
    align-items center
    .q-if:before
      height 0px
    .q-if
        .q-if-control-before
          background url('~statics/images/Homepage/search.png') top center no-repeat
          color rgba(255,255,255,0)
          width 20px
          height 20px
        .q-if-control
          font-size 17px
          margin-right 8px
  .heardTop-search
    width calc(338/1920*100vw)
    height calc(48/1920*100vw)
    border 1px solid #e5e5e5
    color #252525
    background #fff
    min-width 240px
    min-height 38px
  .q-if
    display flex
    padding 0
    padding-left 10px
    box-shadow 0 0 0 white
  .text-primary
    color white !important
  .layout-aside-left
    width 262px
  .products-layout
    margin 0 28px
    padding 0 0 0 28px
    .q-icon
      width 10px
      height 10px
      font-size 12px
      color #b2b2b2
      &.ion-close
        background url('~statics/images/Homepage/close.png') top center no-repeat
      &.ion-plus
        background url('~statics/images/Homepage/open.png') top center no-repeat
      &::before
        display none
    .products-list-title
      display flex
      justify-content space-between
      align-items center
    .products-title
      margin 0
      font-size 14px
      font-weight bold
      color #252525
      padding 16px 0
    .products-open-img
      padding 0 32px 0 0
  .filter-type-more
    color #6abcfc
    font-size 14px
    padding 8px 0
    cursor pointer
  .filter-type1
    display flex
    ul
      padding 0
      font-size calc(14/1920*100vw)
      li
        opacity: 0.4
        padding 8px 0
        color #252525
        cursor pointer
        list-style-type none
        background #fff
        padding 6px 0 6px 16px
        margin-left -16px
        margin-bottom 8px
        &:hover
          opacity: 1
          color #6dd6a9
          background #f9f9f9
        &.active
          opacity: 1l
          color #6dd6a9
          background #f9f9f9
  .filter-type
    display flex
    ul
      padding 0
      font-size calc(14/1920*100vw)
      .active
        opacity: 1
      li
        opacity: 0.4
        padding 8px 0
        color #252525
        cursor pointer
        list-style-type none
  .second-filter-title
    width calc(100% - 72px)
    min-height auto
    margin 20px 36px 0
    display flex
    justify-content flex-start
    align-items center
  .second-filter-title-right
    margin 0 16px 0 0
    display flex
    justify-content space-between
    align-items center
    .second-filter-title-number
      font-size 14px
      color #666666
      display flex
    .second-filter-title-select
      font-size 14px
      color #666666
      display flex
      align-items center
      // padding-right 16px
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
  .q-list
    padding 0
  .q-item-main
    font-size calc(14/1920*100vw)  
  .second-filter-title-left
    width 100%
  .search-filter-Reset
    width 262px
    display flex
    justify-content flex-start
    align-items center
    .filter-filter
      font-size 14px
      width 80px
      border-right 1px solid #e5e5e5
      margin 0 0 0 28px
    .filter-clear
      width 80px
      color #6abcfc
      margin-left 16px
      span
        text-transform none
        justify-content flex-start
        font-size 14px
    .q-btn
      box-shadow 0 0 0 white
      .q-hoverable
        background transparent
  .search-filter-Reset-hr
    width 96%
    height 1px
    background #e5e5e5
    margin-bottom 1.4%
    margin-top -10px
  .search-left-hr
      background #e5e5e5
      width 110%
      height 1px
      margin 16px 0 16px -16%
  .select-color-body
      width 170px
  .filter-color
    .products-title
      padding 16px 0
    .select-color-title
      padding 24px 0
      color #666
    .select-color-body
      .btn-border:hover
        span
          display flex
          color #666666
          font-size 12px
          margin-top 16px
          text-transform capitalize
      .btn-border.active
        span
          display flex
          color #666666
          font-size 12px
          margin-top 16px
          text-transform capitalize
      .btn-border
        width 32px
        height 32px
        border-radius 50px
        border 1px solid #fff
        display flex
        justify-content center
        align-items center
        margin 18px 6px
        span
          display none
        &:hover
          border 1px solid #e7e7e7
        &.active
          border 1px solid #7bdab1
        &:nth-child(1)
          margin-left 0
        &:nth-child(5)
          margin-left 0
        &:nth-child(6)
          .q-btn-standard
            background url('~statics/search/images/new/multi.png') !important
        &:nth-child(9)
          margin-left 0
        &:nth-child(13)
          margin-left 0
        &:nth-child(17)
          margin-left 0
        &:nth-child(21)
          margin-left 0
        &:nth-child(25)
          margin-left 0
      .q-btn-round.q-btn-standard
        width 24px
        height 24px
        min-height 24px
        font-size 24px !important
        box-shadow 0px 1px 2px #8d8d8d inset
  .filter-memory
      ul
        padding 0
        font-size calc(14/1920*100vw)
      .active
        opacity: 1
      li
        opacity: 0.4
        padding 8px 0
        color #252525
        cursor pointer
        list-style-type none
    .select-memory-title
      padding 12px 0
      color #666
    .q-btn-standard
      margin 8px 0
      width 93px
      height 30px
      border-radius 15px
      color #b2b2b2
      border: 1px solid #f5f5f5
      justify-content space-between
      &:hover
        color #252525
        border: 1px solid #e5e5e5
    .q-hoverable:hover .q-focus-helper
      opacity 0
    .q-focusable:focus .q-focus-helper
      opacity 0
    .q-icon
      font-size 14px
      color #b8b8b8
      margin-left 4px
      &:hover
        color #252525
    .active
      color #252525
      &:hover
        color #252525
      .q-icon
        display flex   
  .search-layout
    // width calc(100% - 72px)
    width 100%
    min-height 100vh
    // margin 20px 36px 0
    position relative
    .layout
      min-height auto
    .layout-page
      min-height auto !important
    .container
      height 100%
      width 100%
      .search-hot
        display flex
        flex-direction column
  .hot-top
    margin 0 28px
    padding 20px 0
    display flex
    justify-content space-between
    font-size 12px
    .hot-left
      display flex
      align-items center
      span
        margin-right 16px
      .q-if
        padding 0
        margin 0
    .hot-right
      display flex
      align-items center
      span
        padding 0 12px
      .btn
        opacity 0.4
        margin 0 12px
        cursor pointer
      .active
        opacity 1
      i:last-child
        margin-right 0
  .hot-main
    display flex
    justify-content space-between
    .hot-image
      padding 0 28px
   
  .search-offerings
    margin 0 32px 0
    display flex
    flex-wrap wrap
    .offering
      width 25%
      display flex
      .offering-box
        // margin calc(16/1920*100vw)
        margin 12px 16px
        display flex
        flex-direction column
        align-items center
        width 100%
        border 1px solid #e5e5e5
        &:hover
          border 2px solid #252525
        &.active
          border 2px solid #252525
        .offering-text
          width 100%
          display flex
          align-items center
          flex-direction column
          margin-bottom calc(56/1920*100vw)
          .offering-name
            width 100%
            font-size calc(18/1920*100vw)
            margin 8px 0 0
            text-align center
            text-overflow ellipsis
            white-space nowrap
            overflow hidden
          .offering-price
            width 100%
            font-size calc(16/1920*100vw)
            margin 0
            display flex
            align-items center
            justify-content center
            & > span:last-child
              max-width 100%
              text-overflow ellipsis
              white-space nowrap
              overflow hidden
  .q-icon, .material-icons
    cursor pointer
  .no-tip
    margin-top 28px
    color #252525
    opacity 0.4
  .text-BrightBlack
    color #252525
  .bg-BrightBlack
    background #252525
  ul
    margin 0
    padding 0
    li
      list-style none
.q-popover
  left calc(100vw - 208px) !important
</style>