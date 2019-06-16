import {array, literal, string, type, union} from 'io-ts';
import {Either, left} from 'fp-ts/lib/Either';
import {Option} from 'fp-ts/lib/Option';
import {createOptionFromNullable} from 'io-ts-types';
import {PathReporter} from 'io-ts/lib/PathReporter';

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
	photos: Option<PhotoTO[]>;
}
const EventTOIO = type(
	{
		about: array(string, 'about'),
		articles: array(EventArticleTOIO, 'Articles'),
		date: string,
		location: EventLocationTOIO,
		photos: createOptionFromNullable(array(PhotoTOIO, 'Photos'), 'Photos'),
	},
	'EventTOIO',
);
//#endregion
//#region SpeakerSocialType
export type SpeakerSocialTypeTO = 'TWITTER' | 'GITHUB' | 'VK' | 'FACEBOOK';
const SpeakerSocialTypeTOIO = union([literal('TWITTER'), literal('GITHUB'), literal('VK'), literal('FACEBOOK')], 'SpeakerSocialTypeTOIO');
//#endregion
//#region SpeakerSocial
export interface SpeakerSocialTO {
	link: string;
	name: SpeakerSocialTypeTO;
}
const SpeakerSocialTOIO = type(
	{
		link: string,
		name: SpeakerSocialTypeTOIO,
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
	photo: Option<PhotoTO>;
	socials: SpeakerSocialTO[];
}
const SpeakerTOIO = type(
	{
		about: string,
		firstName: string,
		id: string,
		lastName: string,
		photo: createOptionFromNullable(PhotoTOIO, 'Photo'),
		socials: array(SpeakerSocialTOIO, 'Socials'),
	},
	'SpeakerTOIO',
);
//#endregion
//#region SponsorLevel
export type SponsorLevelTO = 'BRONZE' | 'SILVER' | 'GOLD' | 'PLATINUM';
const SponsorLevelTOIO = union([literal('BRONZE'), literal('SILVER'), literal('GOLD'), literal('PLATINUM')], 'SponsorLevelTOIO');
//#endregion
//#region Sponsor
export interface SponsorTO {
	image: string;
	level: SponsorLevelTO;
	link: string;
	name: string;
}
const SponsorTOIO = type(
	{
		image: string,
		level: SponsorLevelTOIO,
		link: string,
		name: string,
	},
	'SponsorTO',
);
//#endregion

//#region Data
export interface DataTO {
	articles: ArticleTO[];
	event: EventTO;
	speakers: SpeakerTO[];
	sponsors: SponsorTO[];
}
const DataTOIO = type(
	{
		articles: array(ArticleTOIO, 'Articles'),
		event: EventTOIO,
		speakers: array(SpeakerTOIO, 'Speakers'),
		sponsors: array(SponsorTOIO, 'sponsors'),
	},
	'DataTOIO',
);
//#endregion

export let data: Either<Error, DataTO> = left(new Error('No data yet'));
fetch('/data.json')
	.then(response => response.json())
	.then(
		value =>
			(data = DataTOIO.decode(value).mapLeft(() => {
				// tslint:disable-next-line
				console.log('##################################\n', PathReporter.report(DataTOIO.decode(value)));
				return new Error('Validation error');
			})),
	)
	.catch(() => {
		// tslint:disable-next-line
		console.log('##################################\n', 'Data fetch error');
		data = left(new Error('Data fetch error'));
	});
