<template>
  <div class="f_dl f_dl_a clearfix">
    <div class="h_tx fl">
      <img src="static/images/head.png" alt="" id="wx_head"/>
    </div>
    <div class="h_zl fl">
      <p class="h_tj" id="wx_name">
        {{userinfo.id}}
      </p>
      <p class="h_tj2">
        <i>
          <img src="static/images/n_images/v1.png" alt=""/>
        </i>
        {{userType[userinfo.type]}}
      </p>
    </div>
    <slot></slot>
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
