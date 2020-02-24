import React from 'react'
import Hero from '../../components/folder1/Hero';
import Banner from '../../components/folder2/Banner';
import {Link} from 'react-router-dom';

export default function Erropage() {
    return (
        <Hero>
            <Banner title="404" subtitle="page not found">
                <Link to="/" className="btn-primary">
                    return home
                </Link>
            </Banner>
        </Hero>
    )
}
