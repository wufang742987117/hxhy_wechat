<template>
  <div>
    <div class="head_box">
      <div class="h_title clearfix">
        <!--<div class="fl h_fh">-->
          <!--<img src="static/images/n_images/fh_1.png" alt=""/>-->
        <!--</div>-->
        用户中心
      </div>
      <header-big></header-big>
    </div>
    <!--   登录框 -->
    <div class="f_dl">
      <ul class="zl_list">
        <li class="clearfix">
          账号
          <span>{{userinfo.id}}</span>
        </li>
       <!-- <li class="clearfix">
          昵称
          <span>{{userinfo.nickName}}</span>
        </li> -->
        <li class="clearfix" v-if="userinfo.name">
          姓名
          <span>{{userinfo.name}}</span>
        </li>
        <li class="clearfix">
          手机
          <span>{{userinfo.userPhone}}</span>
        </li>
        <li class="clearfix" v-if="userinfo.servantName">
          账户名称
          <span>{{userinfo.servantName}}</span>
        </li>
        <li class="clearfix" v-if="userinfo.servantBank">
          开户行
          <span>{{userinfo.servantBank}}</span>
        </li>
        <li class="clearfix" v-if="userinfo.servantBankAccount">
          银行卡号
          <span>{{userinfo.servantBankAccount}}</span>
        </li>
        <li class="clearfix" v-if="userinfo.address">
          地址
          <span>{{userinfo.address}}</span>
        </li>
      </ul>
      <input type="hidden" name="agencyId">
    </div>
    <router-link tag="span" class="but pt" :to="'/user/reset-password3/' + userinfo.userPhone">修改密码</router-link>
    <span class="but pt" @click="back">返回主页</span>
  </div>
</template>

<script>
  import HeaderBig from 'base/header-big/header-big'
  import { REST } from 'api'

  export default {
    data () {
      return {
        userinfo: {}
      }
    },
    mounted () {
      let _this = this
      REST.getFrontUserInfo({
        id: this.$route.params.id
      }).then(function (res) {
        _this.userinfo = res.data
      })
    },
    methods: {
      back(){
        this.$router.back()
      }
    },
    components: {
      HeaderBig
    }
  }
</script>

<style scoped>

</style>
