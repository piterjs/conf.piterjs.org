import {SponsorTO} from '../../../view-models/data.view-model';
import {memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaMd} from '../../../utils/css.utils';

//#region styled
const SponsorStyled = styled.li`
	display: flex;
	font-size: 24px;
	padding: 10px 0;

	${mediaMd} {
		font-size: 0;
	}

	&:before {
		display: inline-block;
		content: '';
		width: 5px;
		height: 5px;
		background-color: var(--purpur);
		transform: rotate(45deg);
		align-self: center;
		margin-right: 22px;

		${mediaMd} {
			content: none;
		}
	}
`;
const LinkStyled = styled.a``;
const LogoStyled = styled.img`
	display: none;

	${mediaMd} {
		display: inline-block;
	}
`;
//#endregion

interface SponsorProps {
	sponsor: SponsorTO;
	className?: string;
}

export const Sponsor = memo<SponsorProps>(({sponsor, className}) => (
	<SponsorStyled className={className}>
		<LinkStyled href={sponsor.link} title={sponsor.name} target={'_blank'}>
			{sponsor.name}
			<LogoStyled src={sponsor.image} alt={sponsor.name} />
		</LinkStyled>
	</SponsorStyled>
));
