<template>
  <q-layout
      ref="layout"
      view="hHh lpr fFf"
      :right-breakpoint="1100"
    >
    <!-- 主体 -->
    <div class="payment-box">
      <div class="payment-header">
        <div class="payment-title">Payment</div>
      </div>
      <div class="payment-item">
        <div class="Used-Payment-Method" v-if="have.ofterPay.length > 0">
          <div class="Used-Payment-Method-title">
            Used Payment Method
          </div>
          <div class="payment-item-hr">
          </div>
          <div class="Used-Payment-Method-Choice">
            <div 
              v-for="(item, index) in pay.selectOptions"
              v-if="item.value==='1'"
              :class="{'active':(item.id === active.pay), 'Used-Payment-Method-img': true}"
              @click="selectOfterPayType(item)"
            >
              <img 
              :src="item.image"
              style="width: 56%">
              <img src="statics/images/Payment/delete.png" class="payment-delete"  @click.stop="clearOfterPayType(item)"> 
            </div>
            
          </div>
        </div>
        <div class="Payment-Method">
          <div class="Payment-Method-title">
            Payment Method
          </div>
          <div class="payment-item-hr">
          </div>
          <div class="Payment-Method-Choice">
            <div
              v-for="(item, index) in pay.selectOptions"
              :class="{'active':(item.id === active.pay), 'Payment-Method-img': true}"
              @click="selectPayType(item)"
            >
              <img 
                :src="item.image"
                style="width: 56%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>	
  	<!-- 底部 -->
    <q-toolbar slot="footer" class="payment-footer-footer">
      <div class="payment-footer-data">
        <div class="payment-footer">
        <div class="payment-footer1">
          <div class="payment-footer-img">
            <img src="statics/images/Payment/Vector.png" style="width: 30%">
          </div>
          <div class="payment-footer-text">
          	<span class="payment-footer-text1">The order </span><span class="payment-footer-text2">100001600000005</span><span class="payment-footer-text1"> has been created.</span><br>
            <span class="payment-footer-text3">In order to complete the order successfully, please finish payment after check out in 24 hour</span>
          </div>
        </div>
        <div class="payment-footer2">
          <div class="Shipping-Free">
            <span class="Shipping-Free-text">Shipping Free</span><br>
            <span class="Shipping-Free-price">$0.00</span>
          </div>
          <div class="Order-Total">
            <span class="Order-Total-text">Order Total</span><br>
            <span class="Order-Total-price">$1161.00</span>
          </div>
          <div class="payment-btn">
           <q-btn class="pay-now-btn">PAY NOW</q-btn>
          </div>
        </div>
        </div>
      </div>
    </q-toolbar>
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
  QSelect,
  QField
} from 'quasar'
import payment from 'data/payment.json'
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
    QSelect,
    QField
  },
  data () {
    return {
      pay: payment.data,
      active: {
        pay: 0
      },
      have: {
        ofterPay: payment.data.selectOptions.filter(function (item) {
          if (item.value === '1') {
            return item
          }
        })
      }
    }
  },
  methods: {
    selectPayType (item) {
      // console.log(item)
      this.active.pay = item.id
    },
    selectOfterPayType (item) {
      // console.log(item)
      this.active.pay = item.id
    },
    clearOfterPayType (item) {
      // console.log(this.pay.selectOptions)
      this.pay.selectOptions.map(function (i) {
        if (i.id === item.id) {
          i.value = '0'
        }
      })
      this.have.ofterPay = this.pay.selectOptions.filter(function (i) {
        if (i.value === '1') {
          return i
        }
      })
    }
  }
}
</script>
<style lang="stylus">
.payment-box
  display flex
  justify-content center
  flex-direction column
  align-items center
  margin-top calc(88/1920*100vw)
.payment-header
  width 82%
  height 64px
  display flex
  align-items center
.payment-title
  width 100%
  color #252525
  font-size calc(24/1920*100vw)
  font-weight bold
.payment-item
  width 82%
  display flex
  justify-content center
  flex-direction column
  align-items center
  border 1px solid #e5e5e5
.payment-item-hr
  width 96%
  height 1px
  background #e5e5e5
  margin 0 0 1.6% 2%
.Used-Payment-Method
  width 100%
  .Used-Payment-Method-title
    display flex
    align-items center
    height calc(64/1920*100vw)
    min-height 40px
    font-size calc(14/1920*100vw)
    color #b2b2b2
    margin 0 0 0 2%
  .Used-Payment-Method-Choice
    display flex
    flex-direction row
    flex-wrap wrap
    margin 0 0 1% 2%
  .Used-Payment-Method-img
    width calc(290/1920*100vw)
    height calc(146/1920*100vw)
    min-width 196px
    min-height 98px
    border 1px solid #e5e5e5
    border-radius 4px
    background #fff
    display flex
    align-items center
    justify-content center
    margin 0 1% 1% 0
    cursor pointer
    &.active
      border 1px solid #6dd6a9
    &:hover
      .payment-delete
        display flex
  .payment-delete
    width calc(32/1920*100vw)
    position absolute
    display none
    align-self flex-start
    margin -1% 0 0 7.2%
.Payment-Method
  width 100%
  .Payment-Method-title
    display flex
    align-items center
    height calc(64/1920*100vw)
    min-height 40px
    font-size calc(14/1920*100vw)
    color #b2b2b2
    margin 0 0 0 2%
  .Payment-Method-Choice
    display flex
    flex-direction row
    flex-wrap wrap
    margin 0 0 1% 2%
    cursor pointer
  .Payment-Method-img
    width calc(290/1920*100vw)
    height calc(146/1920*100vw)
    min-width 196px
    min-height 98px
    border 1px solid #e5e5e5
    border-radius 4px
    background #f9f9f9
    display flex
    align-items center
    justify-content center
    margin 0 1% 1% 0
    &.active
      background #fff
      border 1px solid #6dd6a9
.payment-footer-footer
  background #fff
.payment-footer-data
  display flex
  align-items center
  justify-content center
  width 100%
.payment-footer1
  width 56%
  min-width 300px
  display flex
  align-items center
.payment-footer2
  width 44%
  min-width 200px
  display flex
  align-items center
.payment-footer
  width 82%
  display flex
  align-items center
  justify-content center
  padding 2% 0 2% 0
  .payment-footer-img
    width calc(64/1920*100vw)
    height calc(64/1920*100vw)
    border-radius 50px
    min-width 50px
    min-height 50px
    background #f9f9f9
    display flex
    align-items center
    justify-content center
    margin 0 14px 0 0
  .payment-footer-text
    width calc(786/1920*100vw)
    min-width 200px
    color #252525
  .payment-footer-text1
    font-size calc(16/1920*100vw)
  .payment-footer-text2
    font-size calc(16/1920*100vw)
    color #6abcfc
  .payment-footer-text3
    font-size calc(14/1920*100vw)
    color #666666
  .Shipping-Free
    width calc(156/1920*100vw)
    min-width 70px
    text-align left
    border-right 1px solid #e5e5e5
    margin-right calc(24/1920*100vw)
  .Shipping-Free-text
    color #666666
    font-size calc(14/1920*100vw)
  .Shipping-Free-price
    color #252525
    font-size calc(24/1920*100vw)
  .Order-Total
    width calc(164/1920*100vw)
    min-width 50px
    text-align left
    margin-left calc(24/1920*100vw)
  .Order-Total-text
    color #666666
    font-size calc(14/1920*100vw)
  .Order-Total-price
    color #252525
    font-size calc(24/1920*100vw)
  .payment-btn
    width calc(320/1920*100vw)
    min-width 32px
  .pay-now-btn
    width calc(320/1920*100vw)
    min-width 32px
    height calc(48/1920*100vw)
    min-height 24px
    color #fff
    background #6dd6a9
    border-radius 50px
    box-shadow 0 0 0 white
    font-size calc(24/1920*100vw)
.layout-footer
  box-shadow 0 0 0 white
.q-toolbar
  padding 0 0 0 0
</style>