/*
	Endpoint: /users
	Description: users endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/users.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\users.ts
    IE Require: users.query API
*/
export class Users {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	usersList(page?: number, pageSize?: number, limit?: number) {
		return fetch(`${this._url}/api/v1/users`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				page: page,
				pageSize: pageSize,
				limit: limit
			})
		})
	}

	userLookup(user: string) {
		return fetch(`${this._url}/api/v1/users/${user}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	userRegister(user: string, password: string, email: string) {
		return fetch(`${this._url}/api/v1/users/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				user: user,
				password: password,
				email: email
			})
		})
	}

	checkPassword(user: string, password: string) {
		return fetch(`${this._url}/api/v1/users/${user}/password/validate`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				password: password
			})
		})
	}

	changeEmail(user: string, password: string, email: string) {
		return fetch(`${this._url}/api/v1/users/${user}/email/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				new: email,
				authorization: password
			})
		})
	}

	changePassword(user: string, password: string, newPassword: string) {
		return fetch(`${this._url}/api/v1/users/${user}/password/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				new: newPassword,
				authorization: password
			})
		})
	}

	sendEmailResetPassword(user: string) {
		return fetch(`${this._url}/api/v1/users/${user}/password/reset`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	getCharacters(user: string) {
		return fetch(`${this._url}/api/v1/users/${user}/players`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	getCharacter(user: string, character: string) {
		return fetch(`${this._url}/api/v1/users/${user}/players/${character}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}
	/**
	 * Need the Users.Manage Role
	 * @param user 
	 * @param email 
 	 * @returns 
 	*/
	sudoChangeEmail(user: string, email: string) {
		return fetch(`${this._url}/api/v1/users/${user}/manage/email/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				new: email
			})
		})
	}

	/**
	 * Need the Users.Manage Role
	 * @param user 
	 * @param password 
	 * @returns 
	*/
	sudoChangePassword(user: string, password: string) {
		return fetch(`${this._url}/api/v1/users/${user}/manage/password/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				new: password
			})
		})
	}
}