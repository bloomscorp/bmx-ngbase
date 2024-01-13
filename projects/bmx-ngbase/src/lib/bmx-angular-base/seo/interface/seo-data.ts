import {FacebookSeo} from "./facebook-seo";
import {TwitterSeo} from "./twitter-seo";
import {SeoTags} from "./seo-tags";

export interface SeoData {
	title: string;
	tags: SeoTags;
	facebook: FacebookSeo;
	twitter: TwitterSeo;
}
