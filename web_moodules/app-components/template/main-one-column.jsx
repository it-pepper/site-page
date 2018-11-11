"use strict";

import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props);
    }

    goTop() { 
        console.log("toTop");
    }

    render() {
        return (
            <div className="main">
                <div className="one-column">{this.props.children}</div>
                <button className="go-to-top" onClick={this.goTop.bind(this)}>
                    <i className="fas fa-chevron-circle-up" />
                </button>
            </div>
        );
    }
}

export default Main;