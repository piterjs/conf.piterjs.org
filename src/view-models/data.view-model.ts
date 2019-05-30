import {string, type} from 'io-ts';
import {Either, left} from 'fp-ts/lib/Either';

export interface DataTO {
	event: {
		date: string;
		location: {
			address: string;
			city: string;
			link: string;
		};
	};
}
const DataTOIO = type({
	event: type({
		date: string,
		location: type({
			address: string,
			city: string,
			link: string,
		}),
	}),
});

export let data: Either<Error, DataTO> = left(new Error('No data yet'));
fetch('/data.json')
	.then(response => response.json())
	.then(
		value =>
			(data = DataTOIO.decode(value).mapLeft(errors => {
				// tslint:disable-next-line
				console.log('##################################\n', errors);
				return new Error('Validation error');
			})),
	)
	.catch(() => {
		// tslint:disable-next-line
		console.log('##################################\n', 'Data fetch error');
		data = left(new Error('Data fetch error'));
	});
