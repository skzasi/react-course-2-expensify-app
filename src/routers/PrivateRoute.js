import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom';
import HeaderPage from '../components/HeaderPage';


// Note here for spread operator variable name using rest instead of props though props could also be used but
// since props is used with other function using rest to avoid confusion

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
    }) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <div>
                <HeaderPage />
                <Component {...props} />
            </div>
            ) : (
                <Redirect to="/" />
            )
    )} />
);


const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PrivateRoute);


