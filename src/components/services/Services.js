import React, {Component} from 'react';
import Title from '../title/Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from 'react-icons/fa';

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail/>,
                title: "Jus Gratuit",
                info: ' Lorem ex proident non irure sunt enim cupidatat ipsum laboris commodo laboris '
            }, {
                icon: <FaHiking/>,
                title: "été sans fin",
                info: ' Lorem ex proident non irure sunt enim cupidatat ipsum laboris commodo laboris '
            }, {
                icon: <FaShuttleVan/>,
                title: "Navette gratuite",
                info: ' Lorem ex proident non irure sunt enim cupidatat ipsum laboris commodo laboris '
            }, {
                icon: <FaBeer/>,
                title: "boisson Gratuit",
                info: ' Lorem ex proident non irure sunt enim cupidatat ipsum laboris commodo laboris '
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services"/>
                <div className="services-center">
                    {this
                        .state
                        .services
                        .map((item, index) => {
                            return <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        })}
                </div>
            </section>
        )
    }
}
