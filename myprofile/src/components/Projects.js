import React, {Component} from 'react';
import {FormGroup, Input, Label, Col,Table} from 'reactstrap';
import HeaderUser from "./HeaderUser";
import Footer from "./Footer";
import YouTube from 'react-youtube';

//https://www.youtube.com/watch?v=RFNWCvCbQ1E
class Projects extends Component {

    videoOnReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            height: '250',
            width: '450',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                'autoplay': 1
            }
        };
        return (
            <div className="main-container">
                <HeaderUser/>
                <form className="container">
                    <div className="container">
                        <Table  style={{marginTop: '50px',fontSize:'20px',backgroundColor:'lightgrey',color:'grey'}}>
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Projects</th>
                                <th>Github</th>
                                <th>Videos</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td> Puma 560 Path Planning using RRT and PRM</td>
                                <td><a href="https://github.com/Nirucool/Codefactory">Motion Planning</a></td>
                                <td><YouTube
                                    videoId="RFNWCvCbQ1E"
                                    opts={opts}
                                    onReady={this.videoOnReady}/></td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Plagiarism Detection</td>
                                <td><a href="https://github.com/Nirucool/PlagScan">Plagiarism Detection</a></td>
                                <td><YouTube
                                    videoId="SR7EXPupfmE"
                                    opts={opts}
                                    onReady={this.videoOnReady}/></td>

                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Design & Share Web Application</td>
                                <td><a href="https://github.com/Nirucool/DesignAndShareSpringBoot">Design & Share Web App BackEnd</a>
                                    <a href="https://github.com/Nirucool/DesignAndShareUI">Design & Share Web App FrontEnd</a>
                                    <a href="https://designandshare.herokuapp.com">https://designandshare.herokuapp.com</a></td>

                                <td><YouTube
                                    videoId="EF6TqfMw1lI"
                                    opts={opts}
                                    onReady={this.videoOnReady}/></td>
                            </tr>
                            </tbody>
                        </Table>
                  {/* <FormGroup row>
                       <Label style={{marginTop: '200px',marginLeft:'70px',fontWeight:'bold',fontSize:'20px',color:'grey'}}>Projects</Label>
                   </FormGroup>
                    <FormGroup row>
                        <Col sm={4}>
                         Puma 560 Path Planning using RRT and PRM
                        </Col>
                        <Col sm={4} style={{marginTop:'70px',marginLeft: '900px'}}>
                            <YouTube
                                videoId="RFNWCvCbQ1E"
                                opts={opts}
                                onReady={this.videoOnReady}/>
                        </Col>
                    </FormGroup>
                        <FormGroup row>
                            <Col sm={4}><Label style={{marginTop: '200px',marginLeft:'70px',fontWeight:'bold',fontSize:'20px',color:'grey'}}>Projects</Label>
                                Puma 560 Path Planning using RRT and PRM
                            </Col>
                            <Col sm={4} style={{marginTop:'70px',marginLeft: '900px'}}>
                                <YouTube
                                    videoId="RFNWCvCbQ1E"
                                    opts={opts}
                                    onReady={this.videoOnReady}/>
                            </Col>
                        </FormGroup>*/}
                    </div>
                </form>
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}

export default Projects;
