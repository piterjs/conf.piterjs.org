import {FC, memo} from 'react';
import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import styled from '@emotion/styled';
import {Container} from '../ui-kit/container/container.component';
import {BigButton} from '../ui-kit/big-button/big-button.component';
import {Menu} from '../menu/menu/menu.component';
import {MenuItem} from '../menu/menu-item/menu-item.component';
import {Social} from '../ui-kit/social/social.component';
import {PiterJSTO} from '../../view-models/data.view-model';
import {mediaMd} from '../../utils/css.utils';

const breakpoint = '@media (min-width: 940px)';

//#region styled
const FooterStyled = styled.footer`
	background-color: var(--purpur);
	color: var(--white);
	padding-top: 50px;
	padding-bottom: 30px;
`;
const ContentStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
`;
// const TitleStyled = styled.h4`
// 	display: none;
// 	font-size: 24px;
// 	color: var(--white);
//
// 	${breakpoint} {
// 		display: block;
// 		grid-column-start: 1;
// 		grid-column-end: 2;
// 		grid-row-start: 1;
// 		grid-row-end: 2;
// 	}
// `;
// const EmailStyled = styled.input`
// 	border-bottom: 1px solid var(--gray);
// 	padding: 8px 0;
// 	color: var(--white);
// 	margin-bottom: 20px;
// 	grid-column-start: 1;
// 	grid-column-end: 2;
// 	grid-row-start: 2;
// 	grid-row-end: 3;
//
// 	${breakpoint} {
// 		margin-bottom: 0;
// 	}
// `;
// const NotifyMeStyled = styled(BigButton)`
// 	color: var(--gray);
// 	font-size: 20px;
// 	padding-top: 15px;
// 	padding-bottom: 15px;
// 	margin-bottom: 30px;
// 	grid-column-start: 2;
// 	grid-column-end: 3;
// 	grid-row-start: 1;
// 	grid-row-end: 3;
//
// 	${breakpoint} {
// 		padding-left: 0;
// 		padding-right: 0;
// 		margin-bottom: 0;
// 	}
// `;
const MenuStyled = styled(Menu)`
	margin-bottom: 70px;

	${mediaMd} {
		background: none;
	}

	${breakpoint} {
		display: flex;
		justify-content: center;
		margin-bottom: 30px;
		grid-column-start: 4;
		grid-column-end: 5;
		grid-row-start: 1;
		grid-row-end: 2;
		margin-bottom: 0;
		align-items: flex-start;
	}
`;
const MenuItemStyled = styled(MenuItem)`
	border: none;
	color: var(--gray);
	justify-content: center;
	font-size: 22px;
	font-weight: 500;
	transition: all 0.3s;

	& > a {
		color: var(--gray);
	}

	${breakpoint} {
		padding-top: 0;
		padding-bottom: 0;
	}

	&:hover {
		color: var(--hover-color);
	}
`;
const SocialsStyled = styled.div`
	margin-bottom: 70px;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-row-gap: 40px;

	${breakpoint} {
		display: flex;
		justify-content: center;
		grid-column-start: 4;
		grid-column-end: 5;
		grid-row-start: 2;
		grid-row-end: 3;
		margin-bottom: 0;
		grid-row-gap: 0;
	}
`;
const SocialStyled = styled(Social)`
	& > i > svg {
		width: 25px;
		height: 25px;

		${breakpoint} {
			width: 30px;
			height: 30px;
			margin-top: 30px;
		}
	}

	& + & {
		${breakpoint} {
			margin-left: 35px;
		}
	}
`;
const CopyStyled = styled.div`
	color: var(--gray);
	text-align: center;
	grid-column-start: 1;
	grid-column-end: 3;
	grid-row-start: 3;
	grid-row-end: 4;

	${breakpoint} {
		margin-top: 35px;
	}
`;
//#endregion

interface FooterProps {
	className?: string;
}

const footerQuery = graphql`
	query FooterQuery {
		dataJson {
			piterjs {
				socials {
					link
					name
				}
			}
		}
	}
`;

export const Footer: FC<FooterProps> = memo(({className}) => {
	const {dataJson: data} = useStaticQuery(footerQuery);
	const piterjs: PiterJSTO = data.piterjs;

	return (
		<FooterStyled className={className}>
			<Container>
				<ContentStyled>
					{/*<TitleStyled>Be the first to know</TitleStyled>*/}
					{/*<EmailStyled type={'email'} placeholder={'example@gmail.com'} />*/}
					{/*<NotifyMeStyled>Notify Me</NotifyMeStyled>*/}
					<MenuStyled>
						<MenuItemStyled href={'#about'}>О&nbsp;конференции</MenuItemStyled>
						<MenuItemStyled href={'#speakers'}>Спикеры</MenuItemStyled>
						<MenuItemStyled href={'#schedule'}>Расписание</MenuItemStyled>
						<MenuItemStyled href={'#partners'}>Партнеры</MenuItemStyled>
						<MenuItemStyled href={'https://github.com/piterjs/documents/tree/master/code-of-conduct'}>Нормы поведения</MenuItemStyled>
					</MenuStyled>
					<SocialsStyled>
						{piterjs.socials.map(social => (
							<SocialStyled type={social.name} link={social.link} key={`${social.name}=${social.link}`} isFooter />
						))}
					</SocialsStyled>
					<CopyStyled>Ⓒ 2019 PiterJS conf</CopyStyled>
				</ContentStyled>
			</Container>
		</FooterStyled>
	);
});
