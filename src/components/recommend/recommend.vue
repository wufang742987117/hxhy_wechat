<template>
  <div>

    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh">-->
        <!--<img src="images/n_images/fh_1.png" alt=""/>-->
      <!--</div>-->
      我的用户
    </div>
    <div class="f_dl f_dl_a total" id="box">
      <span>用户总数：{{data.totalCount}}</span>
    </div>
    <!--   登录框 -->
    <div class="f_dl f_dl_a">
      <ul class=" list_1" id="middleman">
        <li class="clearfix list_lb">
          账户
          <strong>时间</strong>
        </li>
        <li class="clearfix list_lb" v-for="(item, index) of data.data">
          {{item.id}}
          <strong>{{item.recommendTime | date}}</strong>
        </li>

      </ul>
      <!--<p class="ck_gd check_more">查看更多<span><img src="static/images/n_images/duo.png" alt=""/></span></p>-->
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
      REST.getMyRecommed({ id: _this.$route.params.id }).then(function (res) {
        _this.data = res
      })
    },
    methods: {
      back(){
        this.$router.back()
      }
    },
    filters:{
      date(time){
        let date   = new Date(time)//把定义的时间赋值进来进行下面的转换
        let year   = date.getFullYear();
        let month  = date.getMonth()+1;
        let day    = date.getDate();
        let hour   = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        return year+"-"+month+"-"+day;
      }
    }
  }
</script>

<style scoped>

</style>
