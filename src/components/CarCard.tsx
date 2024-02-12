import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import { Car } from "../Types/general";
import imagePath from "../constans/imagePath";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

interface CardCarProps {
  car: Car;
}

export default function CardCar({ car }: CardCarProps) {
  const navigate = useNavigate();
  return (
    <Paper
      sx={{
        p: 2,
        margin: "auto",
        marginTop:'10px',
        marginBottom:'10px',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: "#1A2027" 
      }}
    >
      <Grid container spacing={2}>
        <Grid item>
          <ButtonBase sx={{ width: 128, height: 128 }}>
            <Img alt="complex" src={imagePath[car.brand]} />
          </ButtonBase>
        </Grid>
        <Grid item xs={12} sm container>
          <Grid item xs container direction="column" spacing={2}>
            <Grid item xs>
              <Typography color="common.white" gutterBottom variant="subtitle1" component="div">
                {car.model}
              </Typography>
              <Typography color="common.white" variant="body2" gutterBottom>
               Year: {car.year}
              </Typography>
              <Typography variant="body2" color="common.white">
                ID: {car.id}
              </Typography>
            </Grid>
            <Grid item >
              <Button onClick={()=>{navigate(`/details/${car._id}`)}}>
                Details
              </Button>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="subtitle1" color="common.white" component="div">
              ${car.price}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}
