<template>
  <div class="orderDiv">
    <div class="order">
      <div class="main">
        <div class="top">
          <ul>
            <li class="active">All Orders</li>
            <li>Awaiting Payment</li>
            <li>Awaiting Approval</li>
          </ul>
        </div>
        <div class="ordersBigBox">
          <div class="orderBox shadow" v-for="items in orders.running">
            <div class="heard">
              <div>Order ID:<span>{{items.uuid}}</span></div>
              <i>del</i>
            </div>
            <div class="body" v-if="items.data.length>1">
              <div class="imgDiv">
                <img v-for="(item, index) in items.data" v-if="index<3" :src="item.image">
              </div>
              <div class="icoDiv"><i></i></div>
            </div>
            <div class="body" v-if="items.data.length===1" v-for="item in items.data">
              <div class="imgDiv">
                <img :src="item.image">
              </div>
              <div class="attrDiv">
                <span>{{item.attr.name}}</span>
                <span>Color:{{item.attr.color}}</span>
              </div>
              <div class="icoDiv"><i></i></div>
            </div>
            <div class="footer">
              <span>Awaiting payment</span>
              <div>PAY NOW</div>
            </div>
          </div>
          <div class="orderBox" v-for="items in orders.pass">
            <div class="heard">
              <div>Order ID:<span>{{items.uuid}}</span></div>
              <i class="none Cancelled">Cancelled</i>
            </div>
            <div class="body" v-if="items.data.length>1">
              <div class="imgDiv">
                <img v-for="(item, index) in items.data" v-if="index<3" :src="item.image">
              </div>
              <div class="icoDiv"><i></i></div>
            </div>
            <div class="body" v-if="items.data.length===1" v-for="item in items.data">
              <div class="imgDiv">
                <img :src="item.image">
                <div class="attrDiv">
                  <span class="attrName">{{item.attr.name}}</span>
                  <span class="attrColor">Color:<span style="margin-left: .1rem;">{{item.attr.color}}</span></span>
                </div>
              </div>
              <div class="icoDiv"><i></i></div>
            </div>
            <div class="footer">
              <span>The order has been cancelled</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orders: {
        running: [
          {
            uuid: '1000016000000003',
            state: 'awaiting',
            data: [
              {
                image: 'statics/mobileImages/order/1.jpg',
                isCombo: false,
                attr: {
                  uuid: '',
                  name: '',
                  price: 1290,
                  color: '',
                  type: '',
                  brand: '',
                  memory: '',
                  keyWord: '',
                  monthly: 340
                }
              },
              {
                image: 'statics/mobileImages/order/2.jpg',
                isCombo: false,
                attr: {
                  uuid: '',
                  name: '',
                  price: 1290,
                  color: '',
                  type: '',
                  brand: '',
                  memory: '',
                  keyWord: '',
                  monthly: 340
                }
              },
              {
                image: 'statics/mobileImages/order/3.jpg',
                isCombo: false,
                attr: {
                  uuid: '',
                  name: '',
                  price: 1290,
                  color: '',
                  type: '',
                  brand: '',
                  memory: '',
                  keyWord: '',
                  monthly: 340
                }
              }
            ]
          }
        ],
        pass: [
          {
            uuid: '1000016000000005',
            state: 'cancelled',
            data: [
              {
                image: 'statics/mobileImages/order/4.jpg',
                isCombo: false,
                attr: {
                  uuid: '',
                  name: 'Huawei Watch 2 Pro....',
                  price: 1290,
                  color: 'Space gray',
                  type: '',
                  brand: '',
                  memory: '',
                  keyWord: '',
                  monthly: 340
                }
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    jump (val) {
      this.openGo = val
    },
    handleBlur () {
      for (let _type in this.state) {
        for (let _name in this.state[_type]) {
          this.state[_type][_name].blur = true
          // for (let _attr in this.state[_type][_name]) {
          //   this.state[_type][_name].blur = false
          // }
        }
      }
    }
  },
  watch: {
    openGo: function (val) {
      // this.dispatchData(val)
      this.socket.$emit('open-go', val)
    }
  }
}
</script>

<style lang="stylus">
.orderDiv
  margin-top 1.76rem
  font-size .26rem
  position relative
  width 100%
  padding 0 .24rem
  .none
    background none !important
    cursor auto !important
  .Cancelled
    width auto !important
    cursor pointer !important
    font-size .26rem
    font-style normal
    color #b2b2b2
  >.order
    >.main
      padding .16rem
      border-top 2px solid #252525
      display flex
      flex-direction column
      >.top
        width 100%
        height .64rem
        margin-top -.64rem
        overflow hidden
        >ul
          height .56rem
          display flex
          overflow-x auto
          >li
            font-size .26rem
            color #b2b2b2
            margin-right .6rem
            cursor pointer
            flex-shrink 0
          >.active
            font-weight bold
            color #252525
      >.ordersBigBox
        display flex
        flex-direction column
        font-size .26rem
        >.shadow
          box-shadow 0 0.2rem 0.4rem rgba(0,0,0,0.1)
        >.orderBox
          width 100%
          border 1px solid #e5e5e5
          padding .16rem .24rem
          margin-bottom .36rem
          >.heard
            width 100%
            height .56rem
            display flex
            justify-content space-between
            border-bottom 2px solid #e5e5e5
            >div
              height .48rem
              color #b2b2b2
              display flex
              align-items center
              >span
                margin-left .1rem
                color #666666
            >i
              width .48rem
              height .48rem
              flex-shrink 0
              cursor pointer
              background url('~statics/mobileImages/order/ico_del.png') center / 100% no-repeat
          >.body
            width 100%
            padding .24rem 0
            display flex
            justify-content space-between
            align-items center
            >.imgDiv
              display flex
              >img
                width 1.44rem
                height 1.44rem
                margin-right .16rem
              >.attrDiv
                display flex
                flex-direction column
                >span
                  width 3rem
                  // word-wrap break-word
                  overflow hidden
                  text-overflow ellipsis
                  white-space nowrap
                  padding .12rem 0
                >.attrName
                  font-size .28rem
                  font-weight bold
                  color #252525
                >.attrColor
                  font-size .24rem
                  color #666666
            >.icoDiv
              min-width .64rem
              height 1.44rem
              flex-shrink 0
              display flex
              justify-content center
              align-items center
              >i
                width .48rem
                height .48rem
                cursor pointer
                background url('~statics/mobileImages/order/ico_more.png') center / 100% no-repeat
          >.footer
            width 100%
            height .82rem
            padding-top .16rem
            display flex
            justify-content space-between
            border-top 2px solid #e5e5e5
            >span
              color #666666
              display flex
              align-items center
            >div
              height .64rem
              font-size .28rem
              font-weight bold
              color #fff
              display flex
              justify-content center
              align-items center
              padding 0 .5rem
              border-radius .32rem
              background #69d7a8
              cursor pointer
      >.lableDiv
        height .92rem
        margin .16rem 0
        padding-left .32rem
        border 2px solid #e5e5e5
        display flex
        justify-content space-between
        align-items center
        position relative
        >.error
          position absolute
          right .2rem
          color #f00
          font-weight bold
        >input
          width 100%
        >i
          width .48rem
          height .48rem
          flex-shrink 0
          margin 0 .2rem
          cursor pointer
          background url('~statics/mobileImages/sign/reset.png') center / 100% no-repeat
        >div
          width 2rem
          height 100%
          flex-shrink 0
          margin-left .2rem
          padding .16rem
          border-left 2px solid #e5e5e5
          display flex
          justify-content center
          align-items center
          cursor pointer
          &:active
            background rgba(37, 37, 37, .1)
      >.signIn
        width 100%
        padding .24rem 0
        >span
          width 100%
          height .96rem
          margin .32rem 0 .28rem
          font-size .32rem
          border-radius .48rem
          background #252525
          color #fff
          // font-weight bold
          display flex
          justify-content center
          align-items center
          cursor pointer
      >.signTip
        width 100%
        display flex
        justify-content space-between
        align-items center
        >span
          color #66bbff
          &:last-child
            color #252525
            font-weight bold
            cursor pointer
            display flex
            justify-content space-between
            align-items center
            >i
              width .12rem
              height .2rem
              margin 0 .16rem
              background url('~statics/mobileImages/sign/ico_arrow.png') center / 100% no-repeat
</style>
