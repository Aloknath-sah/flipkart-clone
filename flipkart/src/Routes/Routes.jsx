import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Cart from '../Components/Pages/Cart';
import Homepage from '../Components/Pages/Homepage';
import Login from '../Components/Pages/Login';
import ProductDetails from '../Components/Pages/ProductDetails';
import PrivateRoute from './PrivateRoute'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" exact render={()=> <Login/>} />
                <Route path="/" exact render={()=> <Homepage/>} />
                <Route path="/:id" exact render={()=> <ProductDetails/>} />
                <Route path="/cart/cartData" exact render={() => <Cart/>} />
            </Switch>
        </div>
    );
}

export default Routes;
