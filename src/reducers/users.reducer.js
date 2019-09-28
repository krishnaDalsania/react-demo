
export default function (state = {}, action) {
    console.log('----state', state, action)
    switch (action.type) {
        case 'GET_USER':
            console.log(action.payload)
            return {

                list: action.payload
            }
        case 'UPDATE_USER':
            console.log(action.payload)
            return {
                list: action.payload
            }
        default:
            return state
    }
}