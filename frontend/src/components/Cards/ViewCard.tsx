import { FC, MouseEventHandler, useState } from "react"


import EditButton from "../Buttons/EditButton"
import { FriendProfile } from "../../types/interface"

interface ViewCardProps {
  profile: FriendProfile //make sure to make it required later
  callback?: MouseEventHandler
}

const ViewCard: FC<ViewCardProps> = (props) => {
  
	const {profile} = props 

  return (
    <>
      <div className="flex flex-col justify-between p-4 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{`${profile?.name}, ${profile?.age}`}</h5>
				<span>{profile?.birthday.toDateString()}</span>
			  <span>{profile?.phone}</span>
        <span>{profile?.bio}</span>
      </div>
    </>
  )
}

export default ViewCard