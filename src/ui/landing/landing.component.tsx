import {FC, Fragment, memo} from 'react';
import * as React from 'react';
import {Header} from '../header/header/header.component';
import {Promo} from '../promo/promo.component';
import {Schedule} from '../schedule/schedule.component';
import {Speakers} from '../speakers/speakers.comonent';
import {Sponsors} from '../sponsors/sponsors.component';
import {Footer} from '../footer/footer.component';
import {data} from '../../view-models/data.view-model';
import {constant} from 'fp-ts/lib/function';

export const Landing: FC = memo(
	constant(
		data
			.map(data => (
				<Fragment>
					<Header header={data.header} />
					<Promo />
					<Schedule />
					<Speakers />
					<Sponsors />
					<Footer />
				</Fragment>
			))
			.getOrElse(<Fragment>Loading...</Fragment>),
	),
);
