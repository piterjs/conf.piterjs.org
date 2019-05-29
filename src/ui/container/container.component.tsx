import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import {mediaLg, mediaMd} from '../../utils/css.utils';

//#region styled
const ContainerStyled = styled.div`
	display: flex;
	align-items: stretch;
	justify-content: center;

	${mediaMd} {
		padding-left: 20px;
		padding-right: 20px;
	}
`;
const Context = styled.div`
	width: 100%;

	${mediaLg} {
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
