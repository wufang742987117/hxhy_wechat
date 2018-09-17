<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { set_userInfo } from "common/js/user"
  import store from 'store'

  export default {
    created(){
      let userInfo = store.get('__HXHY_USER_INFO__')

      if(userInfo){

        userInfo = JSON.parse(userInfo)
        set_userInfo(userInfo)
        this.$router.push(`/${userInfo.data.id}/home`)
      }else{
        this.$router.push('/login')
      }
    }
  }
</script>

<style scoped>

</style>
