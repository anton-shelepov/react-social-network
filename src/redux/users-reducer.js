import { usersAPI } from "../api/api"

const FOLLOW = 'soical-network/users/FOLLOW'
const UNFOLLOW = 'soical-network/users/UNFOLLOW'
const SET_USERS = 'soical-network/users/SET_USERS'
const SET_CURRENT_PAGE = 'soical-network/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'soical-network/users/SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'soical-network/users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'soical-network/users/TOGGLE_FOLLOWING_IN_PROGRESS'

export const follow = (userID) => ({
    type: FOLLOW,
    userID
})
export const unfollow = (userID) => ({
    type: UNFOLLOW,
    userID
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})
export const setTotalUsersCount = (usersCount) => ({
    type: SET_TOTAL_USERS_COUNT,
    usersCount
})
export const setToggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleFollowingInProgress = (inProgress, userID) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    inProgress,
    userID
})

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 100,
    currentPage: 1,
    defaultPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }

        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }

        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.usersCount }

        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }

        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state, followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userID]
                    : state.followingInProgress.filter(followingId => followingId !== action.userID)
            }

        default:
            return state;
    }
}

export const setUsersForMountThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setToggleIsFetching(true))

    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setToggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const setUsersOnPageChangedThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setToggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))

    let data = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setToggleIsFetching(false))
    dispatch(setUsers(data.items))
}

export const unfollowThunk = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))

    let resultCode = await usersAPI.unfollowFromUser(userId)
    if (resultCode === 0) {
        dispatch(unfollow(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export const followThunk = (userId) => async (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId))

    let resultCode = await usersAPI.followOnUser(userId)
    if (resultCode === 0) {
        dispatch(follow(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export default usersReducer;