<template>
  <div>
    <div class="head_box">
      <div class="h_title">用户登录</div>
      <div class="h_logo">
        <div class="logo_img">
          <img src="static/images/head.png">
        </div>
      </div>
    </div>
    <div class="f_dl">
      <div class="dl_list">
        <p>
          <i>
            <img src="static/images/n_images/user_name.png">
          </i> 登录账号
          <input type="text" placeholder="请输入登录账号" autocomplete="off" id="username" name="username" v-model="account">
        </p>
        <p>
          <i>
            <img src="static/images/n_images/pass_word.png">
          </i> 登录密码
          <input type="password" placeholder="请输入登录密码" autocomplete="new-password" id="password" name="password" v-model="password">
        </p>
      </div>
      <div class="clearfix dl_mm">
				<span class="fl">
          <input type="checkbox" id="mm" v-model="isLogin" true-value="y" false-value="n">
          <label for="mm">记住密码</label>
        </span>
        <span class="fr">
          <router-link tag="a" to="./reset-password">忘记密码？</router-link>
        </span>
      </div>
    </div>
    <span class="but pt" @click="login">立即登录</span>
    <router-link tag="span" class="but pt" to="/register">立即注册</router-link>
    <div class="f_logo">
      <img src="static/images/n_images/foot_logo.png" alt=""/>
    </div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import { REST } from 'api'
  import store from 'store'
  import { set_userInfo } from 'common/js/user'
  import Cookies from 'js-cookie'

  export default {
    data () {
      return {
        account: '',
        password: '',
        isLogin: 'n'
      }
    },
    created () {
      if (store.get('__HXHY_LOGIN_SAVE__')) {
        this.isLogin = store.get('__HXHY_LOGIN_SAVE__')
        this.account = store.get('__HXHY_LOGIN_NAME__')
        this.password = store.get('__HXHY_LOGIN_PASSWORD__')
      }
      // 清除两个地方
      store.remove('__HXHY_USER_INFO__')
      store.remove('__HXHY_LOGIN_USERPHONE__')
      set_userInfo({})
    },
    methods: {
      back () {
        this.$router.back()
      },
      login () {

        if (!this.account) {
          Toast('请输入登录账号！')
          return
        }
        if (!this.password) {
          Toast('请输入登录密码！')
          return
        }

        let _this = this

        REST.login({
          account: this.account,
          password: this.password,
          isLogin: this.isLogin
        }).then(function (res) {
          if (res.success === true) {
            store.set('__HXHY_USER_INFO__', JSON.stringify(res))
            store.set('__HXHY_LOGIN_USERPHONE__', res.data.userPhone)
              if (_this.isLogin === 'y') {
              store.set('__HXHY_LOGIN_SAVE__', _this.isLogin)
              store.set('__HXHY_LOGIN_NAME__', _this.account)
              store.set('__HXHY_LOGIN_PASSWORD__', _this.password)
            } else {
              store.remove('__HXHY_LOGIN_SAVE__')
              store.remove('__HXHY_LOGIN_NAME__')
              store.remove('__HXHY_LOGIN_PASSWORD__')
            }

            set_userInfo(res)
            // _this.$router.push('/user/home')
            _this.$router.push(`/${res.data.id}/home`)
          }
        })
      },
      _getCookie (name) {
        var strCookie = document.cookie;
        var arr = strCookie.split(';');
        for (var i = 0; i < arr.length; i++) {
          var t = arr[i].split("=");
          if (t[0] == name) {
            return t[1];
          }
        }
        return null;
      }
    },
    watch:{
      isLogin:function (nVal) {
        if(nVal === 'n'){
          store.remove('__HXHY_LOGIN_SAVE__')
          store.remove('__HXHY_LOGIN_NAME__')
          store.remove('__HXHY_LOGIN_PASSWORD__')
          store.remove('__HXHY_LOGIN_USERPHONE__')
        }
      }
    }
  }
</script>

<style scoped>

</style>
