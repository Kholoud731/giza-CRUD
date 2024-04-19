import Stack from "@mui/material/Stack";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../../store";
import { deleteFlights } from "../../../../slices/flightSlice";
import { FC } from "react";
import ActionButton from "../../general/ActionButton";
import { TableRecordProps } from "../types";



const TableRecord: FC<TableRecordProps> = ({ id, code, capacity, date }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const deleteHandler = (id: number, code: string) => {
    if (window.confirm(`Do you really want to delete this item: ${code}?`)) {
      dispatch(deleteFlights(+id!));
    }
  };

  return (
    <TableRow
      key={id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{code}</TableCell>
      <TableCell align="center">{date}</TableCell>
      <TableCell align="center">{capacity}</TableCell>
      <TableCell align="center">
        <Stack spacing={2} direction="row" justifyContent={'center'}>
          <ActionButton
            onClick={() => navigate(`/view-flight/${id}`)}
            text="view"
          />
          <ActionButton
            onClick={() => navigate(`/edit-flight/${id}`)}
            text="edit"
          />
          <ActionButton
            onClick={() => deleteHandler(id, code)}
            text="delete"
          />
        </Stack>
      </TableCell>
    </TableRow>
  );
};

export default TableRecord;
