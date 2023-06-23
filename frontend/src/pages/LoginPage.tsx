
import { FC, MouseEvent } from "react"

import {Form, Button} from "react-bootstrap"

import HorizontilNavbar from "../components/HorizontilNavbar"
import FormInput from "../components/FormInput"
import FormButton from "../components/FormButton"


const LoginPage: FC = () => {
  const onLoginBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		console.log(e.screenX, e.screenY)
	}


  return (
    <div id="login-page-div" className="bg-gray-400 flex flex-col items-center justify-center">
      <HorizontilNavbar />
      <form>
        <FormInput type="username" id="username-input" label="Username"></FormInput>
        <FormInput type="password" id="password-input" label="Password"></FormInput>
      </form>
      <FormButton text="Login" callback={onLoginBtnClick}/>

    </div>
  )
}

export default LoginPage