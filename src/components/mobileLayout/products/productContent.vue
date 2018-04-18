<template>
  <div class="products">
    <div class="TopBanner">
      <div class="bannerBg" v-for="(item, index) in banner.top.data" v-if="(index+1)===banner.top.page">
        <img :src="item.image" width="100%">
      </div>
      <div class="tools">
        <div class="pagination"><span class="p-lt" @click="sildeLeft"></span><span class="p-rt" @click="sildeRight"></span></div>
      </div>
    </div>
    <div class="productsDIV">
      <div class="ProBox1">
          <div class="ProBox1-left">
            <span class="ProBox1-left-name">{{productInfs.title}}</span>
            <div class="stars">
              <q-rating v-model="ratingModel" readonly :max="5"/>
            </div>
            <div style="padding-bottom: 0.24rem">
              <span class="ProBox1-left-reson">{{productInfs.reson}}</span>
            </div>
          </div>
          <div class="ProBox1-right">
            <ul>
              <li class="icon-like"></li>
              <li class="icon-compare"></li>
              <li class="icon-share"></li>
            </ul>
          </div>
      </div>
      <div class="ProBox2">
        <div class="ProBox2-left">
          <span class="ProBox2-left-title">One Time Fee</span>
          <span class="ProBox2-left-price">{{OneTimeFeeValue}}</span>
        </div>
        <div class="ProBox2-right">
          <span class="ProBox2-right-title">Monthly Fee</span>
          <span class="ProBox2-right-price">{{MonthlyFeeValue}}</span>
        </div>
      </div>
      <div class="ProBox3">
        <span class="ProBox3-title">{{choiceColorTitle}}</span>
        <div class="ProBox3-color">
          <div v-for="(item, index) in choice" class="colorChoice" :class="item.activeName" v-on:click="choiceColor(index)">
             <q-btn
               round
               :key="item.id"
               v-bind:color="item.color"
               v-bind:icon="item.icon"
               :class="item.avtiveName"  
               style="width:0.48rem;height:0.48rem;display:flex;align-items:center;"
             />
          </div>
        </div>
      </div>
      <div class="ProBox4" v-for="(item, index) in memory">
        <span class="ProBox4-title">{{item.title}}</span>
        <div class="ProBox4-btn">
          <q-btn outline class="memoryBtGroup" v-for="(size, index) in item.size" :class="size.checked" @click="checkMemory(index)" :key="size.id">{{size.sizeNum}} </q-btn>
        </div>
      </div>
      <div class="ProBox5">
        <span class="ProBox5-title">Primary - 198 Bundle</span>
        <div class="ProBox5-mo">
          <span class="ProBox5-mo-price">$198 /mo.</span>
          <span class="ProBox5-mo-data">Voice: 300 min, SMS: unlimited, Data: 20 GB</span>
        </div>
        <div class="ProBox5-btn">
          <q-btn outline class="primaryBtGroup" v-for="(item, index) in primaryBtn" :class="item.checked" @click="primaryBtnC(index)" :key="item.id">{{item.sizeNum}} </q-btn>
        </div>
      </div>
      <div class="ProBox6">
        <span class="ProBox6-title">Quantity</span>
        <div class="itemNumber">
          <!-- <button class="itemNumberBtn" :disabled="item.disabled" @click="reduceChangeNum(index, item.itemNumber, item.disabled)">-</button> -->
          <input name="ProNumber" v-model="productInfs.itemNumber" type="text" onFocus="this.value=''" class="ProNumber">
          <!-- <button class="itemNumberBtn" @click="addChangeNum(index, item.itemNumber, item.disabled)">+</button> -->
        </div>
      </div>
    </div>
    <div class="productsFooter">
      <div class="productsFooter-left">
        <i class="smile"></i>
      </div>
      <div class="productsFooter-middle">
        <span class="productsFooter-middle-btn">Add to bag</span>
      </div>
      <div class="productsFooter-right">
        <span class="productsFooter-right-btn">Buy Now</span>
      </div>
    </div>
  </div>
</template>
<script>
import {
  QLayout,
  QSideLink,
  QRating,
  QScrollArea,
  QBtn,
  QIcon
} from 'quasar'
import allData from 'data/allData.json'
export default {
  components: {
    QLayout,
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
      userId: '',
      banner: {
        top: {
          page: 1,
          total: 4,
          data: [
            {
              image: './statics/mobileImages/products/ProBanner1.png'
            },
            {
              image: './statics/mobileImages/products/ProBanner2.png'
            },
            {
              image: './statics/mobileImages/products/ProBanner3.png'
            },
            {
              image: './statics/mobileImages/products/ProBanner4.png'
            },
            {
              image: './statics/mobileImages/products/ProBanner5.png'
            }
          ]
        }
      },
      ratingModel: 4,
      smallImgs: [
        {'src': 'statics/images/ProductContent/1.jpg', 'id': 'src1', 'smImg': 'smImg', 'activeOpacity': 1},
        {'src': 'statics/images/ProductContent/2.jpg', 'id': 'src2', 'smImg': 'smImg', 'activeOpacity': 0.5},
        {'src': 'statics/images/ProductContent/3.jpg', 'id': 'src3', 'smImg': 'smImg', 'activeOpacity': 0.5},
        {'src': 'statics/images/ProductContent/4.jpg', 'id': 'src4', 'smImg': 'smImg', 'activeOpacity': 0.5},
        {'src': 'statics/images/ProductContent/5.jpg', 'id': 'src5', 'smImg': 'smImg', 'activeOpacity': 0.5}
      ],
      links: [
        {'href': '/ProductMenu/Overview', 'label': 'OVERVIEW', 'id': '1'},
        {'href': '/ProductMenu/Gallery', 'label': 'GALLERY', 'id': '2'},
        {'href': '/ProductMenu/TechSpec', 'label': 'TECH SPEC', 'id': '3'},
        {'href': '/ProductMenu/Reviews', 'label': 'REVIEWS', 'id': '4'}
      ],
      productInfs: {
        title: 'Apple iPhone X Space Gray 256GB + 198 Bundle',
        discrip: 'ETVR Upgraded 3D VR Glasses for Movies and Games with Stereo Headphone - More Lightweight Virtual Reality Headset with 120 Degree FOV - Fit for 4.7"-6.2" iPhone & Android Smartphones',
        reson: 'Average based on 1108 reviews',
        itemNumber: 1
      },
      choiceColorTitle: `Color - Black`,
      choice: [
        {
          'id': '1',
          'color': 'dark',
          'icon': '',
          'activeName': 'activeName'
        },
        {
          'id': '2',
          'color': 'blue-6',
          'icon': '',
          'activeName': ''
        },
        {
          'id': '3',
          'color': 'brown-6',
          'icon': '',
          'activeName': ''
        },
        {
          'id': '4',
          'color': 'grey-8',
          'icon': '',
          'activeName': ''
        },
        {
          'id': '5',
          'color': 'grey-13',
          'icon': '',
          'activeName': ''
        }
      ],
      memory: [
        {
          'title': 'Memory',
          'size': [
            {
              'id': 1,
              'sizeNum': '64 GB',
              'checked': 'checked'
            },
            {
              'id': 2,
              'sizeNum': '256 GB',
              'checked': ''
            }
          ]
        }
      ],
      primary: [
        {
          'title': 'Primary',
          'primary': [
            {
              'id': 1,
              'primaryDec': '222'
            }
          ]
        }
      ],
      OneTimeFeeValue: '$1299',
      MonthlyFeeValue: '$198',
      num: 0,
      num1: 0,
      num2: 0,
      lickChecked: false,
      priceChecked: false,
      shareChecked: false,
      share1: [
        {'name': 'thumb_up', 'id': '1'},
        {'name': 'ion-heart', 'id': '2'},
        {'name': 'fa-facebook-f', 'id': '3'}
      ],
      share: [
        {'name': 'favorite_border', 'id': '1'},
        {'name': 'swap_vert', 'id': '2'},
        {'name': 'open_in_new', 'id': '3'}
      ],
      bigImageSrc: 'statics/images/ProductContent/big0.jpg',
      primaryBtn: [
        {
          'id': 1,
          'sizeNum': '64 Bundle',
          'checked': 'checked'
        },
        {
          'id': 2,
          'sizeNum': '256 Bundle',
          'checked': ''
        },
        {
          'id': 3,
          'sizeNum': '256 Bundle',
          'checked': ''
        },
        {
          'id': 4,
          'sizeNum': '256 Bundle',
          'checked': ''
        },
        {
          'id': 5,
          'sizeNum': '256 Bundle',
          'checked': ''
        }
      ]
    }
  },
  methods: {
    sildeLeft () {
      let page = this.banner.top.page
      this.banner.top.page = (page-- <= 1 ? 1 : page)
      console.log(this.banner.top.page)
    },
    sildeRight () {
      let page = this.banner.top.page
      let total = this.banner.top.total
      this.banner.top.page = (page++ >= total ? total : page)
      console.log(this.banner.top.page)
    },
    checkMemory: function (index) {
      var temp = this.memory
      for (var i = temp.length - 1; i >= 0; i--) {
        var tempSize = temp[i].size
      }
      for (var j = tempSize.length - 1; j >= 0; j--) {
        tempSize[this.num].checked = 'checked'
        if (this.num !== index) {
          // console.log(tempSize[j])
          tempSize[this.num].checked = ''
          this.num = index
        }
      }
    },
    choiceColor: function (index) {
      this.choice[index].activeName = 'activeName'
      if (this.num1 !== index) {
        this.choice[this.num1].activeName = ''
        this.num1 = index
      }
    },
    primaryBtnC: function (index) {
      this.primaryBtn[index].checked = 'checked'
      if (this.num2 !== index) {
        this.primaryBtn[this.num2].checked = ''
        this.num2 = index
      }
    },
    changeBigImg: function (imgIndex) {
      this.bigImageSrc = `statics/images/ProductContent/big` + imgIndex + `.jpg`
      for (var i = this.smallImgs.length - 1; i >= 0; i--) {
        this.smallImgs[imgIndex].activeOpacity = 1
        // console.log(this.smallImgs[imgIndex].activeOpacity)
        if (imgIndex !== i) {
          this.smallImgs[i].activeOpacity = 0.5
        }
      }
    },
    icoLike: function (event) {
      if (this.lickChecked) {
        event.target.className = 'ico_like'
        this.lickChecked = false
      }
      else {
        event.target.className = 'ico_liked'
        this.lickChecked = true
      }
    },
    ico_priced: function (event) {
      if (this.priceChecked) {
        event.target.className = 'ico_price'
        this.priceChecked = false
      }
      else {
        event.target.className = 'ico_priced'
        this.priceChecked = true
      }
    },
    ico_shared: function (event) {
      if (this.lickChecked) {
        event.target.className = 'ico_share'
        this.lickChecked = false
      }
      else {
        event.target.className = 'ico_shared'
        this.lickChecked = true
      }
    },
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
    itemNumberChange () {
      this.mathTotal()
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
  }
}
</script>
<style lang="stylus">
.products
  position relative
  width 100%
  overflow hidden
  .TopBanner
    width 100%
    position relative
    .bannerBg
      width 100%
      height 100%
      .bannerAttr
        height 1.2rem
        display flex
        flex-direction column
        position absolute
        left .4rem
        bottom 2.08rem
        z-index 100
        >div
          height .6rem
          display flex
          // font-family 'Helvetica Neue'
          &:first-child
            align-items flex-start;
          &:last-child
            align-items flex-end;
        .attrName
          color #252525
          font-size .64rem
          font-family 'HelveticaNeue Bold'
        .attrPrice
          color #252525
          font-size .32rem
        .attrType
          padding-left .2rem
          color #fff
          font-size .32rem
    .tools
      width calc(100% - .8rem)
      height .64rem
      display flex
      justify-content space-between
      position absolute
      left 5.6rem
      right .4rem
      bottom .76rem
      z-index 200
      >div
        display flex
        font-family 'HelveticaNeue Bold'
        &:last-child>span
          width .64rem
          height .64rem
          cursor pointer
        .p-lt
            background url('~statics/mobileImages/home/ico_left.png') center no-repeat
            background-size 100% 100%
            margin-right .24rem
        .p-rt
            background url('~statics/mobileImages/home/ico_right.png') center no-repeat
            background-size 100% 100%
  .productsDIV
    margin-top 0rem
    font-size 0.28rem
    position relative
    width 100%
    padding 0 0.24rem
    padding-bottom 1.12rem
    .ProBox1
      width 100%
      border-bottom 1px solid #e5e5e5
      display flex
      flex-direction row
      justify-content space-between
      .ProBox1-left
        display flex
        flex-direction column
        width 80%
        padding 0 0.2rem
        line-height 1.4
        .ProBox1-left-name
          font-size .32rem
          font-weight bolder
          color #252525
        .stars
          padding .14rem 0
          i
            font-size .52rem
            text-shadow 0 0 0 white
            margin 0
            color #f5f5f5
            opacity 1
            &.active
              color #ffe56b
        .ProBox1-left-reson
          font-size 0.28rem
          color #bcbcbc
      .ProBox1-right
        display flex
        justify-content flex-end
        padding 0 0.2rem
        li
          width 0.48rem
          height 0.48rem
          cursor pointer
          padding-bottom 0.68rem
        .icon-like
          background url("~/statics/mobileImages/products/ico_like.png") center / 100% no-repeat
          &:hover
            background url("~/statics/mobileImages/products/ico_like2.png") center / 100% no-repeat
          &.active
            background url("~/statics/mobileImages/products/ico_like2.png") center / 100% no-repeat
        .icon-compare
          background url("~/statics/mobileImages/products/ico_compare.png") center / 100% no-repeat
        .icon-share
          background url("~/statics/mobileImages/products/ico_share.png") center / 100% no-repeat
    .ProBox2
      width 100%
      border-bottom 1px solid #e5e5e5
      display flex
      flex-direction row
      justify-content flex-start
      padding 0.16rem 0
      .ProBox2-left
        display flex
        flex-direction column
        width 2.6rem
        padding 0 0 0 0.2rem
        line-height 1.4
        font-size .28rem
        font-weight bold
        border-right 1px solid #e5e5e5
        .ProBox2-left-title
          color #666666
        .ProBox2-left-price 
          color #252525
      .ProBox2-right
        display flex
        flex-direction column
        padding 0 0rem 0 0.2rem
        line-height 1.4
        font-size .28rem
        font-weight bold
        margin-left 0.28rem
        .ProBox2-right-title
          color #666666
        .ProBox2-right-price 
          color #252525
    .ProBox3
      width 100%
      display flex
      flex-direction column
      justify-content flex-start
      padding 0.2rem 0
      .ProBox3-title
        color #666666
        font-size .28rem
        font-weight bold
        padding 0 0.2rem
        width 100%
      .ProBox3-color
        display flex
        flex-direction row
        width 100%
        padding 0.42rem 0.2rem 0.12rem 0.2rem
        .colorChoice
          width .64rem
          height .64rem
          margin-right calc(10/1920*100vw)
          border-radius 50%
          float left
          display flex
          align-items center
          justify-content center
          margin-right .36rem
        .q-btn-standard
          min-height 0px
        .colorChoice > .q-btn-round
          border-radius 50%
          padding 0
          box-shadow none
        .activeName
          border 1px solid #6dd6a9
    .ProBox4
      width 100%
      display flex
      flex-direction column
      justify-content flex-start
      padding 0.24rem 0
      .ProBox4-title
        color #666666
        font-size .28rem
        font-weight bold
        padding 0 0.2rem 0.2rem
        width 100%
      .ProBox4-btn
        display flex
        flex-direction row
        flex-wrap wrap
        padding 0 0.2rem
        .memoryBtGroup
          width 3.16rem
          height .88rem
          color #b2b2b2
          font-size .28rem
          border-radius 6px
          margin 0.2rem 0.2rem 0 0
          &:nth-child(2n)
            margin-right 0px
        .checked
          font-weight bold
          border 1px solid #6dd6a9
          color #424242 !important
     .ProBox5
      width 100%
      display flex
      flex-direction column
      justify-content flex-start
      padding 0.24rem 0
      .ProBox5-title
        color #666666
        font-size .28rem
        font-weight bold
        padding 0 0.2rem 0.2rem
        width 100%
      .ProBox5-mo
        height 1.62rem
        background #f9f9f9
        font-size .28rem
        margin 0.2rem 0.2rem 0
        display flex
        flex-direction column
        justify-content center
        .ProBox5-mo-price
          color #252525
          font-weight bolder
          margin-left .4rem
          line-height 1.6
        .ProBox5-mo-data
          color #666666
          margin-left .4rem
          line-height 1.6
      .ProBox5-btn
        display flex
        flex-direction row
        flex-wrap wrap
        padding 0 0.2rem
        .primaryBtGroup
          width 3.16rem
          height .88rem
          color #b2b2b2
          font-size .28rem
          border-radius 6px
          margin 0.2rem 0.2rem 0 0
          &:nth-child(2n)
            margin-right 0px
        .checked
          font-weight bold
          border 1px solid #6dd6a9
          color #424242 !important
    .ProBox6
      width 100%
      display flex
      flex-direction column
      justify-content flex-start
      padding 0.24rem 0
      .ProBox6-title
        color #666666
        font-size .28rem
        font-weight bold
        padding 0 0.2rem 0.2rem
        width 100%
      .itemNumber
        display flex
        flex-direction row
        padding 0 0.2rem
        .ProNumber
          width 3.16rem
          height .86rem
          border 1px solid #e5e5e5
          text-align center
          border-radius 6px
          font-size .28rem
  .productsFooter
    position fixed
    bottom 0px
    display flex
    flex-direction row
    width 100%
    height 1.12rem
    .productsFooter-left
      width 28.5%
      display flex
      justify-content center
      align-items center
      background #f5f5f5
      i
        width 0.48rem
        height 0.48rem
        cursor pointer
      .smile
        background url("~/statics/mobileImages/products/smile.png") center / 100% no-repeat
    .productsFooter-middle
      width 38.5%
      display flex
      justify-content center
      align-items center
      background #252525
      text-transform Uppercase
      .productsFooter-middle-btn
        color #fff
        font-size .28rem
        font-weight bold
    .productsFooter-right
      width 33%
      display flex
      justify-content center
      align-items center
      background #6dd6a9
      text-transform Uppercase
      .productsFooter-right-btn
        color #fff
        font-size .28rem
        font-weight bold
</style>