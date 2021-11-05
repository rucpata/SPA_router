import React from 'react'
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from  '../pages/ProductPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrorPages from '../pages/ErrorPage';


const Page = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/product" component={ProductPage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/admin" component={AdminPage}/>
                <Route component={ErrorPages}/>
            </Switch>
            
        </>
        
    )
}

export default Page;