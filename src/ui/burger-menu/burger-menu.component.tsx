import { FC } from 'react';
import styled from '@emotion/styled';
import * as React from 'react';

const BurgerMenuStyled = styled.button`
	width: 50px;
	height: 50px;
	display: flex;
	align-items: center;
	justify-content: center;
`;
const ButtonLinesStyled = styled.div`
	display: inline-block;
	width: 30px;
`;
const ButtonLineStyled = styled.div`
	height: 2px;
	background-color: #f7df1e;

	& + & {
		margin-top: 6px;
	}
`;

export const BurgerMenu: FC = ({}) => {
	return (
		<BurgerMenuStyled>
			<ButtonLinesStyled>
				<ButtonLineStyled />
				<ButtonLineStyled />
				<ButtonLineStyled />
			</ButtonLinesStyled>
		</BurgerMenuStyled>
	);
};
