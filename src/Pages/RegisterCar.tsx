import { Button, Paper, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormInputDropdown } from "../components/DropDown";
import { FormInputText } from "../components/FormTextField";
import { brand, category } from "../constans/options";
import { FormNumberField } from "../components/FormNumberField";
import Loading from "../components/Loading";
import { Car } from "../Types/general";
import { useState } from "react";
import { registerCar } from "../Services/registerCar";
import TextArea from "../components/TextArea";
import { useNavigate } from "react-router-dom";

const defaultValues = {
  model: "",
  color: "",
  package: "",
  id: "",
  year: 0,
  price: 0,
  brand: "",
  category: "",
};
export const RegisterCar = () => {
    const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm<Car>({
    defaultValues: defaultValues,
  });
  const onSubmit = async (data: Car) => {
    try {
        setLoading(true)
        await registerCar(data);
        navigate('/')
    } catch (error) {
        console.error(error)
    }
  };
  return (
    <Paper 
    className="form-container"
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        backgroundColor: "#1A2027",
      }}
    >
      {loading ? (
        <Loading />
      ) : (
        <>
          <Typography color="common.white" variant="h4">
            Register Car
          </Typography>
          <FormInputText name="model" control={control} label="Model" />
          <FormInputText name="color" control={control} label="Color" />
          <FormInputText name="package" control={control} label="Package" />
          <FormInputText name="id" control={control} label="ID" />
          <FormNumberField name="year" control={control} label="Year" />
          <FormNumberField name="price" control={control} label="Price" />
          <FormInputDropdown
            name="brand"
            control={control}
            label="Brands"
            options={brand}
          />
          <FormInputDropdown
            name="category"
            control={control}
            label="Categorys"
            options={category}
          />
          <TextArea name="description" control={control} label="Description"/>
          <Button onClick={handleSubmit(onSubmit)} variant={"contained"}>
            Submit
          </Button>
          <Button onClick={() => navigate(-1)} variant={"outlined"}>
            Cancel
          </Button>
        </>
      )}
    </Paper>
  );
};
