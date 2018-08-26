import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactDOM from 'react-dom';
import { Router, Route} from 'react-router-dom';
import { history } from './history';
import './index.css';
import App from './App';
import Contact from "./components/Contact";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import Resume from "./components/Resume";
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router history={history}>
        <div>
        <Route exact path='/' component={App}/>
            <Route path='/home' component={Home}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/about' component={About}/>
            <Route path='/resume' component={Resume}/>
            <Route path='/projects' component={Projects}/>
        </div>
    </Router>,
    document.getElementById('root')
);
registerServiceWorker();
