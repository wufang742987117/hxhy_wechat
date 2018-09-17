<template>
	<div>
	    <div class="h_title clearfix bt">
	      <!--<div class="fl h_fh">-->
	        <!--<a href="" class="back"><img src="images/n_images/fh_1.png" alt=""/></a>-->
	      <!--</div>-->
	      <span>我的居间</span>
	    </div>
	    <div class="f_dl f_dl_a" >
	      <ul class="zl_list tj_list">
	      	<li class="clearfix">
	      		<b><strong>*</strong>居间账号</b>
	      		<span class="n3">
	      			<input type="text" required="required" v-model="data.frontUserId" disabled>
	      		</span>
	      	</li>
	      	<li class="clearfix">
	      		<b><strong>*</strong>姓名</b>
	      		<span class="n3">
	      			<input type="text" required="required" v-model="data.name" disabled>
	      		</span>
	      	</li>
	      	<!--<li class="clearfix">
	      		<b><strong>*</strong>手机</b>
	      		<span class="n3">
	      			<input type="text" required="required" v-model="userPhone">
	      		</span>
	      	</li>-->
<!--	      	<li class="clearfix">
	      		<b><strong>*</strong>身份证号</b>
	      		<span class="n3">
	      			<input type="text" required="required" v-model="idNumber">
	      		</span>
	      	</li>-->
	      	<li class="clearfix">
	      		<b><strong>*</strong>账户名称</b>
	      		<span class="n3">
	      			<input type="text" required="required" v-model="data.servantName" disabled>
	      		</span>
	      	</li>
	      	<li class="clearfix">
	      		<b><strong>*</strong>开户行</b>
	      		<span class="n3">
	      			<input type="text" required="required" v-model="data.servantBank" disabled>
	      		</span>
	      	</li>
	      	<li class="clearfix">
	      		<b><strong>*</strong>银行卡号</b>
	      		<span class="n3">
	      			<input type="text" required="required" v-model="data.servantBankAccount" disabled>
	      		</span>
	      	</li>
	      	<li class="clearfix">
	      		<b><strong>*</strong>返佣比例(不超过{{exts}})</b>
	      		<span class="n3">
	      			<input type="number" required="required" v-model="data.ext2"   onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " >
	      		</span>
	      		
	      	</li>
	      	<li class="clearfix">
	      		<b><strong>*</strong>地址</b>
	      		<span class="n3">
	      			<input type="text" required="required" v-model="data.address" disabled>
	      		</span>
	      	</li>
	      </ul>
	
	       <!--<p class="ck_gd">查看更多<span><img src="images/n_images/duo.png" alt="" /></span></p>-->
	    </div>
	    <span class="but" @click="updateJujian">提&nbsp;&nbsp;交</span>
	    <span class="but" @click="back">返回上一级</span>
	  </div>
</template>

<script>
	import { REST } from "api";
	import { Toast } from 'mint-ui'
	import store from 'store'
	export default {
	data () {
		return {
			data:{
				idNumber: '',
				servantBank: '',
				address: '',
				servantName: '',
				servantBankAccount: '',
				frontUserId: '',
				name: '',
				userPhone: '',
				ext2:''
			},
			exts:''
		}
	},
	created:function () {
		let _this = this;
		REST.getAgentMiddlemanByUserId({
			frontUserId:_this.$route.params.id
		}).then(function (res) {
			_this.data = res.data;
			if(!_this.data.ext2) {
				_this.data.ext2 = '';
			}
		});
		let type = JSON.parse(store.get('__HXHY_USER_INFO__')).data.type;
		REST.getCommsionLimit({
			type:type
		}).then(function (res) {
			_this.exts = res.data[0].commissionMaxLimit;
		})
	},
	methods: {
		back(){
			this.$router.back()
		},
		updateJujian(){
			let reg = new RegExp("^[0-9]*$");
			if(!this.data.ext2||this.data.ext2<0||this.data.ext2>this.exts||!reg.test(this.data.ext2)) {
				Toast('请输入正确的返佣比例！')
				return
			}
			let _this = this
			REST.updateAgentMiddleman({
				frontUserId: _this.$route.params.id,
				ext2:this.data.ext2
			}).then(function (res) {
			  if(res.success === true){
				Toast('居间返佣比例已成功修改！');
				_this.$router.back()
			  }
			})
		}
	}
  }
</script>

<style scoped>

</style>
