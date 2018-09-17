<template>
  <div>

    <div class="h_title clearfix bt">
      <!--<div class="fl h_fh">-->
      <!--<img src="static/images/n_images/fh_1.png" alt=""/>-->
      <!--</div>-->
      申请提现
    </div>
    <header-small>
      <div class="h_zl h_zl2 fr">
        <input type="hidden" name="ye" id="iye"/>
        <p class="h_tj3" id="ye">
          &yen;{{data.resultSet || 0}}
        </p>
        <p class="h_tj2">
          收益余额
        </p>
      </div>
    </header-small>
    <div class="f_dl f_dl_a">
      <p class="clearfix xf_text">
        提现金额：
        <input type="number" class="tx_input" style="width:40%;height:1.4rem;border: 1px solid #868695;font-size: 0.65rem;border-radius: 0.2rem;" v-model.trim="money">
        <span class="but2" @click="goWithdraw">提交</span>
      </p>
    </div>
    <div class="f_dl f_dl_a">
      <p class="sy_jl" id="profit_class">
        提现记录: <span style="float: right" v-if="data.data.length < 1">暂无记录！</span>
        <!--<select>-->
        <!--<option>所有类别</option>-->
        <!--<option></option>-->
        <!--<option></option>-->
        <!--<option></option>-->
        <!--</select> -->
      </p>
      <ul class=" list_1" id="accounts_nums">
        <li class="clearfix" v-for="item of data.data">
          {{item.createTime | date}}
          <strong>￥{{item.money}}</strong>
        </li>
      </ul>
      <!--<p class="ck_gd" onclick="goAddress('/agency_accounts_list')">查看更多<span><img src="static/images/n_images/duo.png" alt=""/></span></p>-->
    </div>
    <p class="ts_text">
      <span>
        <img src="static/images/n_images/ts.png" alt="">
      </span>
      提示：3个工作日审核到账，国家法定假日除外。
    </p>
    <span class="but" @click="back">返回主页</span>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui'
  import HeaderSmall from 'base/header-small/header-small'
  import { REST } from "api"

  export default {
    data () {
      return {
        data: {
          data: []
        },
        money: ''
      }
    },
    created () {
      this._getWithdrawList()
    },
    methods: {
      goWithdraw(){
				if(this.money<100) {
						Toast('最低提现限额为100');
				}
        if(this.money && this.money >= 100){
          let _this = this
          REST.toWithdraw({money: _this.money}).then(function (res) {
            _this.money = ''
            _this._getWithdrawList()
            Toast(res.msg)
          })
        }
      },
      back () {
        this.$router.back()
      },
      _getWithdrawList(){
        let _this = this
        REST.getWithdrawList().then(function (res) {
          console.log(res)
          _this.data = res
        })
      }
    },
    components: {
      HeaderSmall
    },
    filters:{
      date(time){
        let date   = new Date(time)
        let year   = date.getFullYear();
        let month  = date.getMonth()+1;
        let day    = date.getDate();
        let hour   = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        return year+"-"+month+"-"+day+' '+hour+':'+minute+':'+second;
      }
    }
  }
</script>

<style scoped>

</style>
