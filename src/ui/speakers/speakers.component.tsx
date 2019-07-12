import {FC, memo} from 'react';
import * as React from 'react';
import {BlockHeading} from '../ui-kit/block-heading/block-heading.component';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {DataTO} from '../../view-models/data.view-model';
import {mediaMd} from '../../utils/css.utils';
import {Speaker} from './speaker/speaker.component';

//#region styled
const SpeakersStyled = styled.section`
	padding-bottom: 40px;
	padding-top: 80px;
`;
const BlockHeadingStyled = styled(BlockHeading)`
	margin-bottom: 35px;

	${mediaMd} {
		margin-bottom: 18px;
	}
`;
//#endregion

interface SpeakersProps {
	className?: string;
	data: DataTO;
}

export const Speakers: FC<SpeakersProps> = memo(({className, data}) => (
	<SpeakersStyled className={className} id={'about'}>
		<Container>
			<BlockHeadingStyled>Спикеры</BlockHeadingStyled>
			{data.speakers.map(speaker => (
				<Speaker speaker={speaker} />
			))}
		</Container>
	</SpeakersStyled>
));
