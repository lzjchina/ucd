<template>
  <div class="otherHeardBox">
    <div v-if="type==='sign'">
      <i class="none"></i>
      <span>{{title}}</span>
      <i @click="back"></i>
    </div>
    <div v-else-if="type==='address'" class="address">
      <i @click="back"></i>
      <span>Shipping Address</span>
      <i></i>
    </div>
    <div v-else-if="type==='payment'" class="payment">
      <i @click="back"></i>
      <span>Payment</span>
      <i></i>
    </div>
    <div v-else class="order">
      <i @click="back"></i>
      <span>My Order</span>
      <i></i>
    </div>
  </div>
</template>

<script>
import {
  QSearch
} from 'quasar'
export default {
  name: 'r-other-heard',
  components: {
    QSearch
  },
  props: ['type'],
  data () {
    console.log(this)
    return {
      title: 'SIGN IN'
    }
  },
  mounted () {
    this.socket.$on('open-go', function (val) {
      if (val === 'signUp') {
        this.title = 'SIGN UP'
      }
      else if (val === 'signIn') {
        this.title = 'SIGN IN'
      }
    }.bind(this))
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus">
.otherHeardBox
  width 100vw
  font-size .26rem
  .none
    background none
    cursor auto
  >div
    width 100%
    height 1.28rem
    background #fff
    display flex
    justify-content space-between
    align-items center
    &.address>i:first-child
      background url('~statics/mobileImages/heard/ico_back.png') center / 100% no-repeat
    &.address>i:last-child
      background url('~statics/mobileImages/heard/ico_add.png') center / 100% no-repeat
    &.payment>i:first-child
      background url('~statics/mobileImages/heard/ico_back.png') center / 100% no-repeat
    &.payment>i:last-child
      background url('~statics/mobileImages/heard/ico_add.png') center / 100% no-repeat
    &.order>i:first-child
      background url('~statics/mobileImages/heard/ico_back.png') center / 100% no-repeat
    &.order>i:last-child
      background url('~statics/mobileImages/heard/ico_search.png') center / 100% no-repeat
    >i
      width .48rem
      height .48rem
      margin 0 .36rem
      cursor pointer
      background url('~statics/mobileImages/heard/cancel.png') center / 100% no-repeat
    >span
      font-weight bold
      display flex
      justify-content center
      align-items center
</style>
