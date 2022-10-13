/**
 * This is the Users Class, it contains all the methods to handle the Users.
 * Those actions require the Query Role. -> users.query API
 * @class Users
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/users.html
 * @author AriusII
 */
export class Users {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	async usersList(page: number, pageSize: number, limit: number) {
		const res = await fetch(`${this._url}/api/v1/users`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				page: page || 0,
				pageSize: pageSize || 10,
				limit: limit || (pageSize || 10)
			})
		})
		return await res.json()
	}

	async userLookup(user: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async userRegister(user: string, password: string, email: string) {
		const res = await fetch(`${this._url}/api/v1/users/register`, {
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
		return await res.json()
	}

	async checkPassword(user: string, password: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/password/validate`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				password: password
			})
		})
		return await res.json()
	}

	async changeEmail(user: string, password: string, email: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/email/change`, {
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
		return await res.json()
	}

	async changePassword(user: string, password: string, newPassword: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/password/change`, {
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
		return await res.json()
	}

	async sendEmailResetPassword(user: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/password/reset`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async getCharacters(user: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/players`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	async getCharacter(user: string, character: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/players/${character}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}
	/**
	 * Need the Users.Manage Role
	 * @param user 
	 * @param email 
 	 * @returns 
 	*/
	async sudoChangeEmail(user: string, email: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/manage/email/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				new: email
			})
		})
		return await res.json()
	}

	/**
	 * Need the Users.Manage Role
	 * @param user 
	 * @param password 
	 * @returns 
	*/
	async sudoChangePassword(user: string, password: string) {
		const res = await fetch(`${this._url}/api/v1/users/${user}/manage/password/change`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				new: password
			})
		})
		return await res.json()
	}
}