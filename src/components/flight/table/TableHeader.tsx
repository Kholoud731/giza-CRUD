import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { TABLE_CELLS } from "../../../helpers/constants";



const TableHeader = () => {
  return (
    <TableHead>
      <TableRow>
        {TABLE_CELLS.map(cell => <TableCell align={'center'} key={cell}>{cell}</TableCell>)}
      </TableRow>
    </TableHead>
  );
};

export default TableHeader;
