import { getAuthDataThunk } from "./auth-reducer"

const INITIALIZED_SUCCES = 'social-network/app/INITIALIZED_SUCCES'

export const initializedSucces = () => ({
    type: INITIALIZED_SUCCES
})

let initialState = {
    isInitialized: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZED_SUCCES:
            return {
                ...state,
                isInitialized: true
            }

        default:
            return state;
    }
}

export const initializeAppThunk = () => async (dispatch) => {
    let promise = dispatch(getAuthDataThunk())
    await Promise.all([promise])
    dispatch(initializedSucces()) 
}

export default appReducer;
