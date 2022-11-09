import React from 'react';
import Banar from '../Bannar/Banar';
import SectionCard from '../SectionCard/SectionCard';
import Service from '../Services/Service';


const Home = () => {
    return (
        <div>
            <Banar></Banar>
            <Service></Service>
            <SectionCard></SectionCard>
        </div>
    );
};

export default Home;