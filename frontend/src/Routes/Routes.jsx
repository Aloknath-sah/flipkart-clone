import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from '../Components/Pages/Homepage';
import Login from '../Components/Pages/Login';
import ProductDetails from '../Components/Pages/ProductDetails';

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" exact render={()=> <Login/>} />
                <Route path="/" exact render={()=> <Homepage/>} />
                <Route path="/:id" exact render={()=> <ProductDetails/>} />
            </Switch>
        </div>
    );
}

export default Routes;
