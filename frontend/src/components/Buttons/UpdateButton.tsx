import { FC, MouseEventHandler } from "react"

import { FriendProfile } from "../../types/interface"

interface UpdateButtonProps {
  updateCallback: MouseEventHandler //also needs to push to database
  deleteCallback: MouseEventHandler
  profile?: FriendProfile 
}

const UpdateButton: FC<UpdateButtonProps> = (props) => {
  const { updateCallback, deleteCallback } = props
  return (
    <div className="h-52 flex flex-col">
			<button onClick={updateCallback} className="h-full bg-blue-400 rounded-t-lg hover:bg-blue-600">OK</button>
      <button onClick={deleteCallback} className="h-full bg-red-400 rounded-b-lg hover:bg-red-600">DEL</button>
		</div>
  )
}

export default UpdateButton