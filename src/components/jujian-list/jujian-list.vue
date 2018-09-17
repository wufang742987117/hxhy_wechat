<template>
  <div>
    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh">-->
        <!--<a href="" class="back"><img src="images/n_images/fh_1.png" alt=""/></a>-->
      <!--</div>-->
      <span>我的居间</span>
    </div>
      <div class="f_dl f_dl_a total">
      <span>居间总数：{{data.totalCount}}</span>
    </div>
    <div class="f_dl f_dl_a" v-for="item of data.data">
      <router-link tag="ul" class="zl_list" :to="'/' + item.id + '/jujian-detail'">
        <li class="clearfix">
          账号
          <span>{{item.id}}</span>
        </li>
        <li class="clearfix">
          姓名
          <span>{{item.name}}</span>
        </li>
        <li class="clearfix">
          联系电话
          <span>{{item.userPhone}}</span>
        </li>
        <li class="clearfix">
          总数
          <span>{{item.count}}</span>
        </li>
      </router-link>

       <!--<p class="ck_gd">查看更多<span><img src="images/n_images/duo.png" alt="" /></span></p>-->
    </div>
    <span class="but" @click="back">返回主页</span>
  </div>
</template>

<script>
  import { REST } from "api";

  export default {
    data(){
      return {
        data: ''
      }
    },
    mounted () {
      let _this = this
      REST.getMyJujian({ id: _this.$route.params.id }).then(function (res) {
        _this.data = res
      })
    },
    methods: {
      back(){
        this.$router.back()
      },
			detail(id) {
				alert(id);
			}
    }
  }
</script>

<style scoped>

</style>
