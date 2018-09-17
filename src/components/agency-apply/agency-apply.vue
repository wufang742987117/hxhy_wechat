<template>
  <div>

    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh">-->
        <!--<img src="static/images/n_images/fh_1.png" alt=""/>-->
      <!--</div>-->
      渠道类型
    </div>
    <!--   登录框 -->
    <div class="f_dl f_dl_a">
      <ul class="zl_list">
        <router-link tag="li" class="clearfix" to="/user/agency-apply-channel">
          流量渠道
          <em>
            <img src="static/images/n_images/_m1.png" alt=""/>
          </em>
        </router-link>
        <router-link tag="li" class="clearfix" to="/user/agency-apply-region">
          区域渠道
          <em>
            <img src="static/images/n_images/_m1.png" alt=""/>
          </em>
        </router-link>
      </ul>
    </div>
    <span class="but" @click="goUserCenter()">返回主页</span>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        type: 0,
        userId: ''
      }
    },
    created(){
    },
    methods: {
      goUserCenter() {
        this.$router.back()
      }
    }
  }
</script>

<style scoped>

</style>
