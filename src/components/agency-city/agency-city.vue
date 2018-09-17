<template>
  <div>

    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh">-->
        <!--<a href="" class="back"><img src="images/n_images/fh_1.png" alt=""/></a>-->
      <!--</div>-->
      我的市级渠道
    </div>
    <div class="f_dl f_dl_a total" id="box">
      <span>市级渠道总数：{{data.totalCount}}</span>
    </div>
    <!--   登录框 -->
    <div class="f_dl f_dl_a" v-for="item of data.data">
      <ul class="zl_list">
        <!-- <li class="clearfix">
          昵称
          <span>{{item.nickName}}</span>
        </li> -->
        <li class="clearfix">
          公司名称
          <span>{{item.enterpriceName}}</span>
        </li>
        <li class="clearfix">
          手机号
          <span>{{item.userPhone}}</span>
        </li>
        <li class="clearfix">
          归属于
          <span>{{item.agentProvince}}</span>
        </li>
        <li class="clearfix">
          渠道的区域
          <span>{{item.agentCity}}</span>
        </li>
        <li class="clearfix">
          上级
          <span>{{item.ext}}</span>
        </li>
      </ul>
      <!-- <p class="ck_gd">查看更多<span><img src="images/n_images/duo.png" alt="" /></span></p> -->
    </div>
    <span class="but" @click="back">返回主页</span>
  </div>
</template>

<script>
  import { REST } from "api";

  export default {
    data(){
      return {
        data: ''
      }
    },
    mounted () {
      let _this = this
      REST.getAgencyList({ id: _this.$route.params.id, type: 2 }).then(function (res) {
        _this.data = res
      })
    },
    methods: {
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

</style>
