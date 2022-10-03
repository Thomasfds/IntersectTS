/*
	Endpoint: /players
	Description: players endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/players.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\players.ts
    IE Require: None
*/

export function playersList(url: string, token: string, page?: number, pageSize?: number, limit?: number) {
	return fetch(`${url}/api/v1/players`, {
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

export function playerRank(url: string, token: string, page?: number, pageSize?: number, limit?: number, sort?: string) {
	return fetch(`${url}/api/v1/players/rank`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			page: page,
			pageSize: pageSize,
			limit: limit,
			sort: sort
		})
	})
}

export function playersOnline(url: string, token: string, page?: number, count?: number) {
	return fetch(`${url}/api/v1/players/online`, {
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

export function playerOnlineCount(url: string, token: string) {
	return fetch(`${url}/api/v1/players/online/count`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function playerLookup(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function playerVariables(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}/variables`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function playerVariable(url: string, token: string, player: string, variable: string) {
	return fetch(`${url}/api/v1/players/${player}/variables/${variable}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function getPlayerVariableValue(url: string, token: string, player: string, variable: string) {
	return fetch(`${url}/api/v1/players/${player}/variables/${variable}/value`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function setPlayerVariableValue(url: string, token: string, player: string, variable: string, value: string) {
	return fetch(`${url}/api/v1/players/${player}/variables/${variable}/value`, {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			value: value
		})
	})
}

export function getPlayerItems(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}/items`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function getPlayerInventoryItems(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}/items/inventory`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function getPlayerBankItems(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}/items/bank`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function getPlayerBag(url: string, token: string, player: string, bag: string) {
	return fetch(`${url}/api/v1/players/bag/${bag}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function givePlayerItem(url: string, token: string, player: string, item: string, amount: number, bankoverflow?: boolean) {
	return fetch(`${url}/api/v1/players/${player}/items/give`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			itemid: item,
			quantity: amount,
			bankoverflow: bankoverflow
		})
	})
}

export function takePlayerItem(url: string, token: string, player: string, item: string, amount: number) {
	return fetch(`${url}/api/v1/players/${player}/items/take`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			itemid: item,
			quantity: amount
		})
	})
}

export function getPlayerSpells(url: string, token: string, player: string) {
	return fetch(`${url}/api/v1/players/${player}/spells`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		}
	})
}

export function givePlayerSpell(url: string, token: string, player: string, spell: string) {
	return fetch(`${url}/api/v1/players/${player}/spells/teach`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			spellid: spell
		})
	})
}

export function takePlayerSpell(url: string, token: string, player: string, spell: string) {
	return fetch(`${url}/api/v1/players/${player}/spells/forget`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`
		},
		body: JSON.stringify({
			spellid: spell
		})
	})
}