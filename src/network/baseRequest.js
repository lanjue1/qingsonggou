import Vue from 'vue';
import axios from 'axios';

export function base(config) {
 //创建axios实例
 const Brequest=axios.create({
  // baseURL:'http://106.54.54.237:8000/api/v1',
   baseURL:'http://123.207.32.32:8000/api/w1',
      timeout:5000
  })
  //  2.返回实例请求
  //  2.1添加请求拦截器
  Brequest.interceptors.request.use(config=>{
    return config
    console.log('+++++'+'config');
  },error => {
    //console.log('request.err')
  })
    // 2.2添加响应拦截器
  Brequest.interceptors.response.use(res=>{
    return res.data;
    console.log('-----'+'res');
  },error => {
    console.log('response.err');
})
return Brequest(config)

 /*return new Promise((resolve,reject)=>{
   return axios({
     baseURL:'http://106.54.54.237:8000/api/v1/',
     timeout:5000,

   }).then((res)=>{
     resolve(res.data)
    }).catch(function (err) {
      reject(err)
    })
 })*/
}
