import Grid from "@mui/material/Grid";
import { UseFormRegister, useForm } from "react-hook-form";
import { LoginFormInputs } from "./types";
import { loginUser, registerUser } from "../../../slices/authSlice";
import { useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../../../store";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Input from "../general/Input";
import ActionButton from "../general/ActionButton";

const AuthForm = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { pathname } = useLocation()
  const error = useSelector<RootState, string | null>(
    (state) => state.auth.error
  );  

  const onSubmit = (data: LoginFormInputs) => {
    if(pathname === '/login'){
      dispatch(loginUser(data))
      .unwrap()
      .then(() => navigate("/"));
    } else {
      dispatch(registerUser(data))
      .unwrap()
      .then(() => navigate('/login'))
    }
  };

  return (
    <>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={12} sm={8} md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={2}>
              <Input
                name={"email"}
                holder={"Enter Your Email"}
                type={"email"}
                reg={
                  register(
                    "email"
                  ) as unknown as UseFormRegister<LoginFormInputs>
                }
              />
              <Input
                name={"password"}
                holder={"Enter Your password"}
                type={"password"}
                reg={
                  register(
                    "password"
                  ) as unknown as UseFormRegister<LoginFormInputs>
                }
              />
              {error && <span>{error}</span>}
              <Grid item xs={12}>
                <ActionButton text={`${pathname === '/login' ? 'login' : 'Register'}`} onClick={handleSubmit(onSubmit)} />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </>
  );
};

export default AuthForm;
