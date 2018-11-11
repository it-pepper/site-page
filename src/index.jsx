"use strict";

console.log("debug 123");

import React from 'react';
import ReactDOM from 'react-dom';

import HomePage from 'app-components/page/home';

ReactDOM.render(
    <HomePage />,
    document.getElementById("page") 
);