import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';

//#region styled
const BigButtonStyled = styled.button`
	border: 3px solid currentColor;
	padding: 24px 48px;
	color: var(--yellow);
	text-transform: uppercase;
	font-size: 30px;
	line-height: 1.1;
`;
const BigButtonLinkStyled = BigButtonStyled.withComponent('a');
//#endregion

interface BigButtonProps {
	link?: {
		href: string;
		target: string;
	};
}

export const BigButton: FC<BigButtonProps> = memo(({link, children}) =>
	link ? <BigButtonLinkStyled {...link}>{children}</BigButtonLinkStyled> : <BigButtonStyled>{children}</BigButtonStyled>,
);
