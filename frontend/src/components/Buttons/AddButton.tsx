import { FC, MouseEventHandler } from "react"

interface AddButtonProps {
  callback: MouseEventHandler
}


const AddButton: FC<AddButtonProps> = (props) => {
  const { callback } = props

  return (
    <div className="flex ">
      <button onClick={callback} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-4xl text-gray-900 rounded-full group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-gray-300 dark:bg-gray-900 rounded-full group-hover:bg-opacity-0">
        +
      </span>
    </button>
    </div>
  )
}

export default AddButton