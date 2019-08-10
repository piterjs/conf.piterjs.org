//#region styled
import styled from '@emotion/styled';
import {mediaLg, mediaMd, mediaMdX} from '../../utils/css.utils';
import {BigButton} from '../ui-kit/big-button/big-button.component';
import {memo} from 'react';
import {Container} from '../ui-kit/container/container.component';
import {Lines} from '../ui-kit/lines/lines.component';

import * as React from 'react';

const BecomeStyled = styled.section`
	padding: 35px 0;
	background-color: var(--white);
	position: relative;

	${mediaMd} {
		padding: 50px 0;
	}

	${mediaMdX} {
		padding: 50px 0;
	}

	${mediaLg} {
		padding: 50px 0;
	}
`;
const ContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
	color: var(--yellow);

	${mediaMd} {
		align-items: center;
	}
`;

const ButtonWrapperStyled = styled.h2`
	display: block;
	margin: auto;

	${mediaMd} {
		display: block;
	}
`;
//#endregion

interface BecomeProps {
	buttonText: string;
	link?: {
		href: string;
		target: string;
		rel?: string;
	};
}

export const Become = memo<BecomeProps>(({buttonText, link}) => (
	<BecomeStyled>
		{/* <Lines1Styled /> */}
		<Container>
			<ContentStyled>
				<ButtonWrapperStyled>
					<BigButton linkParams={link}>{buttonText}</BigButton>
				</ButtonWrapperStyled>
				{/*<TitleStyled>Стать {who}</TitleStyled>*/}
				{/*<BigButtonStyled link={link} who={who}>*/}
				{/*	{buttonText}*/}
				{/*</BigButtonStyled>*/}
			</ContentStyled>
		</Container>
		{/* <Lines2Styled /> */}
	</BecomeStyled>
));
