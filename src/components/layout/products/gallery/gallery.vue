<template>
  <div class="swiper">
    <div>
      <q-gallery-carousel
        horizontal-quick-view
        infinite
        autoplay
        fullscreen  
        :src="slider" 
        class="imagesbox" />
      </div>
  </div>
</template>

<script>
import {
  QGallery,
  QGalleryCarousel
} from 'quasar'
export default {
  components: {
    QGallery,
    QGalleryCarousel
  },
  data () {
    return {
      slider: [
        'statics/images/gallery/pic1.png',
        'statics/images/gallery/pic2.png',
        'statics/images/gallery/pic3.png',
        'statics/images/gallery/pic4.png'
      ]
    }
  }
}
</script>
<style lang="stylus">
.imagesbox
  width 100%
  height calc(100vh - 64px)
.imagesbox .q-carousel-toolbar
  display none
.imagesbox .q-icon .material-icons
  width calc(80/1920*100vw)
  height calc(80/1920*100vw)
.q-carousel-left-button i, .q-carousel-right-button i
  padding calc(8/1920*100vw)
.q-gallery-carousel img
  height 100vh
</style>