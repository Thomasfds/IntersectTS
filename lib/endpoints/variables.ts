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
	constructor() {
	}
	
	getVariables(url: string, token: string, page: number, count: number) {
		return fetch(`${url}/api/v1/variables/global`, {
			method: 'POST',
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

	getVariable(url: string, token: string, variableid: string) {
		return fetch(`${url}/api/v1/variables/global/${variableid}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},

		})
	}

	setVariableValue(url: string, token: string, variableid: string, value: number) {
		return fetch(`${url}/api/v1/variables/global/${variableid}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			},
			body: JSON.stringify({
				value: value
			})
		})
	}

	getVariableValue(url: string, token: string, variableid: string) {
		return fetch(`${url}/api/v1/variables/global/${variableid}/value`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}
}