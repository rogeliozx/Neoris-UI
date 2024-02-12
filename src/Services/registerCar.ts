import { Car } from "../Types/general";
import carsClient from "../config/axiosClient";

export const registerCar = async (car: Car) => {
  try {
    const { data } = await carsClient.post(`/${car.id}`, car);
    return data.newCar as Car;
  } catch (err) {
    console.error(err);
    return {};
  }
};
