import Axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

Vue.use(Axios)


const instanstion=Axios.create({
  timeout:5000,

})


instanstion.interceptors.request.use(config=>{
config.data=qs.stringify(config.data)
return config;

})

instanstion.interceptors.response.use((resp)=>{
    return resp.data
},error=>{
    return new Promise(()=>{})
})

export default instanstion