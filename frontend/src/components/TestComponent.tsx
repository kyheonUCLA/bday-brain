import { FC } from "react"

const TestComponent: FC = () => {
  
  const profile = {
    name: "Jon Doe",
    phone: "(555) 471-1234",
    pic: "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    birthday: new Date(),
    bio: "UCLA, Computer Science Engineering",
    age: 21
  }
  
  return (
    <div className="flex mb-3 flex-col items-center bg-white border border-gray-400 rounded-lg shadow md:flex-row md:w-[800px] hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <div className="flex-shrink-0 px-4 justify-start">
        <img className="w-24 h-24 rounded-full shadow-lg mb-2" src={profile?.pic} alt="" />
      </div>
  
      <div className="flex flex-col justify-between p-4">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">{`${profile?.name}, ${profile?.age}`}</h5>
        <span>{profile?.birthday.toDateString()}</span>
        <span>{profile?.phone}</span>
        <span>{profile?.bio}</span>
      </div>
  
      <div className="flex-grow"></div>
      <div className="h-52">
        <button className="h-full bg-purple-500 rounded-lg hover:bg-purple-800">EDIT</button>
      </div>
    </div>
  );
  
  
}

export default TestComponent