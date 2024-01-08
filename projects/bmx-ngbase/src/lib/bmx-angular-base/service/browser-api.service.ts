import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import {DOCUMENT, isPlatformBrowser, isPlatformServer} from "@angular/common";

@Injectable({
	providedIn: 'root'
})
export class BrowserAPIService {

	constructor(
		@Inject(PLATFORM_ID) private _platformId: Object,
		@Inject(DOCUMENT) private _document: Document,
	) {
	}

	public document(): Document {
		return this._document;
	}

	public window(): Window | null {
		return this._document.defaultView;
	}

	public location(): Location {
		return this._document.location;
	}

	public createElement(tag: string): HTMLElement {
		return this._document.createElement(tag);
	}

	public isBrowser(): boolean {
		return isPlatformBrowser(this._platformId);
	}

	public isServer(): boolean {
		return isPlatformServer(this._platformId);
	}
}
