
const getAllUser = (state, action) => {
    console.log('----state', state)
    switch (action.type) {
        case 'GET_USER':
            return state
        default:
            return state
    }
}

export default getAllUser