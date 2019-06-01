import {FC, memo} from 'react';
import * as React from 'react';
import {BlockHeading} from '../ui-kit/block-heading/block-heading.component';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {DataTO} from '../../view-models/data.view-model';
import {Paragraph} from '../ui-kit/paragraph/paragraph.component';
import {BigButton} from '../ui-kit/big-button/big-button.component';
import {mediaMd} from '../../utils/css.utils';

//#region styled
const TicketsStyled = styled.section`
	padding-bottom: 40px;
	padding-top: 80px;
`;
const BlockHeadingStyled = styled(BlockHeading)`
	margin-bottom: 35px;

	${mediaMd} {
		margin-bottom: 18px;
	}
`;
const ParagraphStyled = styled(Paragraph)`
	margin-bottom: 50px;

	${mediaMd} {
		margin-bottom: 35px;
	}
`;
const BigButtonStyled = styled(BigButton)`
	color: var(--text-main);
	border-color: var(--yellow);
`;
//#endregion

interface TicketsProps {
	className?: string;
	data: DataTO;
}

export const Tickets: FC<TicketsProps> = memo(({className, data}) => (
	<TicketsStyled className={className}>
		<Container>
			<BlockHeadingStyled>Tickets</BlockHeadingStyled>
			<ParagraphStyled>{data.event.about}</ParagraphStyled>
			<BigButtonStyled>Get Your Ticket Now</BigButtonStyled>
		</Container>
	</TicketsStyled>
));
