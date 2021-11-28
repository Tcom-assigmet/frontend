import logo from './logo.svg';
import React, {useEffect} from 'react';
import './App.css';
import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom";
import Packages from './Components/package/packages';

import Customers from "./Components/customers/Customers";
import CForm from "./Components/customers/CustomerForm";
import CustomerEdit from "./Components/customers/CustomerEdit";

import Connections from "./Components/Connection/Connections";

import Payments from "./Components/payments/payments";
import Nav from "./Components/nav/nav";
import AddnewPackage from "./Components/package/addnew_package";
import Login from "./Components/login/login"
import EditPackage from "./Components/package/editpackage";
import Logout from "./Components/login/Logout";
import { connect } from 'react-redux';
import {authCheckState} from "../src/store/actions/auth";

const App=(props)=> {
    useEffect(() => {

        props.onTryAutoSignup();

    }, []);
  return (
        <BrowserRouter>
            <div>
            <Nav/>
                <Routes >

                    <Route path="/payments" element={<Payments/>}/>
                    <Route path="/cform" exact element={<CForm/>}/>
                    <Route path="/connections/:id" element={<Connections/>}/>
                    <Route path="/customers/:id" element={<CustomerEdit/>}/>
                    <Route path="/customers"  element={<Customers/>}/>
                    <Route path="/logout"  element={<Logout/>}/>
                    <Route path="/login"  element={<Login/>}/>
                    <Route path="/addnewpackages"  element={<AddnewPackage/>}/>
                    <Route path="/:id"  element={<EditPackage/>}/>
                    <Route path="/" exact element={<Packages/>}/>
                    <Route to="/"/>
                </Routes>

            </div>
        </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
    return {

        isAuthenticated: state.auth.token !== null
    }
}

const mapDispatchToProps = (dispatch) => {
    return {

        onTryAutoSignup: () => dispatch(authCheckState())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);