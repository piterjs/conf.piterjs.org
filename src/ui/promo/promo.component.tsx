import {FC, memo} from 'react';
import * as React from 'react';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {BigButton} from '../ui-kit/big-button/big-button.component';
import {DataTO} from '../../view-models/data.view-model';
import {mediaMd} from '../../utils/css.utils';

//#region styled
const PromoStyled = styled.section`
	line-height: 1.08;
	background-color: var(--purpur);
	padding: 30px 20px 70px;

	${mediaMd} {
		padding: 150px 0 120px;
	}
`;
const ContentStyled = styled.div`
	color: var(--white);
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
//#endregion

export const Promo: FC<{data: DataTO}> = memo(({data}) => (
	<PromoStyled>
		<Container>
			<ContentStyled>
				<DateStyled>{data.event.date}</DateStyled>
				<TitleStyled>The first international javascript conference in Russia</TitleStyled>
				<BigButton>Get Your Ticket Now</BigButton>
			</ContentStyled>
		</Container>
	</PromoStyled>
));
