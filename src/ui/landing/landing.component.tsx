import {Fragment, memo} from 'react';
import * as React from 'react';
import {Header} from '../header/header/header.component';
import {Promo} from '../promo/promo.component';
import {Schedule} from '../schedule/schedule/schedule.component';
import {Partners} from '../partners/partners/partners.component';
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
					buttonText={'Подать доклад'}
				/>
				<Schedule data={data} />
				<Partners data={data} />
				<Become
					link={{href: 'mailto:partner@piterjs.dev', target: '_self'}}
					buttonText={'Стать партнером'}
				/>
				<Footer data={data} />
			</Fragment>
		),
	),
);
