import { FC, Fragment, memo, ReactElement } from 'react';
import styled from '@emotion/styled';
import * as React from 'react';

const ContainerStyled = styled.div`
	width: 1280px;
`;

export const Container: FC<{children: ReactElement}> = memo(({children}) => (
	<Fragment />
));