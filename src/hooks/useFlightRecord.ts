import { useParams } from "react-router-dom";
import { RootState } from "../../store";
import { FlightRecord } from "../../slices/types";
import { useSelector } from "react-redux";

export const useFlightRecord = ()=>{
    const { id } = useParams<string>();
    const getFlightById = (id: string, state: RootState): FlightRecord => {
      return state.flight.flights.filter(
        (element: FlightRecord) => element.id === Number(id)
      )[0];
    };
    const flight = useSelector<RootState, FlightRecord>((state) =>
      getFlightById(id!, state)
    );

  return flight
}
