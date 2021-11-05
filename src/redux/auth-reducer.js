import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

const SET_AUTH_USER_PROFILE = 'soical-network/auth/SET_AUTH_USER_PROFILE'


export const setAuthUserProfile = (userId, login, email, isAuth) => ({
    type: SET_AUTH_USER_PROFILE,
    data: {
        userId,
        login,
        email,
        isAuth
    }
})

let initialState = {
    userId: null,
    login: null,
    email: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTH_USER_PROFILE:
            return {
                ...state,
                ...action.data
            }

        default:
            return state;
    }
}

export const getAuthDataThunk = () => async (dispatch) => {
    let data = await authAPI.getAuthData()
    if (data.resultCode === 0) {
        let { id, login, email } = data.data
        dispatch(setAuthUserProfile(id, login, email, true))
    }
}

export const userLoginThunk = (email, password, rememberMe) => async (dispatch) => {
    let data = await authAPI.login(email, password, rememberMe)
    if (data.resultCode === 0) {
        dispatch(getAuthDataThunk())
    }
    else dispatch(stopSubmit("login", { _error: (data.messages.length > 0 ? data.messages[0] : "Some error") }))
}

export const userLogoutThunk = () => async (dispatch) => {
    let data = await authAPI.logout()
    if (data.resultCode === 0) {
        dispatch(setAuthUserProfile(null, null, null, false))
    }
}


export default authReducer;