"use strict";

import React, { Component } from 'react';

import Header from 'app-components/template/header';
import Main from 'app-components/template/main-one-column';
import Footer from 'app-components/template/footer';

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    //componentDidMount() {
    //    this.reSizeMain();
    //}

    //componentDidUpdate() { 
    //    this.reSizeMain();
    //}

    //reSizeMain() { 
    //    let _top = ReactDOM.findDOMNode(this.refs.head).offsetHeight;
    //    let _bottom = ReactDOM.findDOMNode(this.refs.foot).offsetHeight;

    //    this.refs.main
    //}

    render() {
        return (
            <div className="wrapper">
                <Header ref="head" />
                <Main ref="main">
                    <div className="container">
                        <div className="row">
                            {
                                [...new Array(5)].map((el, i) => { 
                                    return (
                                        <div className="row" key={i}>{i} - content ... </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </Main>
                <Footer ref="foot" />
            </div>
        );
    }
}

export default HomePage;