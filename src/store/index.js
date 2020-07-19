import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router'
import eventService from '../eventService'
Vue.use(Vuex)


export default new Vuex.Store({
  state:{
    status: '',
    token: localStorage.getItem('token') || '',
    user : {},
    friends:{},
    me:{},
    users:[],
  },
  mutations: {
    auth_request(state){
      state.status = 'loading'
    },
    auth_success(state, token, user){
      state.status = 'success'
      state.token = token
      state.user = user
    },
    auth_error(state){
      state.status = 'error'
    },
    logout(state){
      state.status = ''
      state.token = ''
    },
    listfriend(state,friends){
      state.friends = friends
    },
    me(state,me){
      state.me = me
    },
    users(state,users){
      state.me = users
    }
},
  getters: {
    isLoggedIn: state => !!state.token,
    authStatus: state => state.status,
    },
  actions: {
    login({commit},input){
      return new Promise((resolve, reject) => {
        commit('auth_request')
        eventService.auth.userLogin({
          username:input.username,
           password:input.password
        })
        .then(resp => {
          const token = resp.data.token
          const user = resp.data.user
          localStorage.setItem('token', token)
          console.log(token)
          axios.defaults.headers.common['Authorization'] = 'Bearer '+token
          console.log(eventService)
          commit('auth_success', token, user)
          resolve(resp)
        })
        .catch(err => {
          commit('auth_error')
          localStorage.removeItem('token')
          reject(err)
        })
      })
      
  },
  register({commit},input){
    return new Promise((resolve, reject) => {
      commit('auth_request')
      eventService.auth.userRegister({
        username:input.username,
         password:input.password,
         name:input.name
      })
      .then(resp => {
        const token = resp.data.token
        const user = resp.data.user
        localStorage.setItem('token', token)
        axios.defaults.headers.common['Authorization'] = 'Bearer '+token
        commit('auth_success', token, user)
        resolve(resp)
      })
      .catch(err => {
        commit('auth_error')
        localStorage.removeItem('token')
        reject(err)
      })
    })
  },
  logout({commit}){
    return new Promise((resolve, reject) => {
      commit('logout')
      localStorage.removeItem('token')
      delete axios.defaults.headers.common['Authorization']
      resolve()
      console.log(reject)
    })
  },
  getFriends({commit}){
    return new Promise((resolve, reject) => {
     eventService.auth.getFriendship()
      .then(resp => {
        const friends = resp.data 
        console.log(resp.data)
        commit('listfriend', friends)
        resolve(resp)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  getMe({commit}){
    return new Promise((resolve, reject) => {
     eventService.auth.getProfile()
      .then(resp => {
        console.log(resp)
       const me = resp.data
       commit('me', me)
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  getUsers({commit}){
    return new Promise((resolve, reject) => {
     eventService.auth.getAllUser()
      .then(resp => {
        console.log(resp)
       const users = resp.data
       commit('users', users)
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  getFriendshipRequest(){
    return new Promise((resolve, reject) => {
     eventService.auth.getFriendshipRequest()
      .then(resp => {
        console.log(resp.data)
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  getUserProfile(){
    return new Promise((resolve, reject) => {
     eventService.auth.getUserProfile({
       currentRoute:router.currentRoute.params.id
     })
      .then(resp => {
        console.log(resp)
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  acceptRequest({commit},requestedId){
    console.log(commit)
    console.log(requestedId)

    return new Promise((resolve, reject) => {
     eventService.auth.acceptRequest({
      requestedId:requestedId
     })
      .then(resp => {
        console.log(resp)
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  rejectRequest({commit},requestedId){
    console.log(commit)
    return new Promise((resolve, reject) => {
     eventService.auth.rejectRequest({
      requestedId:requestedId
     })
      .then(resp => {
        console.log(resp)
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  sendFriendRequest({commit},requestedId){  
    console.log(commit)
    return new Promise((resolve, reject) => {
      console.log(requestedId)
     eventService.auth.sendFriendRequest({
      requestedId:requestedId
     })
      .then(resp => {
        console.log(resp)
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  blockUser({commit},requestedId){
    console.log(commit)
    return new Promise((resolve, reject) => {
     eventService.auth.blockUser({
      requestedId:requestedId
     })
      .then(resp => {
        console.log(resp)
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  },
  deleteBlockUser({commit},requestedId){
    console.log(commit)
    return new Promise((resolve, reject) => {
     eventService.auth.deleteBlockUser({
      requestedId:requestedId
     })
      .then(resp => {
        console.log(resp)
        resolve(resp.data)
      })
      .catch(err => {
        reject(err)
      })
    })
  }
},
})