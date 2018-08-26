import React, {Component} from 'react';
import {FormGroup, Input, Label, Col} from 'reactstrap';
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";


class Contact extends Component {
    render() {
        return (
            <div className="main-container">
                <HeaderUser/>
                <form className="container">
                    <div style={{marginTop: '200px',fontWeight:'bold',fontSize:'20px',color:'grey'}}>
                        <FormGroup row>
                        <Label>Phone Number</Label>
                        </FormGroup>
                        <FormGroup row>
                        <Label>+1 857 269 6535</Label>
                        </FormGroup>
                    </div>
                    <div style={{marginTop: '50px',fontWeight:'bold',fontSize:'20px',color:'grey'}}>
                        <FormGroup row>
                            <Label>Email</Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label>sharma.nir@husky.neu.edu</Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label>nirupamasharma7@gmail.com</Label>
                        </FormGroup>
                    </div>
                    <div style={{marginTop: '50px',fontWeight:'bold',fontSize:'20px',color:'grey'}}>
                        <FormGroup row>
                            <Label>Address</Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label>Saint Germain Street, Boston MA-02115</Label>
                        </FormGroup>
                    </div>
                </form>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Contact;
