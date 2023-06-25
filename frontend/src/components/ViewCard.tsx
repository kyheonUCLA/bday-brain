import { FC, useState } from "react"


import EditButton from "./EditButton"
import { FriendProfile } from "../types/interface"

interface ViewCardProps {
    profile?: FriendProfile //make sure to make it required later
}

const ViewCard: FC<ViewCardProps> = (props) => {
  
	const {profile} = props 

  return (
    <div className="flex mb-3 flex-col items-center bg-white border border-gray-400 rounded-lg shadow md:flex-row md:w-[800px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex-shrink-0 px-4 justify-start">
        <img className="w-24 h-24 rounded-full shadow-lg mb-2" src={profile?.pic} alt="" />
      </div>
  
      <div className="flex flex-col justify-between p-4 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{`${profile?.name}, ${profile?.age}`}</h5>
				<span>{profile?.birthday.toDateString()}</span>
			  <span>{profile?.phone}</span>
        <span>{profile?.bio}</span>
      </div>

			<div className="flex-grow"></div>
      <div className="h-52">
        <button className="h-full bg-gray-400 rounded-lg hover:bg-gray-600">EDIT</button>
      </div>
    </div>
  )
}

export default ViewCard