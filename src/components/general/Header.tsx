import { AppBar, Box, Grid, Toolbar } from "@mui/material";
// import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { logoutUser } from "../../../slices/authSlice";
import { useNavigate } from "react-router-dom";
import ActionButton from "./ActionButton";


const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{ backgroundColor: "#7a73b3" }}>
          <Toolbar>
            <Grid container justifyContent={"space-between"} direction="row">
              <Grid item xs={12} md={8} sm={6}>
              <ActionButton text='home' onClick={()=> navigate("/")} isNav/>
              <ActionButton text='Add flight' onClick={()=> navigate("/add-flight")} isNav/>
              </Grid>
              <ActionButton text='logout' onClick={()=> dispatch(logoutUser())} isNav/>
            </Grid>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default NavBar;
