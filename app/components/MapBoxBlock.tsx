import { Marker } from 'react-map-gl';
import Map from 'react-map-gl';
import { useState } from 'react';

export const MapBoxBlock = () => {
	const [settings, setSettings] = useState({
		scrollZoom: true,
		boxZoom: true,
		dragRotate: true,
		dragPan: true,
		keyboard: true,
		doubleClickZoom: true,
		touchZoomRotate: true,
		touchPitch: true,
		AttributionControl: false,
		minZoom: 0,
		maxZoom: 20,
		minPitch: 0,
		maxPitch: 85,
	});

	const initialViewState = {
		latitude: 52.3716892,
		longitude: 16.8983987,
		zoom: 10,
		bearing: 0,
		pitch: 0,
	};

	return (
		<div className='w-full h-full bg-[#2C2C2E] col-span-2 sm:row-span-1 row-span-2 rounded-[2rem] overflow-hidden'>
			<Map
				initialViewState={initialViewState}
				{...settings}
				mapStyle='mapbox://styles/mapbox/dark-v9'
				mapboxAccessToken={'pk.eyJ1IjoidnZhY2llaiIsImEiOiJjbHk0cHRmYnAwNHFuMmpyM2RrNThtaGtrIn0.WgdfqjM7jnpSzxpCe_Gxbw'}>
				<Marker latitude={52.3716892} longitude={16.8983987}></Marker>
			</Map>
		</div>
	);
};
