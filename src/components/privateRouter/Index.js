import React from "react";
import {Route} from "react-router";

const PrivateRouter = ({component:Component,...rest}) => {
    return (
        <Route {...rest} render={routeProps => (
            <Component {...routeProps}/>
        )}/>
    );
}

export default PrivateRouter;