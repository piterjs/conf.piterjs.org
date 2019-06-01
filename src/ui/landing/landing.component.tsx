import {FC, Fragment, memo} from 'react';
import * as React from 'react';
import {Header} from '../header/header/header.component';
import {Promo} from '../promo/promo.component';
import {Schedule} from '../schedule/schedule.component';
import {Speakers} from '../speakers/speakers.comonent';
import {Sponsors} from '../sponsors/sponsors.component';
import {Footer} from '../footer/footer.component';
import {data} from '../../view-models/data.view-model';
import {Tickets} from '../tickets/tickets.component';

export const Landing: FC = memo(() =>
	data
		.map(data => (
			<Fragment>
				<Header data={data} />
				<Promo data={data} />
				<Tickets data={data} />
				<Schedule />
				<Speakers />
				<Sponsors />
				<Footer />
			</Fragment>
		))
		.getOrElse(<Fragment>Loading...</Fragment>),
);
