// Yahan sary function kb kb call honge wo bnain gy

const initialState = {
    count: 0
}
export default (state =initialState, action) => {


    switch (action.type) {
        case 'inc':
            return {...state,count:state.count+1}
        default:
            return state
    }
}