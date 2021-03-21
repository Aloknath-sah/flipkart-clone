export const regRequest = () => ({
    type: REGREQUEST
})

export const regSuccess = () => ({
    type: REGSUCCESS,
    payload
})

export const regFailure = () => ({
    type: REGFAILURE
})

export const registerData = (payload) => {
    dispatch(regRequest())
    axios.post("http://localhost:3004/auth", {
        payload
    })
    .then(res => dispatch(regSuccess(res.data)))
    .then(err => dispatch(regFailure(err)))

}