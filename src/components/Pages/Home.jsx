import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import DescriptionSection from '../DescriptionSection';
import Footer from '../Footer';


function Home() {
    console.log("Working fine from Home.js")
    return (
        <>
            <HeroSection />
            <DescriptionSection />
            <Cards />
            <Footer />


        </>
    );
}

export default Home;
