import { Toast } from 'mint-ui';
import axios from 'axios'
import store from 'store'
import qs from 'qs'
import { get_userInfo } from "common/js/user"

// axios 配置
axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// axios.defaults.headers.common['Authorization'] = ''
// axios.defaults.headers.token = get_userInfo('resultSet')

// POST传参序列化
axios.interceptors.request.use(config => {
  if (config.method === 'post') {
    config.data = qs.stringify(config.data);
  }

  if (get_userInfo('resultSet')) {
    config.headers.common['token'] = get_userInfo('resultSet');
  }

  return config;
}, error => {
  Toast("错误的传参", 'fail');
  return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use(res => {
  // if(!res.data.success){
  //   // _.toast(res.data.msg);
  //   return Promise.reject(res);
  // }
  if (res.data.success === false) {
    Toast(res.data.msg)
    return;
  }
  return res;
}, error => {
  Toast("网络异常", 'fail');
  return Promise.reject(error);
});


// api 地址
// ljj
// axios.defaults.baseURL = 'http://192.168.10.59:8004/api';
axios.defaults.baseURL = '/api';
// axios.defaults.baseURL = 'http://192.168.10.207/api';



