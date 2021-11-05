import { profileAPI } from "../api/api"

const ADD_POST = 'soical-network/profile/ADD-POST'
const SET_USER_PROFILE = 'soical-network/profile/SET_USER_PROFILE'
const SET_USER_STATUS = 'soical-network/profile/SET_USER_STATUS'

export const addPostCreator = (postText) => ({
    type: ADD_POST,
    postText
})
export const setUserProfile = (userProfile) => ({
    type: SET_USER_PROFILE,
    userProfile
})
export const setUserStatus = (statusText) => ({
    type: SET_USER_STATUS,
    statusText
})

let initialState = {
    posts: [
        { id: 1, post_message: 'Hey, how are you ?', likes: 25 },
        { id: 2, post_message: 'I\'m sorry', likes: 13 },
        { id: 3, post_message: 'Why did you do this ?', likes: 30 },
        { id: 4, post_message: 'Hello, my name is Anton, this is my first post', likes: 100 }],

    profile: null,
    userStatus: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                posts: [...state.posts, { id: 5, post_message: action.postText, likes: 0 }],
            }

        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.userProfile
            }

        case SET_USER_STATUS:
            return {
                ...state,
                userStatus: action.statusText
            }

        default:
            return state;
    }
}

export const setProfileThunk = (userId) => async (dispatch) => {
    let data = await profileAPI.getProfile(userId)
    dispatch(setUserProfile(data))
}

export const putUserStatusThunk = (statusText) => async (dispatch) => {
    let data = await profileAPI.putUserStatus(statusText)
    if (data.resultCode === 0) {
        dispatch(setUserStatus(statusText))
    }
}

export const getUserStatusThunk = (userId) => async (dispatch) => {
    let data = await profileAPI.getUserStatus(userId)
    dispatch(setUserStatus(data))
}

export default profileReducer;