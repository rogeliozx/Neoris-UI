import { Car } from "../Types/general";
import carsClient from "../config/axiosClient"

export const getCars=async()=>{
    try {
       const {data}=await carsClient.get('');
       console.log(data)
       return data.listCars as Car[]  
    } catch (err) {
        console.error(err)
        return []
    }
    
   
}