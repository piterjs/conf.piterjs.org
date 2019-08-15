import {Fragment, memo} from 'react';
import * as React from 'react';
import Helmet from 'react-helmet';
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
import {Map} from '../map/map.component';

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
				<Helmet title={data.helmet.landing.title}>
					<meta name='description' content={data.helmet.landing.description} />
					<html lang='ru' />
				</Helmet>
				<Header />
				<Promo />
				<About />
				<Speakers />
				<Become link={{href: data.links.signUpLink, target: '_blank', rel: 'noopener noreferrer'}} buttonText={'Подать доклад'} />
				<Schedule data={data} />
				<Partners data={data} />
				<Become link={{href: `mailto:${data.links.mailTo}`, target: '_self'}} buttonText={'Стать партнером'} />
				<Map data={data} />
				<Footer data={data} />
			</Fragment>
		),
	),
);
