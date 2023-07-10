import { FC, MouseEventHandler, MouseEvent } from "react"
import FriendContext from "../../contexts/FriendContext"

import { FriendProfile } from "../../types/interface"
import EditButton from "./EditButton"
import UpdateButton from "./UpdateButton"

interface FriendButtonProps {
  profile: FriendProfile
  toggleState: MouseEventHandler
  state: boolean
  id: number
}


const FriendButton: FC<FriendButtonProps> = (props) => {    
  const {profile, state, toggleState, id} = props 

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
      <FriendContext.Consumer>
        {({ onDeleteFriend }) => (
          <UpdateButton updateCallback={onUpdateClick} deleteCallback={(e: MouseEvent) => { onDeleteFriend(id); toggleState(e)}}></UpdateButton>      
        )}
      </FriendContext.Consumer>
    )}
    </>
  )
}

export default FriendButton