import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaMd} from '../../../utils/css.utils';

//#region styled
const ItemStyled = styled.li`
	border-bottom: 1px solid var(--menu-item-border);
	padding: 20px 20px;
	font-size: 24px;
	color: var(--yellow);
	display: flex;
	align-items: center;
	justify-content: flex-end;

	${mediaMd} {
		border-bottom: none;
		font-size: 16px;
		padding: 10px 20px;
	}
`;
const LinkStyled = styled.a`
	text-transform: inherit;
	color: inherit;
`;
//#endregion

interface MenuItemProps {
	className?: string;
	href: string;
}

export const MenuItem: FC<MenuItemProps> = memo(({children, className, href}) => (
	<ItemStyled className={className}>
		<LinkStyled href={href}>{children}</LinkStyled>
	</ItemStyled>
));
