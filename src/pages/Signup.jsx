import signupImg from "../assets/Images/signup.webp"
import Template from "../components/core/Auth/Template"

function Signup() {
  return (
    <Template
      title="Sign up page"
      description1="Register yourself to get started."
      description2="Dashboard is waiting for you!"
      image={signupImg}
      formType="signup"
    />
  )
}

export default Signup