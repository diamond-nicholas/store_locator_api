mapboxgl.accessToken =
  'pk.eyJ1IjoiZGlhbW9uZDE1NCIsImEiOiJjbDFzd2RqdW4wZXNpM2pxY3h4MDh2MWk5In0.o_DOW0jLjrCT73HY3zoHsg';
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  zoom: 9,
  center: [3.41903, 6.45638],
});

// Load map with stores
function loadMapi() {
  map.on('load', function () {
    map.addLayer({
      id: 'points',
      type: 'symbol',
      source: {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [
            {
              type: 'Feature',
              geometry: {
                type: 'Point',
                coordinates: [3.41903, 6.45638],
              },
              properties: {
                storeId: '0001',
                icon: 'shop',
              },
            },
          ],
        },
      },
      layout: {
        'icon-image': '{icon}-15',
        'icon-size': 1.5,
        'text-field': '{storeId}',
        'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
        'text-offset': [0, 0.9],
        'text-anchor': 'top',
      },
    });
  });
}

loadMapi();
