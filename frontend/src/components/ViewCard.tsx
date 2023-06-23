import { FC, useState } from "react"

import { FriendProfile } from "../types/interface"

interface ViewCardProps {
    profile?: FriendProfile
}

const ViewCard: FC<ViewCardProps> = (props) => {

	let p = {
    name: "Jon Doe",
    phone: "(555) 471-1234",
    pic: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    date: new Date(),
    bio: "UCLA, Computer Science Engineering",
    age: 21	
  }
  
	const {profile} = props 

  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex-shrink-0 px-4 justify-start">
        <img className="w-24 h-24 rounded-full shadow-lg mb-2" src={profile?.pic} alt="" />
        <span className="px-3">{`${profile?.name}, ${profile?.age}`}</span>
      </div>
  
      <div className="flex flex-col justify-between p-4 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{profile?.birthday.toLocaleDateString()}</h5>
        <span>{profile?.phone}</span>
        <span>{profile?.bio}</span>
      </div>
    </div>
  )
}

export default ViewCard