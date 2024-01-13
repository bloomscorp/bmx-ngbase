import {Injectable} from '@angular/core';
import {Meta} from "@angular/platform-browser";
import {FacebookImageSeo} from "./interface/facebook-image-seo";
import {FacebookSeo} from "./interface/facebook-seo";

@Injectable({
	providedIn: 'root'
})
export class FacebookSeoService {

	constructor(
		private _meta: Meta
	) {
	}

	private _setTitle(title: string): void {
		this._meta.updateTag({
			property: 'og:title',
			content: title
		});
	}

	private _setType(type: string): void {
		this._meta.updateTag({
			property: 'og:type',
			content: type
		});
	}

	private _setDescription(description: string): void {
		this._meta.updateTag({
			property: 'og:description',
			content: description
		});
	}

	private _setImageUrl(url: string): void {
		this._meta.updateTag({
			property: 'og:image',
			content: url
		});
	}

	private _setImageType(type: string): void {
		this._meta.updateTag({
			property: 'og:image:type',
			content: type
		});
	}

	private _setImageWidth(width: string): void {
		this._meta.updateTag({
			property: 'og:image:width',
			content: width
		});
	}

	private _setImageHeight(height: string): void {
		this._meta.updateTag({
			property: 'og:image:height',
			content: height
		});
	}

	private _setImageAlt(alt: string): void {
		this._meta.updateTag({
			property: 'og:image:alt',
			content: alt
		});
	}

	private _setImage(image: FacebookImageSeo): void {
		this._setImageUrl(image.url);
		this._setImageType(image.type);
		this._setImageWidth(image.width);
		this._setImageHeight(image.height);
		this._setImageAlt(image.alt);
	}

	private _setUrl(url: string): void {
		this._meta.updateTag({
			property: 'og:url',
			content: url
		});
	}

	private _setSiteName(): void {
		this._meta.updateTag({
			property: 'og:site_name',
			content: 'Delta Faucet Company India Pvt. Ltd.'
		});
	}

	public set(data: FacebookSeo): void {
		this._setTitle(data.title);
		this._setType(data.type);
		this._setDescription(data.description);
		this._setImage(data.image);
		this._setUrl(data.url);
		this._setSiteName();
	}
}
