import { ChangeEventHandler, FC, MouseEventHandler, useState } from "react"

interface ToggleProps {
  callback: ChangeEventHandler
  checked: boolean
}

const Toggle: FC<ToggleProps> = (props) => {
  const { checked, callback } = props

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input name="textUser" type="checkbox" checked={checked} className="sr-only peer" onChange={callback}/>
      <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
  )
}

export default Toggle