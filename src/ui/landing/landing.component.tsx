import {Fragment, memo} from 'react';
import * as React from 'react';
import {Header} from '../header/header/header.component';
import {Promo} from '../promo/promo.component';
import {Schedule} from '../schedule/schedule/schedule.component';
import {Sponsors} from '../sponsors/sponsors/sponsors.component';
import {Footer} from '../footer/footer.component';
import {About} from '../about/about.component';
import {Become} from '../become/become.component';
import {DataTO} from '../../view-models/data.view-model';
import {RemoteData} from '@devexperts/remote-data-ts';
import {Speakers} from '../speakers/speakers.component';

export const Landing = memo<{data: RemoteData<Error, DataTO>}>(({data}) =>
	data.fold(
		<Fragment>Loading...</Fragment>,
		<Fragment>Loading...</Fragment>,
		error => (
			<Fragment>
				Something went wrong
				<br />
				{error.message}
			</Fragment>
		),
		data => (
			<Fragment>
				<Header data={data} />
				<Promo data={data} />
				<About data={data} />
				<Speakers data={data} />
				<Become
					link={{href: 'https://forms.gle/Y7TM5VbC7RkNsGkz8', target: '_blank'}}
					who={'Speaker'}
					buttonText={'Submit a Talk'}
				/>
				<Schedule data={data} />
				<Become
					link={{href: 'mailto:partner@piterjs.dev', target: '_self'}}
					who={'Sponsor'}
					buttonText={'Contact Us for Details'}
				/>
				<Sponsors data={data} />
				<Footer data={data} />
			</Fragment>
		),
	),
);
