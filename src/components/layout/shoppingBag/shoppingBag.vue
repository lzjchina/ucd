<template>
  <div class="shoppingBox">
    <div class="shoppingBoxTitle">Shopping Bag</div>
    <table class="shoppingBoxTable" v-if="packageAll.length > 0" v-for="(packageItem, index) in packageAll" cellpadding="0" cellspacing="0">
      <thead>
        <tr>
          <td class="packageType headStyleLine">{{packageItem.packageType}}</td>
          <td class="headStyleLine"></td>
          <td class="headStyleLine"></td>
          <td class="headStyleLine"></td>
          <td class="headStyleLine"></td>
          <td @click="removePackage(index)" class="removeText headStyleLine"><i class="removeIco"></i>Remove</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in packageItem.packageItem">
          <td class="td1"><img :src="item.packageItemImgUrl" /></td>

          <td class="td2" style="border-bottom:1px solid #eaeaea;">
            <div class="packageItemName">{{item.packageItemName}}</div>
            <div class="packageItemPriceAndType">
              <div class="packageItemPrice">${{item.packageItemPrice}}</div>
              <div class="packageItemType">{{item.packageItemType}}</div>
            </div>
            <div class="packageItemDetail1">{{item.packageItemDetail1}}</div>
            <div class="packageItemDetail2">{{item.packageItemDetail2}}</div>
          </td>

          <td class="td3" style="border-bottom:1px solid #eaeaea;">
            ×{{item.packageItemNumber}}
          </td>

          <td class="td4" style="border-bottom:1px solid #eaeaea;">
            <div class="packageItemUpfrontText">Upfront</div>
            <div class="packageItemUpfront">
              ${{item.packageItemUpfront * item.packageItemNumber}}
            </div>
          </td>
          <td class="td5" style="border-bottom:1px solid #eaeaea;">
            <div class="vertical"></div>
          </td>
          <td class="td6" style="border-bottom:1px solid #eaeaea;">
            <div class="packageItemMonthlyText">Monthly&nbsp;Rental</div>
            <div class="packageItemMonthly">
              ${{item.packageItemMonthly * item.packageItemNumber}}
            </div>
          </td>
        </tr>
        <tr>
          <td class="td1"></td>
          <td class="td2"></td>
          <td class="td3 subTotal">Subtotal</td>
          <td class="td4 upfrontTotal">Upfront:<b class="upfrontTotalBlack">&nbsp;${{packageItem.packageUpfrontTotal}}</b></td>
          <td class="td5"></td>
          <td class="td6 monthlyTotal"> Monthly&nbsp;Rental:<b class="monthlyTotalBlack">&nbsp;${{packageItem.packageMonthlyTotal}}</b></td>
          <!-- <td colspan="6" style="position:relative;height:48px;line-height 48px">
            <div class="subTotal">
              Subtotal
            </div>
            <div class="upfrontTotal">
              Upfront:<b class="upfrontTotalBlack">&nbsp;${{packageItem.packageUpfrontTotal}}</b>
            </div>
            <div class="monthlyTotal">
              Monthly&nbsp;Rental:<b class="monthlyTotalBlack">&nbsp;${{packageItem.packageMonthlyTotal}}</b>
            </div>
          </td> -->
        </tr>
      </tbody>
    </table>

    <table class="shoppingBoxTable" v-for="(item, index) in itemAll">
      <tbody>
        <tr>
          <td class="td1">
            <img :src="item.itemImgUrl" />
          </td>

          <td class="td2">
            <div class="packageItemName">{{item.itemName}}</div>
            <div class="packageItemPriceAndType">
              <div class="packageItemPrice">${{item.itemPrice}}</div>
              <div class="packageItemType">{{item.itemType}}</div>
            </div>
            <div class="packageItemDetail1">{{item.itemDetail1}}</div>
            <div class="packageItemDetail2">{{item.itemDetail2}}</div>
          </td>

          <td class="td3">
            <div class="itemNumberBox">
              <div class="itemNumber">
                <button class="itemNumberBtn" :disabled="item.disabled" @click="reduceChangeNum(index, item.itemNumber, item.disabled)">-</button>
                <i style="font-style:normal;" v-on:input="itemNumberChange">{{item.itemNumber}}</i>
                <button class="itemNumberBtn" @click="addChangeNum(index, item.itemNumber, item.disabled)">+</button>
              </div>
              <div class="removeItem" @click="removeItem(index)"><i class="removeIco"></i>Remove</div>
            </div>
          </td>

          <td class="td4">
            <div class="packageItemUpfrontText">Upfront</div>
            <div class="packageItemUpfront">
              ${{item.itemUpfront * item.itemNumber}}
            </div>
          </td>

          <td class="td5">
            <!-- <div class="vertical"></div> -->
          </td>

          <td class="td6">
            <div class="packageItemMonthlyText">Monthly&nbsp;Rental</div>
            <div class="packageItemMonthly">${{item.itemMonthly * item.itemNumber}}</div>
          </td>
        </tr>
      </tbody>
    </table>

  <div class="totalBox fixed-bottom">
    <div class="total">
      <div class="totalUpfrontBox">
        <div class="totalUpfrontInner">
          <div class="totalUpfrontText">Upfront</div>
            <div class="totalUpfront">{{upfront}}
            </div>
          </div>
        </div>
      <div class="vertical"></div>
        <div class="totalMonthlyBox">
          <div class="totalMonthlyInner">
            <div class="totalMonthlyText">Monthly&nbsp;Rental</div>
            <div class="totalMonthly">{{monthly}}
            </div>
          </div>
        </div>
        <div class="checkout" @click="payment">checkout</div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QIcon
} from 'quasar'
import allData from 'data/allData.json'
export default {
  props: ['searchString'],
  components: {
    QSideLink,
    QRating,
    QScrollArea,
    QBtn,
    QIcon
  },
  data () {
    return {
      allData: allData,
      packageAll: [
        {
          packageType: 'Mobile Kit',
          packageUpfrontTotal: 0,
          packageMonthlyTotal: 0,
          packageItem: [
            {
              packageItemImgUrl: './statics/phone.png',
              packageItemName: 'Apple iPhone X + 198 Bundle',
              packageItemPrice: '1149.00',
              packageItemUpfront: '1149.00',
              packageItemMonthly: '0.00',
              packageItemNumber: 1,
              packageItemType: 'Device',
              packageItemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
              packageItemDetail2: 'Delivery: In Stock'
            },
            {
              packageItemImgUrl: './statics/phone.png',
              packageItemName: '198 Bundle',
              packageItemPrice: '198.00 /mo.',
              packageItemUpfront: '0.00',
              packageItemMonthly: '198.00',
              packageItemNumber: 1,
              packageItemType: 'Plan',
              packageItemDetail1: 'Voice 300 min, SMS: unlimited, Data: 20 GB',
              packageItemDetail2: ''
            }
          ]
        },
        {
          packageType: 'Mobile',
          packageUpfrontTotal: 0,
          packageMonthlyTotal: 0,
          packageItem: [
            {
              packageItemImgUrl: './statics/phone.png',
              packageItemName: 'Apple iPhone X + 198 Bundle',
              packageItemPrice: '1149.00',
              packageItemUpfront: '1149.00',
              packageItemMonthly: '0.00',
              packageItemNumber: 2,
              packageItemType: 'Device',
              packageItemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
              packageItemDetail2: 'Delivery: In Stock'
            },
            {
              packageItemImgUrl: './statics/phone.png',
              packageItemName: '198 Bundle',
              packageItemPrice: '198.00 /mo.',
              packageItemUpfront: '0.00',
              packageItemMonthly: '198.00',
              packageItemNumber: 2,
              packageItemType: 'Plan',
              packageItemDetail1: 'Voice 300 min, SMS: unlimited, Data: 20 GB',
              packageItemDetail2: ''
            }
          ]
        }
      ],
      itemAll: [
        {
          itemImgUrl: './statics/phone.png',
          itemName: 'Apple iPhone X + 198 Bundle',
          itemPrice: '1149.00',
          itemUpfront: '1149.00',
          itemMonthly: '0.00',
          itemNumber: 2,
          disabled: false,
          itemType: 'Device',
          itemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
          itemDetail2: 'Delivery: In Stock'
        },
        {
          itemImgUrl: './statics/phone.png',
          itemName: 'Apple iPhone XX + 198 Bundle',
          itemPrice: '11.00',
          itemUpfront: '0.00',
          itemMonthly: '11.00',
          itemNumber: 2,
          disabled: false,
          itemType: 'Device',
          itemDetail1: 'Memory: 256 GB, Primary: 198 Bundle, Color: Space gray',
          itemDetail2: 'Delivery: In Stock'
        }
      ],
      upfront: 0,
      monthly: 0
    }
  },
  methods: {
    mathTotal () {
      this.upfront = 0
      this.monthly = 0
      for (var pa = 0; pa < this.packageAll.length; pa++) {
        this.packageAll[pa].packageUpfrontTotal = 0
        this.packageAll[pa].packageMonthlyTotal = 0
        for (var pi = 0; pi < this.packageAll[pa].packageItem.length; pi++) {
          this.packageAll[pa].packageUpfrontTotal += this.packageAll[pa].packageItem[pi].packageItemUpfront * this.packageAll[pa].packageItem[pi].packageItemNumber
          this.packageAll[pa].packageMonthlyTotal += this.packageAll[pa].packageItem[pi].packageItemMonthly * this.packageAll[pa].packageItem[pi].packageItemNumber
        }
        this.upfront += this.packageAll[pa].packageUpfrontTotal
        this.monthly += this.packageAll[pa].packageMonthlyTotal
      }
      for (var i = 0; i < this.itemAll.length; i++) {
        this.upfront += this.itemAll[i].itemUpfront * this.itemAll[i].itemNumber
        this.monthly += this.itemAll[i].itemMonthly * this.itemAll[i].itemNumber
      }
    },
    removePackage (index) {
      console.log(index)
      this.packageAll.splice(index, 1)
      this.mathTotal()
    },
    removeItem (index) {
      this.itemAll.splice(index, 1)
      this.mathTotal()
    },
    itemNumberChange () {
      this.mathTotal()
    },
    payment () {
      this.$router.push('/Market/Payment')
    },
    reduceChangeNum (index, realNum, disab) {
      for (var i = this.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          realNum = realNum - 1
          if (realNum <= 0) {
            realNum = 0
            this.itemAll[i].disabled = true
          }
          else {
            this.itemAll[i].disabled = false
          }
          this.itemAll[i].itemNumber = realNum
        }
      }
    },
    addChangeNum (index, realNum) {
      for (var i = this.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          this.itemAll[i].disabled = false
          realNum = realNum + 1
          this.itemAll[i].itemNumber = realNum
        }
      }
    }
  },
  mounted () {
    // console.log(this.allData)
    // this.packageAll = []
    // this.itemAll = []
    // var _goods = JSON.parse(sessionStorage.goods)
    // for (var i = 0; i < _goods.item.number; i++) {
    //   if (this.itemAll[0]) {
    //     this.itemAll[0].itemNumber++
    //   }
    //   else {
    //     this.itemAll.push(this.allData.item.detail)
    //   }
    // }
    // for (var p = 0; p < _goods.package.number; p++) {
    //   this.packageAll.push(this.allData.package.detail)
    // }
    // this.mathTotal()
  },
  watch: {
    searchString: {
      handler (curVal, oldVal) {
        console.log(this.$route.query.search)
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
table, tr, td
  margin 0
  padding 0
.shoppingBox
  padding-top 88px
  margin 0 176px 0
  min-height 100vh
  min-width 1000px
  padding-bottom 180px
  letter-spacing 0.05em
.shoppingBoxTable
  width 100%
  min-width 1000px
  border 1px solid #e5e5e5
  padding calc(20/1920*100vw) calc(30/1920*100vw)
  margin-bottom calc(15/1920*100vw)
.shoppingBoxTitle
  height 88px
  font-size 24px
  line-height 88px
  font-weight bold
  text-align left
.removeIco
  display inline-block
  width 19px
  height 18px
  background url('~statics/ShoppingBag/Remove.png')
  margin 0 10px
.packageType
  color #b2b2b2
.removeText
  color #74c0fc
  display flex
  align-items center
  text-align right
.vertical
  border-left 1px solid #EAEAEA
  width 0
  height 48px
  margin 65px 0px
  flex 0
.itemNumberBox
  // width 250px
  // padding 70px 9px
  .itemNumber
    float left
    display inline-block
    width 90px
    height 46px
    border 1px solid #eaeaea
    border-radius 5px
    // padding 0 30px
    text-align right
    display flex
    justify-content space-between
    align-items center
  .removeItem
    height 100%
    // width 100px
    float left
    display inline-block
    font-size 12px
    color #83c8ff
    line-height 46px
    text-align right
    display flex
    align-items center
.removeIco
  display inline-block
  width 19px
  height 18px
  background url('~statics/ShoppingBag/Remove.png')
  margin 0 10px
.itemNumberBtn
  width 25px
  height 100%
  background #f9f9f9
  border 0
  color #666666
  outline none
  cursor pointer
.totalBox
  width 100%
  min-width 1000px
  height 180px
  // position fixed
  // bottom 0px
  background #fff
  align-self flex-end
  padding 0 176px 0
  .total
    float right
    width 710px
    >div
      float left
      display inline-block
    .totalUpfrontBox
      width 170px
      height 100%
      .totalUpfrontInner
        // height 190px
        width 170px
        margin 53px auto
        >div
          text-align left
        .totalUpfrontText
          font-size 14px
          line-height 34px
        .totalUpfront
          font-size 24px
          line-height 40px
          font-weight bold
    .totalMonthlyBox
      text-align left
      margin 53px auto 53px 50px
      width 140px
      .totalMonthlyInner
        margin 0 auto
        width 110px
        >div
          text-align left
        .totalMonthlyText
          font-size 14px
          line-height 34px
        .totalMonthly
          font-size 24px
          line-height 40px
          font-weight bold
    .vertical
      border-left 1px solid #EAEAEA
      width 0
      height 48px
      margin 65px 0px
    .checkout
      margin 55px 0;
      width 348px
      height 65px
      border-radius 65px
      background-color #69D7A8
      color #fff
      font-size 20px
      text-align center
      line-height 65px
      font-weight bold
      cursor pointer
.td1
  width 9%
.td2
  width 40%
  padding-left 25px
.packageItemName
  font-size 18px
  font-weight bold
  line-height 32px
  color #252525
.packageItemPrice
  display inline-block
  font-size 16px
  font-weight bold
  line-height 32px
  color #959595
.packageItemType
  display inline-block
  margin-left 25px
  font-weight normal
  font-size 16px
  line-height 32px
  color #cac9c8
.packageItemDetail1
  font-weight normal
  font-size 14px
  line-height 32px
  color #707070
.packageItemDetail2
  font-weight normal
  font-size 14px
  line-height 32px
  color #707070
.td3
  width 16%
  text-align center
  color #666666
.td4
  width 14%
  text-align right
.td5
  width 11%
  padding-left 7%
.td6
  width 10%
  text-align left
.packageItemUpfrontText
  font-size 14px
  line-height 30px
  color #666666
.packageItemUpfront
  font-size 24px
  line-height 40px
  font-weight bold
  color #252525
.packageItemMonthlyText
  font-size 14px
  line-height 30px
  color #666666
  text-align right
.packageItemMonthly
  text-align right
  font-size 24px
  line-height 40px
  font-weight bold
  color #252525
.subTotal
  color #666666
  font-size 12px
  height 48px
  line-height 48px
  text-align right
.upfrontTotal
  color #666666
  font-size 12px
  height 48px
  line-height 48px
.upfrontTotalBlack
  color #252525 !important
  font-size 12px
.monthlyTotal
  color #666666
  font-size 12px
  height 48px
  line-height 48px
  text-align right
.monthlyTotalBlack
  color #252525 !important
.horizon
  width 82%
  border-top 1px solid #eaeaea
  height 0px
  bottom 0px
  right 0px
  position absolute
.headStyleLine
  line-height 32px
  border-bottom 1px solid #eaeaea
</style>
