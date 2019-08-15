import {Option} from 'fp-ts/lib/Option';
import {FC, memo, useState, Fragment} from 'react';
import styled from '@emotion/styled';
import {mediaMd} from '../../../utils/css.utils';
import * as React from 'react';
import {lazy} from '../../../utils/function.utils';
import {Social, SocialType} from '../../ui-kit/social/social.component';
import {isMobileS} from '../../../utils/viewport.utils';

//#region styled
const ArticleStyled = styled.article`
	padding-top: 20px;
	padding-bottom: 20px;

	${mediaMd} {
		padding-top: 50px;
		padding-bottom: 50px;
		border-bottom: 4px solid var(--gray);
	}
`;
const ContentStyled = styled.div<{isOpened: boolean}>`
	display: grid;
	grid-auto-flow: row;
	grid-template-columns: 65px 1fr 50px;
	grid-gap: 10px 12px;

	${({isOpened}) => isOpened && `grid-template-rows: repeat(4, auto)`};

	${mediaMd} {
		grid-template-columns: 175px 1fr;
	}
`;
const TimeStyled = styled.div`
	font-size: 20px;
	line-height: 1.1;
	font-weight: 700;

	${mediaMd} {
		font-size: 30px;
	}
`;
const TitleStyled = styled.h3`
	font-size: 20px;
	line-height: 1.1;
	font-weight: 700;
	position: relative;
	display: flex;
	grid-column: 2/4;
    word-break: break-word;

	${mediaMd} {
		grid-column: 2;
		font-size: 30px;
	}
`;
const TogglerStyled = styled.button<{isOn: boolean}>`
	display: none;
	border: 3px solid var(--yellow);
	margin-left: auto;
	width: 50px;
	height: 50px;
	flex-shrink: 0;
	position: relative;
	grid-column: 3;
    grid-row: 1/3;
    ${mediaMd} {
    	display: block;
    }

	&:before {
		content: '';
		box-sizing: border-box;
		width: 20px;
		height: 20px;
		border-right: 3px solid var(--black);
		border-bottom: 3px solid var(--black);
		transform-origin: center center;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%) rotate(${({isOn}) => (isOn ? -135 : 45)}deg);
		position: absolute;
		margin-top: ${({isOn}) => (isOn ? 4 : -3)}px;
	}
`;
const NameStyled = styled.div`
	font-size: 18px;
	grid-column-start: 2;
	font-style: italic;
	grid-column-end: 3;

	${mediaMd} {
		color: var(--text-gray);
		font-size: 30px;
		font-weight: 600;
		font-style: normal;
	}
`;
const SocialStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	grid-row-start: 3;
	padding-top: 30px;
	 & > *:not(:last-child) {
		margin-bottom: 11px;
	 }

	${mediaMd} {
		grid-row-start: 4;
	}
	
	& a {
		width: 42px;
		height: 42px;
	}
`;
const SpeakerStyled = styled.div`
	grid-column-start: 2;
	grid-column-end: 4;
	padding-top: 30px;

	${mediaMd} {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-template-rows: 28px auto;
		grid-column-gap: 52px;
		grid-row-gap: 20px;
	}
`;
const PhotoStyled = styled.div<{img: string}>`
	width: 150px;
	height: 150px;
	background: url('${({img}) => img}');
	background-size: cover;

	${mediaMd} {
		width: 200px;
		height: 200px;
		grid-row-start: 1;
		grid-row-end: 3;
	}
`;
const AboutSpeakerTitleStyled = styled.h4`
	display: none;

	${mediaMd} {
		display: block;
		font-size: 25px;
		font-weight: bold;
		line-height: 27px;
	}
`;
const AboutStyled = styled.div`
	grid-column-start: 2;
	display: none;

	${mediaMd} {
		display: block;
		font-size: 20px;
		line-height: 26px;
	}
`;
const Description = styled.div`
	grid-column-start: 2;
	grid-row-start: 4;
	grid-column-end: 4;
	padding-top: 30px;
	font-size: 20px;
	line-height: 26px;
	word-break: break-word;

	${mediaMd} {
		word-break: unset;
		grid-row-start: 3;
	}
`;
//#endregion

export interface Speaker {
	about: string;
	firstName: string;
	lastName: string;
	photo: {
		src: string;
		alt: string;
	};
	socials: {
		name: SocialType;
		link: string;
	}[];
}

interface ArticleProps {
	title: string;
	time: string;
	description: Option<string>;
	speaker: Option<Speaker>;
}

const emoji = [
	'🐰',
	'🐻',
	'🐼',
	'🦁',
	'🐮',
	'🐔',
	'🐧',
	'🦊',
	'🦓',
	'🦒',
	'🦌',
	'🦄',
	'🦋',
	'🦂',
	'🦎',
	'🦀',
	'🦑',
	'🦐',
	'🐪',
	'🦖',
	'🦕',
	'🐿',
	'🦉',
];

export const Article: FC<ArticleProps> = memo(({title, time, description, speaker}) => {
	const emptyArticle = !title;
	const openArticleByDefault = isMobileS() && !emptyArticle;
	const [isOpened, onIsOpenedChange] = useState(openArticleByDefault);
	if (title === '') {
		const length = Math.floor(Math.random() * 7) + 3;
		for (let i = 0; i < length; i++) {
			const position = Math.floor(Math.random() * 23);
			title += emoji[position];
		}
	}

	return (
		<ArticleStyled>
			<ContentStyled isOpened={isOpened}>
				<TimeStyled>{time}</TimeStyled>
				<TitleStyled>{title}</TitleStyled>
				{speaker
					.map(speaker => (
						<Fragment>
							{!emptyArticle && (
								<TogglerStyled
									onClick={lazy(onIsOpenedChange, !isOpened)}
									isOn={isOpened}
									aria-label='Подробнее'
								/>
							)}
							<NameStyled>
								{speaker.firstName} {speaker.lastName}
							</NameStyled>
							{isOpened && (
								<Fragment>
									<SocialStyled>
										{speaker.socials.map(({name, link}) => (
											<Social type={name} link={link} key={`${name}-${link}`} />
										))}
									</SocialStyled>
									<SpeakerStyled>
										<PhotoStyled img={speaker.photo.src} />
										<AboutSpeakerTitleStyled> О спикере</AboutSpeakerTitleStyled>
										<AboutStyled>{speaker.about}</AboutStyled>
									</SpeakerStyled>
									{description.map(description => <Description>{description}</Description>).toNullable()}
								</Fragment>
							)}
						</Fragment>
					))
					.toNullable()}
			</ContentStyled>
		</ArticleStyled>
	);
});
