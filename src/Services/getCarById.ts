import { Car } from "../Types/general";
import carsClient from "../config/axiosClient"

export const getCarById=async(id:string ) =>{
    try {
       const {data}=await carsClient.get(id);
       console.log(data)
       return data.car as Car  
    } catch (err) {
        console.error(err)
        return {}
    }
    
   
}