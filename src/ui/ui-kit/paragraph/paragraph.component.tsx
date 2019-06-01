import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';

//#region styled
const ParagraphStyled = styled.p`
	font-size: 20px;
	line-height: 1.3;
`;
//#endregion

export const Paragraph: FC<{className?: string}> = memo(({className, children}) => (
	<ParagraphStyled className={className}>{children}</ParagraphStyled>
));
