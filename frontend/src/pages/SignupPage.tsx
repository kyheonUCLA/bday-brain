import { FC } from "react"

import FormButton from "../components/FormButton"
import FormInput from "../components/FormInput"
import HorizontilNavbar from "../components/HorizontilNavbar"

const SignupPage: FC = () => {

	return (
		<div id="signup-page-div" className="bg-gray-500 flex flex-col items-center">
			<HorizontilNavbar />
			<form>
				<FormInput type="email" id="email-input" label="email"/>
				<FormInput type="password" id="password1-input" label="Password"/>
				<FormInput type="password" id="password2-input" label="Retype Password"/>
				<FormButton />
			</form>
		</div>
	)
}

export default SignupPage