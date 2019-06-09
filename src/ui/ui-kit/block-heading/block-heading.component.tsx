import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaMd} from '../../../utils/css.utils';

//#region styled
const BlockHeadingStyled = styled.h2`
	text-transform: uppercase;
	color: var(--purpur);
	font-size: 36px;
	margin-left: 38px;
	font-weight: 600;

	${mediaMd} {
		font-size: 80px;
		margin-left: 90px;
	}
`;
//#endregion

export const BlockHeading: FC<{className?: string}> = memo(({children, className}) => (
	<BlockHeadingStyled className={className}>{children}</BlockHeadingStyled>
));
