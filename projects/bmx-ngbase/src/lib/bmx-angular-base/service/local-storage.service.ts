import {Inject, Injectable} from '@angular/core';
import {isEmptyString} from "bmx-pastebox";

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	private readonly _KEY_AUTH_SUCCESS_ROUTE: string = 'dhsnKJHIyhkbYRTFVjkh';

	private rootUrl: string = '/';

	constructor(
		@Inject('ROOT_URL') _rootUrl: string
	) {
		if (_rootUrl)
			this.rootUrl = _rootUrl;
	}

	public store(key: string, value: string): void {
		localStorage.setItem(key, value);
	}

	public retrieve(key: string): string {
		const value: string | null = localStorage.getItem(key);
		return (value === null) ? '' : value;
	}

	public hasKey(key: string): boolean {
		return this.retrieve(key) !== null;
	}

	public clear(): void {
		localStorage.clear();
	}

	public removeItems(keys: string[]): void {
		keys.forEach((key: string, index: number) => localStorage.removeItem(key));
	}

	public storeOnAuthSuccessRoute(route: string): void {
		this.store(this._KEY_AUTH_SUCCESS_ROUTE, route);
	}

	public retrieveOnAuthSuccessRoute(): string {
		const route: string = this.retrieve(this._KEY_AUTH_SUCCESS_ROUTE);
		return isEmptyString(route) ? this.rootUrl : route;
	}
}
