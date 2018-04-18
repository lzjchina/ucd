<template>
  <div class="addressDiv">
    <div class="address">
      <div class="main">
        <div class="left">
          <i></i>
          <div class="content">
            <div>
              <span class="name">Ms. Avery Tian</span>&nbsp;/&nbsp;<span class="number">18688082158</span>
            </div>
            <div>
              <span class="address">219 University Ave, Palo Alto, CA 94301</span>
            </div>
          </div>
        </div>
        <i></i>
      </div>
      <div class="main">
        <div class="left">
          <i></i>
          <div class="content">
            <div>
              <span class="name">Ms. Avery Tian</span>&nbsp;/&nbsp;<span class="number">18688082158</span>
            </div>
            <div>
              <span class="address">219 University Ave, Palo Alto, CA 94301</span>
            </div>
          </div>
        </div>
        <i></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
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
.addressDiv
  margin-top 1.76rem
  font-size .26rem
  position relative
  width 100%
  padding 0 .24rem
  .none
    background none !important
    cursor auto !important
  >.address
    >.main
      height 1.5rem
      padding 0 .16rem
      border-top 2px solid #252525
      display flex
      justify-content space-between
      align-items center
      border-bottom 2px solid #e5e5e5
      >.left
        max-width calc(100% - .64rem)
        display flex
        align-items center
        font-size .28rem
        font-weight bold
        color #252525
        >i
          width .48rem
          height .48rem
          margin .08rem
          flex-shrink 0
          cursor pointer
          background url('~statics/mobileImages/address/ico_default.png') center / 100% no-repeat
        >.content
          width calc(100% - .88rem)
          margin-left .24rem
          display flex
          justify-content space-between
          // align-items center
          flex-direction column
          >div
            display flex
            align-items center
            padding .1rem 0
            >span
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
            >.name, >.number
              font-size .28rem
              font-weight bold
              color #252525
            >.address
              font-size .26rem
              font-weight normal
              color #b2b2b2
      >i
        width .48rem
        height .48rem
        margin-left .16rem
        flex-shrink 0
        cursor pointer
        background url('~statics/mobileImages/address/ico_edit.png') center / 100% no-repeat
      >.top
        width 100%
        height .64rem
        margin-top -.64rem
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
