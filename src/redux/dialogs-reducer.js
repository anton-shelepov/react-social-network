const ADD_MESSAGE = 'soical-network/dialogs/ADD-MESSAGE' 

export const addMessageCreator = (messageText) => ({
    type: ADD_MESSAGE,
    messageText
})

let initialState = {
    dialogs: [
        { id: 1, user: 'Anton' },
        { id: 2, user: 'Ivan' },
        { id: 3, user: 'Andrey' },
        { id: 4, user: 'Maxim' },
        { id: 5, user: 'Vitaliy' }],

    messages: [
        { message: 'Hello body' },
        { message: 'What are you doing now ?' },
        { message: 'Yo' }],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, { message: action.messageText }],
            }

        default:
            return state;
    }
}

export default dialogsReducer;