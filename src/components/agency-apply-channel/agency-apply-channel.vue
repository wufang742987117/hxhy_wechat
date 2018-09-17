<template>
  <div>
    <div class="h_title clearfix bt">
      <div class="fl h_fh">
        <img src="images/n_images/fh_1.png" alt=""/>
      </div>
      申请流量渠道
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
         <!-- <li class="clearfix">
            <b><strong>*</strong>一级返佣:</b>
            <span class="n3">
                        <input type="text" name="" v-model="formdata.oneRebate" readonly disabled/>
                    </span>
          </li>-->
          <!--<li class="clearfix">-->
            <!--<b><strong>*</strong>二级返佣:</b>-->
            <!--<span class="n3">-->
                        <!--<input type="text" name=""/>-->
                    <!--</span>-->
          <!--</li>-->
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

          <!--<li class="clearfix">-->
            <!--<b><strong>*</strong>纳税人识别号:</b>-->
            <!--<span class="n3">-->
                        <!--<input type="text" name="taxpayer_num" id="taxpayer_num"/>-->
                    <!--</span>-->
          <!--</li>-->
          <li class="clearfix">
            <b><strong>*</strong>法人身份证正面:</b>

            <div>
              <div style="width: 100%;" class="img1" >
                <m-up-loader :src="src" :temp="idCardFrontUrl" @idCardFrontUrl="getUploadImg"></m-up-loader>
              </div>
            </div>

            <!--<span class="n3">-->
                        <!--<input type="file" name="img_idcard1" value="浏览" id="in1"/>-->
                    <!--</span>-->
          </li>
          <label>(图片名称不能包含中文)</label>
          <li class="clearfix">
            <b><strong>*</strong>法人身份证反面:</b>
            <div>
              <div style="width: 100%;">
                <m-up-loader :src="src" :temp="idCardBackUrl" @idCardBackUrl="getUploadImg"></m-up-loader>
              </div>
            </div>
            <!--<span class="n3">-->
                        <!--<input type="file" name="img_idcard2" value="浏览" id="in2"/>-->
                    <!--</span>-->
          </li>

          <label>(图片名称不能包含中文)</label>
          <li class="clearfix">
            <b><strong>*</strong>企业三证合一扫描:</b>
            <div>
              <div style="width: 100%;">
                <m-up-loader :src="src" :temp="threeCardUrl" @threeCardUrl="getUploadImg"></m-up-loader>
              </div>
            </div>
            <!--<span class="n3">-->
                        <!--<input type="file" name="img_license" value="浏览" id="in3"/>-->
                    <!--</span>-->
          </li>
          <label>(图片名称不能包含中文)</label>

          <li class="clearfix">
            <b><strong>*</strong>合同:</b>
            <div>
              <div style="width: 100%;">
                <m-up-loader :src="src" :temp="contractUrl" @contractUrl="getUploadImg"></m-up-loader>
              </div>
            </div>
            <!--<span class="n3">-->
                        <!--<input type="file" name="img_agreement1" value="浏览" id="in4"/>-->
                    <!--</span>-->
          </li>
          <label>(图片名称不能包含中文)</label>

          <li class="clearfix">
            <b><strong>*</strong>合同2:</b>
            <div>
              <div style="width: 100%;">
                <m-up-loader :src="src" :temp="contract2Url" @contract2Url="getUploadImg"></m-up-loader>
              </div>
            </div>
            <!--<span class="n3">-->
                        <!--<input type="file" name="img_agreement2" value="浏览" id="in5"/>-->
                    <!--</span>-->
          </li>
          <label>(图片名称不能包含中文)</label>

          <input type="hidden" name="imgUrl1" id="imgUrl1" value=""/>
          <input type="hidden" name="imgUrl2" id="imgUrl2" value=""/>
          <input type="hidden" name="imgUrl3" id="imgUrl3" value=""/>
          <input type="hidden" name="imgUrl4" id="imgUrl4" value=""/>
          <input type="hidden" name="imgUrl5" id="imgUrl5" value=""/>
          <input type="hidden" name="imgUrl6" id="imgUrl6" value=""/>
        </ul>
      </div>
      <input type="hidden" name="areaName" id="fArea">
      <input type="hidden" name="areaId" id="fAreaId">
      <input type="hidden" name="agLevelId" id="levelId">
    </form>
    <div class="but_box">
      <span class="but3" @click="formSubmit()">提交</span>
      <span class="but3" @click="goBack()">返回上一级</span>
    </div>
  </div>
</template>

<script>
  // 上传图片组件
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
        formdata:{
          name:'',
          userPhone:'',
          address:'',
          servantName:'',
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
        }
    }
  },
  created:function () {
    let _this = this;
    REST.getCommsionLimit({
      type:4
    }).then(function (res) {
      _this.formdata.oneRebate = res.data[0].commissionMaxLimit;
    })
    _this.formdata.userPhone = store.get('__HXHY_LOGIN_USERPHONE__');
  },
  methods: {
    goBack() {
      this.$router.back()
    },
    getUploadImg (cvt) {
      if(cvt.type==1) {
          this.formdata.idCardFrontUrl=cvt.content;
      }else if(cvt.type==2) {
        this.formdata.idCardBackUrl=cvt.content;
      }else if(cvt.type==3) {
        this.formdata.threeCardUrl=cvt.content;
      }
      else if(cvt.type==4) {
        this.formdata.contractUrl=cvt.content;
      }
      else if(cvt.type==5) {
        this.formdata.contract2Url=cvt.content;
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
      REST.applyAgentAreaChannel(_this.formdata).then(function(res){
        Toast('申请成功,稍后将重新登录');
        setTimeout(function(){
          _this.$router.push(`/login`)
        },1000)
      }, function (err) {
        _this.formdata.contractUrl=JSON.parse(_this.formdata.contractUrl);
        _this.formdata.contract2Url=JSON.parse(_this.formdata.contract2Url);
        debugger;
      })
    }
  }
  }
</script>

<style lang="less" scoped>
  .show {
    width: 100px;
    height: 100px;
    overflow: hidden;
    position: relative;
    border-radius: 50%;
    border: 1px solid #d5d5d5;
  }
  .picture {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
