// node module imports
import { FC, MouseEvent } from "react"

// api imports

// custom imports
import FormButton from "../components/FormButton"
import FormInput from "../components/FormInput"
import HorizontilNavbar from "../components/HorizontilNavbar"

const SignupPage: FC = () => {

	const onSignupBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		console.log(e.screenX, e.screenY)
	}

	return (
		<div id="signup-page-div" className="bg-gray-500 flex flex-col items-center justify-center">
			<HorizontilNavbar />
			
			<form>
				<FormInput type="email" id="email-input" label="Email"/>
				<FormInput type="password" id="password1-input" label="Password"/>
				<FormInput type="password" id="password2-input" label="Retype Password"/>
			</form>
			<FormButton text="Sign Up" callback={onSignupBtnClick}/>
		</div>
	)
}

export default SignupPage