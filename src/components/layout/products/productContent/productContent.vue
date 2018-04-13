<template>
  <q-layout ref="layout" view="hHh lpr fff" class="row no-wrap PDbox">
    <div slot="left" style="width: 64vw;height:100%;background: #d8ecf4;" class="row no-wrap justify-between leftSmallItem">
      <div class="smallPic">
        <div style="padding-bottom: calc(0/1920*100vw); margin-top: calc(300/1920*100vw);">
          <img
            :class="smallImg.smImg"
            :style="{opacity:smallImg.activeOpacity}"
            v-for="(smallImg, imgIndex) in smallImgs"
            :src="smallImg.src" class="responsive"
            v-on:mouseover="changeBigImg(imgIndex)"
          />
        </div>
        <div>
          <q-side-link
            class="linkName"
            v-for="link in links"
            :key="link.id"
            :to="link.href"
          >
            {{link.label}}
          </q-side-link>
        </div>
      </div>
      <div class="bigPic row justify-center items-end" style="width: 58.9vw;">
        <img v-bind:src="bigImageSrc" class="responsive" />
      </div>
    </div>
    <div slot="right" class="row right" style="padding-top:calc(125/1920*100vw);margin-right:calc(30/1920*100vw);height:calc(100% - 260/1920*100vw);">
      <div style="width: clac(516/1920*100vw);display:flex;flex-direction:column;">
        <div v-for="productInf in productInfs" style="border-bottom:1px solid #e5e5e5;">
          <p style="font-size: 32px; color: #252525;font-family:'Myriad Pro';font-weight:bold;">{{productInf.title}}</p>
          <p style="font-size:14px;font-family:'Myriad Pro';color:#999999;">{{productInf.discrip}}</p>
          <div class="stars">
            <q-rating v-model="ratingModel" readonly :max="5" size="calc(24/1920*100vw)" />
            <p style="font-size:calc(14/1920*100vw);font-family:'Myriad Pro';color:#bcbcbc;">{{productInf.reson}}</p>
          </div>
          <div style="width:calc(200/1920*100vw);float:right;position:relative;
          right:calc(15/1920*100vw);bottom:calc(45/1920*100vw);">
            <!-- <i class="material-icons" style="margin:0 calc(15/1920*100vw);font-size:calc(24/1920*100vw);" v-for="share in share" :key="share.id">{{share.name}}</i> -->
            <i class="ico_like" @click="icoLike"></i>
            <i class="ico_price" @click="ico_priced"></i>
            <i class="ico_share" @click="ico_shared"></i>
          </div>
          
        </div>

        <div class="scroll-box" style="height:100%;width:100%;overflow-y:hidden;">
          <q-scroll-area style="height:100%;">
            <div style="margin-bottom: calc(25/1920*100vw); padding: calc(15/1920*100vw);">
              <p style="font-family:'HelveticaNeue';font-weight:300;">{{choiceColorTitle}}</p>
              <div v-for="(item, index) in choice" class="colorChoice" :class="item.activeName" v-on:click="choiceColor(index)">
                <q-btn
                  round
                  :key="item.id"
                  v-bind:color="item.color"
                  v-bind:icon="item.icon"
                  :class="item.avtiveName"  
                  style="width:24px;height:24px;display:flex;justify-content:center;align-items:center;"
                />
              </div>
              
            </div>
            <div class="memoryStyle" v-for="(item, index) in memory">
              <p style="font-family:'HelveticaNeue';font-weight:300;margin-top:4px;">{{item.title}}</p>
              <q-btn outline class="memoryBtGroup" v-for="(size, index) in item.size" :class="size.checked" @click="checkMemory(index)" :key="size.id">{{size.sizeNum}} </q-btn>
            </div>
            <div style="margin-bottom: calc(25/1920*100vw); padding: calc(15/1920*100vw);">
               <p style="font-family:'HelveticaNeue'; font-weight:300;">Primary - 198 Bundle</p>
               <div style="width: calc(580/1920*100vw);height:calc(52/1920*100);;background: #f9f9f9;display:flex;justify-content:flex-start;align-items:center;padding:calc(15/1920*100vw) 0;">
                 <span style="color: #252525; font-size: calc(14/1920*100vw); font-weight:bold; margin:0 calc(30/1920*100vw);">$198 /mo.</span>
                 <span>Voice: 300 min, SMS: unlimited, Data: 20 GB</span>
               </div>
               <div>
                 <q-btn outline class="primaryBtGroup" v-for="(item, index) in primaryBtn" :class="item.checked" @click="primaryBtnC(index)" :key="item.id">{{item.sizeNum}} </q-btn>
               </div>
            </div>
          </q-scroll-area>
        </div>
        
      </div>

      <div style="width: clac(516/1920*100vw);margin-left: calc(60 / 1920 * 100vw);position:fixed;bottom:calc(50/1920*100vw);">
          <div class="free row" style="border-top: 1px solid #e5e5e5; border-bottom: 1px solid #e5e5e5; width: 100%;">
            <div style="margin: calc(20/1920*100vw) 0; padding: 0 calc(140/1920*100vw) 0 calc(52/1920*100vw); border-right: 2px solid #e5e5e5">
              <span style="display: block;">One Time Fee</span>
              <span style="color: #252525; font-size: calc(24/1920*100vw);line-height: calc(40/1920*100vw); font-weight:bold;">{{OneTimeFeeValue}}</span>
            </div>
            <div style="margin: calc(20/1920*100vw) 0; padding: 0 calc(52/1920*100vw);">
              <span style="display: block;">Monthly Fee</span>
              <span style="color: #252525; font-size: calc(24/1920*100vw);line-height: calc(40/1920*100vw); font-weight:bold;">{{MonthlyFeeValue}}</span>
            </div>
          </div>
          <div class="row" style="padding-top: calc(32/1920*100vw);">
            <router-link to="/Market/Shoppingbag">
              <input type="button" class="addTo" value="ADD TO BAG" >
            </router-link>
            <router-link to="/Market/Checkout">
              <input type="button" class="buyNow" value="BUY NOW" >
            </router-link>
          </div>
        </div>
    </div>
    
  </q-layout>
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
      productInfs: [{
        'title': 'Huawei VR 2 Pro',
        'discrip': 'ETVR Upgraded 3D VR Glasses for Movies and Games with Stereo Headphone - More Lightweight Virtual Reality Headset with 120 Degree FOV - Fit for 4.7"-6.2" iPhone & Android Smartphones',
        'reson': 'Average based on 1108 reviews'}
      ],
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
    }
  }
}
</script>
<style lang="stylus">
.PDbox
  font-size calc(14/1920*100vw)
  color #666666
  .layout-aside-left
    width 64vw
  .layout-aside-right
    width 36vw
  .leftSmallItem > div:nth-child(1)
    margin-left calc(56/1920*100vw)
  .linkName
    width calc(80/1920*100vw)
    color #fff
    font-weight bold
    cursor pointer
    margin calc(20/1920*100vw) 0
  .linkName:hover
    color #252525
  .right > div
    margin-left calc(60/1920*100vw)
  .radio
    width calc(60/1920*100vw)
    height calc(30/1920*100vw)
    display inline-block
    background red
    position relative
  .radio input
    width calc(60/1920*100vw)
    height calc(30/1920*100vw);
    position absolute
  .share
    margin calc(10/1920*100vw) 0
  .stars
    width calc(300/1920*100vw)
  .activeName
    border 1px solid #6dd6a9
  .checked
    font-weight bold
    border 1px solid #6dd6a9
    color #424242 !important
  .smImg
    display block
    margin calc(25/1920*100vw) 0
    cursor pointer
    with calc(64/1920*100vw)
    height calc(64/1920*100vw)
  .q-btn-standard
    // border 1px solid currentColor
    min-height 0
  .smallPic
    position fixed
    bottom calc(75/1920*100vw)
  .primaryBtGroup
    width calc(133/1920*100vw)
    min-height 36px;
    height calc(42/1920*100vw)
    color #b2b2b2
    font-size calc(16/1920*100vw)
    display inline-block
    margin calc(15/1920*100vw) calc(15/1920*100vw) 0 0
    border-radius calc(5/1920*100vw)
  .memoryStyle
    margin-bottom calc(25/1920*100vw)
    padding calc(15/1920*100vw)
  .memoryBtGroup
    width calc(104/1920*100vw)
    height calc(46/1920*100vw)
    min-height 36px
    color #b2b2b2
    font-size calc(15/1920*100vw)
    display inline-block
    margin-right calc(25/1920*100vw)
    border-radius calc(5/1920*100vw)
  .ico_like, .ico_price, .ico_share
    display inline-block
    width calc(30/1920*100vw)
    height calc(30/1920*100vw)
    margin 0 calc(15/1920*100vw)
    cursor pointer
  .ico_like
    background url("~statics/images/ProductContent/ico_like.png") center center no-repeat
    background-size calc(24/1920*100vw) calc(20/1920*100vw)
  .ico_liked
    display inline-block
    width calc(30/1920*100vw)
    height calc(30/1920*100vw)
    margin 0 calc(15/1920*100vw)
    cursor pointer
    background url("~statics/images/ProductContent/ico_liked.png") center center no-repeat
    background-size calc(24/1920*100vw) calc(20/1920*100vw)
  .ico_price
    background url("~statics/images/ProductContent/ico_price.png") center center no-repeat
    background-size calc(24/1920*100vw) calc(20/1920*100vw)
  .ico_priced
    display inline-block
    width calc(30/1920*100vw)
    height calc(30/1920*100vw)
    margin 0 calc(15/1920*100vw)
    cursor pointer
    background url("~statics/images/ProductContent/ico_price.png") center center no-repeat
    background-size calc(24/1920*100vw) calc(20/1920*100vw)
    background-color #ffb2e1
  .ico_share
    background url("~statics/images/ProductContent/ico_share.png") center center no-repeat
    background-size calc(24/1920*100vw) calc(20/1920*100vw)
  .ico_shared
    display inline-block
    width calc(30/1920*100vw)
    height calc(30/1920*100vw)
    margin 0 calc(15/1920*100vw)
    cursor pointer
    background url("~statics/images/ProductContent/ico_share.png") center center no-repeat
    background-size calc(24/1920*100vw) calc(20/1920*100vw)
    background-color #ffb2e1
  .colorChoice
    width 32px
    height 32px
    margin-right calc(10/1920*100vw)
    border-radius 50%
    float left
    display flex
    align-items center
    justify-content center
  .colorChoice > .q-btn-round
    border-radius 50%
    padding 0
    box-shadow none
  .addTo
    width calc(270/1920*100vw)
    height calc(65/1920*100vw)
    background #fff
    color #000
    font-size calc(24/1920*100vw)
    outline none
    border-radius calc(50/1920*100vw)
    border 1px solid #e5e5e5
    font-weight bold
    margin-right calc(40/1920*100vw)
  .buyNow
    width calc(270/1920*100vw)
    height calc(65/1920*100vw)
    background #6dd6a9
    color #fff
    font-size calc(24/1920*100vw)
    border none
    outline none
    border-radius calc(50/1920*100vw)
    font-weight bold
</style>
