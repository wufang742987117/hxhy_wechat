<template>
  <div>
    <div class="h_title clearfix bt">
      <div class="fl h_fh">
        <a href="apply_middlen.html"><img src="images/n_images/fh_1.png" alt=""/></a>
      </div>
      申请成为居间
    </div>
    <!--   登录框 -->
    <div class="f_dl f_dl_a">
      <p class="tj_text">基本信息</p>
      <ul class="zl_list tj_list">
        <li class="clearfix">
          <b><strong>*</strong>代理商账号</b>
          <span class="n3">
                        <input type="number" id="idcart" name="idcart" required="required"/>
                    </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>身份证号</b>
          <span class="n3">
                        <input type="number" id="idcart" name="idcart" required="required"/>
                    </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>开户行</b>
          <span class="n3">
                        <input type="text" id="bank_name" name="bank_name" required="required"/>
                    </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>地址</b>
          <span class="n3">
                        <input type="text" id="address" name="address" required="required"/>
                    </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>省</b>
          <span class="n3">
						<select name="" id="province">
							<option disabled selected value>请选省份</option>
						</select>
					</span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>市</b>
          <span class="n3">
						<select name="" id="city">
							<option disabled selected value>请选择市</option>
						</select>
					</span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>县</b>
          <span class="n3">
						<select name="" id="county">
							<option disabled selected value>请选择县</option>
						</select>
					</span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>银行帐户</b>
          <span class="n3">
                        <input type="text" id="bank_user" name="bank_user" required="required"/>
                    </span>
        </li>
        <li class="clearfix">
          <b><strong>*</strong>银行卡号</b>
          <span class="n3">
                        <input type="text" id="bank_cardnum" name="bank_cardnum" required="required"/>
                    </span>
        </li>
        <li class="clearfix">
          <b><strong></strong>居间账号</b>
          <span class="n3">
                        <input type="text" id="uname" name="uname" required="required"/>
                    </span>
        </li>
      </ul>
    </div>
    <span class="but" onclick="validate()">提&nbsp;&nbsp;交</span>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style scoped>

</style>
