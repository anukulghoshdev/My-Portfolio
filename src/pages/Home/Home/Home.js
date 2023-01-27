import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Experiences from '../Experiences/Experiences';
import Projects from '../Projects/Projects';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div id='home'>
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Services></Services>
            <Projects></Projects>
            <Experiences></Experiences>
            <Contact></Contact>
        </div>
    );
};

export default Home;
