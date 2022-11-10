import React from 'react';
import Banar from '../Bannar/Banar';
import SectionCard from '../SectionCard/SectionCard';
import SectionFrom from '../SectionFrom/SectionFrom';
import Service from '../Services/Service';


const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Service></Service>
            <SectionCard></SectionCard>
            <SectionFrom></SectionFrom>
        </div>
    );
};

export default Home;