import { Car } from "../Types/general";
import carsClient from "../config/axiosClient";

export const updateCar = async (car: Car) => {
  try {
     await carsClient.put('update', car);
  } catch (err) {
    console.error(err);
  }
};
