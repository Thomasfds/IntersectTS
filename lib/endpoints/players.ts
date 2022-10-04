/*
	Endpoint: /players
	Description: players endpoint
	DOCUMENTATION URL: https://docs.freemmorpgmaker.com/en-US/api/v1/endpoints/players.html
	Author: AriusII
	Language: typescript
	Path: lib\endpoints\players.ts
    IE Require: None
*/
export class Players {
	constructor() {
	}
	
	playersList(url: string, token: string, page?: number, pageSize?: number, limit?: number) {
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

	playerRank(url: string, token: string, page?: number, pageSize?: number, limit?: number, sort?: string) {
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

	playersOnline(url: string, token: string, page?: number, count?: number) {
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

	playerOnlineCount(url: string, token: string) {
		return fetch(`${url}/api/v1/players/online/count`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	playerLookup(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	playerVariables(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}/variables`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	playerVariable(url: string, token: string, player: string, variable: string) {
		return fetch(`${url}/api/v1/players/${player}/variables/${variable}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	getPlayerVariableValue(url: string, token: string, player: string, variable: string) {
		return fetch(`${url}/api/v1/players/${player}/variables/${variable}/value`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	setPlayerVariableValue(url: string, token: string, player: string, variable: string, value: string) {
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

	getPlayerItems(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}/items`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	getPlayerInventoryItems(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}/items/inventory`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	getPlayerBankItems(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}/items/bank`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	getPlayerBag(url: string, token: string, player: string, bag: string) {
		return fetch(`${url}/api/v1/players/bag/${bag}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	givePlayerItem(url: string, token: string, player: string, item: string, amount: number, bankoverflow?: boolean) {
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

	takePlayerItem(url: string, token: string, player: string, item: string, amount: number) {
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

	getPlayerSpells(url: string, token: string, player: string) {
		return fetch(`${url}/api/v1/players/${player}/spells`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Authorization': `Bearer ${token}`
			}
		})
	}

	givePlayerSpell(url: string, token: string, player: string, spell: string) {
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

	takePlayerSpell(url: string, token: string, player: string, spell: string) {
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
}