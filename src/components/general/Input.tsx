import { FC } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { InputProps } from "./types";



const Input: FC<InputProps> = ({name, value, holder,type, reg, error}) => {
  return (
    <Grid item xs={12}>
    <TextField
      label={name.toLocaleLowerCase()}
      placeholder={holder}
      type={type}
      margin="normal"
      InputLabelProps={{ shrink: true }} 
      fullWidth
      {...reg}
      defaultValue={value || ''}
    />
    {error ?? <span>{error}</span>}

  </Grid>
  );
};

export default Input;
