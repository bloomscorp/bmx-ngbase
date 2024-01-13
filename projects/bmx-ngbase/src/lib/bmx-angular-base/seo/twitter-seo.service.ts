import {Injectable} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {TwitterImageSeo} from "./interface/twitter-image-seo";
import {TwitterSeo} from "./interface/twitter-seo";

@Injectable({
	providedIn: 'root'
})
export class TwitterSeoService {

	constructor(
		private _meta: Meta
	) {
	}

	private _setCard(contentType: string): void {
		this._meta.updateTag({
			property: 'twitter:card',
			content: contentType
		});
	}

	private _setSite(): void {
		this._meta.updateTag({
			property: 'twitter:site',
			content: ''
		});
	}

	private _setTitle(title: string): void {
		this._meta.updateTag({
			property: 'twitter:title',
			content: title
		});
	}

	private _setDescription(description: string): void {
		this._meta.updateTag({
			property: 'twitter:description',
			content: description
		});
	}

	private _setImageUrl(url: string): void {
		this._meta.updateTag({
			property: 'twitter:image',
			content: url
		});
	}

	private _setImageAlt(alt: string): void {
		this._meta.updateTag({
			property: 'twitter:image:alt',
			content: alt
		});
	}

	private _setImage(image: TwitterImageSeo): void {
		this._setImageUrl(image.url);
		this._setImageAlt(image.alt);
	}

	public set(data: TwitterSeo): void {
		this._setCard(data.cardType);
		this._setSite();
		this._setTitle(data.title);
		this._setDescription(data.description);
		this._setImage(data.image);
	}
}
