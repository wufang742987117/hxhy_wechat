<template>
  <div>
    <div class="h_title clearfix bt">
      <div class="fl h_fh">
        <img src="images/n_images/fh_1.png" alt=""/>
      </div>
      申请区域渠道
    </div>
    <form id="register_form" role="form" action="" enctype="multipart/form-data" method="post">
      <!--   登录框 -->
      <div class="f_dl f_dl_a">
        <p class="tj_text">基本信息</p>
        <ul class="zl_list tj_list">
          <li class="clearfix">
            <b><strong>*</strong>姓名:</b>
            <span class="n3">
                        <input type="text" name="link_man" id="link_man" v-model="formdata.name" required/>
                    </span>
          </li>
          <li class="clearfix">
            <b><strong>*</strong>电话:</b>
            <span class="n3">
                        <input type="text" name="link_phone" id="link_phone" v-model="formdata.userPhone" readonly disabled/>
                    </span>
          </li>
          <li class="clearfix">
            <b><strong>*</strong>地址:</b>
            <span class="n3">
                        <input type="text" name="sales_man" id="sales_man" v-model="formdata.address"/>
                    </span>
          </li>
          <li class="clearfix">
          <b><strong>*</strong>级别:</b>
          <span class="n3">
            <select name="" v-model="formdata.type" @change="typeChange">
                <option v-for="item in type" :value="item.type">{{item.name}}</option>
            </select>
          </span>
          </li>
          <li class="clearfix">
            <b><strong></strong>省</b>
            <span class="n3">
						<select name="" id="province" v-model="formdata.agentProvince" @change="proChange">
							<option  v-for="item in province" :value="item.caId" v-bind:disabled="item.isAgent==1">
                  {{item.areaName}}
                   <span v-if="item.isAgent==1">(已绑定)</span>
              </option>
						</select>
					</span>
          </li>
          <li class="clearfix">
            <b><strong></strong>市</b>
            <span class="n3">
						<select name="" id="city" v-model="formdata.agentCity" v-bind:disabled="cityAble" @change="cityChange">
                <option v-for="item in city" :value="item.caId" v-bind:disabled="item.isAgent==1">
                    {{item.areaName}}
                   <span v-if="item.isAgent==1">(已绑定)</span>
                </option>
						</select>
					</span>
          </li>
          <li class="clearfix">
            <b><strong></strong>县</b>
            <span class="n3">
						<select name="" id="county" v-model="formdata.agentArea" v-bind:disabled="areaAble">
							<!--<option disabled selected value>请选择县</option>-->
              <option v-for="item in area" :value="item.caId" v-bind:disabled="item.isAgent==1">
                  {{item.areaName}}
                   <span v-if="item.isAgent==1">(已绑定)</span>
              </option>
						</select>
					</span>
          </li>
        </ul>
      </div>

      <div class="f_dl f_dl_a">
        <p class="tj_text">返佣人信息</p>
        <ul class="zl_list tj_list">
          <li class="clearfix">
            <b><strong>*</strong>账户名称:</b>
            <span class="n3">
                        <input type="text" name="" id="" v-model="formdata.servantName"/>
                    </span>
          </li>
          <li class="clearfix">
            <b><strong>*</strong>开户银行:</b>
            <span class="n3">
                        <input type="text" name="bank_user" id="bank_user" v-model="formdata.servantBank"/>
                    </span>
          </li>
          <li class="clearfix">
            <b><strong>*</strong>银行账号:</b>
            <span class="n3">
                        <input type="text" name="bank_cardnum" id="bank_cardnum" v-model="formdata.servantBankAccount"/>
                    </span>
          </li>
          <!--<li class="clearfix">
            <b><strong>*</strong>一级返佣:</b>
            <span class="n3">
                        <input type="text" name="" v-model="formdata.oneRebate" readonly disabled/>
                    </span>
          </li>-->
        </ul>
      </div>

      <div class="f_dl f_dl_a">
        <p class="tj_text">企业基本信息</p>
        <ul class="zl_list tj_list">

          <li class="clearfix">
            <b><strong>*</strong>企业名称:</b>
            <span class="n3">
                        <input type="text" name="company" id="company" v-model="formdata.enterpriceName"/>
                    </span>
          </li>
          <li class="clearfix">
            <b><strong>*</strong>企业统一社会信用代码:</b>
            <span class="n3">
                        <input type="text" name="" v-model="formdata.creditCode"/>
                    </span>
          </li>

          <li class="clearfix">
            <b><strong>*</strong>法人身份证正面:</b>

            <div>
              <div style="width: 100%;" class="img1" >
                <m-up-loader :src="src" :temp="idCardFrontUrl" @idCardFrontUrl="getUploadImg"></m-up-loader>
              </div>
            </div>

          </li>
          <label>(图片名称不能包含中文)</label>
          <li class="clearfix">
            <b><strong>*</strong>法人身份证反面:</b>
            <div>
              <div style="width: 100%;">
                <m-up-loader :src="src" :temp="idCardBackUrl" @idCardBackUrl="getUploadImg"></m-up-loader>
              </div>
            </div>
          </li>

          <label>(图片名称不能包含中文)</label>
          <li class="clearfix">
            <b><strong>*</strong>企业三证合一扫描:</b>
            <div>
              <div style="width: 100%;">
                <m-up-loader :src="src" :temp="threeCardUrl" @threeCardUrl="getUploadImg"></m-up-loader>
              </div>
            </div>
          </li>
          <label>(图片名称不能包含中文)</label>

          <li class="clearfix">
            <b><strong>*</strong>合同:</b>
            <div>
              <div style="width: 100%;">
                <m-up-loader :src="src" :temp="contractUrl" @contractUrl="getUploadImg"></m-up-loader>
              </div>
            </div>
          </li>
          <label>(图片名称不能包含中文)</label>

          <li class="clearfix">
            <b><strong>*</strong>合同2:</b>
            <div>
              <div style="width: 100%;">
                <m-up-loader :src="src" :temp="contract2Url" @contract2Url="getUploadImg"></m-up-loader>
              </div>
            </div>
          </li>
          <label>(图片名称不能包含中文)</label>
        </ul>
      </div>
    </form>
    <div class="but_box">
      <span class="but3" @click="formSubmit()">提交</span>
      <span class="but3" @click="goBack()">返回上一级</span>
    </div>
  </div>
</template>

<script>
  import mUpLoader from 'components/uploader/uploader.vue'
  import { REST } from 'api'
  import { Toast } from 'mint-ui'
  import store from 'store'

  export default {
    name: 'UploadImg',
    components: {
      mUpLoader
    },
    data () {
      return {
        src: 'api/image/uploadImage', // 后台接受图片的路径

        idCardFrontUrl:'idCardFrontUrl',
        idCardBackUrl:'idCardBackUrl',
        threeCardUrl:'threeCardUrl',
        contractUrl:'contractUrl',
        contract2Url:'contract2Url',
        type: 0,
        userId: '',
        type:[
          {
            "name":"省级",
            "type":1
          },
          {
            "name":"市级",
            "type":2
          },
          {
            "name":"县级",
            "type":3
          }
        ],
        formdata:{
          name:'',
          userPhone:'',
          type:1,
          address:'',
          servantName:'',
          agentProvince:'1',
          agentCity:'',
          agentArea:'',
          servantBank:'',
          servantBankAccount:'',
          oneRebate:0,
          enterpriceName:'',
          creditCode:'',
          idCardFrontUrl:'',
          idCardBackUrl:'',
          threeCardUrl:'',
          contractUrl:'',
          contract2Url:'',
        },
        province: [],
        city:[],
        area:[],
        cityAble:true,
        areaAble:true,
        provinceCode:''
      }
    },
    created:function () {
      let _this = this;
      REST.getCommsionLimit({
        type:1
      }).then(function (res) {
        _this.formdata.oneRebate = res.data[0].commissionMaxLimit;
      })
      _this.formdata.userPhone = store.get('__HXHY_LOGIN_USERPHONE__');

      REST.getProvincialData({
      }).then(function (res) {
        _this.province = res.data;
      })
    },
    methods: {
      goBack() {
        this.$router.back()
      },
      getUploadImg (cvt) {
        if (cvt.type == 1) {
          this.formdata.idCardFrontUrl = cvt.content;
        } else if (cvt.type == 2) {
          this.formdata.idCardBackUrl = cvt.content;
        } else if (cvt.type == 3) {
          this.formdata.threeCardUrl = cvt.content;
        }
        else if (cvt.type == 4) {
          this.formdata.contractUrl = cvt.content;
        }
        else if (cvt.type == 5) {
          this.formdata.contract2Url = cvt.content;
        }
      },
      typeChange() {
        let _this = this;
        if(_this.formdata.type==1) {
            _this.cityAble = true;
            _this.areaAble = true;
            _this.formdata.agentCity = '';
            _this.formdata.agentArea = '';
        }else if(_this.formdata.type==2) {
          _this.cityAble = false;
          _this.areaAble = true;
          _this.formdata.agentArea = '';
          for(var i=0;i<_this.province.length;i++) {
             if(_this.province[i].caId == _this.formdata.agentProvince) {
               _this.provinceCode = _this.province[i].areaCode;
             }
          }
          REST.getlowerLeve({
            parentAreaCode:_this.provinceCode
          }).then(function(res){
            _this.city = res.data;
            _this.formdata.agentCity = res.data[0].caId
          })
        }else if(_this.formdata.type==3) {

          _this.cityAble = false;
          _this.areaAble = false;

          // _this.proChange();


          for(var i=0;i<_this.province.length;i++) {
            if(_this.province[i].caId == _this.formdata.agentProvince) {
              _this.provinceCode = _this.province[i].areaCode;
            }
          }
          REST.getlowerLeve({
            parentAreaCode:_this.provinceCode
          }).then(function(res){
            _this.city = res.data;
            _this.formdata.agentCity = res.data[0].caId;
            for(var i=0;i<_this.city.length;i++) {
              if(_this.city[i].caId == _this.formdata.agentCity) {
                _this.cityCode = _this.city[i].areaCode;
              }
            }
            REST.getlowerLeve({
              parentAreaCode:_this.cityCode
            }).then(function(res){
              _this.area = res.data;
              _this.formdata.agentArea = res.data[0].caId
            })
          })


        }
      },
      proChange () {
        let _this = this;
        for(var i=0;i<_this.province.length;i++) {
          if(_this.province[i].caId == _this.formdata.agentProvince) {
            _this.provinceCode = _this.province[i].areaCode;
          }
        }
        console.log(_this.provinceCode);
        if(_this.formdata.type!=1) {
          REST.getlowerLeve({
            parentAreaCode:_this.provinceCode
          }).then(function(res){
            _this.city = res.data;
            _this.formdata.agentCity = res.data[0].caId
          })
          if(_this.formdata.type == 3) {
            REST.getlowerLeve({
              parentAreaCode:_this.provinceCode
            }).then(function(res){
              _this.city = res.data;
              _this.formdata.agentCity = res.data[0].caId;
              _this.cityCode = _this.city[0].areaCode;

              REST.getlowerLeve({
                parentAreaCode:_this.cityCode
              }).then(function(res){
                _this.area = res.data;
                _this.formdata.agentArea = res.data[0].caId
              })
            })


          }
        }
      },
      cityChange() {
        let _this = this;
        if(_this.formdata.type == 3) {
          for(var i=0;i<_this.city.length;i++) {
            if(_this.city[i].caId == _this.formdata.agentCity) {
              _this.cityCode = _this.city[i].areaCode;
            }
          }
          REST.getlowerLeve({
            parentAreaCode:_this.cityCode
          }).then(function(res){
            _this.area = res.data;
            _this.formdata.agentArea = res.data[0].caId
          })
        }
      },
      formSubmit() {
        let _this = this;
        let id = store.get('__HXHY_LOGIN_ID__');
        if (!this.formdata.name || !this.formdata.address || !this.formdata.servantName || !this.formdata.servantBank || !this.formdata.servantBankAccount || !this.formdata.enterpriceName || !this.formdata.creditCode || !this.formdata.idCardFrontUrl || !this.formdata.idCardBackUrl || !this.formdata.threeCardUrl || !this.formdata.contractUrl || !this.formdata.contract2Url){
          Toast('请将信息填写完整！')
          return
        }
        let reg =/^[1-9]\d*$/;
        if(!reg.test(this.formdata.servantBankAccount) || this.formdata.servantBankAccount.length>25) {
          Toast('请输入正确的银行账号！')
          return
        }
        this.formdata.contractUrl = JSON.stringify(_this.formdata.contractUrl);
        this.formdata.contract2Url = JSON.stringify(_this.formdata.contract2Url);
        console.log(_this.formdata);
        REST.applyAgentAreaArea(_this.formdata).then(function(res){
          Toast('申请成功,稍后将重新登录');
          setTimeout(function(){
            _this.$router.push(`/login`)
          },1000)
        }, function (err) {
          _this.formdata.contractUrl=JSON.parse(_this.formdata.contractUrl);
          _this.formdata.contract2Url=JSON.parse(_this.formdata.contract2Url);
        })
      }
    }
  }
</script>

<style scoped>

</style>
