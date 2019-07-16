import {FC, useState} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {Burger} from '../burger/burger.component';
import {lazy} from '../../../utils/function.utils';
import {Menu} from '../../menu/menu/menu.component';
import {Container} from '../../ui-kit/container/container.component';
import {MenuItem} from '../../menu/menu-item/menu-item.component';
import {mediaMd, mediaMdX} from '../../../utils/css.utils';
import {Logo} from '../logo/logo.component';
import {Location} from '../location/location.component';
import {DataTO} from '../../../view-models/data.view-model';

//#region styled
const HeaderStyled = styled.header<{isOpened: boolean}>`
	${mediaMd} {
		background-color: transparent;
		padding: 30px 0;
	}
`;
const ContainerStyled = styled(Container)`
	padding-left: 0;
	padding-right: 0;
`;
const WrapperStyled = styled.div`
	display: flex;
	position: relative;
	justify-content: space-between;
	padding: 8px;

	${mediaMd} {
		padding: 0;
	}

	${mediaMdX} {
		justify-content: flex-start;
	}
`;
const LogoStyled = styled(Logo)`
	margin-right: auto;
	@media (min-width: 1036px) {
		margin-right: 100px;
	}
`;
const LocationStyled = styled(Location)`
	display: none;
	flex-shrink: 0;

	${mediaMdX} {
		display: flex;
	}
`;
const BurgerMenuStyled = styled(Burger)<{isOpened: boolean}>`
	margin-left: auto;

	${mediaMd} {
		display: none;
	}
`;
const MenuStyled = styled(Menu)<{isOpened: boolean}>`
	${({isOpened}) => !isOpened && 'display: none'};
	position: absolute;
	width: 100%;
	top: 100%;
	left: 0;
	z-index: 2;

	${mediaMd} {
		display: flex;
		justify-content: flex-end;
		align-items: stretch;
		position: static;
		top: auto;
		width: auto;
	}

	${mediaMdX} {
		margin-left: auto;
	}
`;
const MenuItemStyled = styled(MenuItem)`
	${mediaMd} {
		color: var(--text-main);
	}
`;
//#endregion

export const Header: FC<{data: DataTO}> = ({data}) => {
	const [isOpened, onOpenedChange] = useState(false);

	return (
		<HeaderStyled isOpened={isOpened}>
			<ContainerStyled>
				<WrapperStyled>
					<LogoStyled />
					<LocationStyled location={data.event.location} />
					<BurgerMenuStyled isOpened={isOpened} onClick={lazy(onOpenedChange, !isOpened)} />
					<MenuStyled isOpened={isOpened}>
						<MenuItemStyled href={'#about'}>О нас</MenuItemStyled>
						<MenuItemStyled href={'#speakers'}>Спикеры</MenuItemStyled>
						<MenuItemStyled href={'#schedule'}>Расписание</MenuItemStyled>
						<MenuItemStyled href={'#sponsors'}>Партнеры</MenuItemStyled>
					</MenuStyled>
				</WrapperStyled>
			</ContainerStyled>
		</HeaderStyled>
	);
};
