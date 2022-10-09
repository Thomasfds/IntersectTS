/*
	Endpoint: /variables
	Description: variables endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/variables.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\variables.ts
    IE Require: None
*/

export class Variables {
	private _url: string
	private _token: string
	constructor(_url: string, _token: string) {
		this._url = _url
		this._token = _token
	}
	
	async getVariables(page: number, count: number) {
		const response = await fetch(`${this._url}/api/v1/variables/global`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${this._token}`
			},
			body: JSON.stringify({
				page: page,
				count: count
			})
		})
		return await response.json()
	}

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