<template>
  <q-layout
      ref="layout"
      view="hHh LpR fFf"
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
                    <div class="name">{{item.name}}<img v-if="item.default" src="statics/images/checkout/star.png" style="display: inline-block; vertical-align: middle; width:20px; height:20px"></div>
                    <div class="address">{{item.address}}</div>
                    <div class="phone">{{item.phone}}</div>
                    <div class="save">Save as Default<img src="statics/images/checkout/edit.png" style="display: inline-block; vertical-align: middle; width:18px; height:18px"></div>
                    <img src="statics/images/checkout/delete.png" class="checkout-delete" v-on:click="removeAddress(index)" />
                    <!-- <div class="change"></div>
                    <div class="remove"></div>
                    <div class="default"></div> -->
                  </div>
                </div>
              <div class="addAddress">
                <div class="addAddressBtn"></div>
                <div><img src="statics/images/checkout/add.png" style="display: inline-block; vertical-align: middle; width:32px; "></div>
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
               <!--  <div type="text" class="selectInner">shunfeng</div> -->
                 <q-select
                  class="selectInner"
                  v-model="select"
                  :options="options"
                   />
              </div>
            </div>
            <div class="invoice" v-bind:class="{'on': invoiceOn}">
              <div class="head">
                <div class="title">Invoice Info</div>
                <q-toggle v-model="check1" value=''/>
                <!-- <div class="controller" v-on:click="invoiceSwitch"></div> -->
              </div>
              <div class="footer">
                <div class="funds-kind">
                  <input name="searchkey" type="text" value="Enter your Phone Number" onFocus="this.value=''" class="kind-input">
                </div>
                <!-- <input :disabled="!invoiceOn" class="footer-invoiceTitle" v-model="items.invoiceInput" ref="invoiceInput" /> -->
                 <div class="selectBox">
                   <q-select
                    class="selectInner"
                    v-model="select"
                    :options="options"
                     />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="feeDetails">
        <h3>Fee Details</h3>
         <div class="item2">
          <table border="0" cellspacing="0" cellpadding="0" style="width:calc(1566/1920*100vw); border:1px solid #e5e5e5; border-spacing:0px;">
            <tr>
              <td style="width:32px"></td>
              <td>
                <table border="0" style="margin:0;border-spacing:0px;width:calc(1502/1920*100vw);">
                  <tr class="table-tr1">
                    <table border="0" cellspacing="0" cellpadding="0" style="margin:0;border-spacing:0px">
                      <tr>
                        <td class="table-td1-2" style="padding-left: 16px;">
                          Item Name
                        </td>
                        <td class="table-td1-1">
                        </td>
                        <td class="table-td2">Unit Price</td>
                        <td class="table-td3">Quantity</td>
                        <td class="table-td4">Tax</td>
                        <td class="table-td5">Discount</td>
                        <td class="table-td6">Mothly Fee</td>
                        <td class="table-td7">Subtotal Price</td>
                        <td class="table-td8"></td>
                      </tr>
                    </table>
                  </tr>
                  <tr>
                    <table border="0" cellspacing="0" cellpadding="0" style="margin:0;border-spacing:0px">
                      <tr>
                        <td class="table-td1">
                          <div class="item2-img">
                            <img src="statics/images/Myorder/pic1.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px ">     
                          </div>
                        </td>
                        <td class="table-td1-1">
                          <div class="item2-text">
                            <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                            <span class="item2-data">Memory: 256 GB</span><br>
                            <span class="item2-data">Primary: 198 Bundle</span><br>
                            <span class="item2-data">Color: Space gray</span>
                          </div>
                        </td>
                        <td class="table-td2">$1149.00</td>
                        <td class="table-td3">× 1</td>
                        <td class="table-td4">$0.00</td>
                        <td class="table-td5">$0.00</td>
                        <td class="table-td6">$198.00</td>
                        <td class="table-td7">$1149.00</td>
                        <td class="table-td8"></td>
                      </tr>
                      <tr>
                        <td class="table-td1-2">
                          <div class="item2-img">
                            <img src="statics/images/Myorder/pic2.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px">     
                          </div>
                        </td>
                        <td class="table-td1-1">
                          <div class="item2-text">
                            <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                            <span class="item2-data">Memory: 256 GB</span><br>
                            <span class="item2-data">Primary: 198 Bundle</span><br>
                            <span class="item2-data">Color: Space gray</span>
                          </div>
                        </td>
                        <td class="table-td2">$1149.00</td>
                        <td class="table-td3">× 1</td>
                        <td class="table-td4">$0.00</td>
                        <td class="table-td5">$0.00</td>
                        <td class="table-td6">$198.00</td>
                        <td class="table-td7">$1149.00</td>
                        <td class="table-td8"></td>
                      </tr>
                    </table>
                  </tr>
                  <tr>
                    <table border="0" cellspacing="0" cellpadding="0" style="margin:0;border-spacing:0px">
                      <tr>
                        <td class="table-td1-2">
                          <div class="item2-img">
                            <img src="statics/images/Myorder/pic3.png" style="display: inline-block; vertical-align: middle; width: calc(80/1920*100vw); height:calc(80/1920*100vw); min-height: 70px; min-width: 70px">     
                          </div>
                        </td>
                        <td class="table-td1-1">
                          <div class="item2-text">
                            <span class="item2-name">Apple iPhone X + 198 Bundle</span><br>
                            <span class="item2-data">Memory: 256 GB</span><br>
                            <span class="item2-data">Primary: 198 Bundle</span><br>
                            <span class="item2-data">Color: Space gray</span>
                          </div>
                        </td>
                        <td class="table-td2">$1149.00</td>
                        <td class="table-td3">× 1</td>
                        <td class="table-td4">$0.00</td>
                        <td class="table-td5">$0.00</td>
                        <td class="table-td6">$198.00</td>
                        <td class="table-td7">$1149.00</td>
                        <td class="table-td8"></td>
                      </tr>
                    </table>
                  </tr>
                </table>
              </td>
              <td style="width:32px"></td>
           </tr>
          </table>
         </div>
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
            <div class="checkout-footer-btn">
                <q-icon name="done"/>
            </div>
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
  QField,
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
  QIcon,
  QItemTile,
  QToggle
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
    QField,
    QTabs,
    QRouteTab,
    QItemSide,
    QItemMain,
    QListHeader,
    QPagination,
    QChip,
    QSelect,
    QOptionGroup,
    QTransition,
    QItemTile,
    QToggle
  },
  data () {
    return {
      check1: false,
      select: 'fb',
      multipleSelect: ['fb', 'yz'],
      options: [
        {
          label: 'shunfeng',
          value: 'fb'
        },
        {
          label: 'youzheng',
          value: 'yz'
        }
      ],
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
    for (var a = 0; a < this.allData.address.length; a++) {
      this.address.push(this.allData.address[a])
    }
    // console.log(this.address)
    var _goods = JSON.parse(sessionStorage.getItem('goods'))
    console.log(_goods)
    if (_goods) {
      this.packageAll = []
      this.itemAll = []
      this.total = 0
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
    }
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
.q-popover
  box-shadow 0 0 0 white
  border 1px solid #e5e5e5
  width calc(256/1920*100vw)
  min-width 222px !important
  margin-left calc(-20/1920*100vw)
  .q-list
    padding 0
  .q-item-label
    font-size 14px
    border-bottom 1px solid #e5e5e5
    line-height 3
    &:hover
      color #b2b2b2
    &:active
      color #b2b2b2
  .q-item
    padding 0 16px
    min-height 32px
    &:last-child .q-item-label
      border-bottom 0px solid #e5e5e5
  .q-item.active
      background rgba(0, 0, 0, 0)
  .q-item:hover
      background rgba(0, 0, 0, 0)
.CheckOutBox
  width: 100%
  display flex
  justify-content center
  margin-top 88px
  font-family Helvetica Neue !important
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
          font-size: 24px
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
            font-size 14px
        .addressBox
          border-bottom: 1px solid #e5e5e5
          display flex
          justify-content flex-start
          align-items center
          flex-wrap wrap
          padding-bottom 16px
          >div
            width calc(288/1920*100vw)
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
            min-width 256px
            min-height 130px
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
              line-height 28px
              >.name
                font-size: 16px
                font-weight: bold
                color #252525
                display flex
                justify-content space-between
              >.address
                font-size: 14px
                width 100%
                overflow hidden
                white-space nowrap
                text-overflow ellipsis
                color #666666
              >.phone
                font-size: 14px
                width: 100%
                white-space: nowrap
                text-overflow: ellipsis
                overflow: hidden
                color #666666
              >.save
                font-size: 14px
                color: #6abcfc
                display flex
                justify-content space-between
              >.checkout-delete
                width calc(30/1920*100vw)
                min-width 28px
                position absolute
                top calc(-30/1920*100vw)
                right calc(-38/1920*100vw)
          .addAddress
            min-width 256px
            min-height 130px
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
          margin 1% 0
          padding-top 16px
          padding-bottom 32px
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
            width calc(40% - 14px)
            height calc(146/1920*100vw)
            display flex
            justify-content space-between
            flex-direction column
            color #252525
            min-height 130px
            min-width 532px
            margin 0 0.5% 0 0.5%
            .q-touch
              margin -10px 0 0 10px
            .q-toggle-handle
              width 28px
              height 28px
              background-color #fff
              border 1px solid #e5e5e5
            .q-toggle-base
              width 50px
              height 30px
              opacity 1
              border 2px solid #e5e5e5
              margin-top -6px
              &.active
                border 2px solid #68daa9
            .q-option-inner
              color #fefefe
            .q-option-inner.active
              color #68daa9
              .q-toggle-base
                height 34px
                margin-top -7px
              .q-toggle-handle
                border 1px solid #68daa9
            >.head
              width 100%
              line-height 4
              display flex
              justify-content flex-start
              align-items center
              .title
                font-size 16px
                font-weight bold
              .controller
                width calc(52/1920*100vw)
                height calc(31/1920*100vw)
                margin calc(14/1920*100vw)
                background url('/statics/images/checkout/switch_off.png') center center/100% 100% no-repeat #fff
                cursor pointer
            .footer
              display flex
              justify-content space-between
              align-items center
              line-height 0
              .funds-kind
                .kind-input
                  width calc(336/1920*100vw)
                  min-width 306px
                  background #fff !important
                  color #666666 !important
                  font-size 14px
                  box-shadow 0 0 0 white
                  margin 0
                  border 0
                  outline none
                  height 56px !important
                  border 1px solid #e5e5e5
                  margin-bottom 24px
                  padding-left 16px
              .selectBox
                margin 0
                display flex
                justify-content center
                font-size 14px
                line-height 4
                width calc(194/1920*100vw)
                min-width 174px
              .q-if-control
                color rgba(0,0,0,0)
                height 7px
              .material-icons
                background url('~statics/search/images/new/down.png') top center no-repeat
              .q-if-focused
                .material-icons
                  color rgba(0, 0, 0, 0)
                  background url('~statics/search/images/new/down.png') top center no-repeat
                  height 7px
                  transform scale(1,-1)
              .q-if
                margin 0 0 24px 0
              .q-if:before
                height 0px !important
                color #fff !important
              .q-if:hover:before
                color #fff
              .text-primary
                color #fff !important
              .selectInner
                width 256px
                height 56px !important
                border 1px solid #e5e5e5
                font-size 14px
                padding 0 calc(20/1920*100vw)
                cursor pointer
                display flex
                align-items center
                background #fff
          >.provider
            display flex
            justify-content space-between
            flex-direction column
            color #252525
            width calc(288 / 1920 * 100vw)
            height calc(146 / 1920 * 100vw)
            min-width 256px
            min-height 130px
            margin 0 0.5%
            .head
              width 100%
              line-height 4
              display flex
              justify-content space-between
              margin 0
              align-items center
              .title
                font-size 16px
                font-weight bold
              .price
                font-size 14px
                font-weight 450
            .selectBox
              margin 0
              display flex
              justify-content center
              .q-if-control
                color rgba(0,0,0,0)
                height 7px
              .material-icons
                background url('~statics/search/images/new/down.png') top center no-repeat
              .q-if-focused
                .material-icons
                  color rgba(0, 0, 0, 0)
                  background url('~statics/search/images/new/down.png') top center no-repeat
                  height 7px
                  transform scale(1,-1)
              .q-if
                margin 0 0 24px 0
              .q-if:before
                height 0px !important
                color #fff !important
              .q-if:hover:before
                color #fff
              .text-primary
                color #fff !important
              .selectInner
                width 256px
                height 56px !important
                border 1px solid #e5e5e5
                font-size 14px
                padding 0 calc(20/1920*100vw)
                cursor pointer
                display flex
                align-items center
                background #fff
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
        font-size: 24px
        line-height: 4
        font-weight: bold
      .feeDetailsBox
        position: relative
        padding: 0 30px
        border: 1px solid #c5c5c5
        .head,
        .item,
        .packageItem
          border-bottom 1px solid #c5c5c5
          height 46px
          display flex
          font-weight bold
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
    font-weight 450
    margin-bottom 104px
    font-family Helvetica Neue !important
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
    .decucted
      margin-right 6px
    .tax
      display flex
      justify-content flex-end
      flex-direction row
      margin-left 16px
      margin-right 6px
    .fee
      display flex
      justify-content flex-end
      flex-direction row
      margin-left 16px
      margin-right 6px
    .freight
      display flex
      justify-content flex-end
      flex-direction row
      margin-left 16px
      margin-right 6px
    .subTotal
      display flex
      justify-content flex-end
      flex-direction row
      margin-left 16px
      margin-right 6px
    .number
      color #252525
.checkout-footer-footer
  background #fff
  color #252525
  display flex
  justify-content center
  align-items center
  position fixed
  bottom 0px
  font-family Helvetica Neue !important
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
      display flex
      justify-content center
      align-items center
      width 32px
      height 32px
      border-radius 50px
      font-size 22px
      &:hover
        background #6dd6a9
        font-size 22px
      &.active
        background #6dd6a9
        font-size 22px
    .q-btn
      box-shadow 0 0 0 white
    .q-btn-round.q-btn-standard
      width 32px
      height 32px
      min-height 32px
      min-width 32px
    .agree
      color #666666
      font-size 16px
      line-height 6
      span
        color #6abcfc
    .vertical
      height 50px
      width 1px
      background #ededed
      margin 0 48px
    .total
      width calc(120/1920*100vw)
      min-width 90px
      line-height: 1.6
      font-size 16px
      color #666666
      span
        font-size: 24px
        font-weight: bold
        color #252525
    .checkOut
      width calc(348/1920*100vw)
      height calc(64/1920*100vw)
      min-width 240px
      min-height 56px
      border-radius: 50px
      background-color #69D7A8
      color #fff
      font-size 24px
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
  line-height 3
  width 100%
  .table-tr1
    font-size calc(14/1920*100vw)
    color #c1c0bf
    font-family Helvetica Neue
    font-weight 400
    border 1px solid #000
  td
    font-family Helvetica Neue
    font-size calc(14/1920*100vw)
  .table-td1
    text-align left
    width calc(112 / 1920 * 100vw)
  .table-td1-2
    text-align left
    width calc(112 / 1920 * 100vw)
    border-bottom 1px solid #e5e5e5
    min-width 80px
  .table-td1-1
    text-align left
    width calc(232/1920*100vw)
    min-width 172px
    border-bottom 1px solid #e5e5e5
  .table-td2
    text-align right
    width calc(148/1920*100vw)
    border-bottom 1px solid #e5e5e5
  .table-td3
    text-align right
    width calc(176/1920*100vw)
    border-bottom 1px solid #e5e5e5
  .table-td4
    text-align right
    width calc(206/1920*100vw)
    border-bottom 1px solid #e5e5e5
  .table-td5
    text-align right
    width calc(198/1920*100vw)
    border-bottom 1px solid #e5e5e5
  .table-td6
    text-align right
    width calc(204/1920*100vw)
    border-bottom 1px solid #e5e5e5
  .table-td7
    text-align right
    width calc(204/1920*100vw)
    border-bottom 1px solid #e5e5e5
  .table-td8
    text-align right
    width calc(40/1920*100vw)
    border-bottom 1px solid #e5e5e5
  th
    font-weight normal
    border-bottom 1px solid #e5e5e5
  .table-th1
    text-align left
    width calc(328/1920*100vw)
    border-bottom 1px solid #e5e5e5
  .table-th2
    text-align right
    width calc(148/1920*100vw)
  .table-th3
    text-align right
    width calc(176/1920*100vw)
  .table-th4
    text-align right
    width calc(206/1920*100vw)
  .table-th5
    text-align right
    width calc(198/1920*100vw)
  .table-th6
    text-align right
    width calc(204/1920*100vw)
  .table-th7
    text-align right
    width calc(204/1920*100vw)
  .table-th8
    text-align right
    width calc(40/1920*100vw)
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
    line-height 0.8
    width 100%
    padding 16px 0
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
    width 80px
    display flex
    align-items center
    padding 16px 0
  .item2-text
    min-width 172px
    line-height 1.4
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
