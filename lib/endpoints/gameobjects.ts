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
	constructor() {
	}
	
	/**
	 * It takes a url, a token, a type, a page, and a count, and returns a fetch request with a GET
	 * method, a content type of application/json, an authorization header of Bearer token, and a body of
	 * a JSON stringified object with a page and count property.
	 * @param {string} url - The URL of the server you're connecting to.
	 * @param {string} token - The token you got from the login request
	 * @param {string} type - The type of game object you want to get.
	 * @param {number} page - The page number to get.
	 * @param {number} count - number of items to return
	 * @returns A promise.
	 */
	getList(url: string, token: string, type: string, page: number, count: number) {
		return fetch(`${url}/api/v1/gameobjects/${type}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
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
	 * @param {string} url - The URL of the server you're connecting to.
	 * @param {string} token - The token that was returned from the login function
	 * @param {string} type - The type of object you want to get.
	 * @param {string} id - the id of the object you want to get
	 * @returns A Promise.
	 */
	getObject(url: string, token: string, type: string, id: string) {
		return fetch(`${url}/api/v1/gameobjects/${type}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	/**
	 * It takes a url and a token, and returns a fetch request to the url with the token in the header.
	 * @param {string} url - The url of the server you're trying to connect to.
	 * @param {string} token - The token that you get from the login function
	 * @returns A promise.
	 */
	getTime(url: string, token: string) {
		return fetch(`${url}/api/v1/gameobjects/time`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}
}