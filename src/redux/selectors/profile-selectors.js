export const getProfile = (state) => {
    return state.profile_page.profile
}

export const getIsAuth = (state) => {
    return state.auth.isAuth
} 

export const getUserId = (state) => {
    return state.auth.userId
} 

export const getUserStatus = (state) => {
    return state.profile_page.userStatus
} 