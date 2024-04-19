import AuthHeader from "../components/login/AuthHeader"
import AuthForm from "../components/login/AuthForm"

function Register() {
  return     <>
  <AuthHeader
    heading="Signup to create an account"
    paragraph="Do have an account? "
    linkName="Login"
    linkUrl="/login"
  />
  <AuthForm/>
</>
}

export default Register