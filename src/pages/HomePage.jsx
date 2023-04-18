import React, { useState } from "react";
import Pop from "../utils/Pop.js";

export default function HomePage() {
  // const [count, setCount] = useState(0)
  async function getCars() {
    try {
      await carsService.getCars()
    } catch (error) {
      Pop.error(error.message)
    }
  }


  return (
    <div className="home-page">
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
          </div>
        </div>
      </div>
    </div>
  )
}