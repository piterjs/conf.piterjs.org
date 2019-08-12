import * as React from 'react';
import {FC} from 'react';
import {MapMarker} from '../../assets';
import styled from '@emotion/styled';
import {mediaMd} from '../../utils/css.utils';


const MarkerContainerStyled = styled.div`
	transform: translate(-2.15625rem, -5.25rem);

	svg {
		width: 4.3125rem;
    	height: 5.25rem;
    	${mediaMd} {
    		width: 8.625rem;
			height: 10.5rem;
    	}
	}
	${mediaMd} {
		transform: translate(-4.3125rem, -10.5rem);
	}
`;

interface MarkerProps {
	lat: number;
	lng: number;
}

export const Marker: FC<MarkerProps> = () => (
	<MarkerContainerStyled>
		<MapMarker />
	</MarkerContainerStyled>
);
