import React, {Component} from 'react';
import {FormGroup, Input, Label, Col} from 'reactstrap';
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";

class Resume extends Component {
    render() {
        return (
            <div className="main-container">
                <HeaderUser/>
                <form className="container">
                </form>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Resume;
