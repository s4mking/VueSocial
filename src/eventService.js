import axios from 'axios'


const apiClient = axios.create({
    baseURL: 'http://212.47.241.143:5000/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.token
      }
})


export default {
    auth: {
        userRegister(payload) {
            return apiClient.post('/auth/register', payload)
        },
        userLogin(payload) {
            return apiClient.post('/auth/login',payload)
        },
        getFriendship() {
            return apiClient.get('/friendship')
        },
        getFriendshipRequest(payload) {
            return apiClient.get('/friendship/request', payload)
        },
        acceptRequest(payload) {
            return apiClient.get('/friendship/request/'+payload.requestedId+'/accept', payload)
        },
        rejectRequest(payload) {
            return apiClient.get('/friendship/request/'+payload.requestedId+'/reject', payload)
        },
        sendFriendRequest(payload) {
            return apiClient.post('/friendship/request',payload)
        },
        removeFriendRequest(payload) {
            return apiClient.delete('/request/:requestedId', payload)
        },
        getProfile() {
            return apiClient.get('/user/me')
        },
        getUserProfile(payload) {
            return apiClient.get('/user/'+payload.currentRoute,payload)
        },
        getAllUser() {
            return apiClient.get('/user')
        },
        blockUser(payload) {
            return apiClient.get('/user/block/'+payload.requestedId, payload)
        },
        deleteBlockUser(payload) {
            return apiClient.delete('/user/block/'+payload.requestedId, payload)
        }
    }
}