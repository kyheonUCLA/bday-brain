import { FC, MouseEventHandler } from "react"

interface FormButtonProps {
	callback?: MouseEventHandler<HTMLButtonElement>
}

const FormButton: FC<FormButtonProps> = (props) => {

	const baseStyles: string = ""
	const {callback} = props

	return(
		<div className="">
			<button className={`${baseStyles}`} onClick={callback}>

			</button>
		</div>
	)
}

export default FormButton