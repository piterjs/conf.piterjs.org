import {withRX} from '@devexperts/react-kit/dist/utils/with-rx2';
import {Landing} from '../landing/landing.component';
import {constant} from 'fp-ts/lib/function';
import {data$} from '../../view-models/data.view-model';
import {pending} from '@devexperts/remote-data-ts';

export const AppContainer = withRX(Landing)(
	constant({
		defaultProps: {data: pending},
		props: {data: data$},
	}),
);
