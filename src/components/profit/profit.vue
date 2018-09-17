<template>
  <div>

    <div class="h_title clearfix bt">
      收益统计
    </div>
    <header-small>
      <div class="h_zl h_zl2 fr">
        <p class="h_tj3" id="profit_money">
          &yen;{{data.resultSet || 0}}
        </p>
        <p class="h_tj2">
          收益总额
        </p>
      </div>
    </header-small>
    <div class="input-search">
      <input type="date" v-model="startDate"> 至 <input type="date"  v-model="endDate">
      <div class="select-search">
        <label for="">类型:</label>
        <select name="" id="" v-model="params.consume_type">
          <option :value="item.value" v-for="item in typelist">{{item.name}}</option>
        </select>
        <input type="button" value="查询" @click="searchClick" style="padding: .2rem 1rem;">
      </div>
    </div>

    <div class="f_dl f_dl_a">
      <p class="sy_jl" id="profit_class">
        收益记录: <span style="float: right" v-if="data.data.length < 1">暂无记录！</span>
      </p>
      <ul class=" list_1" id="profit_records">
        <li class="clearfix" v-for="item of data.data">
          {{item.createTime | date}}
          <strong>￥{{item.accumulatedRebate}}</strong>
        </li>
      </ul>
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
  import { DatetimePicker  } from 'mint-ui'
  import HeaderSmall from 'base/header-small/header-small'
  import { REST } from "api"

  export default {
    data(){
      return {
        startDate:'',
        endDate:'',
        startDate_value:'',
        endDate_value:'',
        data: {
          data: []
        },
        params:{
          startTime:'',
          endTime:'',
          consume_type:1
        },
        typelist:[
          {
            "name":"官方赛事",
            "value":"1"
          }
        ]
      }
    },
    created(){
      let _this = this
      REST.getIncomeData(_this.params).then(function (res) {
        _this.data = res
      })
      let date = new Date();
      _this.endDate = date.getFullYear() + '-'+(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+(date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
      _this.startDate = date.getFullYear() + '-'+(date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-'+(date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
      },
    methods: {
      back () {
        this.$router.back()
      },
      searchClick(ev) {
        ev.preventDefault=true;
        ev.stop;
        let _this = this
        _this.params.startTime = Number(new Date(_this.startDate+' '+"00:00:00"))
        _this.params.endTime = Number(new Date(_this.endDate+' '+"23:59:59"))
        REST.getIncomeData(_this.params).then(function (res) {
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

<style>
  .input-search {
    font-size: .7rem;
  }
  select {
    padding: 0.2rem 0.2rem;
    border: 1px solid #D9C797 ;
    font-size: 0.65rem;
    border-radius: 0.2rem;
    background-color:#fff;
  }
  .select-search {
    margin: .5rem 0;

  }
  .select-search input {
    margin-left: 1.2rem;
  }

  .input-search input {
    border:1px solid #D9C797!important;
    background: none;
  }

</style>
