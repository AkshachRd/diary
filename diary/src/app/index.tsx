import './index.scss';
import React from "react";
import {withProviders} from "./providers";
import {Routing} from "pages";

const App = () => (
    <Routing />
);

export default withProviders(App);