<template>
  <div>

    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh" @click="back">-->
        <!--<img src="static/images/n_images/fh_1.png">-->
      <!--</div>-->
      手机验证
    </div>
    <div class="f_dl f_dl_a">
      <div class="dl_list">
        <input type="hidden" id="userType" name="userType" value="代理商"/>
        <input type="hidden" id="codes" name="codes" value=""/>
        <input type="hidden" id="userId" name="userId" value=""/>
        <p>
          <i> <img src="static/images/c_images/numb.png" alt=""/></i>
          <!--  <em>手机号</em> -->
          <input type="text" id="phone" name="phone" placeholder="请输入手机号" maxlength="11" v-model="userPhone">
        </p>
        <p class="clearfix">
          <i> <img src="static/images/n_images/pass_word.png" alt=""/>
          </i>
          <!--  <em>验证码</em> -->
          <input type="text" id="code" name="code" maxlength="6" placeholder="请输入验证码" v-model.trim="code">
          <a class="yzm_but" @click="sendCode()">{{text}}</a>
        </p>
      </div>
    </div>
    <span tag="span" class="but" @click="next">下一步</span>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import { REST } from "api";

  export default {
    data () {
      return {
        userPhone: '',
        code: '',
        text: '获取验证码',
        send_code_disable: false
      }
    },
    methods: {
      back () {
        this.$router.back()
      },
      sendCode () {
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
        });
      },
      next () {
        if (!this._testPhone(this.userPhone)) {
          return
        }

        if (!this.code) {
          Toast('请输入验证码！')
          return
        }

        if (this.code.length !== 6) {
          Toast('验证码格式错误！')
          return
        }

        let _this = this

        REST.testCode({
          userPhone: this.userPhone,
          code: this.code
        }).then(function (res) {
          if (res.success === true) {
            _this.$router.push({
              path: '/reset-password2',
              query: { userPhone: _this.userPhone }
            })
          }
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
