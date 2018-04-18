<template>
  <div class="mobileHome">
    <div class="TopBanner">
      <div class="bannerBg" v-for="(item, index) in banner.top.data" v-if="(index+1)===banner.top.page">
        <img :src="item.image" width="100%" height="100%">
        <div class="bannerAttr">
          <div><span class="attrName">{{ item.attr.name }}</span></div>
          <div><span class="attrPrice">${{ item.attr.price }}</span><span class="attrType">{{ item.attr.type }}</span></div>
        </div>
      </div>
      <div class="tools">
        <div><span class="buy">BUY</span></div>
        <div class="pagination"><span class="p-lt" @click="sildeLeft"></span><span class="p-rt" @click="sildeRight"></span></div>
      </div>
    </div>
    <div class="NewProducts">
      <div class="title"><span>New Products</span></div>
      <div class="content">
        <div class="new" v-for="item in products.new.data">
          <div><img :src="item.image" height="100%"></div>
          <div><span class="newName">{{ item.attr.name }}</span></div>
          <div><span class="newPrice">${{ item.attr.price }}</span><span class="newType">{{ item.attr.type }}</span></div>
        </div>
      </div>
    </div>
    <div class="FeaturedProducts">
      <div class="title"><span>Featured Products</span></div>
      <div class="content">
        <div class="featured" v-for="item in products.featured.data">
          <div><img :src="item.image" width="100%" height="100%"></div>
          <div class="featuredAttr">
            <div><span class="featuredName">{{ item.attr.name }}</span></div>
            <div><span class="featuredPrice" style="margin-right: .2rem">${{ item.attr.price }}</span><span class="featuredType" style="color: #c1c0bf">{{ item.attr.type }}</span></div>
            <div><span class="featuredDesc">{{ item.attr.desc }}</span></div>
            <div><span class="explore">EXPLORE</span><span class="buy">BUY</span></div>
          </div>
        </div>
      </div>
    </div>
    <div class="seeMore">
      <router-link to="/market/search"><span>SEE ALL PRODUCTS</span><span style="font-size: .64rem; margin-top: -0.1rem;">+</span></router-link>
    </div>
    <div class="other">
      <div><span>Join the Commerce Family</span></div>
      <div><span>Don’t sleep on all the latest from Commerce.</span></div>
      <div class="inputDiv">
        <div>
          <input class="infoInput" type="text" placeholder="Enter your Phone Number" v-model="userId">
        </div>
        <div>
          <span class="infoBtn">SIGN UP</span>
          <span class="ico-infoBtn">></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userId: '',
      banner: {
        top: {
          page: 1,
          total: 4,
          data: [
            {
              image: './statics/mobileImages/home/TopBanner1.jpg',
              attr: {
                name: 'Beo Play M5',
                type: 'Accessories',
                price: 709
              }
            },
            {
              image: './statics/mobileImages/home/TopBanner2.jpg',
              attr: {
                name: 'Beo Play M4',
                type: 'Accessories',
                price: 609
              }
            },
            {
              image: './statics/mobileImages/home/TopBanner3.jpg',
              attr: {
                name: 'Beo Play M3',
                type: 'Accessories',
                price: 509
              }
            },
            {
              image: './statics/mobileImages/home/TopBanner4.jpg',
              attr: {
                name: 'Beo Play M2',
                type: 'Accessories',
                price: 409
              }
            }
          ]
        }
      },
      products: {
        new: {
          data: [
            {
              image: './statics/mobileImages/home/new1.png',
              attr: {
                name: 'Huawei Mate 10',
                price: 1029,
                type: 'Phone'
              }
            },
            {
              image: './statics/mobileImages/home/new2.png',
              attr: {
                name: 'Plwats Please E-Book',
                price: 12,
                type: 'E-Books'
              }
            }
          ]
        },
        featured: {
          data: [
            {
              image: './statics/mobileImages/home/pic_featured1.jpg',
              attr: {
                name: 'Huawei Mate 10',
                price: 1029,
                type: 'Phone',
                desc: 'The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.'
              }
            },
            {
              image: './statics/mobileImages/home/pic_featured2.jpg',
              attr: {
                name: 'Live in Color',
                price: 1029,
                type: 'Plans',
                desc: 'The Beats Neighborhood Collection appeared inspired by the cities where they dream for the creator of today and tomorrow, for everyone who continues to challenge.'
              }
            },
            {
              image: './statics/mobileImages/home/pic_featured3.jpg',
              attr: {
                name: 'iPhone 8 + 198 Bundle',
                price: 1029,
                type: 'Contract Phone',
                desc: 'The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.'
              }
            }
          ]
        }
      }
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
    }
  }
}
</script>

<style lang="stylus">
.mobileHome
  width 100vw
  max-width 100%
  min-height 100vh
  .TopBanner
    width 100%
    height 100vh
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
      left .4rem
      right .4rem
      bottom .5rem
      z-index 200
      >div
        display flex
        font-family 'HelveticaNeue Bold'
        &:first-child>span
          width 2rem
          height .64rem
          color #252525
          font-size .24rem
          background #f3f9fc
          display flex
          justify-content center
          align-items center
          border-radius .32rem
          cursor pointer
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
  .NewProducts, .FeaturedProducts
    width 100%
    display flex
    flex-direction column
    color #252525
    .title
      height 1.22rem
      padding-left .36rem
      font-size .26rem
      font-family 'HelveticaNeue Bold'
      display flex
      align-items center
    .content
      width 100%
      display flex
  .NewProducts>.content
    padding 0 .36rem
    >.new
      width 50%
      display flex
      flex-direction column
      align-items center
      >div
        width 100%
        display flex
        align-items center
        justify-content center
        &:nth-child(1)
          height 3.6rem
          >img
            width auto
            height 2.76rem
        &:nth-child(2)
          width 70%
          height 1.2rem
          align-items flex-start
          >.newName
            // width 100%
            height 1rem
            font-size .28rem
            font-family 'HelveticaNeue Bold'
            color #252525
            display -webkit-box
            /* autoprefixer: off */ 
            -webkit-box-orient vertical
            /* autoprefixer: on */
            -webkit-line-clamp 3
            overflow hidden
            text-align center
        &:nth-child(3)
          width 70%
          height 1rem
          align-items flex-start
          >.newPrice
            // width 100%
            // height 1rem
            font-size .28rem
            // font-family 'Helvetica Neue'
            color #252525
            text-align center
            padding-right .24rem
          >.newType
            // width 100%
            // height 1rem
            font-size .28rem
            // font-family 'Helvetica Neue'
            color #c1c0bf
            text-align center
  .FeaturedProducts>.content
    flex-direction column
    .featured
      width 100%
      height 111.333vw
      display flex
      flex-direction column
      background #fff
      >div
        width 100%
        display flex
        flex-direction column
        &:first-child
          width 100vw
          height 53.333vw
          justify-content center
          text-align center
          border-bottom 1px solid #f1f1f1
        &:last-child
          width 93.333%
          height 62vw
          background #fff
          margin -.46rem auto 0
          border 1px solid #f1f1f1
      .featuredAttr
        display flex
        // padding .32rem .48rem
        padding 4.266vw 6.4vw
        >div
          display flex
          text-align center
          >span
            display flex
            text-align center
          &:nth-child(1)
            width 100%
            height .48rem
            font-size .32rem
            // font-family 'Helvetica Neue'
            font-weight bold
          &:nth-child(2)
            width 100%
            height .56rem
            font-size .28rem
            // font-family 'Helvetica Neue'
          &:nth-child(3)
            width 100%
            height 1.32rem
            margin-top .16rem
            font-size .28rem
            line-height .32rem
            // font-family 'Helvetica Neue'
            color #b2b2b2
            >.featuredDesc
              width 100%
              height 100%
              text-align left
              display -webkit-box
              /* autoprefixer: off */ 
              -webkit-box-orient vertical
              /* autoprefixer: on */
              -webkit-line-clamp 4
              overflow hidden
          &:nth-child(4)
            width 100%
            height .64rem
            margin-top .64rem
            font-size .28rem
            line-height .32rem
            // font-family 'Helvetica Neue'
            font-weight bold
            justify-content space-between
            >span
              display flex
              justify-content center
              align-items center
              border-radius .32rem
              cursor pointer
              &.explore
                width 40.533vw
                max-width 50%
                height .64rem
                border 2px solid #e5e5e5
                background #fff
                color #252525
              &.buy
                width 35.333vw
                max-width 50%
                height .64rem
                border 2px solid #252525
                background #252525
                color #fff
  .seeMore
    width 100%
    height 2.76rem
    border-bottom 1px solid #e5e5e5
    display flex
    justify-content center
    align-items center
    >a
      width 6.06rem
      height .94rem
      background #252525
      border-radius .47rem
      font-size .32rem
      // font-family 'Helvetica Neue'
      color #fff
      display flex
      justify-content space-between
      align-items center
      padding 0 1.1rem
  .other
    width 100%
    display flex
    flex-direction column
    >div
      display flex
      justify-content center
      align-items center
      >span
        width 90%
        text-align center
      &:nth-child(1)
        height .48rem
        margin-top .48rem
        font-size .32rem
        font-weight bold
        // font-family 'Helvetica Neue'
      &:nth-child(2)
        height .48rem
        margin-bottom .48rem
        font-size .26rem
        // font-family 'Helvetica Neue'
        color #b2b2b2
      &:nth-child(3)
        font-size .26rem
        font-weight bold
        // font-family 'Helvetica Neue'
        border 2px solid #e5e5e5
        border-radius .47rem
    .inputDiv
      width 6.3rem
      height .94rem
      margin 0 auto 1.6rem
      >div
        display flex
        align-items center
        &:nth-child(1)
          width 4.32rem
          height 100%
          padding-left .36rem
          color #252525
          >input
            width 100%
        &:nth-child(2)
          width 1.9rem
          height 100%
          color #252525
          justify-content center
          border-left 2px solid #e5e5e5
          border-radius 0 .47rem .47rem 0
          &:active
            background rgba(37, 37, 37, .1)
        .ico-infoBtn
          width .12rem
          height .2rem
          font-size 0
          margin-left .18rem
          background url('~statics/mobileImages/home/ico_arrow_R.png') center no-repeat
          background-size 100% 100%
</style>
