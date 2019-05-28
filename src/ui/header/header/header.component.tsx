import {FC, useState} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {Icon} from '../../icon/icon.component';
import {LogoIcon} from '../../../assets/index';
import {Burger} from '../burger/burger.component';
import {lazy} from '../../../utils/function.utils';
import {Menu} from '../menu/menu.component';
import {Container} from '../../container/container.component';
import {MenuItem} from '../menu-item/menu-item.component';

//#region styled
const HeaderStyled = styled.header<{isOpened: boolean}>`
	${({isOpened}) => isOpened && `background-color: var(--purpur)`};
`;
const WrapperStyled = styled.div`
	display: flex;
	position: relative;
`;
const LogoStyled = styled(Icon)`
	width: 50px;
	height: 50px;
	background-color: var(--white);
`;
const BurgerMenuStyled = styled(Burger)<{isOpened: boolean}>`
	margin-left: auto;
	${({isOpened}) => isOpened && 'display: none'};
`;
const MenuStyled = styled(Menu)<{isOpened: boolean}>`
	${({isOpened}) => !isOpened && 'display: none'};
	position: absolute;
	width: 100%;
	top: 100%;

	@media (min-width: 640px) {
		background-color: #fff;
		position: relative;
		display: flex;
		justify-content: flex-end;
	}
`;
const MenuItemStyled = styled(MenuItem)``;
//#endregion

export const Header: FC = () => {
	const [isOpened, onOpenedChange] = useState(false);

	return (
		<HeaderStyled isOpened={isOpened}>
			<Container>
				<WrapperStyled>
					<LogoStyled svg={LogoIcon} />
					<BurgerMenuStyled isOpened={isOpened} onClick={lazy(onOpenedChange, !isOpened)} />
					<MenuStyled isOpened={isOpened}>
						<MenuItemStyled href={'#tickets'}>Tickets</MenuItemStyled>
						<MenuItemStyled href={'#schedule'}>Schedule</MenuItemStyled>
						<MenuItemStyled href={'#sponsors'}>Sponsors</MenuItemStyled>
						<MenuItemStyled href={'#about'}>About</MenuItemStyled>
					</MenuStyled>
				</WrapperStyled>
			</Container>
		</HeaderStyled>
	);
};
