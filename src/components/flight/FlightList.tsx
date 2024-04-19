import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import { FlightRecord } from "../../../slices/types";
import TableHeader from "./table/TableHeader";
import Grid from "@mui/material/Grid";
import { getFlights } from "../../../slices/flightSlice";
import TableRecord from "./table/TableRecord";

function FileList() {
  const dispatch = useDispatch<AppDispatch>();
  const flights = useSelector<RootState, FlightRecord[]>(
    (state) => state.flight.flights
  );

  useEffect(() => {
    if(flights.length === 0){
      dispatch(getFlights());
    }}, [dispatch, flights]);

  return flights.length > 0 ? (
    <TableContainer>
      <Table sx={{ minWidth: 650 }} >
        <TableHeader />
        <TableBody>
          {flights.map(({ id, date, capacity, code }) => (
            <TableRecord key={id} id={id} code={code} capacity={capacity} date={date} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ) : (
    <Grid container justifyContent={"center"}>
      No flights added yet, Try to add Flights
    </Grid>
  );
}

export default FileList;
