<template>
  <div>
    <form name="myform" id="myform" action="update-password" method="POST">
      <div class="h_title clearfix bt">
        <div class="fl" style="position:absolute;left: 10px;font-size: 14px">
          <span tag="span" @click="cancel">取消</span>
        </div>
        修改密码
      </div>
      <div class="f_dl f_dl_a">
        <div class="dl_list">
          <p>
            <i> <img src="static/images/n_images/pass_word.png" alt=""/></i>
            <input type="password" placeholder="请输入旧密码" maxlength="11" v-model="oldPass">
          </p>
          <p>
            <i> <img src="static/images/n_images/pass_word.png" alt=""/></i>
            <input type="password" placeholder="请输入新密码" maxlength="11" v-model="pwd">
          </p>
          <p>
            <i> <img src="static/images/n_images/pass_word.png" alt=""/></i>
            <input type="password" placeholder="请确认新密码" maxlength="11" v-model="oPwd">
          </p>
        </div>
      </div>
      <span class="but" @click="resetPwd">提交</span>
    </form>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import { REST } from "api";

  export default {
    data(){
      return {
        oldPass: '',
        pwd: '',
        oPwd: ''
      }
    },
    methods: {
      back () {
        this.$router.back()
      },
      resetPwd(){
        if (!this.oldPass) {
          Toast('请输入旧密码！')
          return
        }
        if (!this.pwd) {
          Toast('请输入新密码！')
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

        REST.resetPwd({
          userPhone: this.$route.params.userPhone,
          oldPass: this.oldPass,
          pwd: this.pwd
        }).then(function (res) {
          Toast('密码修改成功！3秒后自动跳转到登录页...')
          setTimeout(() => {
            _this.$router.push('/login')
          }, 3000)
        })
      },
      cancel(){
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

</style>
