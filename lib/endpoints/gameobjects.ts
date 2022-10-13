/**
 * This is the GameObjects Class, it contains all the methods to handle Game Object's.
 * Those actions do not require any Query Role.
 * @class Chat
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/gameobjects.html
 * @author AriusII
 */
export class GameObjects {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	/**
	 * Grabs a list of game objects and their stored information from the server given it's type and paging information. 
	 * @param type - The KEY type of object you want to get. (Check official doc'.)
	 * @param page - The page you want to get.
	 * @param count - The number of objects you want to get.
	 * @returns - The response from the server.
	 */
	async getList(type: string, page: number, count: number) {
		const res = await fetch(`${this._url}/api/v1/gameobjects/${type}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				page: page || 0,
				count: count || 5
			})
		})
		return await res.json()
	}

	/**
	 * It retrieves the config for a singular game object from the server given it's type and id.
	 * @param type - The KEY type of object you want to get. (Check official doc'.)
	 * @param id - The id of the object you want to get.
	 * @returns - The response from the server.
	 */
	async getObject(type: string, id: string) {
		const res = await fetch(`${this._url}/api/v1/gameobjects/${type}/${id}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}

	/**
	 * It retrieves the servers timing configuration and color hues for each time of day.
	 * @returns - The response from the server.
	 */
	async getTime() {
		const res = await fetch(`${this._url}/api/v1/gameobjects/time`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}
}