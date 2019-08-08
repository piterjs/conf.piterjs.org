import {Option} from 'fp-ts/lib/Option';
import {FC, memo, useState, Fragment} from 'react';
import styled from '@emotion/styled';
import {mediaMd} from '../../../utils/css.utils';
import * as React from 'react';
import {lazy} from '../../../utils/function.utils';
import {Social, SocialType} from '../../ui-kit/social/social.component';

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
	grid-template-columns: 65px 1fr 50px;
	grid-gap: 10px;

	${({isOpened}) => isOpened && `grid-template-rows: repeat(4, auto)`};

	${mediaMd} {
		grid-template-columns: 175px 1fr;
	}
`;
const TimeStyled = styled.div`
	font-size: 26px;
	line-height: 1.1;
	font-weight: 700;

	${mediaMd} {
		font-size: 30px;
	}
`;
const TitleStyled = styled.h3`
	font-size: 26px;
	line-height: 1.1;
	font-weight: 700;
	position: relative;
	display: flex;

	${mediaMd} {
		font-size: 30px;
	}
`;
const TogglerStyled = styled.button<{isOn: boolean}>`
	border: 3px solid var(--yellow);
	margin-left: auto;
	width: 50px;
	height: 50px;
	flex-shrink: 0;
	position: relative;

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
	grid-column-end: 4;

	${mediaMd} {
		color: var(--text-gray);
		font-size: 30px;
		font-weight: 500;
		font-style: normal;
	}
`;
const SocialStyled = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	grid-row-start: 3;

	${mediaMd} {
		grid-row-start: 4;
	}
`;
const SpeakerStyled = styled.div`
	grid-column-start: 2;
	grid-column-end: 4;

	${mediaMd} {
		display: grid;
		grid-template-columns: auto 1fr;
		grid-column-gap: 50px;
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
	}
`;
const AboutStyled = styled.div`
	grid-column-start: 2;
	display: none;

	${mediaMd} {
		display: block;
	}
`;
const Description = styled.div`
	grid-column-start: 2;
	grid-row-start: 4;
	grid-column-end: 4;

	${mediaMd} {
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
	const [isOpened, onIsOpenedChange] = useState(false); // replace with false
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
							{/*<TogglerStyled onClick={lazy(onIsOpenedChange, !isOpened)} isOn={isOpened} />*/}
							<NameStyled>
								{speaker.firstName} {speaker.lastName}
							</NameStyled>
							{/*{isOpened && (*/}
							{/*	<Fragment>*/}
							{/*		<SocialStyled>*/}
							{/*			{speaker.socials.map(({name, link}) => (*/}
							{/*				<Social type={name} link={link} key={`${name}-${link}`} />*/}
							{/*			))}*/}
							{/*		</SocialStyled>*/}
							{/*		<SpeakerStyled>*/}
							{/*			<PhotoStyled img={speaker.photo.src} />*/}
							{/*			<AboutSpeakerTitleStyled />*/}
							{/*			<AboutStyled>{speaker.about}</AboutStyled>*/}
							{/*		</SpeakerStyled>*/}
							{/*		{description.map(description => <Description>{description}</Description>).toNullable()}*/}
							{/*	</Fragment>*/}
							{/*)}*/}
						</Fragment>
					))
					.toNullable()}
			</ContentStyled>
		</ArticleStyled>
	);
});
