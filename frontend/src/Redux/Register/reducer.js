const initState = {
    isLoading: false,
    isError: false,
    data: ""
}

export const registerReducer = (state = initState, {type, payload}) => {
    switch(type){
        case REGREQUEST:
            return {
                ...state,
                isLoading: true
            }
        case REGSUCCESS: 
            return {
                ...state,
                isLoading: false,
                data: payload
            }
        case REGFAILURE:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state
    }
}