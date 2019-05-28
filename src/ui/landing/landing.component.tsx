import {FC, Fragment, memo} from 'react';
import * as React from 'react';
import {Header} from '../header/header/header.component';

export const Landing: FC = memo(({children}) => (
	<Fragment>
		<Header />
	</Fragment>
));
