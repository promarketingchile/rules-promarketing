import { $fetch } from 'ohmyfetch';


/**
 * Instance of library fetch.
 *
 * @returns Instance fetch.
 */
export default $fetch.create({
	baseURL: '',
	// TODO: Crear useAuthStore y verificar si el usuario esta auth y agregar
	// token a la  options.headers
	// ejemplo: https://github.com/unjs/ohmyfetch/issues/102
});
