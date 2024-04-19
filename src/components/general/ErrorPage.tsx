import { useNavigate } from "react-router-dom";
import { useRouteError } from "react-router-dom";
import ActionButton from "./ActionButton";
import { ErrorDescription } from "./types";
import Grid from "@mui/material/Grid";

const ErrorPage = () => {
  const error = useRouteError() as ErrorDescription;
  const navigate = useNavigate();

  return (
    <Grid container justifyContent={"center"} spacing={2} >
      <Grid item xs={12} sm={8} md={6}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error?.statusText || error?.message}</i>
        </p>

        <Grid item xs={12}>
          <ActionButton
            text="home"
            onClick={() => navigate("/", { replace: true })}
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ErrorPage;
