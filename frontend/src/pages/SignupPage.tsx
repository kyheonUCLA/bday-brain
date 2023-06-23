// node module imports
import { FC, MouseEvent, useState, useEffect } from "react"

// api imports

// custom imports
import FormButton from "../components/FormButton"
import FormInput from "../components/FormInput"
import HorizontilNavbar from "../components/HorizontilNavbar"

import { FormError } from "../types/interface"


interface SignupFormState {
  email: string
  password1: string
	password2: string
}


const SignupPage: FC = () => {
	const [formState, setFormState] = useState<SignupFormState>({email: "", password1: "", password2: ""})
	const [formErrors, setFormErrors] = useState<FormError[]>([])

	const onSignupBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
		const emailElement = document.getElementById('email-input') as HTMLInputElement
    const passwordElement1 = document.getElementById('password1-input') as HTMLInputElement
		const  passwordElement2 = document.getElementById('password2-input') as HTMLInputElement
		setFormState({
			email: emailElement.value.trim(), 
			password1: passwordElement1.value.trim(), 
			password2: passwordElement2.value.trim()
		})
		console.log(formState)
		setFormErrors(getSignupErrors())
	}

	/*
	I need to query the db to see if email/username already exists.
	create a bool returning function in services/api.tsx to do this for me
	*/
	const getSignupErrors = () => {
		const errors: FormError[] = []
		const regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{4,10}$/
		if (formState.email.length < 1 || formState.password1.length < 1 || formState.password2.length < 1) {
			errors.push({code: 2, message: "Input fields cannot be left blank"})
		} else if (formState.password1 !== formState.password2) {
			errors.push({code: 1, message: "passwords must match!"})
		} else if (!regex.test(formState.password2)) {
			errors.push({code: 2, message: "password structure"})
		} 
		return errors
	}

	useEffect(() => {
		//console.log(formState)
    formErrors.length > 0 ? console.error(formErrors[0]) : console.log("No errors in Sign Up") 

	}, [formState])

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