import React, { useEffect, useState } from "react";
import Pop from "../utils/Pop.js";
import { carsService } from "../services/CarsService.js";
import { AppState } from "../AppState.js";
import CarCard from "../components/CarCard.jsx";

export default function HomePage() {
  // const [count, setCount] = useState(0)
  async function getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      Pop.error(error.message)
    }
  }

  let cars = (AppState.cars.map(c => {
    return (
      <div className="col-md-4" key={c.id}>
        <CarCard car={c} />
      </div>
    )
  }))


  useEffect(() => {
    getCars()
  },[])

  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
          </div>
        </div>
        <div className="row">
          {cars}
        </div>
      </div>
    </div>
  )
}