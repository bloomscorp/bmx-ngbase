import {Inject, Injectable} from '@angular/core';
import {isEmptyString} from "bmx-pastebox";
import {Constant} from "../constant";

@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	private readonly authSuccessRouteKey: string = Constant.AUTH_SUCCESS_ROUTE_KEY;
	private readonly rootUrl: string = Constant.ROOT_URL;

	constructor(
		@Inject('ROOT_URL') _rootUrl: string,
		@Inject('AUTH_SUCCESS_ROUTE_KEY') _authSuccessRouteKey: string
	) {
		if (_rootUrl)
			this.rootUrl = _rootUrl;
		if (_authSuccessRouteKey)
			this.authSuccessRouteKey = _authSuccessRouteKey;
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
		this.store(this.authSuccessRouteKey, route);
	}

	public retrieveOnAuthSuccessRoute(): string {
		const route: string = this.retrieve(this.authSuccessRouteKey);
		return isEmptyString(route) ? this.rootUrl : route;
	}
}
