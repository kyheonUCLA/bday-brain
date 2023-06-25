import { FC } from "react"
import { Link } from 'react-router-dom';

interface HorizontilNavbarProps {
	tabs?: {
		route: string
		name: string
	}[]
}

const HorizontilNavbar: FC<HorizontilNavbarProps> = (props) => {
	
	const tabs = [{name: 'Home', route: '/'}, {name: 'About', route: '/test'}, {name: 'Sign Up', route: '/signup'}, {name: 'Login', route: '/login'}]
	const elementBaseStyles: string = " block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
	const listBaseStyales = "font-medium w-full flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
	return (
	<nav className="bg-white border-gray-200 dark:bg-gray-900 w-full h-auto">
		<div className="w-full flex flex-row items-center justify-between mx-auto p-4 bg-orange-500">
			<div className="hidden md:block md:w-full flex-row justify-center" id="navbar-default">
				<ul className={`${listBaseStyales} justify-end`}>
					<li >
						<Link className="flex items-center" to="https://flowbite.com/">
						<img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
						<span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Wednesday</span>
						</Link>
					</li>
					<div className="flex-grow"></div>
					{
						tabs?.map( (tab, idx) => {return (
						<li key={idx}>
							<Link to={tab.route} className={`${elementBaseStyles}`}>{tab.name}</Link>
						</li>
						)})
					}
				</ul>
			</div>
		</div>
	</nav>
	)
}

export default HorizontilNavbar