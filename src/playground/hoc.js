// Higher Order Component (HOC) - A react component(HOC) that renders another component
// Benefits of Hoc:
//  1. Reuse Code
//  2. Render Hijacking
//  3. Prop Manipulation
//  4. Abstract State

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
        <p>Are you isAuthenticated: {props.isAuthenticated ? 'Yes' : 'No'}</p>

    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {
            props.isAuthenticated ? (<WrappedComponent {...props}/>) : ( <p>Please login to view info</p>) 
        }
        </div>
    );
}

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="There are the details" />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details" />, document.getElementById('app'));
