/**
 * This is the Variables Class, it contains all the methods to handle the Variables.
 * Those actions do not require any Query Role.
 * @class Variables
 * @link https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/variables.html
 * @author AriusII
 */
export class Variables {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	/**
	 * Retrieves global variables from the server along with their ids and values.
	 * @param page - The page number you want to retrieve.
	 * @param count - The number of variables you want to retrieve.
	 * @returns - The response from the server.
	 */
	async getVariables(page: number, count: number) {
		const response = await fetch(`${this._url}/api/v1/variables/global`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				page: page || 0,
				count: count || 10
			})
		})
		return await response.json()
	}

	/**
	 * Retrieves a variable and it's value from the server by id.
	 * @param variableid - The variable ID you want to retrieve the value for.
	 * @returns - The response from the server.
	 */
	async getVariable(variableid: string) {
		const res = await fetch(`${this._url}/api/v1/variables/global/${variableid}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
		})
		return await res.json()
	}

	/**
	 * Sets a specified variable's value given it's id.
	 * @param variableid - The variable ID you want to set the value for.
	 * @param value - The value you want to set the variable to.
	 * @returns - The response from the server.
	 */
	async setVariableValue(variableid: string, value: number) {
		const res = await fetch(`${this._url}/api/v1/variables/global/${variableid}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				value: value
			})
		})
		return await res.json()
	}

	/**
	 * Retrieves the stored value of a variable from the server by id.
	 * @param variableid - The variable ID you want to retrieve the value for.
	 * @returns - The response from the server.
	 */
	async getVariableValue(variableid: string) {
		const res = await fetch(`${this._url}/api/v1/variables/global/${variableid}/value`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			}
		})
		return await res.json()
	}
}