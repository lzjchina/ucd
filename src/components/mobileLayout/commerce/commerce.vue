<template>
  <div class="commerceDiv">
    <div class="commerceMain">
      <div class="mySelfDiv">
        <div>
          <i class="heardImage" :style="{ background: 'url(statics/mobileImages/commerce/heard.png) center top / 100% no-repeat' }"></i>
          <div class="info">
            <div><span class="infoName">Sample Userid</span><span class="inforank">LV5</span></div>
            <div><span class="rankProgress transition" :style="{width: '60%'}"></span></div>
          </div>
        </div>
        <i :style="{ background: 'url(statics/mobileImages/commerce/ico_setting.png) center / 100% no-repeat' }"></i>
      </div>
      <ul class="menu">
        <li>
          <i :style="{ background: 'url(statics/mobileImages/commerce/ico_complete.png) center / 100% no-repeat' }"></i>
          <router-link to="/market/Commerce">
            <span class="left">Contracts Expiration</span>
            <span class="right"><span>2018/04/01</span><i>></i></span>
          </router-link>
        </li>
        <li>
          <i :style="{ background: 'url(statics/mobileImages/commerce/ico_order.png) center / 100% no-repeat' }"></i>
          <router-link to="/Market/Commerce/MyOrder">
            <span class="left">My Order</span>
            <span class="right"><span class="node"></span><i>></i></span>
          </router-link>
        </li>
        <li>
          <i :style="{ background: 'url(statics/mobileImages/commerce/ico_message.png) center / 100% no-repeat' }"></i>
          <router-link to="/market/Commerce">
            <span class="left">Favorites</span>
            <span class="right"><span class="msg">20</span><i>></i></span>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="commerceOther">
        <ul class="menu">
          <li>
            <i :style="{ background: 'url(statics/mobileImages/commerce/ico_favourite.png) center / 100% no-repeat' }"></i>
            <router-link to="/market/Commerce">
              <span class="left">Favorites</span>
              <span class="right"><i>></i></span>
            </router-link>
          </li>
          <li>
            <i :style="{ background: 'url(statics/mobileImages/commerce/ico_history.png) center / 100% no-repeat' }"></i>
            <router-link to="/market/Commerce">
              <span class="left">Browsing History</span>
              <span class="right"><i>></i></span>
            </router-link>
          </li>
          <li>
            <i :style="{ background: 'url(statics/mobileImages/commerce/ico_comments.png) center / 100% no-repeat' }"></i>
            <router-link to="/market/Commerce">
              <span class="left">My Comments</span>
              <span class="right"><i>></i></span>
            </router-link>
          </li>
          <li>
            <i :style="{ background: 'url(statics/mobileImages/commerce/ico_costomer.png) center / 100% no-repeat' }"></i>
            <router-link to="/market/Commerce">
              <span class="left">Customer Service</span>
              <span class="right"><i>></i></span>
            </router-link>
          </li>
        </ul>
    </div>
    <router-link to="/Sign" class="signOut"><span>Sign out</span></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="stylus">
.commerceDiv
  margin-top 1.76rem
  font-size .28rem
  position relative
  width 100%
  padding 0 .24rem
  >.commerceMain
    position relative
    z-index 200
    border 1px solid #e5e5e5
    border-top 2px solid #252525
    box-shadow 0 .2rem .4rem rgba(0, 0, 0, .1)
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
      >li
        display flex
        justify-content space-between
        align-items center
        padding 0 .16rem 0 .24rem
        &:last-child>a
          border-bottom none
        >i
          width .48rem
          height .48rem
        >a
          width 100%
          height 1.16rem
          margin-left .24rem
          border-bottom 2px solid #e5e5e5
          display flex
          justify-content space-between
          align-items center
          >span
            display flex
            justify-content space-between
            align-items center
            &.left
              font-weight bold
            &.right
              color #b2b2b2
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
                background url('~statics/mobileImages/commerce/ico_arrow_R.png') center no-repeat
                background-size 100% 100%
  >.commerceOther
    position relative
    z-index 100
    padding-bottom 1.56rem
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
        >i
          width .48rem
          height .48rem
          margin-left .08rem
        >a
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
            &.right
              color #b2b2b2
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
                background url('~statics/mobileImages/commerce/ico_arrow_R.png') center no-repeat
                background-size 100% 100%
  >.signOut
    width 100%
    padding 0 .24rem
    position fixed
    bottom 0
    left 0
    z-index 300
    background #fff
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
</style>
