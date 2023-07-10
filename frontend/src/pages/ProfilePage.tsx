import { FC, useState, useEffect } from "react"
import FriendContext from "../contexts/FriendContext"

import { FriendProfile, UserProfile } from "../types/interface"
import FriendCard from "../components/Cards/FriendCard"
import AddButton from "../components/Buttons/AddButton"

const friendsExample = [
  {
    name: "Jon Doe",
    phone: "(555) 471-1234",
    pic: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    birthday: new Date("4/23/1998"),
    bio: "UCLA, Computer Science Engineering",
    age: 21,
    textUser: false
  },
  {
    name: "Nirvana Shrinivasen",
    phone: "(420) 609-4321",
    pic: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
    birthday: new Date("1/3/2002"),
    bio: "USC, Scientific Poetry",
    age: 19,
    textUser: true
  },
  {
    name: "Alice Smith",
    phone: "(123) 456-7890",
    pic: "https://i.pravatar.cc/250?u=bob",
    birthday: new Date("9/12/1995"),
    bio: "Stanford, Business Administration",
    age: 26,
    textUser: true
  },
  {
    name: "Bob Johnson",
    phone: "(987) 654-3210",
    pic: "https://placebeard.it/250/250",
    birthday: new Date("6/5/1990"),
    bio: "Harvard, Law",
    age: 31,
    textUser: false
  },
  {
    name: "Emma Thompson",
    phone: "(555) 123-4567",
    pic: "https://i.pravatar.cc/250?u=emma",
    birthday: new Date("2/18/1993"),
    bio: "Oxford, Literature",
    age: 28,
    textUser: false
  },
  {
    name: "Michael Anderson",
    phone: "(888) 777-1234",
    pic: "https://i.pravatar.cc/250/250",
    birthday: new Date("11/30/1985"),
    bio: "MIT, Computer Engineering",
    age: 36,
    textUser: false
  }
];


const ProfilePage: FC = () => {
	const [user, setUser] = useState<UserProfile>() //need to write a function that fetches data from server
  const [friends, setFriends] = useState<FriendProfile[]>(friendsExample) //

  const onAddFriend = () => {
    const newFriend = {
      name: "John Smith",
      phone: "(123) 333-4444",
      pic: "https://i.pravatar.cc/250/250",
      birthday: new Date(),
      bio: "example",
      age: 0,
      textUser: true
    }
    setFriends( (prev) => ( [...prev, newFriend] ) )
  }

  const onDeleteFriend = (id: number) => {
    setFriends( (prev) => (prev.filter( (e, idx) => idx !== id)) )
  }
	
	useEffect(() => {
    setFriends(friendsExample)
	}, [user])


	return (
		<div id="profile-page-div" className="flex flex-col items-center bg-yellow-500">
      <br></br>
      <FriendContext.Provider value={ {onDeleteFriend: onDeleteFriend} }>
			{
				friends.map((friend, idx) => {return (
          <FriendCard key={idx} id={idx} profile={friend}/>
				)})
			}
      </FriendContext.Provider>
      <br></br>
      <AddButton callback={onAddFriend} />
      <br></br>
		</div>
	)
}

export default ProfilePage