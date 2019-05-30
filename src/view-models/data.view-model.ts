import {string, type} from 'io-ts';
import {Either, left} from 'fp-ts/lib/Either';
import {constant} from 'fp-ts/lib/function';

export interface LocationIO {
	address: string;
	city: string;
	link: string;
}
const LocationIO = type(
	{
		address: string,
		city: string,
		link: string,
	},
	'LocationIO',
);

export interface HeaderIO {
	location: LocationIO;
}
const HeaderIO = type({location: LocationIO}, 'HeaderIO');

export interface DataIO {
	header: HeaderIO;
}
const DataIO = type({header: HeaderIO}, 'DataIO');

export let data: Either<Error, DataIO> = left(new Error('No data yet'));
fetch('/data.json')
	.then(response => response.json())
	.then(value => (data = DataIO.decode(value).mapLeft(constant(new Error('Validation error')))))
	.catch(() => (data = left(new Error('Data fetch error'))));
