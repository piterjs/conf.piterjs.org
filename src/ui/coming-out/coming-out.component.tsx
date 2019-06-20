import {memo} from 'react';
import * as React from 'react';
import styled from '@emotion/styled';
import {constant} from 'fp-ts/lib/function';

//#region styled
const ComingOutStyled = styled.div`
	color: #b3b3b3;
	display: flex;
	align-items: center;
	margin-bottom: 100px;
	font-size: 30px;

	&:before,
	&:after {
		content: '';
		height: 4px;
		background-color: currentColor;
		flex-grow: 1;
	}
`;
const TextStyled = styled.span`
	margin: 0 40px;
`;
//#endregion

export const ComingOut = memo(
	constant(
		<ComingOutStyled>
			<TextStyled>Coming soon</TextStyled>
		</ComingOutStyled>,
	),
);
