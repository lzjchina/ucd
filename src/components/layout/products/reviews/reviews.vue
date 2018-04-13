<template>
<div class="cont">
   <div class="btnGroup row">
      <div class="btnTip">
         <span class="btnTipTittle">User  satisfaction</span>
         <span>98<sub style="font-size:14px;">%</sub></span>
      </div>
      <div style="height:80px;border-left:1px solid #e5e5e5;"></div>
      <div class="btnChoice">
         <span class="btnTipTittle">User impression</span>
         <div class="btn">
            <button v-for="item in btn" @click="search(item.btnName)">{{ item.btnName }}&nbsp;&nbsp;&nbsp;<span>{{ item.btnNum }}</span></button>
         </div>
      </div>
   </div>

    <div class="tab">
        <!-- <q-tabs class="qTab">
            <q-tab slot="title" label="All Reviews " />
            <q-tab slot="title" label=" Hightest Rating" />
            <q-tab slot="title" label="Have a Picture" />
        </q-tabs> -->
        <div class="tabBt">
          <button type="button" autofocus="autofocus">All Reviews</button>
          <button type="button">Hightest Rating</button>
          <button type="button">Have a Picture</button>
        </div>
        <q-select 
        v-model="select"
        :options="options"
       />
    </div>

    <div class="details row" v-for="item in details" :key="item.id">

      <q-list highlight inset-separator >

        <q-item multiline v-for="list in item.qlist" :key="list.id">
          <q-item-side v-bind:avatar="list.avatar"/>
          <div style="margin-left:25px;">
            <q-rating readonly v-model="ratingModel" :max="5" />
            <q-item-main
            v-bind:label="list.label"
            label-lines="1"
            v-bind:sublabel="list.sublabel"
            sublabel-lines="2"
          />
          </div>
          
        </q-item>
      </q-list>
      <ul class="discuss" v-for=" discuss in item.discuss" :key="discuss.id">
        <li class="discussName">{{discuss.discussName}}</li>
        <li class="describe">{{discuss.describe}}</li>
        <li class="text" v-for="text in discuss.text" :key="text.id">
          <h3>{{text.title}}</h3>
          <p>{{text.ptext}}</p>
        </li>
      </ul>
    </div>

    <div class="paging row">
      <div class="pagingTip">
        <span>All Reviews</span><i>{{detailsCopy.length}}</i>
      </div>
      <div style="margin:0 auto">
        <!-- <q-pagination color="gray" v-model="page" :max="17" /> -->
        <r-pagination
          :total="detailsAll.length"
          :display="display"
          :current.sync="current"
        />
      </div>
    </div>
</div>
</template>
<script>
import {
  QBtn,
  QTabs,
  QTab,
  QSelect,
  QList,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile,
  QPagination,
  QChip,
  QRating
} from 'quasar'
import RPagination from 'components/pagination'
export default {
  components: {
    QBtn,
    QTabs,
    QTab,
    QSelect,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    QPagination,
    QChip,
    QRating,
    RPagination
  },
  data () {
    return {
      btnName: '',
      display: 5,
      current: 1,
      ratingModel: 4,
      page: 1,
      details: [],
      detailsAll: [],
      detailsCopy: [
        {
          'id': '1',
          'qlist': [
            {
              'id': '1',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '1',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.',
              'text': [
                {
                  'id': '1',
                  'title': 'by Customer service',
                  'ptext': 'The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.'
                }
              ]
            }
          ]
        },
        {
          'id': '2',
          'qlist': [
            {
              'id': '2',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '2',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.',
              'text': [
                {
                  'id': '2',
                  'title': 'by Customer service',
                  'ptext': 'The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.The evidence is supplied with the reliability design for the new products through fuzzy synthetic appraisal example.Here is the sample user commentr.'
                }
              ]
            }
          ]
        },
        {
          'id': '3',
          'qlist': [
            {
              'id': '3',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '3',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test3',
              'text': [
                {
                  'id': '3',
                  'title': 'by Customer service',
                  'ptext': 'test3'
                }
              ]
            }
          ]
        },
        {
          'id': '4',
          'qlist': [
            {
              'id': '4',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 12:35'
            }
          ],
          'discuss': [
            {
              'id': '4',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test4',
              'text': [
                {
                  'id': '4',
                  'title': 'by Customer service',
                  'ptext': 'test4'
                }
              ]
            }
          ]
        },
        {
          'id': '5',
          'qlist': [
            {
              'id': '5',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '5',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test5',
              'text': [
                {
                  'id': '5',
                  'title': 'by Customer service',
                  'ptext': 'test5'
                }
              ]
            }
          ]
        },
        {
          'id': '6',
          'qlist': [
            {
              'id': '6',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '6',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test6',
              'text': [
                {
                  'id': '6',
                  'title': 'by Customer service',
                  'ptext': 'test6'
                }
              ]
            }
          ]
        },
        {
          'id': '7',
          'qlist': [
            {
              'id': '7',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '7',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test7',
              'text': [
                {
                  'id': '7',
                  'title': 'by Customer service',
                  'ptext': 'test7'
                }
              ]
            }
          ]
        },
        {
          'id': '8',
          'qlist': [
            {
              'id': '8',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '8',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test8',
              'text': [
                {
                  'id': '8',
                  'title': 'by Customer service',
                  'ptext': 'test8.'
                }
              ]
            }
          ]
        },
        {
          'id': '9',
          'qlist': [
            {
              'id': '9',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '9',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test9',
              'text': [
                {
                  'id': '9',
                  'title': 'by Customer service',
                  'ptext': 'test9.'
                }
              ]
            }
          ]
        },
        {
          'id': '10',
          'qlist': [
            {
              'id': '10',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '10',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test10.',
              'text': [
                {
                  'id': '10',
                  'title': 'by Customer service',
                  'ptext': 'test10.'
                }
              ]
            }
          ]
        },
        {
          'id': '11',
          'qlist': [
            {
              'id': '11',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '11',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test11',
              'text': [
                {
                  'id': '11',
                  'title': 'by Customer service',
                  'ptext': 'test11.'
                }
              ]
            }
          ]
        },
        {
          'id': '12',
          'qlist': [
            {
              'id': '12',
              'avatar': './statics/images/Reviews/avatar1.png',
              'label': 'border',
              'sublabel': '2018-3-5 20:35'
            }
          ],
          'discuss': [
            {
              'id': '12',
              'discussName': 'VR2 Compatibility in Columbia, SC,USA',
              'describe': 'test12',
              'text': [
                {
                  'id': '12',
                  'title': 'by Customer service',
                  'ptext': 'test12.'
                }
              ]
            }
          ]
        }
      ],
      btn: [
        {
          btnName: 'test',
          btnNum: ''
        },
        {
          btnName: 'test1',
          btnNum: ''
        },
        {
          btnName: 'test2',
          btnNum: ''
        },
        {
          btnName: 'test',
          btnNum: ''
        },
        {
          btnName: 'VR2',
          btnNum: ''
        }
      ],
      select: 'fb',
      options: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Recommendation',
          value: 'fb'
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl'
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ]
    }
  },
  methods: {
    HotPageSub () {
      this.banner.select = this.banner.select - 2 < 0 ? 0 : this.banner.select - 2
    },
    HotPageAdd () {
      this.banner.select = this.banner.select + 2 >= this.banner.total ? this.banner.total - 2 : this.banner.select + 2
    },
    selectType (type) {
      this.active.type = type
      this.current = 1
    },
    selectColor (color) {
      if (color === this.active.color) {
        this.active.color = ''
      }
      else this.active.color = color
      this.current = 1
    },
    selectMemory (memory) {
      this.active.memory = memory
      this.current = 1
    },
    clearMemory () {
      this.active.memory = ''
      this.current = 1
    },
    clearType () {
      this.active.color = ''
      this.active.memory = ''
      this.current = 1
    },
    pagechange: function (p) {
      this.current = p
      // console.log('pagechange', p)
      this.details = []
      for (var i = (this.current - 1) * this.display; i < this.current * this.display && i < this.detailsCopy.length; i++) {
        this.details.push(this.detailsCopy[i])
      }
    },
    typeSelect: function (p) {
      this.current = 1
    },
    search: function (name) {
      if (this.btnName !== name) {
        this.btnName = name
        this.details = []
        this.detailsAll = []
        for (var i = 0; i < this.detailsCopy.length; i++) {
          if (this.detailsCopy[i].discuss[0].describe.indexOf(name) >= 0) {
            this.detailsAll.push(this.detailsCopy[i])
          }
        }
        for (var d = (this.current - 1) * this.display; d < this.current * this.display && d < this.detailsAll.length; d++) {
          this.details.push(this.detailsAll[d])
        }
      }
      else {
        this.current = 1
        this.details = []
        this.detailsAll = []
        this.detailsAll = this.detailsCopy
        for (var a = (this.current - 1) * this.display; a < this.current * this.display && a < this.detailsAll.length; a++) {
          this.details.push(this.detailsAll[a])
        }
      }
    }
  },
  created () {
    this.$root.eventHub.$on('pagechange', (target) => {
      this.pagechange(target)
    })
  },
  mounted () {
    this.details = []
    this.detailsAll = []
    this.detailsAll = this.detailsCopy
    for (var d = (this.current - 1) * this.display; d < this.current * this.display && d < this.detailsAll.length; d++) {
      this.details.push(this.detailsAll[d])
    }
    for (var b = 0; b < this.btn.length; b++) {
      var num = 0
      for (var c = 0; c < this.detailsCopy.length; c++) {
        // if (this.btn[b].btnName.indexOf(this.detailsCopy[c].discuss[0].describe) >= 0) {
        if (this.detailsCopy[c].discuss[0].describe.indexOf(this.btn[b].btnName) >= 0) {
          num++
        }
      }
      this.btn[b].btnNum = num
    }
  }
}
</script>
<style lang="stylus">
.cont
  width 100%
  overflow hidden
  .btnGroup
    width 100vw
    // height 113px
    background #f5f5f5
    font-size .14rem
    color #000
    align-items center
    flex-wrap nowrap
    border-top 1px solid #e5e5e5
  .btnTip
    width 514px
    padding-left 230px
    padding-right 65px
    display flex
    justify-content center
    align-items center
  .btnTip > span
    font-size 45px
    color #6dd6a9
  .btnTip > .btnTipTittle,.btnChoice > .btnTipTittle
    margin 0 25px
    font-size 14px
    color #838383
  .btnChoice
    display flex
    justify-content center
    align-items center
  .btn
    display flex
    flex-wrap wrap
    font-weight bold
  .btn > button
    padding 0 25px
    margin 8px
    height 32px
    border-radius 16px
    background #fff
    color #343434
    border 1px solid #b2b2b2
    outline none
  .btn > button:focus
    outline none
    border 1px solid #6dd6a9
  .btn > button > span
    color #b7b7b7
  .tab
    margin 0 auto
    width 1624px
    height 64px
    background #fff
    color #fff
    border-bottom 1px solid #e5e5e5
    padding 0 65px 0 325px
    display flex
    flex-wrap nowrap
    justify-content space-between
    align-items center
  .tab > .tabBt
    margin 60px
  .tab > .tabBt > button
    background #fff
    color #b2b2b2
    border 0
    outline none
  .tab > .tabBt > button:focus
    outline none
    color #252525
  .tab .qTab > q-tab
    margin 0 20px
  .tab .q-if:before
    color #fff
    height 0 !important
  .tab .text-primar
    color #fff !important
  .tab .q-if:before, .q-if:after
    background #fff
  .details
    margin 0 auto
    width calc(1624/1920*100vw)
    min-width 1000px
    border-bottom 1px solid #e5e5e5
    padding 33px 0
    display flex
    flex-wrap nowrap
  .details .q-list
    border 0
    width 256px
    padding 0
  .details .q-item
    padding 0 40px
  .details .q-item-sublabel
    font-size 13px
  .details .ellipsis
    font-size 14px
    line-height 27px
  .discuss
    list-style none
    margin 0
    padding 0
    width 100%
  .discussName
    font-size 14px 
    color #252525
    line-height 22px
  .describe
    font-size 12px
    color #999999
    line-height 22px
  .text
    margin-top 18px
    padding 20px 26px 36px 20px
    background #f5f5f5
  .text > h3
    color #6dd6a9
    font-size 12px
    line-height 24px
  .text > p
    color #838383
    font-size 12px
    line-height 24px
  .paging
    width calc(1496/1920*100vw)
    min-width 100px
    margin 0 auto
    display flex
    align-items center
    justify-content space-between
    padding 64px 64px 44px 64px 
  .pagingTip
    font-size 12px
  .pagingTip > span
    color #252525
    font-weight 700
  .pagingTip > i
    font-style normal
    color #b2b2b2
    margin-left 8px
  .q-list-highlight > .q-item:hover, .q-item-highlight:hover, .q-list-link > .q-item:hover, .q-item-link:hover
    background #fff
  .q-tab.active .q-tab-icon, .q-tab.active .q-tab-label
    color #252525
  .q-tab .q-tab-label
    color #b2b2b2
</style>
