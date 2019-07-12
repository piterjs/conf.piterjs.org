import {FC, memo} from 'react';
import * as React from 'react';
import styled from '@emotion/styled';
import {Container} from '../../ui-kit/container/container.component';
import {SpeakerTO} from '../../../view-models/data.view-model';
import {mediaMd} from '../../../utils/css.utils';
import {Social} from '../../ui-kit/social/social.component';

//#region styled
const SpeakerStyled = styled.section`
	padding-bottom: 40px;
	padding-top: 80px;
`;
const TextStyled = styled.div`
	margin-bottom: 50px;

	${mediaMd} {
		margin-bottom: 35px;
	}
`;
const PhotoStyled = styled.img`
	width: 100%;
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
//#endregion

interface SpeakerProps {
	className?: string;
	speaker: SpeakerTO;
}

export const Speaker: FC<SpeakerProps> = memo(({className, speaker}) => (
	<SpeakerStyled className={className} id={speaker.id}>
		<Container>
			<PhotoStyled {...speaker.photo} />
			<TextStyled>
				{speaker.firstName} {speaker.lastName}
			</TextStyled>
			<SocialStyled>
				{speaker.socials.map(({name, link}) => (
					<Social type={name} link={link} key={`${name}-${link}`} />
				))}
			</SocialStyled>
		</Container>
	</SpeakerStyled>
));
