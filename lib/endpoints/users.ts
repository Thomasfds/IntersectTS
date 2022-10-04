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
	constructor() {
	}
	
	usersList(url: string, token: string, page?: number, pageSize?: number, limit?: number) {
		return fetch(`${url}/api/v1/users`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				page: page,
				pageSize: pageSize,
				limit: limit
			})
		})
	}

	userLookup(url: string, token: string, user: string) {
		return fetch(`${url}/api/v1/users/${user}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	userRegister(url: string, token: string, user: string, password: string, email: string) {
		return fetch(`${url}/api/v1/users/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				user: user,
				password: password,
				email: email
			})
		})
	}

	checkPassword(url: string, token: string, user: string, password: string) {
		return fetch(`${url}/api/v1/users/${user}/password/validate`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				password: password
			})
		})
	}

	changeEmail(url: string, token: string, user: string, password: string, email: string) {
		return fetch(`${url}/api/v1/users/${user}/email/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				new: email,
				authorization: password
			})
		})
	}

	changePassword(url: string, token: string, user: string, password: string, newPassword: string) {
		return fetch(`${url}/api/v1/users/${user}/password/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				new: newPassword,
				authorization: password
			})
		})
	}

	sendEmailResetPassword(url: string, token: string, user: string) {
		return fetch(`${url}/api/v1/users/${user}/password/reset`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	getCharacters(url: string, token: string, user: string) {
		return fetch(`${url}/api/v1/users/${user}/players`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	getCharacter(url: string, token: string, user: string, character: string) {
		return fetch(`${url}/api/v1/users/${user}/players/${character}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}
	/**
	 * Need the Users.Manage Role
	 * @param url 
	 * @param token 
	 * @param user 
	 * @param email 
 	 * @returns 
 	*/
	sudoChangeEmail(url: string, token: string, user: string, email: string) {
		return fetch(`${url}/api/v1/users/${user}/manage/email/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				new: email
			})
		})
	}

	/**
	 * Need the Users.Manage Role
	 * @param url 
	 * @param token 
	 * @param user 
	 * @param password 
	 * @returns 
	*/
	sudoChangePassword(url: string, token: string, user: string, password: string) {
		return fetch(`${url}/api/v1/users/${user}/manage/password/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				new: password
			})
		})
	}
}