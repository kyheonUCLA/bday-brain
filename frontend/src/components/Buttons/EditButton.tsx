import { FC, MouseEventHandler } from "react"

interface EditButtonProps {
	callback: MouseEventHandler
}

const EditButton: FC<EditButtonProps> = (props) => {
	
	return (
		<div className="h-52">
			<button onClick={props.callback} className="h-full bg-gray-400 rounded-lg hover:bg-gray-600">EDIT</button>
		</div>
	)
}

export default EditButton