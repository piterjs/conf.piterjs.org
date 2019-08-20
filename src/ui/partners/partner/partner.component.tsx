import {PartnerTO} from '../../../view-models/data.view-model';
import {memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaMd} from '../../../utils/css.utils';

//#region styled
const PartnerStyled = styled.li`
	display: flex;
	padding: 10px 0;
	width: 270px;
	max-width: 270px;
`;
const LinkStyled = styled.a`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	transition: all .5s;
	color: var(--purpur);

	&:hover {
		color: var(--hover-color);
	}

	${mediaMd} {
		padding: 10px;
		transition: all .5s;
		border-radius: 8px;
		&:hover {
	        box-shadow: -4px 4px 15px 5px rgba(0,0,0,.1);
		}
	}
`;
const LogoStyled = styled.img`
	width: 250px;
	display: inline-block;
`;
//#endregion

interface PartnerProps {
	partner: PartnerTO;
	className?: string;
}

export const Partner = memo<PartnerProps>(({partner, className}) => (
	<PartnerStyled className={className}>
		<LinkStyled href={partner.link} title={partner.name} target={'_blank'} rel={'noopener noreferrer'}>
			<LogoStyled src={partner.image} alt={partner.name} />
		</LinkStyled>
	</PartnerStyled>
));
