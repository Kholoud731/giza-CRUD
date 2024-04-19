import { Navigate, Outlet } from "react-router-dom";
import Header from "./components/general/Header";
import Grid from "@mui/material/Grid";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Root = () => {
      const isAuth = useSelector<RootState, string | null>(
    (state) => state.auth.token
  );
  if (!isAuth) {
    return <Navigate to="/login" />;
  }
  return (
    <Grid container>
      <Header />
      <Outlet />
    </Grid>
  );
};

export default Root;
