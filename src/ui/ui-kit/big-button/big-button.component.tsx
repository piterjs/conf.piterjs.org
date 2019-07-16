import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaMd} from '../../../utils/css.utils';

//#region styled
const BigButtonStyled = styled.button`
	border-bottom: 2px solid currentColor;
	padding: 0;
	transition: all 0.3s;
	color: var(--yellow);
	text-transform: uppercase;
	font-size: 20px;
	line-height: 1.7;
	font-weight: 500;
	display: inline;
	${mediaMd} {
		font-size: 30px;
		padding: 24px 48px;
		border: 3px solid currentColor;
	}
	:hover {
		border-color: yellow;
	}
`;
const BigButtonLinkStyled = BigButtonStyled.withComponent('a').extend`
	border-bottom: 2px solid currentColor;
	padding: 0;
`;


//#endregion

interface BigButtonProps {
	linkParams?: {
		href: string;
		target: string;
	};
	className?: string;
}

export const BigButton: FC<BigButtonProps> = memo(({linkParams, children, className}) =>
	linkParams ? (
		<BigButtonLinkStyled className={className} {...linkParams}>
			{children}
		</BigButtonLinkStyled>
	) : (
		<BigButtonStyled className={className}>{children}</BigButtonStyled>
	),
);
