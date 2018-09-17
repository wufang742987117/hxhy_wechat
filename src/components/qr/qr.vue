<template>
  <div>
    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh">-->
        <!--<img src="static/images/n_images/fh_1.png" alt=""/>-->
      <!--</div>-->
      我的二维码
    </div>
    <!--   登录框 -->
    <header-small></header-small>

    <div class="f_dl f_dl_a">
      <img :src="imgUrl">
    </div>
    <span class="but" @click="share">分享</span>
    <span class="but" @click="back">返回主页</span>
  </div>
</template>

<script>
  import QRCode from 'qrcode'
  import HeaderSmall from 'base/header-small/header-small'
  import { REST } from "api"
  import { Toast } from 'mint-ui'

  export default {
    data(){
      return {
        imgUrl: 'static/images/n_images/qr_new.jpg'
      }
    },
    created(){
      let _this = this
      REST.getQR({ id: _this.$route.params.id }).then(function (res) {
        _this.data = res
        // alert(res.data)
        QRCode.toDataURL(res.data, { errorCorrectionLevel: 'Q' })
          .then(url => {
            let c = document.createElement('canvas');
            let ctx = c.getContext('2d');
            c.width = 1080
            c.height = 1514
            ctx.rect(0, 0, c.width, c.height)
            ctx.fillStyle = '#fff';
            ctx.fill()
            let img = new Image
            img.src = 'static/images/n_images/qr_new.jpg'
            img.onload = function () {
              ctx.drawImage(img, 0, 0);
              let img2 = new Image
              img2.src = url
              img2.onload = function(){
                ctx.drawImage(img2, 780, 1230, 185, 185);
                _this.imgUrl = c.toDataURL('image/png')
              }
            }
          })
          .catch(err => {
            console.error(456, err)
          })
      })
    },
    methods: {
      share(){
        Toast('长按二维码将图片保存到本地或分享给朋友')
      },
      back(){
        this.$router.back()
      }
    },
    components: {
      HeaderSmall
    }
  }
</script>

<style scoped>

</style>
