import {array, literal, string, type, union} from 'io-ts';
import {Either, left} from 'fp-ts/lib/Either';
import {Option} from 'fp-ts/lib/Option';
import {createOptionFromNullable} from 'io-ts-types';
import {PathReporter} from 'io-ts/lib/PathReporter';

export interface DataTO {
	articles: {
		description: Option<string>;
		id: string;
		name: string;
	}[];
	event: {
		articles: {
			articleId: string;
			speakerId: Option<string>;
			time: string;
		}[];
		about: string;
		date: string;
		location: {
			address: string;
			city: string;
			link: string;
		};
	};
	speakers: {
		about: string;
		firstName: string;
		id: string;
		lastName: string;
		photo: Option<{
			alt: string;
			src: string;
		}>;
		socials: {
			link: string;
			name: 'TWITTER' | 'GITHUB' | 'VK' | 'FACEBOOK';
		}[];
	}[];
}
const DataTOIO = type({
	articles: array(
		type(
			{
				description: createOptionFromNullable(string, 'Description'),
				id: string,
				name: string,
			},
			'Article',
		),
		'Articles',
	),
	event: type(
		{
			about: string,
			articles: array(
				type(
					{
						articleId: string,
						speakerId: createOptionFromNullable(string, 'OptionSpeakerId'),
						time: string,
					},
					'Article',
				),
				'Articles',
			),
			date: string,
			location: type(
				{
					address: string,
					city: string,
					link: string,
				},
				'Location',
			),
		},
		'Event',
	),
	speakers: array(
		type(
			{
				about: string,
				firstName: string,
				id: string,
				lastName: string,
				photo: createOptionFromNullable(
					type(
						{
							alt: string,
							src: string,
						},
						'OptionPhoto',
					),
					'Photo',
				),
				socials: array(
					type(
						{
							link: string,
							name: union([literal('TWITTER'), literal('GITHUB'), literal('VK'), literal('FACEBOOK')], 'Name'),
						},
						'Social',
					),
					'Socials',
				),
			},
			'Speaker',
		),
		'Speakers',
	),
});

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
