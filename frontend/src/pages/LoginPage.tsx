
import { FC, MouseEvent, useState, useEffect } from "react"

// Custom imports
import HorizontilNavbar from "../components/Navbars/HorizontilNavbar"
import FormInput from "../components/FormInput"
import FormButton from "../components/Buttons/FormButton"
import { FormError, AuthData } from "../types/interface"

interface LoginFormState {
  username: string
  password: string
}




const LoginPage: FC = () => {
  const [formState, setFormState] = useState<LoginFormState>({username: "", password: ""})
  const [formErrors, setFormErrors] = useState<FormError[]>([])

  const onLoginBtnClick = (e: MouseEvent<HTMLButtonElement>) => {
		e.preventDefault()
    const usernameElement = document.getElementById('username-input') as HTMLInputElement
    const passwordElement = document.getElementById('password-input') as HTMLInputElement
    setFormState({
      username: usernameElement.value.trim(), 
      password: passwordElement.value.trim()
    })
    fetchAuthData()
	}

  const fetchAuthData = async (): Promise<void> => {
    try {
      const response = await fetch('http://localhost:5050/app/api/auth/')
      const jsonData: AuthData = await response.json()
      console.log(jsonData)
    } catch (error) {
      console.error('Error fetching test data:');
    }
  };

  const getLoginErrors = () => {
		const errors: FormError[] = []
		if (formState.username.length < 1 || formState.password.length < 1) {
			errors.push({code: 2, message: "Input fields cannot be left blank!"})
		}
		return errors
	}

  useEffect( () => {
    console.log(formState)
    formErrors.length > 0 ? console.error(formErrors[0]) : console.log("No errors in Login") 
    
    setFormErrors(getLoginErrors())
  }, [formState])


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