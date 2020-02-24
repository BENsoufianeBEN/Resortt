import React from 'react';
import Hero from '../../components/folder1/Hero';
import Banner from '../../components/folder2/Banner';
import {Link} from 'react-router-dom';
import Services from '../../components/services/Services';
import FeaturedRooms from '../../components/folder3/FeaturedRooms';




export default function Home() {
    return (
        <>
        <Hero>
            <Banner title="Chambres luxueuses" subtitle="Chambres de luxe à partir de 300 $">
                <Link to="/rooms/" className="btn-primary">
                   nos chambres
                </Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
      
        </>
    );

}
