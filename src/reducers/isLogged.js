const isLoggedReducer = (state = false ,action) =>{
    switch (action.type) {
        case 'SIGN_IN_OUT':
            return !state;
        default:
            return state;
    }
}

export default isLoggedReducer;
