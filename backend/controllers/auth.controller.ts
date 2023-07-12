import { Request, Response } from 'express';

interface Db {
    username: string
    password: string
}

interface AuthData {
	code: number
	message: string
	status: boolean
}

const db: Db[] = [{username: 'test', password: 'test'}, {username: 'ky', password: 'heon'}]

const searchIn = (db:Db[], data:Db) => {
	const resJson = {
		code: 0,
		message: "",
		status: false
	}
	db.map((e, idx) => {
		if (e.username === data.username) {
			if (e.password === data.password) {
				resJson.status = true
				return resJson
			} else {
				resJson.code = 69
				resJson.message = 'password does not match username!'
				return resJson
			}
		}
	})
	resJson.code = 420
	resJson.message = "username does not exist in db!"
	return resJson
}

const authController = {
  getAuthData: (req: Request, res: Response): void => {
		const data: Db = {username: req.params.username, password: req.params.password}
    res.json(searchIn(db, data));
  },
};

export default authController;
