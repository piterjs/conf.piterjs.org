import {FC, memo} from 'react';
import styled from '@emotion/styled';
import * as React from 'react';

//#region styled
const LocationStyled = styled.div`
	display: flex;
	align-items: center;
`;
const PointStyled = styled.div`
	height: 32px;
	width: 21px;
	position: relative;
	flex-shrink: 0;
	margin-right: 10px;

	&:before,
	&:after {
		content: '';
		display: inline-block;
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
	}
	&:before {
		background-color: var(--yellow);
		width: 19px;
		height: 19px;
		border-radius: 50%;
		top: 0;
	}
	&:after {
		width: 0;
		height: 0;
		border-top: 18px solid var(--yellow);
		border-left: 9px solid transparent;
		border-right: 9px solid transparent;
		top: 13px;
	}
`;
const LinkStyled = styled.a`
	display: inline-block;
	white-space: nowrap;
	font-size: inherit;
	color: var(--text-main);
`;
//#endregion

interface LocationProps {
	className?: string;
	location: {
		link: string;
		city: string;
		address: string;
	};
}

export const Location: FC<LocationProps> = memo(({className, location}) => (
	<LocationStyled className={className}>
		<PointStyled />
		<LinkStyled href={location.link} target={'_blank'} rel='noopener noreferrer'>
			{location.address}
			<br />
			{location.city}
		</LinkStyled>
	</LocationStyled>
));
