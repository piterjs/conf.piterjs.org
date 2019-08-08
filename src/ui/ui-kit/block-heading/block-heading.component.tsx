import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaMd} from '../../../utils/css.utils';
import {Lines} from '../lines/lines.component';

//#region styled
const BlockHeadingStyled = styled.h2`
	// text-transform: uppercase;
	color: var(--purpur);
	font-size: 36px;
	font-weight: 600;
	padding-top: 80px;

	${mediaMd} {
		font-size: 45px;
		padding: 80px 0 50px 0;
	}
`;
const LinesStyled = styled(Lines)`
	transform: scaleY(-1);
	display: inline-block;
	width: 38px;
	margin-right: 2px;

	${mediaMd} {
		width: 76px;
		margin-right: 10px;
	}
`;
//#endregion

export const BlockHeading: FC<{className?: string}> = memo(({children, className}) => (
	<BlockHeadingStyled className={className}>
		<LinesStyled />
		{children}
	</BlockHeadingStyled>
));
