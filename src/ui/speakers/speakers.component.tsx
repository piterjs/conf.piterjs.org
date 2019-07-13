import {FC, memo} from 'react';
import * as React from 'react';
import {BlockHeading} from '../ui-kit/block-heading/block-heading.component';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {DataTO} from '../../view-models/data.view-model';
import {mediaLg, mediaMd, mediaMdX} from '../../utils/css.utils';
import {Speaker} from './speaker/speaker.component';
import {clamp} from '../../utils/number.utils';

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
const SpeakersListStyled = styled.div<{count: number}>`
	grid-gap: 10px;
	margin-bottom: 35px;

	${mediaMdX} {
		display: grid;
		grid-template-columns: repeat(${({count}) => clamp(count, 1, 3)}, 1fr);
	}

	@media (min-width: 1000px) {
		grid-template-columns: repeat(${({count}) => clamp(count, 1, 4)}, 1fr);
	}

	${mediaLg} {
		grid-template-columns: repeat(${({count}) => clamp(count, 1, 5)}, 1fr);
	}
`;
//#endregion

interface SpeakersProps {
	className?: string;
	data: DataTO;
}

export const Speakers: FC<SpeakersProps> = memo(({className, data}) => (
	<SpeakersStyled className={className} id={'speakers'}>
		<Container>
			<BlockHeadingStyled>Спикеры</BlockHeadingStyled>
			<SpeakersListStyled count={data.speakers.length}>
				{data.speakers.map(speaker => (
					<Speaker speaker={speaker} />
				))}
			</SpeakersListStyled>
		</Container>
	</SpeakersStyled>
));
