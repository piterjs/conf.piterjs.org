import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {Icon} from '../../icon/icon.component';
import {LogoIcon} from '../../../assets';
import {mediaMdX} from '../../../utils/css.utils';

//#region styled
const LogoStyled = styled.div`
	display: flex;
	align-items: center;
`;
const IconStyled = styled(Icon)`
	width: 50px;
	height: 50px;
	background-color: var(--white);
	flex-shrink: 0;

	${mediaMdX} {
		margin-right: 12px;
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
		<TextStyled>PiterjsConf</TextStyled>
	</LogoStyled>
));
