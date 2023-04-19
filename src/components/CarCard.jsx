import  PropTypes  from "prop-types";
import React from "react";
import { Car } from "../models/Car";
import { AppState } from "../AppState";
import Pop from "../utils/Pop";
import { carsService } from "../services/CarsService";




/**@param {{car:Car}} props */
export default function CarCard({car}) {

    async function deleteCar() {
        try {
            const yes = await Pop.confirm('Do you want to delete this car?')
            if(!yes) {return}
            await carsService.deleteCar(car.id)
        } catch (error) {
            Pop.error(error)
        }
    }

    function setActiveCar() {
        AppState.car = car
    }

    return (
        <div className="card">
            <img className="img-fluid selectable" src={car.img} alt="" data-bs-toggle="modal" data-bs-target="#carModal" onClick={setActiveCar} />
            <p className="text-center pt-2"> {car.make} | {car.model} | {car.year} </p>
            <button className="btn btn-danger mb-2 mx-5" onClick={deleteCar}>Delete Car</button>
        </div>
    )
}

CarCard.propTypes = {
    car: PropTypes.instanceOf(Car)
}

