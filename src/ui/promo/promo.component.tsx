import {FC, memo} from 'react';
import * as React from 'react';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {BigButton} from '../ui-kit/big-button/big-button.component';
import {DataTO} from '../../view-models/data.view-model';
import {mediaMd} from '../../utils/css.utils';
import {Lines} from '../ui-kit/lines/lines.component';

//#region styled
const PromoStyled = styled.section`
	line-height: 1.08;
	background: url('/promo.jpg');
	background-size: cover;
	background-position: center;
	position: relative;
`;
const FilterStyled = styled.div`
	padding: 30px 0 70px;
	background-color: #3d1f42eb;

	${mediaMd} {
		padding: 190px 0;
	}
`;
const ContentStyled = styled.div`
	color: var(--white);
	position: relative;
	z-index: 1;
`;
const DateStyled = styled.div`
	font-size: 24px;
	padding-bottom: 26px;

	${mediaMd} {
		font-size: 50px;
		margin-bottom: 20px;
	}
`;
const TitleStyled = styled.h1`
	font-size: 36px;
	padding-bottom: 40px;
	font-weight: bold;

	${mediaMd} {
		font-size: 96px;
		margin-bottom: 50px;
	}
`;
const LinesBaseStyled = styled(Lines)`
	position: absolute;
	width: 105px;

	${mediaMd} {
		width: 390px;
	}
`;
const Lines1Styled = styled(LinesBaseStyled)`
	top: 0;
	left: 0;
	display: none;

	${mediaMd} {
		display: block;
	}
`;
const Lines2Styled = styled(LinesBaseStyled)`
	bottom: 0;
	right: 0;
	transform: rotate(180deg);
`;
//#endregion

export const Promo: FC<{data: DataTO}> = memo(({data}) => (
	<PromoStyled id={'promo'}>
		<Lines1Styled />
		<FilterStyled>
			<Container>
				<ContentStyled>
					<DateStyled>{data.event.date}</DateStyled>
					<TitleStyled>The first international javascript conference in Russia</TitleStyled>
					<BigButton>Get Your Ticket Now</BigButton>
				</ContentStyled>
			</Container>
		</FilterStyled>
		<Lines2Styled />
	</PromoStyled>
));
