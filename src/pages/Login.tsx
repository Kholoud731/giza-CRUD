import AuthForm from "../components/login/AuthForm";
import AuthHeader from "../components/login/AuthHeader";

function Login() {
  return (
    <>
      <AuthHeader
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Register"
        linkUrl="/register"
      />
      <AuthForm/>
    </>
  );
}

export default Login;
