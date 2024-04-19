import Button from "@mui/material/Button";
import { FC } from "react";
import { ActionButtonProps } from "./types";


const ActionButton: FC<ActionButtonProps> = ({onClick, text, isNav = false}) => {
    return (
    <Button
    onClick={onClick}
    style={{ backgroundColor: "#7a73b3", color: isNav ? 'inherit' :'' }}
    variant={`${isNav ? 'text': 'contained'}`}
  >{text}
  </Button>
  );}

export default ActionButton