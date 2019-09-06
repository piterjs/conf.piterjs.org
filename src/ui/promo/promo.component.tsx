import {FC, memo} from 'react';
import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {BigButton} from '../ui-kit/big-button/big-button.component';
import {EventTO} from '../../view-models/data.view-model';
import {mediaMd} from '../../utils/css.utils';
import {Lines} from '../ui-kit/lines/lines.component';

//#region styled
const PromoStyled = styled.section`
	line-height: 1.08;
	background: url('/promo.jpg');
	background-size: cover;
	background-position: center;
	position: relative;

	@media (max-width: 576px) {
		background: url('/promo_small.jpg');
		background-size: cover;
	}
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
const PlaceStyled = styled.span`
	font-size: 24px;
	padding-bottom: 26px;
	display: block;

	${mediaMd} {
		display: inline;
		font-size: 50px;
		margin-bottom: 20px;
	}
`;
const TitleStyled = styled.h1`
	font-size: 36px;
	padding-bottom: 40px;
	font-weight: 700;

	${mediaMd} {
		font-size: 70px;
		margin-bottom: 50px;
	}
`;
const LinesBaseStyled = styled(Lines)`
	position: absolute;
	width: 105px;

	${mediaMd} {
		width: 300px;
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

const promoQuery = graphql`
	query PromoQuery {
		dataJson {
			event {
				date
				location {
					address
				}
			}
		}
	}
`;

export const Promo: FC = memo(() => {
	const {dataJson: data} = useStaticQuery(promoQuery);
	const event: EventTO = data.event;

	return (
		<PromoStyled id={'promo'}>
			<Lines1Styled />
			<FilterStyled>
				<Container>
					<ContentStyled>
						<DateStyled>
							{event.date}, <PlaceStyled>Caнкт-Петербург<br/>{event.location.address}</PlaceStyled>
						</DateStyled>
						<TitleStyled>PiterJS conf &mdash; конференция JavaScript-сообщества с берегов Невы</TitleStyled>
						<BigButton
							linkView={true}
							linkParams={{
								href: 'https://piterjsconf.timepad.ru/event/1007647/',
								rel: 'noopener noreferrer',
								target: '_blank',
							}}>
							Зарегистрироваться
						</BigButton>
					</ContentStyled>
				</Container>
			</FilterStyled>
			<Lines2Styled />
		</PromoStyled>
	);
});
