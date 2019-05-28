import { FC } from 'react';
import styled from '@emotion/styled';
import * as React from 'react';
import { Icon } from '../icon/icon.component';

const HeaderStyled = styled.header`
	//padding-top: 30px;
	//padding-bottom: 30px;
`;

export const Header: FC = ({ children }) => {
	return (
		<HeaderStyled>
			<Icon svg={} />
		</HeaderStyled>
	);
};
