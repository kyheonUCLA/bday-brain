
import {FC} from "react"

import {Form, Button} from "react-bootstrap"

import HorizontilNavbar from "../components/HorizontilNavbar"
import FormInput from "../components/FormInput"
import TestComponent from "../components/TestComponent"

const LoginPage: FC = () => {
  return (
    <div id="login-page-div" className="bg-gray-400 flex flex-col items-center justify-center">
      <HorizontilNavbar />
      <form>
        <FormInput type="username" id="username-input" label="Username"></FormInput>
        <FormInput type="password" id="password-input" label="Password"></FormInput>
      </form>
    </div>
  )
}

export default LoginPage