<template>
  <q-layout
      ref="layout"
      view="hHh lpr fFf"
      :right-breakpoint="1100"
    >
  <div class="CheckOutBox">
    <div class="main">
      <div class="deliveryDetails">
        <div class="title">
          <h3>Your Delivery Details</h3>
          <span style="display: none">All deliverables must be accepted by an adult</span>
        </div>
        <div class="contain">
          <div class="address">
            <div class="address-title">Shipping Address</div>
            <div class="addressBox">
                <div class="addressItem" v-bind:class="{'default': item.default}" v-for="(item, index) in address">
                  <div class="addressItem-type">
                    <div class="name">{{item.name}}<img v-if="item.default" src="statics/images/checkout/star.png" style="display: inline-block; vertical-align: middle; width:calc(20/1920*100vw); height:calc(20/1920*100vw)"></div>
                    <div class="address">{{item.address}}</div>
                    <div class="phone">{{item.phone}}</div>
                    <div class="save">Save as Default<img src="statics/images/checkout/edit.png" style="display: inline-block; vertical-align: middle; width:calc(18/1920*100vw); height:calc(18/1920*100vw)"></div>
                    <img src="statics/images/checkout/delete.png" class="checkout-delete" v-on:click="removeAddress(index)" />
                    <!-- <div class="change"></div>
                    <div class="remove"></div>
                    <div class="default"></div> -->
                  </div>
                </div>
              <div class="addAddress">
                <div class="addAddressBtn"></div>
                <div><img src="statics/images/checkout/add.png" style="display: inline-block; vertical-align: middle; width:calc(32/1920*100vw); height:calc(32/1920*100vw)"></div>
                <span>ADD NEW ADDRESS</span>
              </div>
            </div>
          </div>
          <div class="other">
            <div class="provider">
              <div class="head">
                <div class="title">Shipping Provider</div>
                <div class="price">${{provider}}</div>
              </div>
              <div class="selectBox">
                <div type="text" class="selectInner">shunfeng</div>
              </div>
            </div>
            <div class="invoice" v-bind:class="{'on': invoiceOn}">
              <div class="head">
                <div class="title">Invoice Info</div>
                <div class="controller" v-on:click="invoiceSwitch"></div>
              </div>
              <div class="footer">
                <input :disabled="!invoiceOn" class="footer-invoiceTitle" v-model="items.invoiceInput" ref="invoiceInput" />
                <div class="footer-invoiceType">Funds Kind</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feeDetails">
        <h3>Fee Details</h3>
        <div class="feeDetailsBox">
          <div class="head">
            <div class="name">Item Name</div>
            <div class="detail"></div>
            <div class="price">Unit Price</div>
            <div class="quantity">Quantity</div>
            <div class="tax">Tax</div>
            <div class="discount">Discount</div>
            <div class="monthlyFee">Monthly Fee</div>
            <div class="subTotal">SubTotal</div>
            <div class="horizon"></div>
          </div>
         <div class="item2">
            <div class="first-table-td">
              <div class="item-product">
                  <div class="item2-img">
                   <img src="statics/images/Myorder/pic1.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px; margin-right:4px ">     
                  </div>
                  <div class="item-font">
                    <div class="item2-text">
                      <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                      <span class="item2-data">Memory: 256 GB</span><br>
                      <span class="item2-data">Primary: 198 Bundle</span><br>
                      <span class="item2-data">Color: Space gray</span>
                    </div>
                    <div class="item2-text2">
                      <span class="item2-price">$1149.00</span>
                    </div>
                    <div class="item2-text3">
                      <span class="item2-price">× 1</span>
                    </div>
                    <div class="item2-text4">
                      <span class="item2-Number">$0.00</span>
                    </div>
                    <div class="item2-text5">
                      <span class="item2-Number">$0.00</span>
                    </div>
                    <div class="item2-text6">
                      <span class="item2-Number">$198.00</span>
                    </div>
                    <div class="item2-text47">
                      <span class="item2-Number">$1149.00</span>
                    </div>
                  </div>
              </div>
              <div class="item-product">
                  <div class="item2-img">
                   <img src="statics/images/Myorder/pic1.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px; margin-right:4px ">     
                  </div>
                  <div class="item-font">
                    <div class="item2-text">
                      <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                      <span class="item2-data">Memory: 256 GB</span><br>
                      <span class="item2-data">Primary: 198 Bundle</span><br>
                      <span class="item2-data">Color: Space gray</span>
                    </div>
                    <div class="item2-text2">
                      <span class="item2-price">$1149.00</span>
                    </div>
                    <div class="item2-text3">
                      <span class="item2-price">× 1</span>
                    </div>
                    <div class="item2-text4">
                      <span class="item2-Number">$0.00</span>
                    </div>
                    <div class="item2-text5">
                      <span class="item2-Number">$0.00</span>
                    </div>
                    <div class="item2-text6">
                      <span class="item2-Number">$198.00</span>
                    </div>
                    <div class="item2-text47">
                      <span class="item2-Number">$1149.00</span>
                    </div>
                  </div>
              </div>
              <div class="item-product">
                  <div class="item2-img">
                   <img src="statics/images/Myorder/pic1.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px; margin-right:4px ">     
                  </div>
                  <div class="item-font">
                    <div class="item2-text">
                      <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                      <span class="item2-data">Memory: 256 GB</span><br>
                      <span class="item2-data">Primary: 198 Bundle</span><br>
                      <span class="item2-data">Color: Space gray</span>
                    </div>
                    <div class="item2-text2">
                      <span class="item2-price">$1149.00</span>
                    </div>
                    <div class="item2-text3">
                      <span class="item2-price">× 1</span>
                    </div>
                    <div class="item2-text4">
                      <span class="item2-Number">$0.00</span>
                    </div>
                    <div class="item2-text5">
                      <span class="item2-Number">$0.00</span>
                    </div>
                    <div class="item2-text6">
                      <span class="item2-Number">$198.00</span>
                    </div>
                    <div class="item2-text47">
                      <span class="item2-Number">$1149.00</span>
                    </div>
                  </div>
              </div>
             
            </div>
            </div>
        </div>
          <!-- <div class="package" v-for="packageItem in packageAll">
            <div class="packageItem" v-for="item in packageItem.packageItem">
              <div class="name"><img :src=item.packageItemImgUrl /></div>
              <div class="detail">
                <div class="itemName">{{item.packageItemName}}</div>
                <div class="detail1">{{item.packageItemDetail3}}</div>
                <div class="detail2">{{item.packageItemDetail4}}</div>
                <div class="detail3">{{item.packageItemDetail5}}</div>
              </div>
              <div class="price">${{item.packageItemPriceNumber}}</div>
              <div class="quantity">{{item.packageItemNumber}}</div>
              <div class="tax">$0</div>
              <div class="discount">$0</div>
              <div class="monthlyFee">${{item.packageItemMonthly}}</div>
              <div class="subTotal">${{item.packageItemPriceNumber}}</div>
              <div class="horizon"></div>
            </div>
          </div>
          <div class="item" v-for="item in itemAll">
            <div class="name"><img :src=item.itemImgUrl /></div>
            <div class="detail">
              <div class="itemName">{{item.itemName}}</div>
              <div class="details">{{item.itemDetail1}}</div>
            </div>
            <div class="price">${{item.itemPrice}}</div>
            <div class="quantity">{{item.itemNumber}}</div>
            <div class="tax">$0</div>
            <div class="discount">$0</div>
            <div class="monthlyFee">${{item.itemMonthly}}</div>
            <div class="subTotal">${{item.itemPrice * item.itemNumber}}</div>
            <div class="horizon"></div>
          </div> -->
        </div>
        <div class="totalBox">
          <div class="total">
            <div class="decuctedBox">
              <div class="decucted">Account Decucted:</div>
              <div class="number">$0</div>
            </div>
            <div class="tax">
              <div class="tax">Tax:</div>
              <div class="number">$0</div>
            </div>
            <div class="fee">
              <div class="fee">Fee:</div>
              <div class="number">$0</div>
            </div>
            <div class="freight">
              <div class="freight">Freight:</div>
              <div class="number">$198.00</div>
            </div>
            <div class="subTotal">
              <div class="subTotal">Bag Subtotal:</div>
              <div class="number">${{total}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
   <q-toolbar slot="footer" class="checkout-footer-footer">
        <div class="checkOutBox-footer">
          <q-btn round class="checkout-footer-btn">
              <q-icon name="done"/>
          </q-btn>
          <div class="agree">I agree the <span>Tems & Conditions</span></div>
          <div class="vertical"></div>
          <div class="total">Total<br/><span>${{total + 198}}</span></div>
          <div class="checkOut">SUBMIT</div>
      </div>
    </q-toolbar>
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
  QItemSide,
  QItemMain,
  QListHeader,
  QPagination,
  QChip,
  QSelect,
  QTransition,
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QOptionGroup,
  QIcon
} from 'quasar'
import allData from 'data/allData.json'
export default {
  components: {
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon,
    QLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QItemSide,
    QItemMain,
    QListHeader,
    QPagination,
    QChip,
    QSelect,
    QOptionGroup,
    QTransition
  },
  data () {
    return {
      group: 'opt1',
      items: {
        invoiceInput: 'Enter Invoice Title'
      },
      invoiceOn: false,
      invoiceTitle: 'Enter Invoice Title',
      provider: 2.99,
      allData: allData,
      itemAll: [],
      packageAll: [],
      address: [],
      total: 0
    }
  },
  methods: {
    invoiceSwitch: function () {
      this.invoiceOn = !this.invoiceOn
    },
    invoiceTitleChange: function () {
      console.log(123)
    },
    removeAddress: function (index) {
      this.address.splice(index, 2)
    }
  },
  mounted () {
    this.address = []
    this.packageAll = []
    this.itemAll = []
    this.total = 0
    for (var a = 0; a < this.allData.address.length; a++) {
      this.address.push(this.allData.address[a])
    }
    console.log(this.address)
    var _goods = JSON.parse(sessionStorage.goods)
    console.log(_goods)
    for (var i = 0; i < _goods.item.number; i++) {
      if (this.itemAll[0]) {
        this.itemAll[0].itemNumber++
      }
      else {
        this.itemAll.push(this.allData.item.detail)
      }
      this.total += parseInt(this.allData.item.detail.itemPrice, 10)
    }
    for (var p = 0; p < _goods.package.number; p++) {
      this.packageAll.push(this.allData.package.detail)
    }
    for (var pa = 0; pa < this.packageAll.length; pa++) {
      for (var pi = 0; pi < this.packageAll[pa].packageItem.length; pi++) {
        this.total += parseInt(this.packageAll[pa].packageItem[pi].packageItemPriceNumber, 10)
      }
    }
    console.log(this.packageAll)
    console.log(this.itemAll)
  },
  watch: {
    items: {
      handler: function (val, oldval) {
        console.log(this.$refs.invoiceInput.value)
      },
      deep: true
    }
  }
}
</script>
<style lang="stylus">
//@media (min-width: 1790px)
  //.CheckOutBox
    //width: 1790px
    //margin: 0 auto
//@media (max-width: 1788px)
  //.CheckOutBox
    //width: 100%
    //>.main
      //padding: 0 60px
      //display: block
      //.feeDetails
        //margin-left: 0px
        //margin-top: 30px
      //>div
        //display: block
    //>.checkOutBox
      //width: calc(100% - 120px)
      //margin: 0 60px 0 60px
.CheckOutBox
  width: 100%
  display flex
  justify-content center
  margin-top calc(88/1920*100vw)
  @media (max-width: 1518px)
    margin: 0 auto
  .main
    flex-direction column
    width: 82%
    height: 100%
    display: flex
    justify-content: space-between
    .deliveryDetails
      width: 100%
      height: 100%
      .title
        h3
          margin: 0
          font-size: calc(24/1920*100vw)
          line-height: 4
          font-weight: bold
          width 90%
        span
          margin: 0
          font-size: 12px
          line-height: 4
          color: #c5c5c5
      .contain
        width: 100%
        height: 100%
        padding: 0 16px
        border: 1px solid #e5e5e5
        >div
          display flex
          justify-content center
          align-items center
          flex-direction column
          >div
            margin: 0
            font-size: calc(14/1920*100vw)
            line-height: 4
            border-bottom: 1px solid #e5e5e5
            color #b2b2b2
            width 100%
          .address-title
            width 99%
            margin-bottom 2%
        .addressBox
          border-bottom: 1px solid #e5e5e5
          display flex
          justify-content flex-start
          align-items center
          flex-wrap wrap
          >div
            width calc(288/1920*100vw)
            width 19%
            height calc(146/1920*100vw)
          .addressItem.default
            border 1px solid #69D7A8
            background-color #fff
          .addressItem:hover
            background-color #fff
            >.addressItem-type
              >.save,
              >.checkout-delete
                visibility visible
          .addressItem
            >.addressItem-type
              >.save,
              >.checkout-delete
                visibility hidden
            min-width 193px
            min-height 80px
            border 1px solid #e5e5e5
            border-radius 4px
            background-color #f9f9f9
            display flex
            align-items center
            justify-content center
            margin 0 0.5% 1% 0.5%
            cursor pointer
            .addressItem-type
              position relative
              margin 0 8px
              display flex
              justify-content flex-start
              flex-direction column
              line-height calc(28/1920*100vw)
              >.name
                font-size: calc(16/1920*100vw)
                font-weight: bold
                color #252525
                display flex
                justify-content space-between
              >.address
                font-size: calc(14/1920*100vw)
                width: 100%
                text-overflow: ellipsis
                overflow: hidden
                color #666666
              >.phone
                font-size: calc(14/1920*100vw)
                width: 100%
                white-space: nowrap
                text-overflow: ellipsis
                overflow: hidden
                color #666666
              >.save
                font-size: calc(14/1920*100vw)
                color: #6abcfc
                display flex
                justify-content space-between
              >.checkout-delete
                width calc(30/1920*100vw)
                position absolute
                top calc(-30 / 1920 * 100vw)
                right calc(-38 / 1920 * 100vw)
          .addAddress
            min-width 193px
            min-height 80px
            border 1px solid #e5e5e5
            border-radius 4px
            background #fff
            display flex
            align-items center
            justify-content center
            flex-direction column
            margin 0 0.5% 1% 0.5%
            line-height 2.2
        .other
          display: flex
          justify-content flex-start
          flex-direction row
          align-items cneter
          margin 1% 0.5%
          >.invoice.on
            >.head
              .controller
                background url('/statics/images/checkout/switch_on.png') center center/100% 100% no-repeat #fff
            .footer
              .footer-invoiceTitle
                background-color #fff
              .footer-invoiceType
                background-color #fff
                cursor pointer
          >.invoice
            width: calc(40% - 14px)
            display flex
            justify-content space-between
            flex-direction column
            color #252525
            >.head
              width 100%
              line-height 4
              display flex
              .title
                font-size calc(16/1920*100vw)
                font-weight bold
                float left
              .controller
                width calc(52/1920*100vw)
                height calc(31/1920*100vw)
                margin calc(14/1920*100vw)
                background url('/statics/images/checkout/switch_off.png') center center/100% 100% no-repeat #fff
                cursor pointer
            .footer
              display flex
              justify-content space-between
              padding 1% 0 4% 0
              .footer-invoiceTitle
                background-color #f9f9f9
                height calc(56/1920*100vw)
                width calc(336/1920*100vw)
                border 1px solid #e5e5e5
                padding-left calc(20/1920*100vw)
                color #252525
              .footer-invoiceType
                background-color #f9f9f9
                height calc(56/1920*100vw)
                width calc(194/1920*100vw)
                border 1px solid #e5e5e5
                padding-left calc(20/1920*100vw)
                display flex
                align-items center
                cursor default
          >.provider
            display flex
            justify-content space-between
            flex-direction column
            color #252525
            .head
              width 100%
              line-height 4
              display flex
              justify-content space-between
              .title
                font-size calc(16/1920*100vw)
                font-weight bold
                float left
              .price
                float right
            .selectBox
              margin 2% 0 8% 0
              display flex
              justify-content center
              .selectInner
                width calc(256/1920*100vw)
                height calc(56/1920*100vw)
                border 1px solid #e5e5e5
                background: url('/statics/images/checkout/ico_arrow_D.png') calc(210/1920*100vw) center no-repeat #fff
                font-size 14px
                padding 0 calc(20/1920*100vw)
                cursor pointer
                display flex
                align-items center
          >div
            height: 100%
            width: calc(20% - 14px)
            margin-right: 16px
            border-radius: 5px
            border: 1px solid #e5e5e5
            background-color: #f5f5f5
            padding: 0 15px
    .feeDetails
      flex: 1
      h3
        margin: 0
        font-size: calc(24/1920*100vw)
        line-height: 4
        font-weight: bold
      .feeDetailsBox
        position: relative
        padding: 0 30px
        border: 1px solid #c5c5c5
        .head,
        .item,
        .packageItem
          border-bottom: 1px solid #c5c5c5
          height: 46px
          display: flex
          font-weight: bold
          >div
            flex-shrink: 1
            flex-grow: 1
            line-height: 46px
            text-align: right
          .name
            height: 100%
            width: 80px
            margin-right: 20px
            flex-shrink: 0
            flex-grow: 0
            img
              width: 80px
              height: 80px
          .detail
            width: 280px
            height: 100%
            text-align: left
            .itemName
              height: 30px
              line-height: 30px
              font-size: 14px
              font-weight: bold
              display flex
              justify-content space-between
              flex-wrap nowrap
            .detail1
              font-weight: normal
              height: 16px
              line-height: 16px
              font-size: 10px
            .detail2
              font-weight: normal
              height: 16px
              line-height: 16px
              font-size: 10px
            .detail3
              font-weight: normal
              height: 16px
              line-height: 16px
              font-size: 10px
          .price
            width: 70px
            height: 100%
            flex-shrink: 0
          .quantity
            width: 100px
            height: 100%
          .tax
            width: 95px
            height: 100%
          .discount
            width: 115px
            height: 100%
          .monthlyFee
            width: 130px
            height: 100%
          .subTotal
            margin-right: 24px
            width: 170px
            height: 100%
          .horizon
            display: none
            width: 0px
            height: 100%
        .head
          color: #c5c5c5
          font-weight: normal
        .item
          .detail
            .details
              font-weight: normal;
              height: 16px;
              line-height: 16px;
              font-size: 10px;
        .item,
        .packageItem
          height: 110px
          padding: 15px 0px
          >div
            line-height: 80px
  .totalBox
    width 100%
    height calc(72/1920*100vw)
    line-height 4
    font-size calc(14/1920*100vw)
    display flex
    justify-content flex-end
    flex-direction row
    align-items center
    color #666666
    font-weight bold
    .total
      display flex
      justify-content flex-end
      flex-direction row
      align-items center
      width 100%
    .decuctedBox
      display flex
      justify-content flex-end
      flex-direction row
      margin-left 16px
    .tax
      display flex
      justify-content flex-end
      flex-direction row
      margin-left 16px
    .fee
      display flex
      justify-content flex-end
      flex-direction row
      margin-left 16px
    .freight
      display flex
      justify-content flex-end
      flex-direction row
      margin-left 16px
    .subTotal
      display flex
      justify-content flex-end
      flex-direction row
      margin-left 16px
    .number
      color #252525
.checkout-footer-footer
  background #fff
  color #252525
  display flex
  justify-content center
  align-items center
  .checkOutBox-footer
    width 82%
    display flex
    justify-content flex-end
    align-items center
    .checkout-footer-btn
      background #282828
      font-size 14px
      color #fff
      margin 0 8px
      &:hover
        background #6dd6a9
        font-size 14px
      &.active
        background #6dd6a9
        font-size 14px
    .q-btn
      box-shadow 0 0 0 white
    .q-btn-round.q-btn-standard
      width 32px
      height 32px
      min-height 32px
      min-width 32px
    .agree
      color #666666
      font-size calc(16/1920*100vw)
      line-height 6
      span
        color #6abcfc
    .vertical
      height calc(50/1920*100vw)
      width 1px
      background #ededed
      margin 0 48px
    .total
      width calc(120/1920*100vw)
      line-height: 1.6
      font-size calc(16/1920*100vw)
      color #666666
      span
        font-size: calc(24/1920*100vw)
        font-weight: bold
        color #252525
    .checkOut
      width calc(348/1920*100vw)
      height calc(64/1920*100vw)
      border-radius: 50px
      background-color #69D7A8
      color #fff
      font-size calc(24/1920*100vw)
      text-align center
      text-transform uppercase
      display flex
      justify-content center
      align-items center
      cursor pointer
.layout-footer
  box-shadow 0 0 0 white
.item2
    display flex
    justify-content flex-start
    min-height 20px
    line-height 0.8
    width 100%
  .first-table-td
    display flex
    justify-content flex-start
    align-items center
    flex-direction column
    min-height 20px
    line-height 0.8
    width 100%
  .item-product:last-child
    .item-font
      border-bottom none
  .item-product
    display flex
    justify-content flex-start
    align-items center
    min-height 20px
    line-height 0.8
    width 100%
  .item-font
    display flex
    justify-content flex-start
    align-items center
    min-height 20px
    line-height 0.8
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
    width 14.4%
    min-width 200px
    line-height 1
  .item2-name
    font-size calc(14/1920*100vw)
    font-weight bold
    color #252525
    line-height 1.4
  .item2-data
    font-size calc(12/1920*100vw)
    color #666666
  .item2-text2
    width 15%
    min-width 86px 
    line-height 1
    text-align center
  .item2-Upfront
    font-size calc(14/1920*100vw)
    font-weight bold
    color #666666
  .item2-price
    font-size calc(12/1920*100vw)
    color #252525
  .item2-text3
    width 10%
    min-width 86px 
    line-height 1
    text-align center
    padding-right calc(20/1920*100vw)
  .item2-text4
    width 15.8%
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
  .item2-text5
    width 10.4%
    min-width 46px 
    line-height 1
    text-align center
  .item2-text6
    width 16.4%
    min-width 46px 
    line-height 1
    text-align center
  .item2-text7
    width 9.2%
    min-width 46px 
    line-height 1
    text-align center
</style>
