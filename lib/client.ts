import { Admin } from './endpoints/admin.js'
import { Authentification } from './endpoints/authentification.js'
import { Chat } from './endpoints/chat.js'
import { GameObjects } from './endpoints/gameobjects.js'
import { Logs } from './endpoints/logs.js'
import { Players } from './endpoints/players.js'
import { Server } from './endpoints/server.js'
import { Users } from './endpoints/users.js'
import { Variables } from './endpoints/variables.js'

/**
 * @class Client
 * @description The main class of the API
 * @link API documentation: https://docs.freemmorpgmaker.com/en-US/api/v1/
 * @param {string} url - The url of the API server you're trying to connect to.
 * @param {number | string} port - The port of the API server.
 * @param {string} token The token getted from the API server.
 * @param {string} refreshToken The refresh token getted from the API server.
 * @return {Client} The Client objets, with all the endpoints.
 * @example 
 */
export class Client {
	private _url: string
	private _token: string
	private _refreshToken: string
	Admin: Admin
	Auth: Authentification
	Chat: Chat
	GameObjects: GameObjects
	Logs: Logs
	Players: Players
	Server: Server
	Users: Users
	Variables: Variables

	constructor(url: string, port: number | string, token: string, refreshToken: string, tokenCooldown?: number) {
		this._url = `${url}:${port}`
		this._token = token
		this._refreshToken = refreshToken
		this.Admin = new Admin(this._url, this._token)
		this.Auth = new Authentification(this._url, this._token, this._refreshToken)
		this.Chat = new Chat(this._url, this._token)
		this.GameObjects = new GameObjects(this._url, this._token)
		this.Logs = new Logs(this._url, this._token)
		this.Players = new Players(this._url, this._token)
		this.Server = new Server(this._url, this._token)
		this.Users = new Users(this._url, this._token)
		this.Variables = new Variables(this._url, this._token)

		setInterval(async() => {
			console.log('Refreshing token...')
			const res = await this.Auth.refreshToken()
			this._token = res.access_token
			this._refreshToken = res.refresh_token
			this.Admin = new Admin(this._url, this._token)
			this.Auth = new Authentification(this._url, this._token, this._refreshToken)
			this.Chat = new Chat(this._url, this._token)
			this.GameObjects = new GameObjects(this._url, this._token)
			this.Logs = new Logs(this._url, this._token)
			this.Players = new Players(this._url, this._token)
			this.Server = new Server(this._url, this._token)
			this.Users = new Users(this._url, this._token)
			this.Variables = new Variables(this._url, this._token)
		}, tokenCooldown ? tokenCooldown : 840000)
	}
}

/**
 * It takes in a url, port, username, and password and returns a json object containing the access token.
 * @param {string} url - The url of the API server you're trying to connect to.
 * @param {number | string} port - The port of the API server.
 * @param {string} username - The username of the API user.
 * @param {string} password - The password of the API user.
 * @returns The JSON token is being returned.
 */
export async function initToken(url: string, port: number | string, username: string, password: string) {
	const res = await fetch(`${url}:${port}/api/oauth/token`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			grant_type: 'password',
			username: username,
			password: password,
		}),
	})
	return await res.json()
}