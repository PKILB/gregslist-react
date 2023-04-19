import  PropTypes  from "prop-types";
import React from "react";
import { Car } from "../models/Car";





/**@param {{car:Car}} props */
export default function CarCard({car}) {

    return (
        <div className="card">
            <img src={car.img} alt="" />
            <p> {car.make} | {car.model} | {car.year} </p>
            <button className="btn btn-danger">Delete Car</button>
        </div>
    )
}

CarCard.propTypes = {
    car: PropTypes.instanceOf(Car)
}

