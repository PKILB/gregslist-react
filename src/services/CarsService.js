import { AppState } from "../AppState"
import { Car } from "../models/Car"
import { api } from "./AxiosService"


class CarsService {
    
    async deleteCar(carId) {
        const res = await api.delete('auth/api/cars/' + carId)
        console.log('[Deleting Car]', res.data)
        let i = AppState.cars.findIndex(c => c.id == carId)
        if (i != -1) {
            AppState.cars.splice(i, 1)
        }
    }

    async getCars() {
        AppState.cars = [] 
        const res = await api.get('auth/api/cars')
        AppState.cars = res.data.map(car => new Car(car))
        console.log(AppState.cars);
    }
}

export const carsService = new CarsService()