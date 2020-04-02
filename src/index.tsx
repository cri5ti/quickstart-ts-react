import * as React from "react";
import {render} from 'react-dom';
import {App} from "./view/app";

require('./style.scss');

render(
    <App/>,
    document.body.appendChild(document.createElement('div'))
);
