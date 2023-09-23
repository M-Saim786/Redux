//  Yahan Sary Functions define honge
const Increment = () => {
    return (dispatch) => {
        dispatch({
            type: 'inc'
        })
    }
}
export {Increment}