
import { FC } from "react"

interface FormInputProps {
  type: string
  id: string
  label: string
  width?: number
  height?: number
  onSubmit?: Function
}


const FormInput: FC<FormInputProps> = (props) => {
  const baseStyles: string = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  const {type, id, label} = props;

  const w = props.width ? `w-[${props.width}px]` : 'w-[300px]'
  const h = props.height ? `h-[${props.height}px]` : 'h-[50px]'

  return (
    <div className="mb-6">
      <label htmlFor={type} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">{label}</label>
      <input type={type} id={id} className={`${baseStyles} ${w} ${h}`}/>
    </div>
  )
}

export default FormInput