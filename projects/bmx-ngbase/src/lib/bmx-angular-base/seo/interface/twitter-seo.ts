import {TwitterCardType} from "../model/twitter-card-type";
import {TwitterImageSeo} from "./twitter-image-seo";

export interface TwitterSeo {
	title: string;
	description: string;
	cardType: TwitterCardType;
	image: TwitterImageSeo;
}
