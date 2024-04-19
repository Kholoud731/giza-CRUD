import Grid from "@mui/material/Grid";
import Logo from "../components/general/Logo";
import { yupResolver } from "@hookform/resolvers/yup";
import { UseFormRegister, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { addFlight, updateFlight } from "../../slices/flightSlice";
import { formatDate } from "../helpers";
import { useFlightRecord } from "../hooks/useFlightRecord";
import { schema } from "../helpers/constants";
import Input from "../components/general/Input";
import ActionButton from "../components/general/ActionButton";
import { useNavigate } from "react-router-dom";
import { FlightFormInputs } from "../components/flight/types";


const FlightForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FlightFormInputs>({
    resolver: yupResolver<FlightFormInputs>(schema),
  });

  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const flight = useFlightRecord();
  const { id } = flight || 0;

  const onSubmit = (data: FlightFormInputs) => {
    const { date, code, capacity } = data;
    const formattedDate = formatDate(date);
    if (id) {
      dispatch(updateFlight({ code, capacity, date: formattedDate, id }));
    } else {
      dispatch(addFlight({ code, capacity, date: formattedDate }));
    }
    navigate("/");
  };

  return (
    <>
      <Grid container justifyContent={"center"} spacing={2}>
        <Logo />
      </Grid>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={12} sm={8} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name={"code"}
              error={errors.code?.message}
              value={flight && flight.code}
              holder={"Enter a flight code"}
              type={"text"}
              reg={register("code") as unknown as UseFormRegister<FlightFormInputs >}
            />

            <Input
              error={errors.date?.message}
              name={"date"}
              value={flight && flight.date}
              holder={"Enter a flight date"}
              type={"date"}
              reg={register("date") as unknown as UseFormRegister<FlightFormInputs >}
            />

            <Input
              error={errors.capacity?.message}
              name={"capacity"}
              value={flight && flight.capacity}
              holder={"Enter a flight capacity"}
              type={"text"}
              reg={
                register("capacity") as unknown as UseFormRegister<FlightFormInputs >
              }
            />

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ActionButton text="submit" onClick={handleSubmit(onSubmit)} />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default FlightForm;
