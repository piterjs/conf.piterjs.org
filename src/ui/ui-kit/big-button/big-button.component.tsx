import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';

//#region styled
const BigButtonStyled = styled.button`
	border: 3px solid currentColor;
	padding: 24px 48px;
	transition: all .3s;
	color: var(--yellow);
	text-transform: uppercase;
	font-size: 30px;
	line-height: 1.1;
	font-weight: 500;
`;
const BigButtonLinkStyled = BigButtonStyled.withComponent('a');
//#endregion

interface BigButtonProps {
	link?: {
		href: string;
		target: string;
	};
	className?: string;
}

export const BigButton: FC<BigButtonProps> = memo(({link, children, className}) =>
	link ? (
		<BigButtonLinkStyled className={className} {...link}>
			{children}
		</BigButtonLinkStyled>
	) : (
		<BigButtonStyled className={className}>{children}</BigButtonStyled>
	),
);
