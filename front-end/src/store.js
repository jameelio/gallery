import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status:'',
    token:localStorage.getItem('token') || '',
    user: {}

  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state,token,user){
      state.status = 'success'
      state.token =  token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    }

  },
  actions: {
    login({commit},user){
      return new Promise((resolve,reject)=>{
        console.log("login data",user)
        commit('auth_request')
        axios({
          url: "http://192.168.0.70:8000/users/signIn",
          method: "POST",
          data: user
        
        }).then(res => {
          const token = res.data.data.token;
          const user = res.data.data.user;
          localStorage.setItem('token',token);
          axios.defaults.headers.common['x-access-token'] = token;
          commit('auth_success',token,user)
          resolve(true)  
          })
          .catch(error => {
            commit('auth_error')
            localStorage.removeItem('token')
            reject(error);
          });
      })
    },
    register({commit},newUser){
      return new Promise((resolve,reject)=>{
        console.log(newUser)
        commit('auth_request');
        axios({
          url: "http://192.168.0.70:8000/users/signUp/",
          method: "POST",
          data: newUser
        }).then(res => {
          console.log(res);
          resolve(true)
        }).catch(err =>{
          commit('auth_error',err)
          reject(err);
        })

      });
    },
    logout({commit},userOut){
      return new Promise((resolve,reject)=>{
        commit('logout')
        localStorage.removeItem('token')
        resolve()
      })
    }
  },
  getters:{
    isLoggedIn:state => !!state.token,
    authStatus:state => state.status
  }

})
