import { FC, useEffect, useState, MouseEventHandler } from "react"
import ViewCard from "./Cards/ViewCard"
import EditButton from "./Buttons/EditButton"

const TestComponent: FC = () => {
  
  const profile = {
    name: "Jon Doe",
    phone: "(555) 471-1234",
    pic: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    birthday: new Date(),
    bio: "UCLA, Computer Science Engineering",
    age: 21,
    editState: false
  }
  
  const [st, setSt] = useState(profile.editState)


  return (
    <div className="flex mb-3 flex-col items-center bg-white border border-gray-400 rounded-lg shadow md:flex-row md:w-[800px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      
      <div className="flex-shrink-0 px-4 justify-start">
        <img className="w-24 h-24 rounded-full shadow-lg mb-2" src={profile?.pic} alt="" />
      </div>

      {!st && (
      <>
        <div className="flex flex-col justify-between p-4 ">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{`${profile?.name}, ${profile?.age}`}</h5>
        <span>{profile?.birthday.toDateString()}</span>
        <span>{profile?.phone}</span>
        <span>{profile?.bio}</span>
        </div>
        <button onClick={(e: any) => {setSt((s) => !s)}}>Clike</button>
      </>
      )}
      
      {st && (
      <>   
        <div className="flex flex-col justify-between p-4">
        <input className="border-2 rounded-md mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black" defaultValue={profile?.name} />
        <input className="border-2 mb-2 text-gray-700 dark:text-gray-400" defaultValue={profile?.birthday.toDateString()} />
        <input className="border-2 rounded-md mb-2 text-gray-700 dark:text-gray-400" defaultValue={profile?.phone} />
        <input className="border-2 rounded-md mb-2 text-gray-700 dark:text-gray-400" defaultValue={profile?.bio} />
        </div>
        <button onClick={(e: any) => {setSt((s) => !s)}}>Clike</button>
      </>
      )}

    
    </div>
  )

}

export default TestComponent