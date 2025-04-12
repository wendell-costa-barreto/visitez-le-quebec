import React, { useRef, useEffect, useState } from 'react';
import * as maptilersdk from '@maptiler/sdk';
import "@maptiler/sdk/dist/maptiler-sdk.css";
import './Map.css';

// Set your Maptiler API key
maptilersdk.config.apiKey = '196NRrAl6ge8XCjgxs6s';

export default function Map() {
    const mapContainer = useRef(null);
    const map = useRef(null);

    // State to store the currently selected city's name
    const [selectedCity, setSelectedCity] = useState("Visitez le Quebec");

    // Quebec region coordinates
    const quebec = { lng: -71.2082, lat: 46.8139 }; // Quebec City coordinates
    const zoom = 7;

    // Define bounding box for Quebec (southwest and northeast corners)
    const bounds = [
        [-79.7624, 45.0], // Southwest corner (approx.)
        [-57.0, 53.0]     // Northeast corner (approx.)
    ];

    // List of markers with their names and coordinates
    const locations = [
        { name: "Quebec City", coords: { lng: -71.2082, lat: 46.8139 } },
        { name: "Montreal", coords: { lng: -73.5673, lat: 45.5017 } },
        { name: "Charlevoix", coords: { lng: -70.5458, lat: 47.5303 } },
        { name: "Saguenay", coords: { lng: -71.0833, lat: 48.4168 } },
        { name: 'Ottawa-Gatineau', coords: { lng: -75.6969, lat: 45.4215 } },
        { name: 'Charlottetown', coords: { lng: -63.0606, lat: 46.2803 } },
        { name: 'Gaspé', coords: { lng: -63.6000, lat: 48.4000 } },
        { name: 'Laval', coords: { lng: -73.6833, lat: 45.6167 } }
    ];

    // Set your MapTiler API key

    useEffect(() => {
        if (map.current) return;

        map.current = new maptilersdk.Map({
            container: mapContainer.current,
            style: maptilersdk.MapStyle.STREETS,
            center: [quebec.lng, quebec.lat],
            zoom: zoom,
            maxBounds: bounds
        });

        // Add markers to the map
        locations.forEach(location => {
            const marker = new maptilersdk.Marker()
                .setLngLat([location.coords.lng, location.coords.lat])
                .setPopup(new maptilersdk.Popup().setText(location.name))
                .addTo(map.current);

            marker.getElement().addEventListener('click', () => {
                setSelectedCity(location.name);
            });
        });
    }, [quebec.lng, quebec.lat, zoom, bounds, locations]);



    return (
        <div className="map-wrap">
            <div ref={mapContainer} className="map" />
        </div>
    );
}

