import loginImg from "../assets/Images/login.webp"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Login page"
      description1="Welcome back! Please login to your account."
      description2="View our dashboard."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login