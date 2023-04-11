/**
 * Represents all information auth for skins.
 *
 */
export interface CredentialsAuth {
	/** The client secret for auth user.*/
	readonly client_secret: string | undefined;

	/** The client id for request.*/
	readonly client_id: string | undefined;

	/** The grant type id for request.*/
	readonly grant_type: string | undefined;

	/** The name of the skin.*/
	readonly skin: string | undefined;

	/** The scope of the skin.*/
	readonly scope: string | undefined;

	/** The ip of the user.*/
	readonly ip: string | undefined;

	/** The name of the browser where I log in.*/
	readonly agent: string | undefined;
}
