<template>
  <q-layout
    ref="layout"
    view="lHh lpr fFf"
    :right-breakpoint="1100"
  >
      <div class="MyCommerce main">
        <div class="user">
          <div class="information">
            <div class="img"><img src="statics/MyCommerce/user.png" /></div>
            <div class="detail">
              <div class="name">Sample Userid<span class="level">LV5</span></div>
              <div class="phone">18688680088</div>
              <div class="EXP">
                <div class="nowEXP">
                </div>
              </div>
            </div>
            <div class="horizon"></div>
            <div class="renewal">
              <div class="dot"></div>
              <div class="type">Renewal</div>
              <div class="number">198</div>
              <div class="unit">Bundle</div>
              <div class="expiryDate">Expiry Date:</div>
              <div class="date">2018/04/01</div>
            </div>
          </div>
          <div class="balance">
            <div class="recharge">
              <div class="block"></div>
              <img src="statics/MyCommerce/ico_Shape1.png" />
              <div class="block"></div>
              <span>Recharge Blance<br /><strong>$100</strong></span>
              <div class="block"></div>
            </div>
            <div class="horizon"></div>
            <div class="promotional">
              <div class="block"></div>
              <img src="statics/MyCommerce/ico_Shape3.png" />
              <div class="block"></div>
              <span>Promotional Blance<br /><strong>$100</strong></span>
              <div class="block"></div>
            </div>
            <div class="horizon"></div>
            <div class="cash">
              <div class="block"></div>
              <img src="statics/MyCommerce/ico_Shape2.png" />
              <div class="block"></div>
              <span>Cash Coupon<br /><strong>$100</strong></span>
              <div class="block"></div>
            </div>
          </div>
        </div>
        <div class="order">
          <div class="title"><strong>Uncompleted Order</strong><span>View All Orders</span></div>
          <div class="orderItem">
            <div class="head">
              <div class="item1-left">
              <span class="item1-title1">Created At: </span><span class="item1-data">2018/03/08 05:39:00</span>
              </div>
              <div class="item1-left">
              <span class="item1-title1">Order ID: </span><span class="item1-data">100001600000003</span>
               </div>
              <div class="item1-online">
              <img src="~statics/MyCommerce/ico_Online.png" style="display: inline-block; vertical-align: middle; width: calc(20/1920*100vw); height: calc(20/1920*100vw); margin-right:4px " ><span class="item1-data">Online</span>
              </div>
              <div class="item1-cancel">
              <img src="~statics/MyCommerce/ico_Remove.png" style="display: inline-block; vertical-align: middle; width: calc(20/1920*100vw); height:calc(20/1920*100vw); margin-right:4px "><span class="item1-delete">Cancel</span>
              </div>
            </div>
            <div class="body">
              <div class="first-table-td">
                <div class="item-product">
                    <div class="item2-img">
                     <img src="~statics/phone.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px; margin-right:4px ">     
                    </div>
                    <div class="item-font">
                      <div class="item2-text">
                        <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                        <span class="item2-data">Memory: 256 GB</span><br>
                        <span class="item2-data">Primary: 198 Bundle</span><br>
                        <span class="item2-data">Color: Space gray</span>
                      </div>
                      <div class="item2-text2">
                        <span class="item2-Upfront">Upfront Price</span><br>
                        <span class="item2-price">$1149.00</span>
                      </div>
                      <div class="item2-text3">
                        <span class="item2-Upfront">Monthly Fee</span><br>
                        <span class="item2-price">$198.00</span>
                      </div>
                      <div class="item2-text4">
                        <span class="item2-Number">× 1</span>
                      </div>
                    </div>
                </div>
                <div class="item-product">
                    <div class="item2-img">
                     <img src="~statics/phone2.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px; margin-right:4px ">     
                    </div>
                    <div class="item-font">
                      <div class="item2-text">
                        <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                        <span class="item2-data">Memory: 256 GB</span><br>
                        <span class="item2-data">Primary: 198 Bundle</span><br>
                        <span class="item2-data">Color: Space gray</span>
                      </div>
                      <div class="item2-text2">
                        <span class="item2-Upfront">Upfront Price</span><br>
                        <span class="item2-price">$1149.00</span>
                      </div>
                      <div class="item2-text3">
                        <span class="item2-Upfront">Monthly Fee</span><br>
                        <span class="item2-price">$198.00</span>
                      </div>
                      <div class="item2-text4">
                        <span class="item2-Number">× 1</span>
                      </div>
                    </div>
                </div>
                <div class="item-product">
                    <div class="item2-img">
                     <img src="~statics/phone3.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px; margin-right:4px ">     
                    </div>
                    <div class="item-font">
                      <div class="item2-text">
                        <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                        <span class="item2-data">Memory: 256 GB</span><br>
                        <span class="item2-data">Primary: 198 Bundle</span><br>
                        <span class="item2-data">Color: Space gray</span>
                      </div>
                      <div class="item2-text2">
                        <span class="item2-Upfront">Upfront Price</span><br>
                        <span class="item2-price">$1149.00</span>
                      </div>
                      <div class="item2-text3">
                        <span class="item2-Upfront">Monthly Fee</span><br>
                        <span class="item2-price">$198.00</span>
                      </div>
                      <div class="item2-text4">
                        <span class="item2-Number">× 1</span>
                      </div>
                    </div>
                </div>
              </div>
              <div class="second-table-td">
                   <div class="total-price">
                      <span class="total-price-text">Upfront Price</span><br>
                      <span class="total-price-price">$1149.00</span>
                   </div>
              </div> 
              <div class="test"></div>
               <div class="third-table-td">
                 <div class="third-payment">
                    <span class="third-payment-text">Waiting for payment</span><br>
                    <q-btn class="third-payment-btn">Pay Now</q-btn><br>
                    <span class="third-payment-view">view</span>
                 </div>
              </div>
            </div>
          </div>
          <div class="orderItem">
            <div class="head">
              <div class="item1-left">
              <span class="item1-title1">Created At: </span><span class="item1-data">2018/03/08 05:39:00</span>
              </div>
              <div class="item1-left">
              <span class="item1-title1">Order ID: </span><span class="item1-data">100001600000003</span>
               </div>
              <div class="item1-online">
              <img src="~statics/MyCommerce/ico_Online.png" style="display: inline-block; vertical-align: middle; width: calc(20/1920*100vw); height: calc(20/1920*100vw); margin-right:4px " ><span class="item1-data">Online</span>
              </div>
              <div class="item1-cancel">
              <img src="~statics/MyCommerce/ico_Remove.png" style="display: inline-block; vertical-align: middle; width: calc(20/1920*100vw); height:calc(20/1920*100vw); margin-right:4px "><span class="item1-delete">Cancel</span>
              </div>
            </div>
            <div class="body">
              <div class="first-table-td">
                <div class="item-product">
                    <div class="item2-img">
                     <img src="~statics/phone.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px; margin-right:4px ">     
                    </div>
                    <div class="item-font">
                      <div class="item2-text">
                        <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                        <span class="item2-data">Memory: 256 GB</span><br>
                        <span class="item2-data">Primary: 198 Bundle</span><br>
                        <span class="item2-data">Color: Space gray</span>
                      </div>
                      <div class="item2-text2">
                        <span class="item2-Upfront">Upfront Price</span><br>
                        <span class="item2-price">$1149.00</span>
                      </div>
                      <div class="item2-text3">
                        <span class="item2-Upfront">Monthly Fee</span><br>
                        <span class="item2-price">$198.00</span>
                      </div>
                      <div class="item2-text4">
                        <span class="item2-Number">× 1</span>
                      </div>
                    </div>
                </div>
                <div class="item-product">
                    <div class="item2-img">
                     <img src="~statics/phone2.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px; margin-right:4px ">     
                    </div>
                    <div class="item-font">
                      <div class="item2-text">
                        <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                        <span class="item2-data">Memory: 256 GB</span><br>
                        <span class="item2-data">Primary: 198 Bundle</span><br>
                        <span class="item2-data">Color: Space gray</span>
                      </div>
                      <div class="item2-text2">
                        <span class="item2-Upfront">Upfront Price</span><br>
                        <span class="item2-price">$1149.00</span>
                      </div>
                      <div class="item2-text3">
                        <span class="item2-Upfront">Monthly Fee</span><br>
                        <span class="item2-price">$198.00</span>
                      </div>
                      <div class="item2-text4">
                        <span class="item2-Number">× 1</span>
                      </div>
                    </div>
                </div>
                <div class="item-product">
                    <div class="item2-img">
                     <img src="~statics/phone3.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px; margin-right:4px ">     
                    </div>
                    <div class="item-font">
                      <div class="item2-text">
                        <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                        <span class="item2-data">Memory: 256 GB</span><br>
                        <span class="item2-data">Primary: 198 Bundle</span><br>
                        <span class="item2-data">Color: Space gray</span>
                      </div>
                      <div class="item2-text2">
                        <span class="item2-Upfront">Upfront Price</span><br>
                        <span class="item2-price">$1149.00</span>
                      </div>
                      <div class="item2-text3">
                        <span class="item2-Upfront">Monthly Fee</span><br>
                        <span class="item2-price">$198.00</span>
                      </div>
                      <div class="item2-text4">
                        <span class="item2-Number">× 1</span>
                      </div>
                    </div>
                </div>
              </div>
              <div class="second-table-td">
                   <div class="total-price">
                      <span class="total-price-text">Upfront Price</span><br>
                      <span class="total-price-price">$1149.00</span>
                   </div>
              </div> 
              <div class="test"></div>
               <div class="third-table-td">
                 <div class="third-payment">
                    <span class="third-payment-text">Waiting for payment</span><br>
                    <q-btn class="third-payment-btn">Pay Now</q-btn><br>
                    <span class="third-payment-view">view</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
        <div class="search-hot">
          <div class="hot-top">
            <div class="hot-left">
              <span>Recommendation</span>
            </div>
            <div class="hot-right">
              <span class="text">{{ parseInt(banner.select)/4+1 }} / {{ Math.ceil(parseInt(banner.total)/4) }}</span>
              <div
                class="hot-right-btn-left"
                v-bind:class="{ 'active':parseInt(banner.select)/2+1!=1 }"
                @click="HotPageSub" >
              <q-icon
                class="btn btn-left"
                name="ion-ios-arrow-left"
                />
              </div>
              <div
                class="hot-right-btn-right"
                v-bind:class="{ 'active':parseInt(banner.select)/2+1<Math.ceil(parseInt(banner.total)/2) }"
                @click="HotPageAdd">
              <q-icon
                class="btn btn-right"
                name="ion-ios-arrow-right"
                 />
              </div>
            </div>
          </div>
          <div class="hot-main">
            <router-link
              class="hot-box"
              v-for="(item, index) in banner.items"
              :key="item.id"
              v-show="index==parseInt(banner.select)||index==parseInt(banner.select)+1||index==parseInt(banner.select)+2||index==parseInt(banner.select)+3||index==parseInt(banner.select)+4"
              to="/"
              tag="a"
            >
              <q-transition
                appear
                enter="fadeInRight"
                leave="fadeOutLeft"
              >
                <div class="offering-box text-BrightBlack">
                  <div class="offering-img">
                    <img
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
        </div>
      </div>
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
  QField,
  QTransition
} from 'quasar'
import Recommendation from 'data/Recommendation.json'
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
    QField,
    QTransition
  },
  data () {
    return {
      banner: Recommendation.data,
      user: {
        name: 'Sample Userid',
        level: 5,
        phone: 18688680088,
        exp: 40
      },
      renewal: {
        type: 'Renewal',
        number: 198,
        unit: 'Bundle',
        date: '2018/04/01'
      },
      balance: {
        recharge: 100,
        promotional: 200,
        cash: 300
      },
      order: [
        {
          created: '2018/03/08 05:39:00',
          id: 100001600000003,
          goods: [
            {
              imgUrl: 'statics/phone.png',
              name: 'Apple iPhone X + 198 Bundle',
              detail1: 'Memory: 256 GB',
              detail2: 'Primary: 198 Bundle',
              detail3: 'Color: Space gray',
              upfront: 1149.00,
              monthly: 198.00,
              number: 1
            },
            {
              imgUrl: 'statics/phone2.png',
              name: 'Apple iPhone X',
              detail1: 'Memory: 128 GB',
              detail2: 'Primary: 198 Bundle',
              detail3: 'Color: Space gray',
              upfront: 1149.00,
              monthly: 198.00,
              number: 1
            },
            {
              imgUrl: 'statics/phone3.png',
              name: '198 Bundle',
              detail1: 'Memory: 64 GB',
              detail2: 'Primary: 198 Bundle',
              detail3: 'Color: Space gray',
              upfront: 1149.00,
              monthly: 198.00,
              number: 1
            }
          ]
        }
      ]
    }
  },
  methods: {
    HotPageSub () {
      this.banner.select = this.banner.select - 4 < 0 ? 0 : this.banner.select - 4
    },
    HotPageAdd () {
      console.log(this.banner.select)
      this.banner.select = this.banner.select + 4 >= this.banner.total ? this.banner.total - 4 : this.banner.select + 4
    }
  }
}
</script>
<style lang="stylus">
  .MyCommerce.main
    display flex
    justify-content center
    flex-direction column
    width calc(1516/1920*100vw)
    padding 1.4% 0 0 2%
    .user
      margin-bottom 30px
      display flex
      >div
        border 1px solid #c5c5c5
        padding 15px 0px
      .information
        max-width 660px
        flex-grow 6
        flex-shrink 6
        margin-right 12px
        display flex
        >div
          flex-grow 1
          flex-shrink 1
        .img
          flex-grow 0
          flex-shrink 0
          margin 22px 25px
          width 85px
          height 85px
          border-radius 50%
          overflow hidden
          img
            width 85px
            height 85px
        .detail
          max-width: 240px
          min-width: 120px
          padding-top 40px
          font-size 12px
          .name
            height 18px
            font-weight bold
            span
              display inline-block
              margin-left 10px
              background-color #000
              border-radius 3px
              color #fff
              padding 0 4px
          .phone
            color #c5c5c5
            line-height 28px
          .EXP
            margin-top: 5px
            position relative
            background-color #f5f5f5
            height 12px
            width: 80%
            border-radius 6px
            .nowEXP
              background-color #69d7a8
              height 12px
              width: 40%
              border-radius 6px
        .horizon
          height 100%
          border-right 1px solid #c5c5c5
          flex-grow 0
          flex-shrink 0
        .renewal
          position relative
          flex-grow 0
          flex-shrink 0
          width 258px
          height 124px
          margin 2px 10px
          background url("~statics/MyCommerce/bg_Renewal.png") 100% 100% / auto auto no-repeat
          .dot
            position absolute
            top 15px
            left 170px
            width 8px
            height 8px
            background-color #ffbaff
            border-radius 50%
          .type
            position absolute
            top 12px
            left 185px
            height 14px
            line-height 14px
            color #252525
            font-weight bold
            font-size 14px
          .number
            position absolute
            top 25px
            left 20px
            height 26px
            line-height 26px
            color #fff
            font-weight bold
            font-size 26px
          .unit
            position absolute
            top 64px
            left 24px
            height 12px
            line-height 12px
            color #fff
            font-weight bold
            font-size 12px
          .expiryDate
            position absolute
            top 100px
            left 24px
            height 10px
            line-height 10px
            color #50cfff
            font-size 10px
          .date
            position absolute
            top 100px
            left 90px
            height 10px
            line-height 10px
            color #fff
            font-size 10px
      .balance
        flex-grow 8
        flex-shrink 8
        display flex
        >.recharge,
        >.promotional,
        >.cash
          flex-grow 1
          flex-shrink 1
          margin 39px auto
          height 50px
          display flex
          >img
            flex-grow 0
            flex-shrink 0
            width 50px
            height 50px
          >span
            display block
            width 120px
            flex-grow 0
            flex-shrink 0
            font-size: 12px
            color #c5c5c5
            >strong
              font-size 18px
              font-weight bold
              line-height 42px
              color #000
          >div
            flex-grow 1
            flex-shrink 1
        >.horizon
          margin 0px
          padding 0px
          height 130px
          width 0px
          flex-grow 0
          flex-shrink 0
          border-right 1px solid #c5c5c5
    .search-hot
      display flex
      flex-direction column
      .hot-top
        padding 20px 0
        display flex
        justify-content space-between
        font-size 12px
        .hot-left
          display flex
          align-items center
          span
             font-size calc(24/1920*100vw)
             font-weight bold
          .q-if
            padding 0
            margin 0
        .hot-right
          display flex
          align-items center
          .hot-right-btn-left
            width calc(36/1920*100vw)
            height calc(36/1920*100vw)
            background #252525
            border-radius 50px
            color #fff
            display flex
            align-items center
            justify-content center
            margin-right calc(20/1920*100vw)
            font-size calc(14/1920*100vw)
            min-width 24px
            min-height 24px
            opacity 0.5
            &.active
              opacity 1
            &:hover
              opacity 1
          .hot-right-btn-right
            width calc(36/1920*100vw)
            height calc(36/1920*100vw)
            background #252525
            border-radius 50px
            color #fff
            display flex
            align-items center
            justify-content center
            font-size calc(14/1920*100vw)
            min-width 24px
            min-height 24px
            &.active
              opacity 1
            &:hover
              opacity 1
          span
            padding 0 12px
            display none
      .hot-main
        width 100%
        display flex
        justify-content flex-start
        align-items center
        margin 0 0 6% 0
        .hot-box:hover
          border 1px solid #252525
        .hot-box
          display inline-block
          float left
          height 100%
          border 1px solid #e5e5e5
          margin-right calc(32/1920*100vw)
          .offering-box
            display flex
            flex-direction column
            align-items center
            justify-content flex-start
            width 100%
            .offering-img
              width calc(270/1920*100vw)
              display flex
              justify-content center
              align-items flex-start
              img
                width 100%
            .offering-text
              margin: 4% 2% 10% 2%;
              width 100%
              display flex
              align-items center
              flex-direction column
              .offering-name
                width 100%
                font-size calc(18/1920*100vw)
                color #252525
                text-align center
                font-weight bold
              .offering-price
                width 100%
                font-size calc(16/1920*100vw)
                color #252525
                margin 0
                display flex
                align-items center
                justify-content center
              p
                letter-spacing 0
                margin 0
                line-height 2
                padding 0
    .layout-page
      flex-direction: column
      .layout
        position relative !important
    .layout-page-container
      padding-right: 64px
    .q-tabs-panes
      width calc(338/1920*100vw)
    .myorder-search
      width calc(338/1920*100vw)
      height calc(48/1920*100vw)
      border 1px solid #e5e5e5
      color #e5e5e5
      font-size calc(16/1920*100vw)
    .q-toolbar-title
      display flex
      justify-content center
      align-items flex-start
      width 100%
      flex-wrap wrap
    .payment-header
      background #fff
      width 100%
      display flex
      justify-content center
    .payment-method
      width 88%
      .payment-font
        color #2c2c2c
        font-size calc(24/1920*100vw)
    .payment-hr
      height 1px
      background #eaeaea
      width 90%
      margin 1% 0 0 0
    .layout-aside-left
      width calc(318/1920*100vw)
    .q-item.active,
    .q-item.router-link-active,
    .q-item:focus 
      background rgba(0,0,0,0)
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
    .q-tab-label
      opacity 1.0
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
    .order
      display flex
      justify-content center
      flex-direction column
      width 100%
      border 1px solid #e5e5e5
    .title
      height 46px
      line-height 46px
      width 100%
      border-bottom 1px solid #e5e5e5
      padding-left 3%
      padding-right 3%
      font-size 14px
      background-color #f9f9f9
      display flex
      justify-content space-between
      strong
        font-weight bold
      span
        border none
        color #6abcfc
        background none
        cursor pointer
    .orderItem
      border-bottom 1px solid #e5e5e5
    .orderItem:last-child
      border-bottom none
    .head
      display flex
      justify-content flex-start
      align-items stretch
      line-height 48px
      height 48px
      width 94%
      margin 0px 3%
      border-bottom 1px solid #e5e5e5
    .item1-left
      min-width 200px
    .item1-title1
      color #b2b2b2
      font-size calc(14/1920*100vw)
      min-height 20px
    .item1-data
      color #666666
      font-size calc(14/1920*100vw)
      margin-right calc(56/1920*100vw)
      min-height 20px
    .item1-delete
      color #6abcfc
      font-size calc(14/1920*100vw)
    .item1-cancel
      min-width 70px
    .item1-online
      min-width 100px
      width calc(890/1920*100vw)
    .body
      display flex
      justify-content flex-start
      min-height 20px
      line-height 0.8
      width 94%
      margin-left 3%
    .first-table-td
      display flex
      justify-content flex-start
      align-items center
      flex-direction column
      min-height 20px
      line-height 0.8
      width 62%
      border-right: 1px solid #e5e5e5;
    .item-product
      display flex
      justify-content flex-start
      align-items center
      min-height 20px
      line-height 0.8
      width 100%
    .item-product:last-child
      >.item-font
        border none
    .item-font
      display flex
      justify-content flex-start
      align-items center
      min-height 20px
      line-height 1
      margin-top calc(16/1920*100vw)
      margin-bottom calc(16/1920*100vw)
      width 100%
      padding-bottom calc(20/1920*100vw)
      border-bottom 1px solid #e5e5e5
    .item2-img
      width 7%
      min-width 84px
      padding-bottom calc(18/1920*100vw)
    .item2-text
      width 48%
      min-width 130px
    .item2-name
      font-size calc(14/1920*100vw)
      font-weight bold
      color #252525
      line-height 1.4
    .item2-data
      font-size calc(12/1920*100vw)
      color #666666
    .item2-text2
      width 13%
      min-width 86px 
      line-height 1
      text-align right
    .item2-Upfront
      font-size calc(14/1920*100vw)
      font-weight bold
      color #666666
    .item2-price
      font-size calc(12/1920*100vw)
      color #252525
    .item2-text3
      width 22%
      min-width 86px 
      line-height 1
      text-align right
      padding-right calc(20/1920*100vw)
    .item2-text4
      width 16%
      min-width 46px 
      line-height 1
      text-align center
    .item2-Number
      font-size calc(14/1920*100vw)
      color #252525
    .second-table-td
      display flex
      justify-content center
      align-items center
      min-height 100%
      line-height 1.4
      width 15%
      border-right 1px solid #e4e4e4
    .test
      border-right 1px solid red
      width 0px
      height 100%
      flex 0
    .total-price
      padding-bottom calc(18/1920*100vw)
    .total-price-text
      font-size calc(14/1920*100vw)
      color #666666
    .total-price-price
      font-size calc(24/1920*100vw)
      color #252525
      font-weight bold
    .third-table-td
      display flex
      justify-content center
      align-items center
      min-height 100px
      line-height 1.4
      width 24%
      text-align center
    .third-payment
      padding-bottom calc(18/1920*100vw)
    .third-payment-text
      font-size calc(14/1920*100vw)
      color #666666
      line-height 4
    .third-payment-view
      font-size calc(14/1920*100vw)
      color #6abcfc
      line-height 4
    .third-payment-view2
      font-size calc(14/1920*100vw)
      color #6abcfc
      line-height 3
    .third-payment-btn
      background #6dd6a9
      color #fff
      width calc(180/1920*100vw)
      min-width 72px
      min-height 24px
      height calc(32/1920*100vw)
      font-size calc(14/1920*100vw)
      border-radius 50px
      box-shadow 0 0 0 white
    .third-payment-text2
      font-size calc(14/1920*100vw)
      color #666666
      line-height 3
  @media (min-width: 1365px)
    .layout-page
      >.layout
        >.layout-page-container
          >.layout-page
            >.main
              .user
                height 160px
                display flex
                flex-direction row
  @media (max-width: 1366px)
    .layout-page
      >.layout
        >.layout-page-container
          padding-right: 0px
          >.layout-page
            >.main
              .user
                height 350px
                display flex
                flex-direction column
                >div
                  height 160px
                >.information
                  width 100%
                  max-width none
                  >.detail
                    max-width none
                >.balance
                  margin-top 30px
</style>

