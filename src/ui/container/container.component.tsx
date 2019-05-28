import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';

//#region styled
const ContainerStyled = styled.div`
	display: flex;
	align-items: stretch;
	justify-content: center;
`;
const Context = styled.div`
	width: 100%;

	@media (min-width: 1280px) {
		max-width: 1280px;
	}
`;
//#endregion

interface ContainerProps {
	className?: string;
}

export const Container: FC<ContainerProps> = memo(({children, className}) => (
	<ContainerStyled className={className}>
		<Context>{children}</Context>
	</ContainerStyled>
));
