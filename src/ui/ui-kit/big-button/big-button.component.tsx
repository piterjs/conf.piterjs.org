import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaMd} from '../../../utils/css.utils';

//#region styled
const BigButtonStyled = styled.button`
	padding: 18px 36px;
	border: 3px solid currentColor;
	transition: all 0.3s;
	color: var(--yellow);
	text-transform: uppercase;
	font-size: 20px;
	line-height: 1.7;
	font-weight: 500;
	display: inline;
	cursor: pointer;
	${mediaMd} {
		font-size: 30px;
		padding: 24px 48px;
		border: 3px solid currentColor;
	}
	:hover {
		background-color: var(--yellow);
		color: var(--purpur);
		border: 3px solid var(--yellow);
	}
`;
// const BigButtonLinkStyled = BigButtonStyled.withComponent('a');
const BigButtonLinkStyled = styled.button`
	border-bottom: 2px solid currentColor;
	padding: 0;
	transition: all 0.3s;
	color: var(--yellow);
	text-transform: uppercase;
	font-size: 20px;
	line-height: 1.7;
	font-weight: 500;
	display: inline;
	cursor: pointer;
	:hover {
		color: var(--yellow-dark);
	}
	${mediaMd} {
		font-size: 30px;
		padding: 24px 48px;
		border: 3px solid currentColor;
		:hover {
			background-color: var(--yellow);
			color: var(--purpur);
			border: 3px solid var(--yellow);
		}
	}
`;

//#endregion

interface BigButtonProps {
	linkParams?: {
		href: string;
		target: string;
	};
	className?: string;
	linkView?: boolean;
}

export const BigButton: FC<BigButtonProps> = memo(({linkParams, children, className, linkView}) =>
	linkView ? (
		<BigButtonLinkStyled className={className} {...linkParams}>
			{children}
		</BigButtonLinkStyled>
	) : (
		<BigButtonStyled className={className}>{children}</BigButtonStyled>
	),
);
