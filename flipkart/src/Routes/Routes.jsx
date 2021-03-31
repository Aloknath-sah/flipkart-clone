import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ApplianceStore from '../Components/Pages/ApplianceStore/ApplianceStore';
import Cart from '../Components/Pages/Cart/Cart';
import ElectronicStore from '../Components/Pages/ElectronicStore/ElectronicStore';
import FashionStore from '../Components/Pages/FashionStore/FashionStore';
import Homepage from '../Components/Pages/HomePage/Homepage';
import Login from '../Components/Pages/Login/Login';
import MobileStore from '../Components/Pages/MobileStore/MobileStore';
import ProductDetails from '../Components/Pages/ProductDetails/ProductDetails';
import PrivateRoute from './PrivateRoute'

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route path="/login" exact render={()=> <Login/>} />
                <Route path="/" exact render={()=> <Homepage/>} />
                <Route path="/:id" exact render={()=> <ProductDetails/>} />
                <PrivateRoute path="/cart/cartData" exact component={Cart} />
                <Route path="/mobile/mobile-phones-store" exact render={() => <MobileStore/>} />
                <Route path="/electronic/electronic-store" exact render={() => <ElectronicStore/>} />
                <Route path="/fashion/fashion-store" exact render={() => <FashionStore/>} />
                <Route path="/appliance/appliance-store" exact render={() => <ApplianceStore/>} />
            </Switch>
        </div>
    );
}

export default Routes;
