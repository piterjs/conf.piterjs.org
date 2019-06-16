import {memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {Container} from '../ui-kit/container/container.component';
import {BigButton} from '../ui-kit/big-button/big-button.component';
import {mediaLg, mediaMd, mediaMdX} from '../../utils/css.utils';

const mainPhrase = 'Become a Speaker';

//#region styled
const BecomeASpeakerStyled = styled.section`
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
const BigButtonStyled = styled(BigButton)`
	&:before {
		content: '${mainPhrase}';

		${mediaMd} {
			content: 'Submit a Talk';
		}
	}
`;
//#endregion

export const BecomeASpeaker = memo(({}) => (
	<BecomeASpeakerStyled>
		<Container>
			<ContentStyled>
				<TitleStyled>{mainPhrase}</TitleStyled>
				<BigButtonStyled />
			</ContentStyled>
		</Container>
	</BecomeASpeakerStyled>
));
