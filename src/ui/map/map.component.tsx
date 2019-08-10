import * as React from 'react';
import {FC, memo} from 'react';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import {DataTO} from '../../view-models/data.view-model';
import {MapMarker} from '../../assets';
import {mediaMd} from '../../utils/css.utils';


const MarkerContainer = styled.div`
	transform: translate(-2.15625rem, -5.25rem);

	svg {
		width: 4.3125rem;
    	height: 5.25rem;
	}

	${mediaMd} {
		transform: translate(-4.3125rem, -10.5rem);
		svg {
			width: 8.625rem;
			height: 10.5rem;
		}
	}
`;
const MapContainer = styled.div`
	margin-top: 3.125rem;
	height: 18.75rem;
	width: 100%;

	${mediaMd} {
		height: 60.125rem;
	}
`;

interface MapProps {
	data: DataTO;
}

interface MarkerProps {
	lat: string | number;
	lng: string | number;
}

const Marker: FC<MarkerProps> = () => (
	<MarkerContainer>
		<MapMarker />
	</MarkerContainer>
);

export const Map: FC<MapProps> = memo(({data}) => (
	<MapContainer>
		<GoogleMapReact
			bootstrapURLKeys={{
				key: data.map.key,
				v: '3.38',
			}}
			defaultCenter={data.map.coords}
			defaultZoom={data.map.zoom}
			options={{
				disableDefaultUI: true,
				styles: [{
					stylers: [{
						saturation: -100,
					}],
				}],
			}}
		>
			<Marker
				lat={data.map.coords.lat}
				lng={data.map.coords.lng}
			/>
		</GoogleMapReact>
	</MapContainer>
));
