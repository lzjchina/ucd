<template>
  <div class="checkOutDiv">
    <div class="checkOutMain">
      <div class="top">
        <ul>
          <li class="active">Payment Method</li>
        </ul>
      </div>
      <ul>
        <li>The order <span class="uuid">1006000005</span> has been created.</li>
        <li>Remaining payment time <span class="time">23:59:25</span></li>
      </ul>
    </div>
    <div class="checkOutOther">
      <ul class="menu">
        <li>
          <div>
            <div class="left"><i :style="{background: `url('statics/mobileImages/payment/ico_card.png') left center / 100% no-repeat`}"></i><span>Credit Card /Debit Card</span></div>
            <div class="right"><i></i></div>
          </div>
          <div class="extend">
            <div class="right"><span>CMB Credit Card (9808)</span><i></i></div>
          </div>
        </li>
        <li>
          <div>
            <div class="left"><i :style="{background: `url('statics/mobileImages/payment/ico_apple.png') left center / 100% no-repeat`}"></i><span>Apple Pay</span></div>
            <div class="right"><i></i></div>
          </div>
        </li>
        <li>
          <div>
            <div class="left"><i :style="{background: `url('statics/mobileImages/payment/ico_paypal.png') left center / 100% no-repeat`}"></i><span>Paypal</span></div>
            <div class="right"><i class="active"></i></div>
          </div>
        </li>
        <li>
          <div>
            <div class="left"><i :style="{background: `url('statics/mobileImages/payment/ico_bitcoin.png') left center / 100% no-repeat`}"></i><span>Bitcoin Pay</span></div>
            <div class="right"><i></i></div>
          </div>
        </li>
      </ul>
    </div>
    <div class="checkOutMore">
      <span>MORE</span><i></i>
    </div>
    <div class="payBtn">
      <div class="left">
        <span>Total:</span>
        <span class="total">${{'1161.00'}}</span>
      </div>
      <div class="right">
        <router-link to="/">PAY</router-link>
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
    >.top
      width 100%
      height .48rem
      margin-top -.48rem
      >ul
        display flex
        >li
          font-size .26rem
          color #b2b2b2
          margin-right .6rem
          cursor pointer
        >.active
          font-weight bold
          color #252525
    >ul
      padding .2rem
      font-size .28rem
      color #b2b2b2
      >li
        padding .08rem 0
        >.uuid
          color #66bbff
        >.time
          font-weight bold
          color #252525
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
    border-top 2px solid #e5e5e5
    >.menu
      display flex
      flex-direction column
      >li
        display flex
        justify-content space-between
        align-items center
        flex-direction column
        // padding 0 .16rem 0 .24rem
        margin 0 .16rem
        border-bottom 2px solid #e5e5e5
        >i
          width .48rem
          height .48rem
          margin-left .08rem
        >.extend
          width calc(100% - 1.12rem)
          height 1.18rem
          margin-left 1.12rem
          border-top 2px solid #e5e5e5
          >.right
            width 100%
            >span
              font-size .28rem
              color #666666
            >i
              width .12rem
              height .2rem
              margin 0 .08rem 0 .24rem
              border none
              cursor pointer
              background url('~statics/mobileImages/payment/ico_arrow_R.png') center / 100% no-repeat
        >div
          width 100%
          height 1.16rem
          display flex
          justify-content space-between
          align-items center
          >div
            display flex
            justify-content space-between
            align-items center
            &.left
              font-weight bold
              color #262628
              >i
                width .80rem
                height .48rem
                margin 0 .08rem
              >span
                margin-left .24rem
                // >div
                //   width .2rem
                //   height .2rem
                //   display none
                // &.active>div
                //   display flex
                //   background #252525
                //   border-radius .1rem
            &.right
              font-size .26rem
              color #252525
              display flex
              justify-content space-between
              align-items center
              // >i
              //   width .12rem
              //   height .2rem
              //   margin 0 .08rem 0 .24rem
              //   background url('~statics/mobileImages/checkOut/ico_arrow_R.png') center / 100% no-repeat
              >i
                width .48rem
                height .48rem
                border-radius .24rem
                border 2px solid #b2b2b2
                margin 0 .08rem
                cursor pointer
                &.active
                  border none
                  background url('~statics/mobileImages/payment/ico_default.png') center / 100% no-repeat
  >.checkOutMore
    width 100%
    height 1.2rem
    display flex
    justify-content center
    align-items center
    margin-bottom 1.68rem
    >span
      font-size .28rem
      font-weight bold
      color #252525
      cursor pointer
    >i
      width .2rem
      height .12rem
      cursor pointer
      margin-left .24rem
      background url('~statics/mobileImages/payment/ico_arrow_D.png') center / 100% no-repeat
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
