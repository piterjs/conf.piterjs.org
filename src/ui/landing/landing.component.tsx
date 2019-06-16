import {FC, Fragment, memo} from 'react';
import * as React from 'react';
import {Header} from '../header/header/header.component';
import {Promo} from '../promo/promo.component';
import {Schedule} from '../schedule/schedule/schedule.component';
import {Sponsors} from '../sponsors/sponsors.component';
import {Footer} from '../footer/footer.component';
import {data} from '../../view-models/data.view-model';
import {About} from '../about/about.component';
import {BecomeASpeaker} from '../become-a-speaker/become-a-speaker.component';

export const Landing: FC = memo(() =>
	data
		.map(data => (
			<Fragment>
				<Header data={data} />
				<Promo data={data} />
				<About data={data} />
				<Schedule data={data} />
				<BecomeASpeaker />
				<Sponsors />
				<Footer />
			</Fragment>
		))
		.getOrElse(<Fragment>Loading...</Fragment>),
);
