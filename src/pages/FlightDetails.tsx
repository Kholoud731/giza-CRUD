import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { Grid, Stack } from "@mui/material";
import ActionButton from "../components/general/ActionButton";
import { deleteFlights } from "../../slices/flightSlice";
import { useFlightRecord } from "../hooks/useFlightRecord";


const FlightDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { code, id, capacity, date } = useFlightRecord();

  const deleteHandler = (id: number, code: string) => {
    if (window.confirm(`Do you really want to delete this item: ${code}?`)) {
      navigate(`/`, { replace: true });
      dispatch(deleteFlights(id));
    }
  };

  return (
    <Grid container justifyContent={"center"}>
      <Grid item xs={12} sm={8} md={6}>
        <Typography variant="h6">Code: {code}</Typography>
        <Typography variant="h6">Date: {date}</Typography>
        <Typography variant="h6">Capacity: {capacity}</Typography>
        <Stack spacing={2} direction="row">
          <ActionButton onClick={() => navigate(`/`)} text="home" />
          <ActionButton onClick={() => navigate(`/edit-flight/${id}`)} text="edit"/>
          <ActionButton onClick={() => deleteHandler(id, code)} text="delete" />
        </Stack>
      </Grid>
    </Grid>
  );
};

export default FlightDetails;
