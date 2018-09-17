<template>
  <div>
    <div class="head_box">
      <div class="h_title clearfix">
        用户中心
      </div>
      <header-big></header-big>
      <!--佣金比例-->
      <div class="percent" style="text-align: center;">
        <span></span>
      </div>
    </div>
    <!--   登录框 -->
    <div class="f_dl clearfix">
      <p class="s_s fl br" @click="_testRouter('profit')">
				<span>
          <img src="static/images/n_images/_s1.png">
        </span> 收益
      </p>

      <p class="s_s fl" @click="_testRouter('accounts')">
				<span>
          <img src="static/images/n_images/_s2.png">
        </span> 提现
      </p>
    </div>
    <div class="f_dl">
      <ul class="zl_list">
        <router-link tag="li" class="clearfix" :to="'/' + userId + '/userinfo'">
          <i>
            <img src="static/images/n_images/a1.png">
          </i> 用户资料
          <em>
            <img src="static/images/n_images/_m1.png">
          </em>
        </router-link>

        <router-link tag="li" class="clearfix" :to="'/' + userId + '/qr'" v-if="type">
          <i>
            <img src="static/images/n_images/a5.png">
          </i> 我的二维码
          <em>
            <img src="static/images/n_images/_m1.png">
          </em>
        </router-link>

        <router-link tag="li" class="clearfix" :to="'/' + userId + '/jujian-list'" v-if="type && type !== 6  && type!==5">
          <i>
            <img src="static/images/n_images/a6.png">
          </i> 我的居间
          <em>
            <img src="static/images/n_images/_m1.png">
          </em>
        </router-link>
				
				<router-link tag="li" class="clearfix" :to="'/' + userId + '/withdraw-list'" v-if="type && type !== 6  && type!==5">
					<i>
						<img src="static/images/n_images/a6.png">
					</i> 提现申请列表
					<em>
						<img src="static/images/n_images/_m1.png">
					</em>
				</router-link>

        <router-link tag="li" class="clearfix" id="shangji" :to="'/' + userId + '/height-level'" v-if="type !== 1 && type !== 4 &&type !==0">
          <i>
            <img src="static/images/n_images/a6.png">
          </i> 我的上级
          <em>
            <img src="static/images/n_images/_m1.png">
          </em>
        </router-link>

        <router-link tag="li" class="clearfix" id="shidai" :to="'/' + userId + '/agency-city'" v-if="type === 1">
          <i>
            <img src="static/images/n_images/a6.png">
          </i> 我的市级渠道
          <em>
            <img src="static/images/n_images/_m1.png">
          </em>
        </router-link>

        <router-link tag="li" class="clearfix" :to="'/' + userId + '/agency-county'" v-if="type === 1 || type === 2">
          <i>
            <img src="static/images/n_images/a6.png">
          </i> 我的县级渠道
          <em>
            <img src="static/images/n_images/_m1.png">
          </em>
        </router-link>

        <router-link tag="li" class="clearfix" :to="'/' + userId + '/jujian-add'" v-if="type && type !== 6 && type!==5">
          <i>
            <img src="static/images/n_images/a6.png">
          </i> 添加居间
          <em>
            <img src="static/images/n_images/_m1.png">
          </em>
        </router-link>

        <router-link tag="li" class="clearfix" :to="'/' + userId + '/agency-apply'" v-if="type==0 && status==1">
          <i>
            <img src="static/images/n_images/a6.png" alt=""/>
          </i> 申请渠道
          <em>
            <img src="static/images/n_images/_m1.png" alt=""/>
          </em>
        </router-link>

        <router-link tag="li" class="clearfix" :to="'/' + userId + '/agency-apply-record'" v-if="type==0 && status==3">
          <i>
            <img src="static/images/n_images/a6.png" alt=""/>
          </i> 申请记录
          <em>
						<!--<router-link tag="ul" class="clearfix" :to="'/' + item.id + '/jujian-detail'">-->
            <img src="static/images/n_images/_m1.png" alt=""/>
          </em>
        </router-link>

        <router-link tag="li" class="clearfix" :to="'/' + userId + '/recommend'" v-if="type">
          <i>
            <img src="static/images/n_images/a6.png">
          </i> 我的用户
          <em>
            <img src="static/images/n_images/_m1.png">
          </em>
        </router-link>
      </ul>
    </div>
    <router-link tag="span" class="but pt" to="/login">退出登录</router-link>
  </div>
</template>

<script>
  import { get_userInfo } from 'common/js/user.js'
  import HeaderBig from 'base/header-big/header-big'
  import { Toast } from 'mint-ui'
  import { REST } from 'api'
  import store from 'store'

  export default {
    data () {
      return {
        type: 0,
        status:1,
        userId: ''
      }
    },
    created(){
      this.userId = this.$route.params.id
      this.type = get_userInfo('data').type
      this.status = get_userInfo('data').status
      if(this.$route.params.id) {
        let _this = this;
        REST.getFrontUserInfo({
          id: _this.userId
        }).then(function (res) {
          _this.type = res.data.type;
          _this.status = res.data.status;
          if(_this.type == 5&&_this.status == 4) {
            Toast('您已成为居间商，欢迎登录');
            REST.updateFrontUserInfoById({
              id: _this.userId,
              status:1
            }).then(function (res) {
              console.log(res);
            })
          }
        })
      }
    },
    methods: {
      logout () {
        this.$router.back()

      },
      _testRouter(to){
        if(!this.type){
          Toast('成为渠道或居间后可查看')
          return
        }
        this.$router.push(`/${this.userId}/${to}`)
      }
    },
    components: {
      HeaderBig
    }
  }
</script>

<style scoped>

</style>
