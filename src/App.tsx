import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListCars from "./Pages/ListCars";
import { RegisterCar } from "./Pages/RegisterCar";
import { DetailCar } from "./Pages/DetailCars";



function App() {
  return (
    <React.StrictMode>
    
    <BrowserRouter>
    <Routes>
      <Route index element={<ListCars/>}/>
      <Route path='/register' element={<RegisterCar/>}/>
      <Route path='/details/:id' element={<DetailCar/>}/>
    </Routes>
    </BrowserRouter>
    
  </React.StrictMode>
  );
}

export default App;
