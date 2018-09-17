<template>
  <div>
    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh">-->
        <!--<a href="login.html"><img src="images/n_images/fh_1.png" alt=""/></a>-->
      <!--</div>-->
      用户信息注册
    </div>
    <div class="f_dl f_dl_a">
      <p class="tj_text">基本信息</p>
      <ul class="zl_list tj_list">
        <li class="clearfix">
          <b>推荐账户</b>
          <span class="n3">
            <input type="text" v-model="ext">
          </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>手机号码</b>
          <span class="n3">
            <input type="tel" v-model="userPhone">
          </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>验证码</b>
          <span class="n3">
            <input type="text" style="width: 50%;" maxlength="6" placeholder="请输入验证码" v-model.trim="code" @blur="testCode">
						<a class="yzm_but" style="display: inline-block;width: 35%; margin-right: 5%; text-align: center;" @click="sendCode">{{text}}</a>
          </span>
        </li>
        <!-- <li class="clearfix">
          <b><strong>*</strong>昵称</b>
          <span class="n3">
            <input type="text" id="nickname" name="nickname" required="required" v-model.trim="nickName">
          </span>
        </li> -->
        <li class="clearfix">
          <b><strong>*</strong>密码</b>
          <span class="n3">
            <input type="password" id="password" name="password" required="required" v-model.trim="pwd">
          </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>确认密码</b>
          <span class="n3">
            <input type="password" id="confirm_password" name="confirm_password" required="required" v-model.trim="oPwd">
          </span>
        </li>
      </ul>
    </div>
    <span class="but" @click="register">提&nbsp;&nbsp;交</span>
    <p style="text-align: center">已有账号？<router-link tag="span" style="color: #D5C390" to="/login">去登录</router-link></p>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import { REST } from 'api'

  export default {
    data () {
      return {
        userPhone: '',
        code: '',
        code_valid: false,
        nickName: '',
        ext: '',
        pwd: '',
        oPwd: '',
        text: '获取验证码',
        send_code_disable: false
      }
    },
    created(){
      if(this.$route.query.id){
        this.ext = this.$route.query.id
      }
    },
    methods: {
      sendCode () {
        if(this.send_code_disable){
          return
        }

        if (!this._testPhone(this.userPhone)) {
          return
        }

        let _this = this
        REST.getCode({
          userPhone: this.userPhone,
          tempid: 1376
        }).then(function (res) {
          Toast('验证码发送成功')
          _this._clock(60)
        })


      },
      testCode () {
        if (this.code.length !== 6) {
          return
        }

        if (!this._testPhone(this.userPhone)) {
          return
        }

        let _this = this

        REST.testCode({
          userPhone: this.userPhone,
          code: this.code
        }).then(function (res) {
          if (res.success === true) {
            _this.code_valid = true
          }
        })
      },
      register () {
        if (!this._testPhone(this.userPhone)) {
          return
        }
        if (!this.code_valid) {
          Toast('验证码无效！')
          return
        }
//         if (!this.nickName) {
//           Toast('请输入昵称！')
//           return
//         }
        if (!this.pwd) {
          Toast('请输入密码！')
          return
        }
        if (!this.oPwd) {
          Toast('请确认密码！')
          return
        }
        if (this.pwd !== this.oPwd) {
          Toast('两次密码输入不相同！')
          return
        }
        let _this = this
        REST.register({
          userPhone: this.userPhone,
          // nickName: this.nickName,
          ext: this.ext,
          pwd: this.pwd
        }).then(function (res) {
          _this.$router.push('/login')
        })
      },
      _testPhone (phone) {
        if (!phone) {
          Toast('请输入手机号码！')
          return false
        }
        if (!phone.match(/^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\d{8}$/)) {
          Toast('请输入有效的手机号码！')
          return false
        }
        return true
      },
      _clock(sec){
        let _this = this
        _this.send_code_disable = true
        let clock = setInterval(() => {
          if(sec <= 0){
            clearInterval(clock)
            _this.send_code_disable = false
            _this.text = '获取验证码'
            return
          }
          _this.text = `请等待${sec--}S`
        }, 1000)
      }
    }
  }
</script>

<style scoped>

</style>
