import * as React from 'react';
import {FC, memo} from 'react';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import {DataTO} from '../../view-models/data.view-model';
import {mediaMd} from '../../utils/css.utils';
import {Marker} from './marker.component';


const MapContainerStyled = styled.div`
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

const mapOptions = {
	disableDefaultUI: true,
	styles: [{
		stylers: [{
			saturation: -100,
		}],
	}],
};

export const Map: FC<MapProps> = memo(({data}) => {
	const bootstrapURLKeys = {
		key: data.map.key,
		v: '3.38',
	};

	return (
		<MapContainerStyled>
			<GoogleMapReact
				bootstrapURLKeys={bootstrapURLKeys}
				defaultCenter={data.map.coords}
				defaultZoom={data.map.zoom}
				options={mapOptions}
			>
				<Marker
					lat={data.map.coords.lat}
					lng={data.map.coords.lng}
				/>
			</GoogleMapReact>
		</MapContainerStyled>
	);
});
