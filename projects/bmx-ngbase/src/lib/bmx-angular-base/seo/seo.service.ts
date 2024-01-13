import {Injectable} from '@angular/core';
import {Meta, MetaDefinition, Title} from "@angular/platform-browser";
import {FacebookSeoService} from "./facebook-seo.service";
import {TwitterSeoService} from "./twitter-seo.service";
import {SeoTags} from "./interface/seo-tags";
import {SeoData} from "./interface/seo-data";

@Injectable({
	providedIn: 'root'
})
export class SeoService {

	constructor(
		private _meta: Meta,
		private _title: Title,
		private _facebook: FacebookSeoService,
		private _twitter: TwitterSeoService
	) {
	}

	private _setTitle(title: string): void {
		this._title.setTitle(title);
	}

	private _setDescription(description: MetaDefinition): void {
		this._meta.updateTag(description);
	}

	private _setTags(tags: SeoTags): void {
		this._setDescription(tags.description);
	}

	public set(data: SeoData): void {
		this._setTitle(data.title);
		this._setTags(data.tags);
		this._facebook.set(data.facebook);
		this._twitter.set(data.twitter);
	}
}
