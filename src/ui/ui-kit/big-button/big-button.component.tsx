import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaMd} from '../../../utils/css.utils';

//#region styled
const BigButtonStyled = styled.button`
	border: 3px solid currentColor;
	padding: 24px 48px;
	transition: all 0.3s;
	color: var(--yellow);
	text-transform: uppercase;
	font-size: 20px;
	line-height: 1.1;
	font-weight: 500;
	${mediaMd} {
		font-size: 30px;
	}
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
