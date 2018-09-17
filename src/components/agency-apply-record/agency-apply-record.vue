<template>
  <div>
    <div class="h_title clearfix bt">
      申请记录
    </div>
    <div class="f_dl f_dl_a" v-for="item of data.data">
      <ul class="zl_list">
        <li class="clearfix">
          申请时间:
          <span>{{item.createTime | date}}</span>
        </li>
        <li class="clearfix">
          申请类型:
          <span v-if="item.agentType==4">渠道</span>
          <span v-if="item.agentType==1">省级</span>
          <span v-if="item.agentType==2">市级</span>
          <span v-if="item.agentType==3">县级</span>
        </li>
        <li class="clearfix">
          状态
          <span v-if="item.isExamine==0">审核中</span>
          <span v-if="item.isExamine==1">通过</span>
          <span v-if="item.isExamine==2">不通过</span>
        </li>
        <li class="clearfix">
          审核人id:
          <span v-if="item.checkUser">{{item.checkUser}}</span>
        </li>
        <li class="clearfix">
          备注:
          <span v-if="item.memo">{{item.memo}}</span>
        </li>
      </ul>
      <!-- <p class="ck_gd">查看更多<span><img src="images/n_images/duo.png" alt="" /></span></p> -->
    </div>
    <span class="but" @click="back">返回主页</span>
  </div>
</template>

<script>
  import { REST } from "api"

  export default {
    data(){
      return {
        data: {
          data: []
        }
      }
    },
    created(){
      let _this = this
      REST.getExamineAgentRecord().then(function (res) {
        _this.data = res
      })
    },
    methods: {
      back () {
        this.$router.back()
      }
    },
    filters:{
      date(time){
				
				function p(s) {
					return s < 10 ? '0' + s: s;
				}
				
        let date   = new Date(time)
        let year   = date.getFullYear();
        let month  = date.getMonth()+1;
        let day    = date.getDate();
        let hour   = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        return year+"-"+p(month)+"-"+p(day)+' '+p(hour)+':'+p(minute)+':'+p(second);
      }
    }
    // directives: {
    //   lfcous: {
    //     inserted: function (el) {
    //       let oInput = el.querySelector('input');
    //       oInput.onfocus = function() {
    //
    //       };
    //     }
    //   }
    // }
  }
</script>

<style>
  .input-search {
    font-size: .7rem;
  }
  select {
    padding: 0.2rem 0.2rem;
    border: 1px solid #D9C797 ;
    font-size: 0.65rem;
    border-radius: 0.2rem;
    background-color:#fff;
  }
  .select-search {
    margin: .5rem 0;

  }
  .select-search input {
    margin-left: 1.2rem;
  }

  .input-search input {
    border:1px solid #D9C797!important;
    background: none;
  }

</style>
