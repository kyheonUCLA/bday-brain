import { FC, MouseEventHandler } from "react"

interface EditButtonProps {
  state?: boolean
	callback?: MouseEventHandler<HTMLButtonElement>
}

const EditButton: FC<EditButtonProps> = (props) => {

	return (
		<div className="h-52">
			<button className="h-full bg-gray-400 rounded-lg hover:bg-gray-600">EDIT</button>
		</div>
	)
}

export default EditButton