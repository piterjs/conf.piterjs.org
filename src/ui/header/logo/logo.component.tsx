import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {Icon} from '../../ui-kit/icon/icon.component';
import {LogoIcon} from '../../../assets';
import {mediaMdX} from '../../../utils/css.utils';

const IconStyled = styled(Icon)`
	width: 50px;
	height: 50px;
	background-color: var(--white);
	flex-shrink: 0;
	transition: all .2s ease-in;

	${mediaMdX} {
		margin-right: 12px;
	}
`;

//#region styled
const LogoStyled = styled.div`
	display: flex;
	align-items: center;
	:hover {
		${IconStyled} {
			transform: scale(1.1);
		}
	}
`;

const TextStyled = styled.span`
	display: none;

	${mediaMdX} {
		display: inline;
	}
`;
//#endregion

interface LogoProps {
	className?: string;
}

export const Logo: FC<LogoProps> = memo(({className}) => (
	<LogoStyled className={className}>
		<IconStyled svg={LogoIcon} />
		<TextStyled>PiterJS conf</TextStyled>
	</LogoStyled>
));
