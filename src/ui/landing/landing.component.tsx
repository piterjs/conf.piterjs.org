import {FC, Fragment, memo} from 'react';
import * as React from 'react';
import {Header} from '../header/header/header.component';
import {Promo} from '../promo/promo.component';
import {Schedule} from '../schedule/schedule.component';
import {Speakers} from '../speakers/speakers.comonent';
import {Sponsors} from '../sponsors/sponsors.component';
import {Footer} from '../footer/footer.component';

export const Landing: FC = memo(() => (
	<Fragment>
		<Header />
		<Promo />
		<Schedule />
		<Speakers />
		<Sponsors />
		<Footer />
	</Fragment>
));
