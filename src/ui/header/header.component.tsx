import { FC } from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import { Icon } from '../icon/icon.component';
import { LogoIcon } from '../../assets';
import { BurgerMenu } from '../burger-menu/burger-menu.component';

const HeaderStyled = styled.header`
	display: flex;
`;
const LogoStyled = styled(Icon)`
	width: 50px;
	height: 50px;
`;

export const Header: FC = () => {
	return (
		<HeaderStyled>
			<LogoStyled svg={LogoIcon} />
			<BurgerMenu />
		</HeaderStyled>
	);
};
