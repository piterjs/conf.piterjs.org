import {FC, Fragment, memo} from 'react';
import * as React from 'react';
import {Header} from '../header/header/header.component';
import {Promo} from '../promo/promo.component';
import {Schedule} from '../schedule/schedule/schedule.component';
import {Sponsors} from '../sponsors/sponsors/sponsors.component';
import {Footer} from '../footer/footer.component';
import {data} from '../../view-models/data.view-model';
import {About} from '../about/about.component';
import {Become} from '../become/become.component';

export const Landing: FC = memo(() =>
	data
		.map(data => (
			<Fragment>
				<Header data={data} />
				<Promo data={data} />
				<About data={data} />
				<Schedule data={data} />
				<Become who={'Speaker'} buttonText={'Submit a Talk'} />
				<Sponsors data={data} />
				<Become who={'Sponsor'} buttonText={'Contact Us for Details'} />
				<Footer />
			</Fragment>
		))
		.getOrElse(<Fragment>Loading...</Fragment>),
);
