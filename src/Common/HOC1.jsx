import React, { Fragment, Component } from "react";
import HeaderAfterLogin from "./Header/HeaderAfterLogin.jsx";

const HOC1 = (Wcomponent) => {
    return class extends Component {
        render() {
            return (
                <Fragment>
                    <div className="app-container-hoc main-margin">
                        <HeaderAfterLogin {...this.props} />
                        <div>
                            <Wcomponent {...this.props} />
                        </div>
                       
                    </div>
                </Fragment>
            );
        }
    };
};

export default HOC1;
