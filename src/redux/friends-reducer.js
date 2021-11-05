let initialState = {
    friends: [
        {friend_name: 'Anton'},
        {friend_name: 'Ivan'},
        {friend_name: 'Andrey'},
        {friend_name: 'Maxim'},
        {friend_name: 'Ivan'},
        {friend_name: 'Ilya'},
        {friend_name: 'Dmitriy'},
        {friend_name: 'Max'}
    ]
}

const friendsReducer = (state = initialState, action) => {
    return state;
}
export default friendsReducer;