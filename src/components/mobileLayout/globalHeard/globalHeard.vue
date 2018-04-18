<template>
  <div class="globaHeardBox">
    <div class="menu transition" :open="menu.open">
      <div class="globaHeard flex justify-between" ref="globaHeard">
        <div>
          <span @click="handleMenu"><img src="~/statics/mobileImages/top/ico_menu.png" width="100%"></span>
          <router-link to="/Market/Commerce">COMMERCE</router-link>
        </div>
        <div><span class="bag"></span></div>
      </div>
      <ul>
        <li v-for="item in menu.data"><router-link :to="item.path">{{ item.name }}</router-link></li>
      </ul>
      <div class="search">
        <q-search class="text-light-black" v-model="search" placeholder="Search Commerce.com" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  QSearch
} from 'quasar'
export default {
  name: 'r-global-heard',
  props: ['transparent'],
  // props: {
  //   transparent: {
  //     type: Boolean,
  //     default: false
  //   }
  // },
  components: {
    QSearch
  },
  data () {
    return {
      menu: {
        open: false,
        data: [
          { name: 'CONTRACT PHONE', path: '/' },
          { name: 'PHONE', path: '/' },
          { name: 'ACCESSORIES', path: '/' },
          { name: 'PLANS', path: '/' },
          { name: 'SUPPORT', path: '/' }
        ]
      },
      search: ''
    }
  },
  mounted () {
    // console.log(this.transparent)
    if (this.bgColor) {
      window.addEventListener('scroll', this.handleScroll)
    }
    else {
      window.removeEventListener('scroll', this.handleScroll)
      this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, 1)`
    }
  },
  methods: {
    handleScroll () {
      // console.log(el)
      // console.log(window.innerHeight, window.scrollY)
      // console.log(window)
      if (window.scrollY < window.innerHeight) {
        let val = (window.scrollY / window.innerHeight).toFixed(3)
        this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, ${val})`
      }
      else {
        this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, 1)`
      }
    },
    handleMenu () {
      this.menu.open = !this.menu.open
    }
  },
  watch: {
    transparent: function (val, oldVal) {
      // console.log(val, oldVal)
      if (this.transparent) {
        window.addEventListener('scroll', this.handleScroll)
        this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, 0)`
      }
      else {
        window.removeEventListener('scroll', this.handleScroll)
        this.$refs.globaHeard.style.backgroundColor = `rgba(255, 255, 255, 1)`
      }
    }
  }
}
</script>

<style lang="stylus">
.globaHeardBox
  .globaHeard
    width 100vw
    max-width 100%
    height 1.28rem
    // max-height 10vh
    font-size .4rem
    font-family 'Khmer MN'
    >div
      padding 0 .24rem
      display flex
      align-items center
      &:first-child
        >span
          width .48rem
          max-width 6.4vw
          display flex
          align-items center
        >a
          padding-left .4rem
          display flex
          align-items center
          padding-top .1rem
      &:last-child
        >span
          width .8rem
          height .8rem
          display flex
          align-items center
          background url('~statics/mobileImages/top/ico_bag.png') center no-repeat
          background-size 100% 100%
          cursor pointer
  .menu
    // font-family 'Helvetica Neue'
    height 100%
    font-size .28rem
    font-weight bold
    >ul
      height 0
      overflow hidden
      // padding .24rem 0 0 1.12rem
      >li
        padding .32rem 0
        a
          cursor pointer
    .search
      width 100%
      height 0
      overflow hidden
      // padding .24rem 1.12rem 0 1.12rem
      .q-if:before
        color: rgba(0,0,0,0.6);
      .q-if-control-before
        width .37rem
        height .37rem
        font-size 0
        margin-right .4rem
        background url('~statics/mobileImages/top/ico_search.png') center no-repeat
        background-size 100% 100%
      .q-input-target
        height .37rem
        padding-top .1rem
  .menu[open="open"]
    background #fff
    height 1000vw
    min-height 1000vh
    .bag
      display none
    >ul
      height auto
      padding .24rem 0 0 1.12rem
    >.search
      height auto
      padding .24rem 1.12rem 0 1.12rem
</style>
