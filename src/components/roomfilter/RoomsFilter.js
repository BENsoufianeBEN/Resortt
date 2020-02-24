import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../../context';
import Title from '../../components/title/Title';
//import 'bootstrap/dist/css/bootstrap.min.css';

const getUnique = (items, value) => {
    return [...new Set(items.map(items => items[value]))];
};

export default function RoomsFilter({rooms}) {
    const context = useContext(RoomContext);
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = context;
    //get unique type
    let types = getUnique(rooms, "type");
    // add all
    types = [
        "all", ...types
    ];
    //map to jsx
    types = types.map((item, index) => {
        return (
            <option value={item} key={index}>{item}</option>
        );
    });
    let people = getUnique(rooms, 'capacity');
    people = people.map((item, index) => {
        return <option key={index} value={item}>{item}</option>
    })
    return (
        <section className="filter-container">
            <Title title="search rooms"/>
            <form className="filter-from">
                <div className="container">
                    <div className="form-row">
                        <div className="col-auto">
                            {/* select type */}
                            <div className="form-group">
                                <label htmlFor="type">room type</label>
                                <select
                                    className="form-control form-control-sm"
                                    name="type"
                                    id="type"
                                    value={type}
                                    onChange={handleChange}>

                                    {types}
                                </select>
                            </div>
                        </div>
                        {/* end select type */}
                        {/* guests  */}
                        <div className="form-group">
                            <div className="col-auto">
                                <label htmlFor="capacity">Guests</label>
                                <select
                                    className="form-control form-control-sm"
                                    name="capacity"
                                    id="capacity"
                                    value={capacity}
                                    onChange={handleChange}>

                                    {people}
                                </select>
                            </div>
                        </div>
                        {/* end guests */}
                        {/* room price  */}
                        <div className="form-group">
                            <div className="col-auto">
                                <label htmlFor="price">
                                    room price ${price}
                                </label>
                                <input
                                    type="range"
                                    name="price"
                                    min={minPrice}
                                    max={maxPrice}
                                    id="price"
                                    value={price}
                                    onChange={handleChange}
                                    className="custom-range"/>
                            </div>
                        </div>
                        {/* end of room price */}
                        {/* size */}
                        {/* <div className="from-group">
                        <div className="col-auto">
                            <label htmlFor="size">room size</label>
                            <div className="size-inputs">
                                <input
                                    type="number"
                                    name="minSize"
                                    id="Size"
                                    value={minSize}
                                    onChange={handleChange}
                                    className="size-input"/>
                                <input
                                    type="number"
                                    name="maxSize"
                                    id="Size"
                                    value={maxSize}
                                    onChange={handleChange}
                                    className="size-input"/>
                                    </div>
                            </div>
                        </div> */}
                        {/* end of size */}
                        {/* extras */}

                        {/* <div className="from-group">
                            <div className="col-auto">
                                <div className="single-extra">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name="breakfast"
                                        id="autoSizingCheck2"
                                        checked={breakfast}
                                        onChange={handleChange}/>
                                    <label htmlFor="autoSizingCheck2" className="form-check-label">breakfast</label>
                                </div>
                            </div>
                        </div>
                        <div className="from-group">
                            <div className="col-auto">
                                <div className="single-extra">
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        name=" pets"
                                        id="autoSizingCheck2"
                                        checked={pets}
                                        onChange={handleChange}/>
                                    <label htmlFor="autoSizingCheck2" className="form-check-label">
                                        pets</label>
                                </div>
                            </div>
                        </div> */}

                        {/* end of extras */}
                    </div>
                </div>
            </form>
        </section>
    )
};