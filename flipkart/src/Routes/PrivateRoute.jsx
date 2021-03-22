import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect,Route } from 'react-router-dom';

function PrivateRoute({Component,...rest}) {
    const isAuthVal = useSelector(state => state.register.isAuthVal)
    return (
        
        isAuthVal ? <Route {...rest} render={()=><Component/>} />  : <Redirect to = "/login" />
        
    );
}

export default PrivateRoute;