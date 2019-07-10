//#region styled
import styled from '@emotion/styled';
import {mediaLg, mediaMd, mediaMdX} from '../../utils/css.utils';
import {BigButton} from '../ui-kit/big-button/big-button.component';
import {memo} from 'react';
import {Container} from '../ui-kit/container/container.component';
import * as React from 'react';

const BecomeStyled = styled.section`
	padding: 35px 0;
	background-color: var(--purpur);

	${mediaMd} {
		padding: 55px 0;
	}

	${mediaMdX} {
		padding: 80px 0;
	}

	${mediaLg} {
		padding: 100px 0;
	}
`;
const ContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;

	${mediaMd} {
		align-items: center;
	}
`;
const TitleStyled = styled.h2`
	color: var(--white);
	text-align: center;
	font-size: 60px;
	display: none;
	margin-bottom: 40px;
	text-transform: uppercase;
	font-weight: 500;

	${mediaMd} {
		display: block;
	}

	${mediaMdX} {
		font-size: 70px;
	}

	${mediaLg} {
		font-size: 80px;
	}
`;
const BigButtonStyled = styled(BigButton)<{who: string}>`
	font-size: 0;

	${mediaMd} {
		font-size: 30px;
	}

	&:before {
		content: 'Become a ${({who}) => who}';
		font-size: 30px;

		${mediaMd} {
			content: none;
		}
	}
`;
//#endregion

interface BecomeProps {
	who: string;
	buttonText: string;
	link?: {
		href: string;
		target: string;
	};
}

export const Become = memo<BecomeProps>(({who, buttonText, link}) => (
	<BecomeStyled id={`become_a_${who.toLowerCase()}`}>
		<Container>
			<ContentStyled>
				<TitleStyled>Become a {who}</TitleStyled>
				<BigButtonStyled link={link} who={who}>
					{buttonText}
				</BigButtonStyled>
			</ContentStyled>
		</Container>
	</BecomeStyled>
));
