import { FC, MouseEventHandler, useState, useEffect, ChangeEvent, ChangeEventHandler } from "react"
import { FriendProfile } from "../../types/interface"



interface EditCardProps {
	profile: FriendProfile
	callback: ChangeEventHandler
}

const EditCard: FC<EditCardProps> = (props) => {
	const { callback } = props

	return (
		<div className="flex flex-col justify-between p-4">
		<input name="name" className="border-2 rounded-md mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black" defaultValue={props.profile?.name} onChange={callback}/>
		<input name="birthday" className="border-2 mb-2 text-gray-700 dark:text-gray-400" defaultValue={props.profile?.birthday.toDateString()} onChange={callback}/>
		<input name="phone" className="border-2 rounded-md mb-2 text-gray-700 dark:text-gray-400" defaultValue={props.profile?.phone} onChange={callback}/>
		<input name="bio" className="border-2 rounded-md mb-2 text-gray-700 dark:text-gray-400" defaultValue={props.profile?.bio} onChange={callback}/>
		</div>
	)
}


export default EditCard