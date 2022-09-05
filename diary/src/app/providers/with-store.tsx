import React from "react";
import {Provider} from "react-redux";
import index from "app/store";

export const withStore = (component: () => React.ReactNode) => () => (
    <Provider store={index}>
        {component()}
    </Provider>
);