<template>
  <div class="ShoppingBagBox">
    <div class="box title">Shopping Bag</div>
    <div class="box packageBox" v-if="packageAll.length > 0">
    </div>
    <div class="box packageBox" v-if="packageAll.length > 0">
      <div class="package" v-for="(packageItem, index) in packageAll">
        <div class="packageHead">
          <div class="packageType">{{packageItem.packageType}}</div>
          <div class="packageRemove" @click="removePackage(index)"><i class="removeIco"></i>Remove</div>
        </div>
        <div class="packageItem" v-for="item in packageItem.packageItem">
          <div class="packageItemImgBox"><img class="packageItemImg" :src="item.packageItemImgUrl" /></div>
          <div class="packageItemImformation">
            <div class="packageItemName">{{item.packageItemName}}</div>
            <div class="packageItemPriceAndType">
              <div class="packageItemPrice">${{item.packageItemPrice}}</div>
              <div class="packageItemType">{{item.packageItemType}}</div>
            </div>
            <div class="packageItemDetail1">{{item.packageItemDetail1}}</div>
            <div class="packageItemDetail2">{{item.packageItemDetail2}}</div>
          </div>
            <div class="itemAttr">
              <div class="packageItemNumber">X{{item.packageItemNumber}}</div>
              <div class="packageItemUpfrontBox">
                <div class="packageItemUpfrontInner">
                  <div class="packageItemUpfrontText">Upfront</div>
                  <div class="packageItemUpfront">
                    ${{item.packageItemUpfront * item.packageItemNumber}}
                  </div>
                </div>
              </div>
              <div class="vertical"></div>
              <div class="packageItemMonthlyBox">
                <div class="packageItemMonthlyInner">
                  <div class="packageItemMonthlyText">Monthly Rental</div>
                  <div class="packageItemMonthly">
                    ${{item.packageItemMonthly * item.packageItemNumber}}
                  </div>
                </div>
              </div>
              <div class="horizon"></div>
            </div>
        </div>
        <div class="packageFoot">
          <div class="packageAllPriceBox">
            <div class="subTotal">Subtotal</div>
            <div class="upfrontTotal">Upfront:${{packageItem.packageUpfrontTotal}}</div>
            <div class="monthlyTotal">Monthly Rental:${{packageItem.packageMonthlyTotal}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="box itemBox" v-if="itemAll.length > 0">
      <div class="item" v-for="(item, index) in itemAll">
        <div class="itemImgBox"><img class="itemImg" :src="item.itemImgUrl" /></div>
        <div class="itemImformation">
          <div class="itemName">{{item.itemName}}</div>
          <div class="itemPriceAndType">
            <div class="itemPrice">${{item.itemPrice}}</div>
            <div class="itemType">{{item.itemType}}</div>
          </div>
          <div class="itemDetail1">{{item.itemDetail1}}</div>
          <div class="itemDetail2">{{item.itemDetail2}}</div>
        </div>
        <div class="itemAttr">
          <div class="itemNumberBox">
            <div class="itemNumber">
              <button class="itemNumberBtn" :disabled="item.disabled" @click="reduceChangeNum(index, item.itemNumber, item.disabled)">-</button>
              <i style="font-style:normal;" v-on:input="itemNumberChange">{{item.itemNumber}}</i>
              <button class="itemNumberBtn" @click="addChangeNum(index, item.itemNumber, item.disabled)">+</button>
            </div>
            <div class="removeItem" @click="removeItem(index)"><i class="removeIco"></i>Remove</div>
          </div>
          <div class="itemUpfrontBox">
            <div class="itemUpfrontInner">
              <div class="itemUpfrontText">Upfront</div>
              <div class="itemUpfront">
                ${{item.itemUpfront * item.itemNumber}}
              </div>
            </div>
          </div>
          <div class="vertical"></div>
          <div class="itemMonthlyBox">
            <div class="itemMonthlyInner">
              <div class="itemMonthlyText">Monthly Rental</div>
              <div class="itemMonthly">
                ${{item.itemMonthly * item.itemNumber}}
              </div>
            </div>
          </div>
          <div class="horizon"></div>
        </div>
      </div>
    </div>
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
            <div class="totalMonthlyText">Monthly Rental</div>
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
    reduceChangeNum (index, realNum, disabled) {
      for (var i = this.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          realNum = realNum - 1
          if (realNum <= 0) {
            realNum = 0
            disabled = true
          }
          else {
            disabled = false
          }
          this.itemAll[i].itemNumber = realNum
        }
      }
    },
    addChangeNum (index, realNum, disabled) {
      for (var i = this.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          disabled = false
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
.ShoppingBagBox
  // max-width 1570px
  // margin: 88px auto 175px
  padding-top 88px
  margin 0 176px 0
  min-height 100vh
  display flex
  flex-direction column
  padding-bottom 180px
  // justify-content space-between
@media (min-width: 1570px)
  .ShoppingBagBox
    // width: 1570px
@media (max-width: 1570px)
  .ShoppingBagBox
    // width: 100%
    margin 0 176px 0
.box
  width 100% !important
.box.packageBox, .box.itemBox
  height 100%
.ShoppingBagBox
  .title
    height 88px
    font-size 24px
    line-height 44px
    font-weight bold
  .package
    min-width 1000px
    border 1px solid #EAEAEA
    padding 0 30px 0 50px
    margin-bottom 20px
    overflow hidden
    .packageHead
      height 46px
      font-size 14px
      line-height 46px
      color #EAEAEA
      border-bottom 1px solid #EAEAEA
      display flex
      align-items center
      -ms-flex-pack justify
      justify-content space-between
      .packageRemove
        font-size 12px
        color #83c8ff
        line-height 46px
        text-align right
        display flex
        align-items center
    .packageItem
      position relative
      height 180px
      display flex
      >div
        display block
        flex-shrink 1
      .itemAttr
        width 40%
        height 100%
        display flex
        align-self flex-end
        flex-shrink 0
      .packageItemImgBox
        height 100%
        margin-right 30px
        flex 0
        .packageItemImg
          width 130px
          height 130px
          margin-top 25px
      .packageItemImformation
        width 560px
        margin-top 18px
        flex-shrink 2
        >div
          width 100%
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
        .packageItemName
          font-size 18px
          font-weight bold
          line-height 34px
        .packageItemPriceAndType
          height 30px
          width 100%
          font-size 16px
          line-height 30px
          >div
            float left
            display inline-block
          .packageItemPrice
            margin-right 16px
            font-weight bold
          .packageItemType
            color #c8c8c8
        .packageItemDetail1
          height 30px
          line-height 30px
        .packageItemDetail2
          height 30px
          line-height 30px
      .packageItemNumber
        width 250px
        text-align center
        line-height 180px
      .packageItemUpfrontBox
        margin 53px auto
        width 330px
        .packageItemUpfrontInner
          margin 0 auto
          width 120px
          >div
            text-align right
          .packageItemUpfrontText
            font-size 14px
            line-height 34px
          .packageItemUpfront
            font-size 24px
            line-height 40px
            font-weight bold
      .packageItemMonthlyBox
        margin 53px auto
        width 190px
        .packageItemMonthlyInner
          margin 0 auto
          width 110px
          >div
            text-align right
          .packageItemMonthlyText
            font-size 14px
            line-height 34px
          .packageItemMonthly
            font-size 24px
            line-height 40px
            font-weight bold
      .vertical
        border-left 1px solid #EAEAEA
        width 0
        height 48px
        margin 65px 0px
        flex 0
      .horizon
        width 82%
        border-top 1px solid #eaeaea
        height 0px
        bottom 0px
        right 0px
        position absolute
    .packageFoot
      height 50px
      .packageAllPriceBox
        width 590px
        float right
        height 100%
        >div
          display inline-block
          float left
          height 100%
          text-align center
          line-height 50px
        .subTotal
          width 150px
        .upfrontTotal
          width 230px
        .monthlyTotal
          width 200px
  .itemBox
    border 1px solid #EAEAEA
    min-width 1000px
    .itemlast-child
      .horizon
        display none
    .item
      min-width 1000px
      padding 0 30px 0 50px
      overflow hidden
      height 190px
      position relative
      display flex
      .itemAttr
        width 40%
        height 100%
        display flex
        align-self flex-end
        flex-shrink 0
      >div
        display block
        flex-shrink 1
      .itemImgBox
        height 100%
        margin-right 30px
        flex 0
        .itemImg
          width 130px
          height 130px
          margin-top 25px
      .itemImformation
        width 560px
        margin-top 18px
        .itemName
          font-size 18px
          font-weight bold
          line-height 34px
        .itemPriceAndType
          height 30px
          width 100%
          font-size 16px
          line-height 30px
          >div
            float left
            display inline-block
          .itemPrice
            margin-right 16px
            font-weight bold
          .itemType
            color #c8c8c8
        .itemDetail1
          height 30px
          line-height 30px
        .itemDetail2
          height 30px
          line-height 30px
      .itemNumberBox
        width 250px
        padding 70px 9px
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
      .itemUpfrontBox
        margin 53px auto
        width 330px
        .itemUpfrontInner
          margin 0 auto
          width 120px
          >div
            text-align right
          .itemUpfrontText
            font-size 14px
            line-height 34px
          .itemUpfront
            font-size 24px
            line-height 40px
            font-weight bold
      .itemMonthlyBox
        margin 53px auto
        width 190px
        .itemMonthlyInner
          margin 0 auto
          width 110px
          >div
            text-align right
          .itemMonthlyText
            font-size 14px
            line-height 34px
          .itemMonthly
            font-size 24px
            line-height 40px
            font-weight bold
      .vertical
        border-left 1px solid #EAEAEA
        width 0
        height 48px
        margin 65px 0px
        flex 0
      .horizon
        width 82%
        border-top 1px solid #eaeaea
        height 0px
        bottom 0px
        right 0px
        position absolute
  .totalBox
    width 100%
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
</style>
