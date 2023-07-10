import { FC, ChangeEvent, useEffect, useState } from "react"

import ViewCard from "./ViewCard"
import EditCard from "./EditCard"
import { FriendProfile } from "../../types/interface"

import FriendButton from "../Buttons/FriendButton"

interface FriendCardProps {
  profile: FriendProfile
}

const FriendCard: FC<FriendCardProps> = (props) => {
  const [newProfile, setNewProfile] = useState<FriendProfile>(props.profile)
  const [editState, setEditState] = useState<boolean>(false)

	const onInputChange = (e: ChangeEvent) => {
		const inputElement = e.target as HTMLInputElement
		setNewProfile( (prev) => ( { ...prev, [inputElement.name]: inputElement.value} ) )
	}

  const onEditClick = () => { setEditState(!editState )} //toggle between clicks

  useEffect( ()=>{console.log(newProfile)}, [newProfile] )

  return (
    <div className="flex mb-3 flex-col items-center bg-white border border-gray-400 rounded-lg shadow md:flex-row md:w-[800px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex-shrink-0 px-4 justify-start">
        <img className="w-24 h-24 rounded-full shadow-lg mb-2" src={props.profile?.pic} alt="" />
      </div>
     
      {!editState && ( 
        <>
        <ViewCard profile={props.profile}/> 
        <div className="flex-grow"></div>
        <FriendButton state={editState} toggleState={onEditClick} profile={newProfile}></FriendButton>
        </>
      )}
      
      {editState && ( 
        <>
        <EditCard profile={props.profile} callback={onInputChange}/> 
        <div className="flex-grow"></div>
        <FriendButton state={editState} toggleState={onEditClick} profile={newProfile}></FriendButton>
        </>
      )}
    </div>
  )
}

export default FriendCard