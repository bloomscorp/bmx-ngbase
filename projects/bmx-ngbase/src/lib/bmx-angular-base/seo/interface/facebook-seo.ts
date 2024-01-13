import {FacebookImageSeo} from "./facebook-image-seo";

export interface FacebookSeo {
	title: string;
	type: string;
	description: string;
	image: FacebookImageSeo;
	url: string;
}
