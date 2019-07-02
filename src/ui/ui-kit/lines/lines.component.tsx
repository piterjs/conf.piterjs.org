import {memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';

const LinesStyled = styled.div`
	overflow: hidden;
	position: relative;
	color: var(--yellow);

	&:before {
		content: '';
		display: block;
		padding-top: 72%;
	}
`;
const LineStyled = styled.div`
	background-color: currentColor;
	width: 20%;
	height: 7.5%;
	transform: rotate(-45deg) skew(-45deg);
	transform-origin: top left;
	position: absolute;
`;
const Line1Styled = styled(LineStyled)`
	top: 25%;
	left: 0;
`;
const Line2Styled = styled(LineStyled)`
	bottom: 0;
	top: auto;
	height: 30%;
	transform-origin: left bottom;
	width: 150%;
`;
const Line3Styled = styled(LineStyled)`
	left: 50%;
	top: 50%;
	width: 150%;
	height: 12%;
`;

export const Lines = memo<{className?: string}>(({className}) => (
	<LinesStyled className={className}>
		<Line1Styled />
		<Line2Styled />
		<Line3Styled />
	</LinesStyled>
));
