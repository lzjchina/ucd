<template>
  <div class="signDiv">
    <div class="signIn" v-if="openGo==='signIn'">
      <div class="main">
        <div class="lableDiv" @hover="state.in.id.blur=false">
          <span class="error" v-if="true&&state.in.id.blur&&state.in.id.errTip">error !</span>
          <input type="text" placeholder="Account Name /Email /Phone Number" @focus="handleBlur(),state.in.id.blur=false" v-model="user.id" >
          <i v-bind:class="{'none':state.in.id.blur||user.id.length===0}" @click="() => {if(!state.in.id.blur){user.id=''}}"></i>
        </div>
        <div class="lableDiv">
          <span class="error" v-if="true&&state.in.password.blur&&state.in.password.errTip">error !</span>
          <input type="password" placeholder="Password" v-model="user.pwd" @focus="handleBlur(),state.in.password.blur=false" >
          <i v-bind:class="{'none':state.in.password.blur||user.pwd.length===0}" @click="() => {if(!state.in.password.blur){user.pwd=''}}"></i>
        </div>
        <div class="lableDiv">
          <span style="transform: translateX(-2rem)" class="error" v-if="true&&state.in.verify.blur&&state.in.verify.errTip">error !</span>
          <input type="text" placeholder="Verification Code" v-model="user.verify" @focus="handleBlur(),state.in.verify.blur=false" >
          <div><img src="~statics/mobileImages/sign/verify.png" width="100%"></div>
        </div>
        <router-link to="/Sign" class="signIn"><span>SIGN IN</span></router-link>
        <div class="signTip"><span>Forget Your Password?</span><span @click="jump('signUp')">SIGN UP<i></i></span></div>
      </div>
      <div class="bottom">
        <div class="bottomDesc">
          <i></i>
          <span>Or sign in via</span>
          <i></i>
        </div>
        <div class="bottomImage"><i></i></div>
      </div>
    </div>
    <div class="signUp" v-if="openGo==='signUp'">
      <div class="main">
        <div class="top">
          <ul>
            <li class="active">Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div class="lableDiv">
          <span class="error" v-if="true&&state.up.id.blur&&state.up.id.errTip">error !</span>
          <input type="text" placeholder="Account Name" @focus="handleBlur(),state.up.id.blur=false" v-model="register.userId" >
          <i v-bind:class="{'none':state.up.id.blur||register.userId.length===0}" @click="() => {if(!state.up.id.blur){register.userId=''}}"></i>
        </div>
        <div class="lableDiv">
          <span class="error" v-if="true&&state.up.number.blur&&state.up.number.errTip">error !</span>
          <input type="text" placeholder="Phone Number" @focus="handleBlur(),state.up.number.blur=false" v-model="register.userPhonenumber" >
          <i v-bind:class="{'none':state.up.number.blur||register.userPhonenumber.length===0}" @click="() => {if(!state.up.number.blur){register.userPhonenumber=''}}"></i>
        </div>
        <div class="lableDiv">
          <span class="error" v-if="true&&state.up.password.blur&&state.up.password.errTip">error !</span>
          <input type="password" placeholder="Password" @focus="handleBlur(),state.up.password.blur=false" v-model="register.userPassword" >
          <i v-bind:class="{'none':state.up.password.blur||register.userPassword.length===0}" @click="() => {if(!state.up.userPassword.blur){register.userPassword=''}}"></i>
        </div>
        <div class="lableDiv">
          <span class="error" v-if="true&&state.up.againpassword.blur&&state.up.againpassword.errTip">error !</span>
          <input type="password" placeholder="Confirm Password" @focus="handleBlur(),state.up.againpassword.blur=false" v-model="register.againPassword" >
          <i v-bind:class="{'none':state.up.againpassword.blur||register.againPassword.length===0}" @click="() => {if(!state.up.againpassword.blur){register.againPassword=''}}"></i>
        </div>
        <div class="lableDiv">
          <span class="error" v-if="true&&state.up.verify.blur&&state.up.verify.errTip">error !</span>
          <input type="text" placeholder="Enter Verification Code" @focus="handleBlur(),state.up.verify.blur=false" v-model="register.verify" >
          <div><span>Send</span></div>
        </div>
        <router-link to="/Sign" class="signIn"><span>SIGN UP</span></router-link>
        <div class="signTip"><span>Forget Your Password?</span><span @click="jump('signIn')">SIGN IN<i></i></span></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      openGo: 'signIn',
      state: {
        in: {
          id: {
            errTip: false,
            blur: true
          },
          password: {
            errTip: false,
            blur: true
          },
          verify: {
            errTip: false,
            blur: true
          }
        },
        up: {
          id: {
            errTip: false,
            blur: true
          },
          number: {
            errTip: false,
            blur: true
          },
          password: {
            errTip: false,
            blur: true
          },
          againpassword: {
            errTip: false,
            blur: true
          },
          verify: {
            errTip: false,
            blur: true
          }
        }
      },
      user: {
        id: '',
        pwd: '',
        verify: ''
      },
      register: {
        userId: '',
        userPhonenumber: '',
        userPassword: '',
        againPassword: '',
        userverify: ''
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
.signDiv
  margin-top 1.76rem
  font-size .26rem
  position relative
  width 100%
  padding 0 .24rem
  .none
    background none !important
    cursor auto !important
  >.signIn, >.signUp
    >.main
      padding .16rem
      border-top 2px solid #252525
      display flex
      flex-direction column
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
    >.bottom
      width 100%
      padding 1.2rem 0
      >.bottomDesc
        display flex
        justify-content space-between
        align-items center
        >span
          padding 0 .32rem
          flex-shrink 0
        >i
          width 100%
          height 2px
          background #e5e5e5
      >.bottomImage
        display flex
        justify-content center
        align-items center
        >i
          margin .36rem
          width .64rem
          height .52rem
          cursor pointer
          background url('~statics/mobileImages/sign/weixin.png') center / 100% no-repeat
</style>
