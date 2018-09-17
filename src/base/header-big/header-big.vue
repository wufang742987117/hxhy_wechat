<template>
  <div class="h_logo">
    <div class="logo_img">
      <img src="static/images/head.png" id="user_wx_head">
    </div>
    <ul class="clearfix name_list">
      <li class="fl">
            <span>
              <img src="static/images/n_images/z_1.png" alt="">
            </span>
        {{userinfo.id}}
      </li>
      <li class="fl">
            <span>
              <img src="static/images/n_images/z_2.png" alt="">
            </span>
        {{userType[userinfo.type]}}
      </li>
    </ul>
  </div>
</template>

<script>
  import { get_userInfo } from 'common/js/user.js'

  const userType = [
    '普通用户',
    '省级渠道商',
    '市级渠道商',
    '县级渠道商',
    '流量渠道商',
    '居间商'
  ]

  export default {
    data () {
      return {
        userType: userType,
        userinfo: {}
      }
    },
    mounted () {
      this.userinfo = get_userInfo('data')
    }
  }
</script>

<style scoped>

</style>
