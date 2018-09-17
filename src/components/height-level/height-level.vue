<template>
  <div>

    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh">-->
        <!--<a href="" class="back"><img src="images/n_images/fh_1.png" alt=""/></a>-->
      <!--</div>-->
      我的上级
    </div>
    <div class="f_dl f_dl_a">
      <ul class="zl_list">
        <li class="clearfix">
          账户
          <span>{{data.id}}</span>
        </li>
        <li class="clearfix">
          姓名
          <span>{{data.name || '-'}}</span>
        </li>
        <li class="clearfix" v-if="data.enterpriceName">
          公司名称
          <span>{{data.enterpriceName}}</span>
        </li>
        <li class="clearfix">
          级别
          <span>{{userType[data.type]}}</span>
        </li>
        <li class="clearfix">
          联系电话
          <span>{{data.userPhone}}</span>
        </li>
      </ul>
      <!-- <p class="ck_gd">查看更多<span><img src="images/n_images/duo.png" alt="" /></span></p> -->
    </div>
    <span class="but" @click="back">返回主页</span>
  </div>
</template>

<script>
  import { get_userInfo } from 'common/js/user.js'
  import { REST } from 'api'

  const userType = [
    '普通用户',
    '省级渠道',
    '市级渠道',
    '县级渠道',
    '流量渠道',
    '一级居间',
    '二级居间'
  ]

  export default {
    data () {
      return {
        data: '',
        userType: userType
      }
    },
    mounted () {
      let id = get_userInfo('data').ext
      let _this = this
      REST.getFrontUserInfo({
        id: id
      }).then(function (res) {
        _this.data = res.data
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
