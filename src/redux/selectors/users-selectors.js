export const getUsers = (state) => {
    return state.users_page.users
}

export const getCurrentPage = (state) => {
    return state.users_page.currentPage
}

export const getTotalUsersCount = (state) => {
    return state.users_page.totalUsersCount
}

export const getPageSize = (state) => {
    return state.users_page.pageSize
}

export const getDefaultPage = (state) => {
    return state.users_page.defaultPage
}

export const getIsFetching = (state) => {
    return state.users_page.isFetching
}

export const getFollowingInProgress = (state) => {
    return state.users_page.followingInProgress
} 