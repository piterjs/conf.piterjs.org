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
}
const PhotoTOIO = type(
	{
		alt: string,
		src: string,
	},
	'PhotoTOIO',
);
//#endregion
//#region Article
export interface ArticleTO {
	description: Option<string>;
	id: string;
	name: string;
}
const ArticleTOIO = type(
	{
		description: createOptionFromNullable(string),
		id: string,
		name: string,
	},
	'ArticleTOIO',
);
//#endregion
//#region EventArticle
export interface EventArticleTO {
	articleId: string;
	speakerId: Option<string>;
	time: string;
}
const EventArticleTOIO = type(
	{
		articleId: string,
		speakerId: createOptionFromNullable(string, 'OptionSpeakerId'),
		time: string,
	},
	'ArticleTOIO',
);
//#endregion
//#region EventLocation
export interface EventLocationTO {
	address: string;
	city: string;
	link: string;
}
const EventLocationTOIO = type(
	{
		address: string,
		city: string,
		link: string,
	},
	'LocationTOIO',
);
//#endregion
//#region Event
export interface EventTO {
	articles: EventArticleTO[];
	about: string[];
	date: string;
	location: EventLocationTO;
	photos: PhotoTO[];
}
const EventTOIO = type(
	{
		about: array(string, 'about'),
		articles: array(EventArticleTOIO, 'Articles'),
		date: string,
		location: EventLocationTOIO,
		photos: array(PhotoTOIO, 'Photos'),
	},
	'EventTOIO',
);
//#endregion
//#region SocialType
export type SocialTypeTO = 'FACEBOOK' | 'GOOGLE' | 'GITHUB' | 'LINKED_IN' | 'TELEGRAM' | 'TWITTER' | 'VK' | 'OK';
const SocialTypeTOIO = union(
	[
		literal('FACEBOOK'),
		literal('GOOGLE'),
		literal('GITHUB'),
		literal('LINKED_IN'),
		literal('TELEGRAM'),
		literal('TWITTER'),
		literal('VK'),
		literal('OK'),
	],
	'SocialTypeTOIO',
);
//#endregion
//#region Social
export interface SocialTO {
	link: string;
	name: SocialTypeTO;
}
const SocialTOIO = type(
	{
		link: string,
		name: SocialTypeTOIO,
	},
	'SocialTOIO',
);
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
const SpeakerTOIO = type(
	{
		about: string,
		firstName: string,
		id: string,
		lastName: string,
		photo: PhotoTOIO,
		socials: array(SocialTOIO, 'Socials'),
	},
	'SpeakerTOIO',
);
//#endregion
//#region Partner
export interface PartnerTO {
	image: string;
	link: string;
	name: string;
}
const PartnerTOIO = type(
	{
		image: string,
		link: string,
		name: string,
	},
	'PartnerTO',
);
//#endregion
//#region PiterJS
export interface PiterJSTO {
	socials: SocialTO[];
}
const PiterJSTOIO = type(
	{
		socials: array(SocialTOIO),
	},
	'PiterJSTOIO',
);
//#endregion
//#region MapCoords
export interface MapCoordsTO {
	lat: number;
	lng: number;
}

const MapCoordsTOIO = type(
	{
		lat: number,
		lng: number,
	},
	'MapCoordsTOIO',
);
//#endregion
//#region Map
export interface MapTO {
	key: string;
	coords: MapCoordsTO;
	zoom: number;
}
const MapTOIO = type(
	{
		coords: MapCoordsTOIO,
		key: string,
		zoom: number,
	},
	'MapTOIO',
);
//#endregion
//#region Meta
export interface MetaTO {
	title: string;
	description: string;
}
const MetaTOIO = type(
	{
		description: string,
		title: string,
	},
	'MetaTOIO',
);
//#endregion
//#region Helmet
export interface HelmetTO {
	[name: string]: MetaTO;
}
const HelmetTOIO = type(
	{
		landing: MetaTOIO,
	},
	'HelmetTOIO',
);
//#endregion

//#region Data
export interface DataTO {
	articles: ArticleTO[];
	event: EventTO;
	map: MapTO;
	partners: PartnerTO[];
	piterjs: PiterJSTO;
	speakers: SpeakerTO[];
	helmet: HelmetTO;
}
const DataTOIO = type(
	{
		articles: array(ArticleTOIO, 'Articles'),
		event: EventTOIO,
		helmet: HelmetTOIO,
		map: MapTOIO,
		partners: array(PartnerTOIO, 'partners'),
		piterjs: PiterJSTOIO,
		speakers: array(SpeakerTOIO, 'Speakers'),
	},
	'DataTOIO',
);
//#endregion

export const data$ = ajax('/data.json').pipe(
	map(value => {
		if (value.status >= 400) {
			return failure<Error, DataTO>(new Error('Request Error'));
		}
		return fromEither(
			DataTOIO.decode(value.response).mapLeft(() => {
				// tslint:disable-next-line
				console.log('##################################\n', PathReporter.report(DataTOIO.decode(value)));
				return new Error('Validation error');
			}),
		);
	}),
	catchError(error => {
		// tslint:disable-next-line
		console.log('##################################\n', 'Data fetch error');
		return of(failure<Error, DataTO>(error));
	}),
);
