<template>
  <div class="checkOutDiv">
    <div class="checkOutMain">
      <ul class="menu">
        <li>
          <router-link to="/Market/Checkout/Address">
            <span class="left start">
              <i></i>
              <div>
                <span>Ms. Avery Tian / 18688082158</span>
                <span>219 University Ave, Palo Alto, CA 94301</span>
              </div>
            </span>
            <span class="right"><span></span><i>></i></span>
          </router-link>
        </li>
        <li>
          <router-link to="/market/Commerce">
            <span class="left">Shipping Provider</span>
            <span class="right"><span>shunfeng</span><i>></i></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="checkOutOther">
      <ul class="menu">
        <li>
          <div to="/market/Commerce">
            <span class="left">Bag Subtotal</span>
            <span class="right"><span>$1161.00</span></span>
          </div>
        </li>
        <li>
          <div to="/market/Commerce">
            <span class="left">Freght</span>
            <span class="right"><span>$198.00</span></span>
          </div>
        </li>
        <li>
          <div to="/market/Commerce">
            <span class="left">Fee Shipping</span>
            <span class="right"><span>$0.00</span></span>
          </div>
        </li>
        <li>
          <div to="/market/Commerce">
            <span class="left">Tax</span>
            <span class="right"><span>$0.00</span></span>
          </div>
        </li>
        <li>
          <div to="/market/Commerce">
            <span class="left">Account Decucted</span>
            <span class="right"><span>-$0.00</span></span>
          </div>
        </li>
        <li>
          <div to="/market/Commerce">
            <span class="left"><i class="active"><div></div></i>Invoice</span>
            <span class="right"><i></i></span>
          </div>
        </li>
      </ul>
    </div>
    <div class="checkOutOrder">
      <ul class="main" v-for="items in checkOut.data">
        <li v-for="item in items.children">
          <div>
            <div class="left"><img :src="item.image" width="100%" height="100%"></div>
            <div class="right">
              <div><span class="attrName">{{item.name}}</span><span class="attrNumber">x {{item.number}}</span></div>
              <div><span class="attrPrice">${{item.price}}</span><span class="attrType">{{item.type}}</span></div>
              <div><span class="attrMore"><span v-for="(value, attr) in item.more">{{attr}}: {{value}}</span></span></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="payBtn">
      <div class="left">
        <span>Total:</span>
        <span class="total">${{'1161.00'}}</span>
      </div>
      <div class="right">
        <router-link to="/">SUBMIT</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      checkOut: {
        data: [
          {
            isCombo: true,
            children: [
              {
                image: 'statics/mobileImages/checkOut/1.jpg',
                name: 'Apple iPhone X + 198 Bundle',
                number: 1,
                price: '1290',
                type: 'Device',
                more: {
                  memory: '256 GB',
                  primary: '198 Bundle',
                  color: 'Space gray'
                }
              },
              {
                image: 'statics/mobileImages/checkOut/2.jpg',
                name: '198 Bundle',
                number: 1,
                price: '198.00 /mo.',
                type: 'Plans',
                more: {
                  voice: '300min',
                  SMS: 'unlimited',
                  data: '20GB'
                }
              }
            ]
          },
          {
            isCombo: false,
            children: [
              {
                image: 'statics/mobileImages/checkOut/3.jpg',
                name: 'Plwats Please E-Book',
                number: 1,
                price: '12.00',
                type: 'E-books',
                more: {
                  author: 'Potter, Beatrix',
                  publisher: 'Lerner Publishing Group'
                }
              }
            ]
          }
        ]
      }
    }
  }
}
</script>

<style lang="stylus">
.checkOutDiv
  margin-top 1.76rem
  font-size .28rem
  position relative
  width 100%
  padding 0 .24rem
  >.checkOutMain
    position relative
    z-index 200
    border 1px solid #e5e5e5
    border-top 2px solid #252525
    box-shadow 0 .2rem .4rem rgba(0, 0, 0, .1)
    margin-bottom .4rem
    >.mySelfDiv
      width 100%
      height 1.6rem
      padding 0 .32rem
      margin-top -.48rem
      display flex
      justify-content space-between
      align-items center
      >div
        display flex
        >.heardImage
          width 1.6rem
          height 1.6rem
          border-radius 50%
          margin 0 .2rem
        >.info
          width 3rem
          display flex
          flex-direction column
          justify-content flex-end
          >div
            &:last-child
              width 100%
              height .16rem
              margin .32rem 0 .1rem
              background #f5f5f5
              border-radius .08rem
            >.infoName
              font-weight bold
            >.inforank
              background #252525
              color #fff
              font-weight bold
              border-radius .04rem
              margin-left .24rem
              padding .08rem .12rem
            >.rankProgress
              display flex
              height 100%
              background #69d7a8
              border-radius .08rem
      >i
        width .48rem
        height .48rem
        cursor pointer
    >.menu
      display flex
      flex-direction column
      padding-top .2rem
      >li
        display flex
        justify-content space-between
        align-items center
        padding 0 .16rem
        &:last-child>a
          height 1rem
          border-bottom none
          padding-bottom 0
        >i
          width .48rem
          height .48rem
        >a
          width 100%
          height 1.28rem
          padding-left .08rem
          padding-bottom .28rem
          border-bottom 2px solid #e5e5e5
          display flex
          justify-content space-between
          align-items center
          >span
            display flex
            justify-content space-between
            align-items center
            &.start
              align-items flex-start
              max-width calc(100% - .48rem)
            &.left
              font-weight bold
              display flex
              >i
                width .48rem
                height .48rem
                flex-shrink 0
                margin-top .12rem
                margin-right .24rem
                background url('~statics/mobileImages/checkOut/ico_default.png') center / 100% no-repeat
              >div
                display flex
                flex-direction column
                max-width calc(100% - .48rem)
                // width 100%
                >span
                  // width 100%
                  // display flex
                  max-width calc(100% - .12rem)
                  padding .12rem 0
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
            &.right
              color #b2b2b2
              display flex
              justify-content space-between
              align-items center
              min-width .48rem
              flex-shrink 0
              >.node
                padding .08rem
                background #fc2f75
                border-radius 50%
              >.msg
                height .4rem
                background #fc2f75
                color #fff
                padding 0 .16rem
                border-radius .2rem
                display flex
                justify-content center
                align-items center
              >i
                width .12rem
                height .2rem
                margin 0 .08rem 0 .24rem
                background url('~statics/mobileImages/checkOut/ico_arrow_R.png') center / 100% no-repeat
  >.checkOutOther
    position relative
    z-index 100
    margin-bottom .4rem
    border 1px solid #e5e5e5
    >.menu
      display flex
      flex-direction column
      >li
        display flex
        justify-content space-between
        align-items center
        // padding 0 .16rem 0 .24rem
        margin 0 .16rem
        border-bottom 2px solid #e5e5e5
        &:last-child
          border none
        >i
          width .48rem
          height .48rem
          margin-left .08rem
        >div
          width 100%
          height 1.16rem
          margin-left .24rem
          display flex
          justify-content space-between
          align-items center
          >span
            display flex
            justify-content space-between
            align-items center
            &.left
              font-weight bold
              color #262628
              >i
                width .48rem
                height .48rem
                border-radius .24rem
                border 2px solid #b2b2b2
                margin-right .24rem
                cursor pointer
                >div
                  width .2rem
                  height .2rem
                  display none
                &.active>div
                  display flex
                  background #252525
                  border-radius .1rem
            &.right
              font-size .26rem
              color #252525
              display flex
              justify-content space-between
              align-items center
              >.node
                padding .08rem
                background #fc2f75
                border-radius 50%
              >.msg
                height .4rem
                background #fc2f75
                color #fff
                padding 0 .16rem
                border-radius .2rem
                display flex
                justify-content center
                align-items center
              >i
                width .12rem
                height .2rem
                margin 0 .08rem 0 .24rem
                background url('~statics/mobileImages/checkOut/ico_arrow_R.png') center / 100% no-repeat
  >.checkOutOrder
    position relative
    z-index 100
    margin-bottom 1.68rem
    border-top 2px solid #e5e5e5
    >.main
      display flex
      flex-direction column
      border-bottom 2px solid #e5e5e5
      >li
        display flex
        justify-content space-between
        align-items center
        // padding 0 .16rem 0 .24rem
        padding 0 .16rem
        // border-bottom 2px solid #e5e5e5
        &:last-child .right
          // border-bottom 2px solid rgba(0, 0, 0, 0)
          border-bottom none
        >div
          width 100%
          height 2.24rem
          display flex
          align-items center
          >div
            display flex
            justify-content space-between
            align-items center
            &.left
              width 1.6rem
              height 1.6rem
              margin-left .24rem
              margin-right .32rem
              flex-shrink 0
            &.right
              max-width calc(100% - 2.16rem)
              // height 1.6rem
              height 100%
              display flex
              justify-content center
              flex-direction column
              border-bottom 2px solid #e5e5e5
              >div
                width 100%
                display flex
                .attrName
                  font-size .28rem
                  font-weight bold
                  color #252525
                  max-width 100%
                  margin-right .16rem
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
                .attrNumber
                  font-size .28rem
                  font-weight bold
                  color #b2b2b2
                  margin-right .16rem
                  flex-shrink 0
                .attrPrice
                  font-size .24rem
                  font-weight bold
                  color #252525
                .attrType
                  font-size .24rem
                  font-weight bold
                  color #b2b2b2
                  margin-left .12rem
                .attrMore
                  font-size .24rem
                  color #666666
                  margin-right .16rem
                  display -webkit-box
                  /* autoprefixer: off */ 
                  -webkit-box-orient vertical
                  /* autoprefixer: on */
                  -webkit-line-clamp 2
                  overflow hidden
                  >span
                    text-transform capitalize
                    &::after
                      content '/'
                      padding-left .08rem
                    &:last-child::after
                      display none
                &:nth-child(1)
                  height .56rem
                  align-items center
                  justify-content space-between
                &:nth-child(2)
                  height .32rem
                  align-items center
                &:nth-child(3)
                  height .64rem
                  align-items center
  >.payBtn
    width 100vw
    max-width 100%
    height 1.12rem
    position fixed
    left 0
    bottom 0
    z-index 2000
    background #f5f5f5
    display flex
    justify-content space-between
    align-items center
    >.left
      font-size .28rem
      color #666666
      margin 0 .4rem
      >.total
        font-size .34rem
        font-weight bold
        color #252525
    >.right
      font-size .28rem
      font-weight bold
      width 2.48rem
      height 100%
      display flex
      justify-content center
      align-items center
      >a
        width 100%
        height 100%
        display flex
        justify-content center
        align-items center
        background #6dd6a9
        color #fff
</style>
