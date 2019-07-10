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
				<Become
					link={{href: 'https://forms.gle/Y7TM5VbC7RkNsGkz8', target: '_blank'}}
					who={'Speaker'}
					buttonText={'Submit a Talk'}
				/>
				<Sponsors data={data} />
				<Become
					link={{href: 'mailto:partner@piterjs.dev', target: '_self'}}
					who={'Sponsor'}
					buttonText={'Contact Us for Details'}
				/>
				<Footer data={data} />
			</Fragment>
		))
		.getOrElse(<Fragment>Loading...</Fragment>),
);
