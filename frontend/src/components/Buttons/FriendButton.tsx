import { FC, MouseEventHandler, MouseEvent } from "react"

import { FriendProfile } from "../../types/interface"
import EditButton from "./EditButton"
import UpdateButton from "./UpdateButton"

interface FriendButtonProps {
  profile: FriendProfile
  toggleState: MouseEventHandler
  state: boolean
}


const FriendButton: FC<FriendButtonProps> = (props) => {    
  const {profile, state, toggleState} = props 

  const onEditClick = (e: MouseEvent) => {
    e.preventDefault()
    toggleState(e)
  }

  const onUpdateClick = (e: MouseEvent) => {
    e.preventDefault()
    toggleState(e)
    //push new profile to db
  }

  const onDeleteClick = (e: MouseEvent) => {
    e.preventDefault()
    toggleState(e)
    //remove profile from db
  }

  return (
    <>
    {!state && ( 
      <EditButton callback={onEditClick}></EditButton>
    )}

    {state && ( 
      <UpdateButton updateCallback={onUpdateClick} deleteCallback={onDeleteClick}></UpdateButton>
    )}
    </>
  )
}

export default FriendButton