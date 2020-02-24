import React from 'react'
import Hero from '../../components/folder1/Hero';
import Banner from '../../components/folder2/Banner';
import {Link} from 'react-router-dom';
import RoomsContainer from '../../components/roomscontainer/RoomsContainer';




export default function Room() {
    return (
        <>
    <Hero hero="roomsHero">
        <Banner title="nos chambres">
            <Link to='/' className="btn-primary">
                return home
            </Link>
        </Banner>
        </Hero>
        <RoomsContainer />
        </>
    );
 };