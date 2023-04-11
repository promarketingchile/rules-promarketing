import { MethodsHttp } from '@/models/enums';
import apiFetch from './instance';

/**
 * Make methods http client.
 */
export class HttpClient {
	/**
	 * Http GET action of fetch.
	 *
	 * @param url The endpoint URL.
	 * @param options The HTTP options to send with the request.
	 * @returns Promise http get type action.
	 */
	get = (url: string, options?: object): Promise<[]> => {
		return apiFetch(url, {
			...options,
			method: MethodsHttp.GET,
		});
	};

	/**
	 * Http POST action of fetch.
	 *
	 * @param url The endpoint URL.
	 * @param options The HTTP options to send with the request.
	 * @returns Promise http get type action.
	 */
	post = (url: string, options?: object): Promise<[]> => {
		return apiFetch(url, {
			...options,
			method: MethodsHttp.POST,
		});
	};
}
