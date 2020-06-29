import React, { Component, Fragment } from 'react';
import Nav from './Nav';
import Header from './Header';
import Service from './Services';
import About from './About';
import Lesson1 from './Lesson1';
import Lesson2 from './Lesson2';
import Lesson3 from './Lesson3';
import Lesson4 from './Lesson4';
import Lesson5 from './Lesson5';
import Footer from './Footer';

class Home extends Component {

    render() {
        return (
            <Fragment>
                <Nav/>
                <Header/>
                <Service/>
                <About/>
                <Lesson1/>
                <Lesson2/>
                <Lesson3/>
                <Lesson4/>
                <Lesson5/>
                <Footer/>
            </Fragment>
        )
    }

}

export default Home;
