import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from 'react-router-dom';


// Note here for spread operator variable name using rest instead of props though props could also be used but
// since props is used with other function using rest to avoid confusion

export const PublicRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
    }) => {
        console.log('rest', { 
    isAuthenticated,
    component: Component,
    ...rest
    })

    return (
        <Route {...rest} component={(props) => (
        isAuthenticated ? (
            <Redirect to="/dashboard" />
            ) : (
                <Component {...props} />
            )
    )} />
    )};


const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.uid
});

export default connect(mapStateToProps)(PublicRoute);


