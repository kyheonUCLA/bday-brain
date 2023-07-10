

export interface FormError {
	code: number
	message: string
}

//these profile types will depend on structure of database
export interface UserProfile {
	name?: string
	friends?: FriendProfile[]
}

export interface FriendProfile {
	name: string
	pic: string
	birthday: Date
	age: number
	phone: string
	bio: string
	socials?: {
		snapchat: boolean
		instagram: boolean
	}
	editState: boolean
}


///testing

export interface AuthData {
	code: number
	message: string
	status: boolean
}

export interface TestData {
	body: string;
	id: number;
	message: string;
}

