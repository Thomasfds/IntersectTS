/*
	Endpoint: /variables
	Description: variables endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/variables.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\variables.ts
    IE Require: None
*/

// We need to create a methode named : getVariables
// the api url is : /api/v1/variables/global
// the method is : POST
// the body get the following parameters : page(int) and count(int)

export function getVariables(url: string, token: string, page: number, count: number) {
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

export function getVariable(url: string, token: string, variableid: string) {
	return fetch(`${url}/api/v1/variables/global/${variableid}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},

	})
}

export function setVariableValue(url: string, token: string, variableid: string, value: number) {
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

export function getVariableValue(url: string, token: string, variableid: string) {
	return fetch(`${url}/api/v1/variables/global/${variableid}/value`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}