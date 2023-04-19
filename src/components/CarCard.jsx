import  PropTypes  from "prop-types";
import React from "react";
import { Car } from "../models/Car";





/**@param {{car:Car}} props */
export default function CarCard({car}) {

    return (
        <div className="card">
            <img src={car.img} alt="" />
            <p className="text-center pt-2"> {car.make} | {car.model} | {car.year} </p>
            <button className="btn btn-danger mb-2 mx-5">Delete Car</button>
        </div>
    )
}

CarCard.propTypes = {
    car: PropTypes.instanceOf(Car)
}

