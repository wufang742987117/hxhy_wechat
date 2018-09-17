<template>
	<div>
		<div class="h_title clearfix bt">
		  提现列表
		</div>
		<div class="f_dl f_dl_a">
		  <p class="clearfix xf_text">
			居间商账号：
			<input type="number" class="tx_input" style="width:35%;height:1.4rem;border: 1px solid #868695;font-size: 0.65rem;border-radius: 0.2rem;" v-model="middlemanId">
			<span class="but2" @click="_getWithdrawList">查询</span>
		  </p>
		</div>
		<div class="f_dl f_dl_a" v-if="data.data.length < 1" style="padding-bottom: 0;">
			<ul class="zl_list">
				<li style="border-bottom:0;">暂无数据</li>
			</ul>
		</div>
		<div class="f_dl f_dl_a" v-for="item of data.data">
		  <ul class="zl_list">
			<li class="clearfix">
			  账户
			  <span>{{item.userId}}</span>
			</li>
			<li class="clearfix">
			  申请时间
			  <span>{{item.createTime | date}}</span>
			</li>
			<li class="clearfix">
			  提现金额
			  <span>{{item.money}}</span>
			</li>
			<!--<li class="clearfix">
			  备注
			  <span>{{item.memo}}</span>
			</li>-->
			<li class="clearfix">
			状态
			<span v-if="item.status=='3'">完成</span>
			<span v-if="item.status=='1'">未完成</span>
			</li>
			<li class="clearfix" v-if="item.status=='1'">
			操作
			<button class="confirm_button"  @click="confirm(item.id)">确认</button>
			</li>
		  </ul>
		   <!--<p class="ck_gd">查看更多<span><img src="images/n_images/duo.png" alt="" /></span></p>-->
		</div>
		<span class="but" @click="back">返回主页</span>
	</div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import { REST } from "api"

  export default {
    data () {
      return {
        data: {
          data: []
        },
        middlemanId: ''
      }
    },
    created () {
      this._getWithdrawList()
    },
    methods: {
      confirm(v){
		 let _this = this
		 REST.confirmMiddlemanWithdraw({withdrawId:v}).then(function (res) {
		 console.log(res);
		 _this._getWithdrawList()
		 })
      },
      back () {
        this.$router.back()
      },
      _getWithdrawList(){
        let _this = this
        REST.MiddlemanWithdrawList({middlemanId:_this.middlemanId}).then(function (res) {
          console.log(res)
          _this.data = res;
        })
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
  }
</script>

<style>
	.confirm_button {
		padding: 0.35rem .8rem;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		right: 0;
		border: 0;
		background: #92c2e6;
		color: #fff;
		cursor: pointer;
	}
</style>
