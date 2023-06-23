import { FC, MouseEventHandler } from "react"

interface FormButtonProps {
	text: string
	callback: MouseEventHandler<HTMLButtonElement>
	type?: 'default' | 'purple' | 'pill'
}

const FormButton: FC<FormButtonProps> = (props) => {

	const baseStyles: string = "focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-2 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
	const baseStyles2: string = "text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
	const {callback, text} = props

	return(
		<div className="">
			<button className={`${baseStyles2}`} onClick={callback}>{text}</button>
		</div>
	)
}

export default FormButton