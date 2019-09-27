


export const getAllUsers = users => async dispatch => {
    console.log('=====', users)
    dispatch({
        type: 'GET_USER',
        payload: users
    })
}

export const addUser = users => async dispatch => {
    console.log('=====', users)
    dispatch({
        type: 'ADD_USER',
        payload: users
    })
}