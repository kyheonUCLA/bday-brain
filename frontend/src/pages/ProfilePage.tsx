import { FC, useState, useEffect } from "react"

import ViewCard from "../components/ViewCard"
import { UserProfile } from "../types/interface"

const friends = [
  {
    name: "Jon Doe",
    phone: "(555) 471-1234",
    pic: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    birthday: new Date("4/23/1998"),
    bio: "UCLA, Computer Science Engineering",
    age: 21	
  },
  {
    name: "Nirvana Shrinivasen",
    phone: "(420) 609-4321",
    pic: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
    birthday: new Date("1/3/2002"),
    bio: "USC, Scientific Poetry",
    age: 19
  },
  {
    name: "Alice Smith",
    phone: "(123) 456-7890",
    pic: "https://i.pravatar.cc/250?u=bob",
    birthday: new Date("9/12/1995"),
    bio: "Stanford, Business Administration",
    age: 26
  },
  {
    name: "Bob Johnson",
    phone: "(987) 654-3210",
    pic: "https://placebeard.it/250/250",
    birthday: new Date("6/5/1990"),
    bio: "Harvard, Law",
    age: 31
  },
  {
    name: "Emma Thompson",
    phone: "(555) 123-4567",
    pic: "https://i.pravatar.cc/250?u=emma",
    birthday: new Date("2/18/1993"),
    bio: "Oxford, Literature",
    age: 28
  },
  {
    name: "Michael Anderson",
    phone: "(888) 777-1234",
    pic: "https://i.pravatar.cc/250/250",
    birthday: new Date("11/30/1985"),
    bio: "MIT, Computer Engineering",
    age: 36
  }
];


const ProfilePage: FC = () => {
	const [profile, setProfile] = useState<UserProfile>() //need to write a function that fetches data from server
	
	
	
	

	console.log(friends.length)
	useEffect(() => {
	}, [profile])


	return (
		<div id="profile-page-div" className="flex flex-col items-center bg-yellow-500">
			{
				friends.map((friend, idx) => {return (
						<ViewCard key={idx} profile={friend}/>
				)})
			}
		</div>
	)
}

export default ProfilePage