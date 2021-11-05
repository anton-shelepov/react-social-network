import axios from "axios"

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '37dc145b-ac55-4488-8394-4bc212ae8b92'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    followOnUser(userId) {
        return instance.post(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode
            })
    },
    unfollowFromUser(userId) {
        return instance.delete(`follow/${userId}`)
            .then(response => {
                return response.data.resultCode
            })
    }
}

export const profileAPI = {
    getProfile(userId) {
        return instance.get('profile/' + userId)
            .then(response => {
                return response.data
            })
    },
    putUserStatus(statusText) {
        return instance.put('/profile/status', { status: statusText })
            .then(response => {
                return response.data
            })
    },
    getUserStatus(userId) {
        return instance.get('/profile/status/' + userId) //TODO: GET REAL STATUS OF AUTORHISED USER
            .then(response => {
                return response.data
            })
    }

}

export const authAPI = {
    getAuthData() {
        return instance.get('/auth/me')
            .then(response => {
                return response.data
            })
    },
    login(email, password, rememberMe) {
        return instance.post('auth/login', { email, password, rememberMe })
            .then(response => {
                return response.data
            })
    },
    logout() {
        return instance.delete('auth/login')
            .then(response => { 
                return response.data
            })
    }
}