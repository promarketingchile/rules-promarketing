import { CredentialsAuth } from '@/models/credentials-auth';
import { HttpClient } from './http';

const pathProxy = '/api-dev/';
const apiRest = 'api';

/**
 * Services users.
 */
export class UserService extends HttpClient {
	/**
	 * Get values for send in the body of signIn.
	 *
	 * @returns The credentials of skins.
	 */
	get credentials(): CredentialsAuth {
		return {
			client_secret: process.env.clientSecret,
			client_id: process.env.CLIENT_ID,
			grant_type: process.env.GRANT_TYPE,
			skin: process.env.SKIN,
			scope: process.env.SCOPE,
			ip: '127.0.0.1',
			agent: 'Safari/537.36',
		};
	}

	/**
	 * Signs the user in to the system.
	 *
	 * @param username The username for the user.
	 * @param password The entered password for the user.
	 * @returns The player and access/refresh tokens... .
	 */
	signIn = (username: string, password: string): Promise<[]> => {
		return this.post(`/${pathProxy}/${apiRest}/auth/loginExternalNew`, {
			body: { ...this.credentials, username, password },
		});
	};

	/**
	 * Validate token authentication.
	 *
	 * @param token The token for the authentication.
	 * @returns These returns values unknown.
	 */
	authToken = (token: string): Promise<[]> => {
		return this.post(
			`${pathProxy}/${apiRest}/session/init?secret_client_number=${this.credentials.client_id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			},
		);
	};

	/**
	 * Exit the user in to the system.
	 *
	 * @returns These returns values unknown.
	 */
	logout = (): Promise<[]> => {
		return this.post(`${pathProxy}/${apiRest}/logout`);
	};

	/**
	 * Registers a new user in the system.
	 *
	 * @param data The data for new user's.
	 * @returns These returns values unknown.
	 */
	register = (data: object): Promise<[]> => {
		return this.post(`${pathProxy}/${apiRest}/player/register`, {
			body: data,
		});
	};

	/**
	 * Update password of user's in the system.
	 *
	 * @param data The new password user's.
	 * @returns These returns values unknown.
	 */
	changePassword = (data: object): Promise<[]> => {
		return this.post(`${pathProxy}/${apiRest}/player/password/recovery`, {
			body: data,
		});
	};

	/**
	 * Update password of user's in the system.
	 *
	 * @returns These returns values unknown.
	 */
	sessionTime = (): Promise<[]> => {
		return this.get(`${pathProxy}/${apiRest}/session/time`);
	};
}
