"use strict";

import React, { Component } from 'react';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                    <h1 className="header-logo">
                        ИТ ПЕРЕЦ
                    </h1>
                    <div className="header-nav">
                        <ul className="list">
                            <li className="list-item">
                                <a className="list-link" href="/#home">
                                    <span className="list-name">Главная</span>
                                </a>
                            </li>
                            <li className="list-item">
                                <a className="list-link" href="/#about-us">
                                    <span className="list-name">О нас</span>
                                </a>
                            </li>
                            <li className="list-item">
                                <a className="list-link" href="/#contacts">
                                    <span className="list-name">Контакты</span>
                                </a>
                            </li>
                            <li className="list-item">
                                <a className="list-link" href="tel:+79057207701">
                                    <i className="fas fa-mobile-alt" />
                                    <span className="list-name">+7 (905) 720-77-01</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;