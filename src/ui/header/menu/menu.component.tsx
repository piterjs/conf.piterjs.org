import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';

const MenuStyled = styled.ul`
	background-color: var(--purpur);

	@media (min-width: 640px) {
		background-color: #fff;
		position: relative;
		display: flex;
		justify-content: flex-end;
		align-items: stretch;
	}
`;

interface MenuProps {
	className?: string;
}

export const Menu: FC<MenuProps> = memo(({className, children}) => <MenuStyled className={className}>{children}</MenuStyled>);
