import { AppState } from "../AppState"
import { Car } from "../models/Car"
import { api } from "../AxiosService.js"





class CarsService {
    async getCars() {
        AppState.cars = []
        const res = await api.get('api/cars')
        AppState.cars = res.data.map(car => new Car(car))
        console.log(AppState.cars);
    }
}

export const carsService = new CarsService()