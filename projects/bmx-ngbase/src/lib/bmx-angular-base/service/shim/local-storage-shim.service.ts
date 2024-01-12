import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class LocalStorageShimService {

	constructor() {
	}

	public store(key: string, value: string): void {
	}

	public retrieve(key: string): string {
		return '';
	}

	public hasKey(key: string): boolean {
		return false;
	}

	public clear(): void {
	}

	public removeItems(keys: string[]): void {
	}

	public storeOnAuthSuccessRoute(route: string): void {
	}

	public retrieveOnAuthSuccessRoute(): string {
		return '';
	}
}
