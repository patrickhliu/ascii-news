//import React from 'react';
import Header from '../components/Header';
//import Slider from '../components/Slider';
import Footer from '../components/Footer';
import ThemeToggle from '../components/ThemeToggle';
//import { IsMobileBrowser } from '../lib/utils';

const Home = () => {
    return (
        <>
            <Header></Header>
            <ThemeToggle />
            <Footer></Footer>
        </>
    );
};

export default Home;
