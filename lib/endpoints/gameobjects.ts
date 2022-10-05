/*
	Endpoint: /gameobjects
	Description: gameobjects endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/gameobjects.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\gameobjects.ts
    IE Require: None
*/
export class GameObjects {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	/**
	 * It takes a url, a token, a type, a page, and a count, and returns a fetch request with a GET
	 * method, a content type of application/json, an authorization header of Bearer token, and a body of
	 * a JSON stringified object with a page and count property.
	 * @param {string} type - The type of game object you want to get.
	 * @param {number} page - The page number to get.
	 * @param {number} count - number of items to return
	 * @returns A promise.
	 */
	getList(type: string, page: number, count: number) {
		return fetch(`${this._url}/api/v1/gameobjects/${type}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				page: page,
				count: count
			})
		})
	}

	/**
	 * To return the correct Object Type please put a look on :
	 * https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/gameobjects.html#object-types
	 * @param {string} type - The type of object you want to get.
	 * @param {string} id - the id of the object you want to get
	 * @returns A Promise.
	 */
	getObject(type: string, id: string) {
		return fetch(`${this._url}/api/v1/gameobjects/${type}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}

	/**
	 * It takes a url and a token, and returns a fetch request to the url with the token in the header.
	 * @returns A promise.
	 */
	getTime() {
		return fetch(`${this._url}/api/v1/gameobjects/time`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
	}
}