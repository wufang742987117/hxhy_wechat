<template>
  <div>
    <div class="h_title clearfix bt">
      <div class="fl h_fh">
        <img src="images/n_images/fh_1.png" alt=""/>
      </div>
      我的代理信息
    </div>
    <!--   登录框 -->
    <div class="f_dl">
      <ul class="zl_list">
        <li class="clearfix">
          账号<span id="uname"></span>
        </li>
        <li class="clearfix">
          开户银行<span id="bank_name"></span>
        </li>
        <li class="clearfix">
          银行卡号<span id="bank_cardnum"></span>
        </li>
      </ul>
      <input type="hidden" name="agencyId" id="agencyId"/>
    </div>
    <div class="pt but_box" id="address">

    </div>
    <form action="ht/down" id="htDown">

    </form>
  </div>
</template>

<script>
  export default {
    name: ''
  }
</script>

<style scoped>

</style>
