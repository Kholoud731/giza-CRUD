import { FC } from "react";
import LoginSVG from "../general/Logo";
import Grid from "@mui/material/Grid";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

interface LoginHeaderProps {
  heading: string;
  paragraph: string;
  linkName: string;
  linkUrl: string;
}

const AuthHeader: FC<LoginHeaderProps> = ({
  heading,
  paragraph,
  linkName,
  linkUrl = "/",
}) => {
  return (
    <>
      <Grid container justifyContent={"center"}>
        <LoginSVG />
      </Grid>
      <Grid container justifyContent={"center"}>
        <h2>{heading}</h2>
      </Grid>
      <Grid container justifyContent={"center"}>
        <p>
          {paragraph}{" "}
          <Button component={Link} to={linkUrl} style={{ color: "#7a73b3" }}>
            {linkName}
          </Button>
        </p>
      </Grid>
    </>
  );
};

export default AuthHeader;
