import { FC, useState, useEffect } from "react"

import ViewCard from "../components/ViewCard"
import { UserProfile } from "../types/interface"


const ProfilePage: FC = () => {
	const [profile, setProfile] = useState<UserProfile>() //need to write a function the fetches data
	
	const friends = [{
    name: "Jon Doe",
    phone: "(555) 471-1234",
    pic: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    birthday: new Date(),
    bio: "UCLA, Computer Science Engineering",
    age: 21	
  }, {name: "Nirvana Shrinivasen",
		phone: "(420) 609-4321",
		pic: "https://i.pravatar.cc/250?u=mail@ashallendesign.co.uk",
		birthday: new Date(),
		bio: "USC, Scientific Poetry",
		age: 19
	}]

	console.log(friends.length)
	useEffect(() => {
	}, [profile])


	return (
		<div id="profile-page-div" className="flex flex-col items-center bg-yellow-500">
			{
				friends.map((friend, idx) => {return (
					<div className="mb-3">
						<ViewCard profile={friend}/>
					</div>
				)})
			}
		</div>
	)
}

export default ProfilePage