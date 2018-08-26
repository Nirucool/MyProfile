import React, {Component} from 'react';
import {FormGroup,Label} from 'reactstrap';
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";


class Contact extends Component {
    render() {
        return (
            <div className="main-container">
                <HeaderUser/>
                <form className="container">
                    <div style={{marginTop: '80px',fontSize:'15px',color:'grey'}}>
                        <FormGroup row style={{color: 'black'}}>
                        <Label>Phone Number</Label>
                        </FormGroup>
                        <FormGroup row>
                        <Label>+1 857 269 6535</Label>
                        </FormGroup>
                    </div>
                    <div style={{marginTop: '50px',fontSize:'15px',color:'grey'}}>
                        <FormGroup row style={{color: 'black'}}>
                            <Label>Email</Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label>sharma.nir@husky.neu.edu</Label>
                        </FormGroup>
                        <FormGroup row>
                            <Label>nirupamasharma7@gmail.com</Label>
                        </FormGroup>
                    </div>
                    <div style={{marginTop: '50px',fontSize:'15px',color:'grey'}}>
                        <FormGroup row style={{color: 'black'}}>
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
