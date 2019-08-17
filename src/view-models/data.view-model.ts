import {array, literal, string, type, union, number} from 'io-ts';
import {Option} from 'fp-ts/lib/Option';
import {createOptionFromNullable} from 'io-ts-types';
import {PathReporter} from 'io-ts/lib/PathReporter';
import {of} from 'rxjs';
import {failure, fromEither} from '@devexperts/remote-data-ts';
import {ajax} from 'rxjs/ajax';
import {catchError, map} from 'rxjs/operators';

//#region Photo
export interface PhotoTO {
	alt: string;
	src: string;
	srcLarge: string;
}
//#endregion
//#region Article
export interface ArticleTO {
	description: Option<string>;
	id: string;
	name: string;
}
//#endregion
//#region EventArticle
export interface EventArticleTO {
	articleId: string;
	speakerId: Option<string>;
	time: string;
}
//#endregion
//#region EventLocation
export interface EventLocationTO {
	address: string;
	city: string;
	link: string;
}
//#endregion
//#region Event
export interface EventTO {
	articles: EventArticleTO[];
	about: string[];
	date: string;
	location: EventLocationTO;
	photos: PhotoTO[];
}
//#endregion
//#region SocialType
export type SocialTypeTO = 'FACEBOOK' | 'GOOGLE' | 'GITHUB' | 'LINKED_IN' | 'TELEGRAM' | 'TWITTER' | 'VK' | 'OK';
//#endregion
//#region Social
export interface SocialTO {
	link: string;
	name: SocialTypeTO;
}
//#endregion
//#region Speaker
export interface SpeakerTO {
	about: string;
	firstName: string;
	id: string;
	lastName: string;
	photo: PhotoTO;
	socials: SocialTO[];
}
//#endregion
//#region Partner
export interface PartnerTO {
	image: string;
	link: string;
	name: string;
}
//#endregion
//#region PiterJS
export interface PiterJSTO {
	socials: SocialTO[];
}
//#endregion
//#region MapCoords
export interface MapCoordsTO {
	lat: number;
	lng: number;
}

//#endregion
//#region Map
export interface MapTO {
	key: string;
	coords: MapCoordsTO;
	zoom: number;
}
//#endregion
//#region Meta
export interface MetaTO {
	title: string;
	description: string;
}
//#endregion
//#region Helmet
export interface HelmetTO {
	landing: MetaTO;
}
//#endregion
//#region Helmet
export interface LinksTO {
	signUpLink: string;
	mailTo: string;
}
//#endregion

//#region Data
export interface DataTO {
	articles: ArticleTO[];
	event: EventTO;
	links: LinksTO;
	map: MapTO;
	partners: PartnerTO[];
	piterjs: PiterJSTO;
	speakers: SpeakerTO[];
	helmet: HelmetTO;
}
//#endregion
