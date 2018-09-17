<template>
  <div>
    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh">-->
        <!--<a href="" class="back"><img src="images/n_images/fh_1.png" alt=""/></a>-->
      <!--</div>-->
      添加居间
    </div>
    <!--   登录框 -->
    <div class="f_dl f_dl_a">
      <p class="tj_text">居间信息填写</p>
      <ul class="zl_list tj_list">
        <li class="clearfix">
          <b><strong>*</strong>居间账号</b>
          <span class="n3">
            <input type="text" required="required" v-model="frontUserId">
          </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>姓名</b>
          <span class="n3">
            <input type="text" required="required" v-model="name">
          </span>
        </li>
        <!--<li class="clearfix">
          <b><strong>*</strong>手机</b>
          <span class="n3">
            <input type="text" required="required" v-model="userPhone">
          </span>
        </li>-->
        <li class="clearfix">
          <b><strong>*</strong>身份证号</b>
          <span class="n3">
            <input type="text" required="required" v-model="idNumber">
          </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>账户名称</b>
          <span class="n3">
            <input type="text" required="required" v-model="servantName">
          </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>开户行</b>
          <span class="n3">
            <input type="text" required="required" v-model="servantBank">
          </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>银行卡号</b>
          <span class="n3">
            <input type="text" required="required" v-model="servantBankAccount">
          </span>
        </li>
				<li class="clearfix">
					<b><strong>*</strong>返佣比例(不超过{{ext}})</b>
					<span class="n3">
						<input type="number" required="required" v-model="ext2" onkeyup="this.value=this.value.replace(/[^\d]/g,'') " onafterpaste="this.value=this.value.replace(/[^\d]/g,'') " >
					</span>
					
				</li>
        <li class="clearfix">
          <b><strong>*</strong>地址</b>
          <span class="n3">
            <input type="text" required="required" v-model="address">
          </span>
        </li>
      </ul>
    </div>
    <span class="but" @click="addJujian">提&nbsp;&nbsp;交</span>
    <span class="but" @click="back">返回主页</span>
  </div>
</template>

<script>
  import { REST } from "api";
  import { Toast } from 'mint-ui'
	import store from 'store'

  export default {
    data () {
      return {
        idNumber: '',
        servantBank: '',
        address: '',
        servantName: '',
        servantBankAccount: '',
        frontUserId: '',
        name: '',
        userPhone: '',
				ext2:'',
				ext:''
      }
    },
		created:function () {
			let _this = this;
			let type = JSON.parse(store.get('__HXHY_USER_INFO__')).data.type;
			REST.getCommsionLimit({
				type:type
			}).then(function (res) {
				_this.ext = res.data[0].commissionMaxLimit;
			})
		},
    methods: {
      addJujian () {
        if (!this.name || !this.frontUserId || !this.servantName || !this.servantBank || !this.servantBankAccount || !this.address || !this.idNumber||!this.ext2){
          Toast('请将信息填写完整！')
          return
        }
				console.log(typeof(this.ext2));
				let reg = new RegExp("^[0-9]*$");
				if(this.ext2<0||this.ext2>this.ext||!reg.test(this.ext2)) {
					Toast('请输入正确的返佣比例！')
					return
				}
        let _this = this

        REST.addJujian({
          frontUserId: this.frontUserId,
          createUserId: _this.$route.params.id,
          servantName: this.servantName,
          servantBank: this.servantBank,
          servantBankAccount: this.servantBankAccount,
          address: this.address,
          idNumber: this.idNumber,
          name: this.name,
          userPhone: this.userPhone,
					ext2:this.ext2
        }).then(function (res) {
          if(res.success === true){
            Toast('居间已成功添加！您可以“主页 -> 我的居间” 中查看')
            _this.frontUserId = ''
            _this.servantName = ''
            _this.servantBank = ''
            _this.servantBankAccount = ''
            _this.address = ''
            _this.idNumber = ''
						_this.ext2 = ''
          }
        })
      },
      back(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

</style>
