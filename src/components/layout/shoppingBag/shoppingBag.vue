<template>
  <div class="shoppingBox">
    <div class="shoppingBoxTitle">3 Items in Your Bag</div>
    <table class="shoppingBoxTable" v-if="packageAll.length > 0" v-for="(packageItem, index) in packageAll">
      <thead>
        <tr>
          <td>{{packageItem.packageType}}</td>
          <td @click="removePackage(index)" class="removeText"><i class="removeIco"></i>Remove</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>1</td>
          <td>2</td>
        </tr>
      </tfoot>
    </table>
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
      disabled: false,
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
    reduceChangeNum (index, realNum) {
      for (var i = this.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          realNum = realNum - 1
          if (realNum <= 0) {
            realNum = 0
            this.disabled = true
          }
          else {
            this.disabled = false
          }
          this.itemAll[i].itemNumber = realNum
        }
      }
    },
    addChangeNum (index, realNum) {
      for (var i = this.itemAll.length - 1; i >= 0; i--) {
        if (index === i) {
          this.disabled = false
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
.shoppingBox
  padding-top 88px
  margin 0 176px 0
  min-height 100vh
.shoppingBoxTable
  width 100%
  border 1px solid #e5e5e5
  padding calc(20/1920*100vw) calc(30/1920*100vw)
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
.removeText
  color #74c0fc
  display flex
  align-items center
</style>
