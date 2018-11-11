"use strict";

import React, { Component } from 'react';

class Footer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="container">
                    <p className="footer-copy">&copy; {new Date().getFullYear()} Все права защищены</p>
                </div>
            </div>
        );
    }
}

export default Footer;