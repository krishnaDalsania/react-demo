


export const getAllUsers = users => async dispatch => {
    console.log('=====data inside action', users)
    dispatch({
        type: 'GET_USER',
        payload: users
    })
}

export const updateUserList = users => async dispatch => {
    console.log('=====data inside action', users)
    dispatch({
        type: 'UPDATE_USER',
        payload: users
    })
}