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
 * @param {string} url The url of the API
 * @param {string} port The port of the API
 * @param {string} username The username of the API
 * @param {string} password The password of the API
 * @return {Client} The client
 */
export class Client {
	private _url: string
	private _username: string
	private _password: string
	private _token: string
	public Admin: Admin
	public Auth: Authentification
	public Chat: Chat
	public GameObjects: GameObjects
	public Logs: Logs
	public Players: Players
	public Server: Server
	public Users: Users
	public Variables: Variables
	
	constructor(url: string, port: string, username: string, password: string, tokenCooldown?: number) {
		// Constructor things
		this._url = `${url}:${port}`
		this._username = username
		this._password = password
		this._token = this.initToken() as string

		// Endpoints Classes things
		this.Admin = new Admin(this._url, this._token)
		this.Auth = new Authentification(this._url, this._token)
		this.Chat = new Chat(this._url, this._token)
		this.GameObjects = new GameObjects(this._url, this._token)
		this.Logs = new Logs(this._url, this._token)
		this.Players = new Players(this._url, this._token)
		this.Server = new Server(this._url, this._token)
		this.Users = new Users(this._url, this._token)
		this.Variables = new Variables(this._url, this._token)

		// we want to setInterval to refresh the token every 5 minutes, = 300000 ms
		setInterval(() => {
			this._token = this.Auth.refreshToken() as unknown as string
			
			// we re-instance the classes to update the token
			this.Admin = new Admin(this._url, this._token)
			this.Auth = new Authentification(this._url, this._token)
			this.Chat = new Chat(this._url, this._token)
			this.GameObjects = new GameObjects(this._url, this._token)
			this.Logs = new Logs(this._url, this._token)
			this.Players = new Players(this._url, this._token)
			this.Server = new Server(this._url, this._token)
			this.Users = new Users(this._url, this._token)
			this.Variables = new Variables(this._url, this._token)
		}, tokenCooldown || 300000)

	}
	
	private initToken(): unknown {
		return this.Auth.getToken(this._username, this._password).then(response => {
			return response.json()
		}).then(json => {
			return json.access_token
		})
	}
	
}