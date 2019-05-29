import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaMd} from '../../../utils/css.utils';

const MenuStyled = styled.ul`
	background-color: var(--purpur);

	${mediaMd} {
		background-color: #fff;
	}
`;

interface MenuProps {
	className?: string;
}

export const Menu: FC<MenuProps> = memo(({className, children}) => <MenuStyled className={className}>{children}</MenuStyled>);
