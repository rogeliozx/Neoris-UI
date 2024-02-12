import { useEffect, useState } from "react";
import CardCar from "../components/CarCard";
import { getCars } from "../Services/getCars";
import Loading from "../components/Loading";
import { Car } from "../Types/general";
import StickyButton from "../components/StickyButton";
import { useNavigate } from "react-router-dom";

const ListCars = () => {
  const [list, setList] = useState<Car[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchList = async () => {
      const data = await getCars();
      setList([...data]);
    };
    fetchList().catch(console.error);
  }, []);
  return (
    <>
      <StickyButton moveTo={()=>navigate('/register')}/>
    <div>
      {list.length > 0 ? (
        list.map((car: Car) => <CardCar car={car} />)
      ) : (
        <Loading />
      )}
    
    </div>
    </>
  );
};

export default ListCars;
