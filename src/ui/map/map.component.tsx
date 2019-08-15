import * as React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import {FC, memo} from 'react';
import GoogleMapReact from 'google-map-react';
import styled from '@emotion/styled';
import {MapTO} from '../../view-models/data.view-model';
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

const mapOptions = {
	disableDefaultUI: true,
	styles: [
		{
			stylers: [
				{
					saturation: -100,
				},
			],
		},
	],
};

const mapQuery = graphql`
	query MapQuery {
		dataJson {
			map {
				coords {
					lat
					lng
				}
				key
				zoom
			}
		}
	}
`;

export const Map: FC = memo(() => {
	const {dataJson: data} = useStaticQuery(mapQuery);
	const map: MapTO = data.map;
	const bootstrapURLKeys = {
		key: map.key,
		v: '3.38',
	};

	return (
		<MapContainerStyled>
			<GoogleMapReact bootstrapURLKeys={bootstrapURLKeys} defaultCenter={map.coords} defaultZoom={map.zoom} options={mapOptions}>
				<Marker lat={map.coords.lat} lng={map.coords.lng} />
			</GoogleMapReact>
		</MapContainerStyled>
	);
});
