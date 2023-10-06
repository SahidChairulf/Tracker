<template>
  <div>
    <div class="navbar">
      <!-- Navbar content -->
    </div>
    <div class="map-wrap">
      <!-- Map -->
      <div id="map"></div>
      <a href="https://www.maptiler.com" class="watermark">
        <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" />
      </a>
      <div class="map" ref="mapContainer"></div>
      <button @click="zoomToCity"
        class="zoom-button rounded-full text-base bg-[#9EB384] text-gray-900 hover:text-gray-200 absolute top-5 left-5 hover:bg-[#435334]">
        See Avaliable Areas
      </button>
    </div>
  </div>
</template>

<script>
import maplibregl from 'maplibre-gl'

export default {
  name: 'MapView',
  data() {
    return {
      showInfoBox: false,
      popupInfo: null,
      currentIndex: 0, // Add this line to keep track of the current polygon index
    }
  },
  methods: {
    toggleInfoBox() {
      this.showInfoBox = !this.showInfoBox;
    },
    handlePopupButtonClick(action) {
      if (action === 'next' && this.currentIndex < this.features.length - 1) {
        this.currentIndex++;
      } else if (action === 'previous' && this.currentIndex > 0) {
        this.currentIndex--;
      }
      this.showPopup();
    },

    showPopupWithIndex(action) {
      if (action === 'next') {
        this.currentIndex = (this.currentIndex + 1) % this.features.length;
      } else if (action === 'previous') {
        this.currentIndex = (this.currentIndex - 1 + this.features.length) % this.features.length;
      }

      this.showPopup();
    },

    showPopup() {
      const feature = this.features[this.currentIndex];
      this.popupInfo = {
        name: feature.properties.name,
        diameter: feature.properties.Diameter,
        price: feature.properties.Price,
      };

      const popupContent = `
    <div class="custom-popup-content">
      <div class="popup-title">${this.popupInfo.name}</div>
      <div class="popup-info"><strong>Diameter:</strong> ${this.popupInfo.diameter}</div>
      <div class="popup-info"><strong>Price:</strong> ${this.popupInfo.price}</div>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="showPopupWithIndex('next')">Next</button>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="showPopupWithIndex('previous')">Previous</button>
    </div>
  `;

      const customStyles = `
    .custom-popup-content {
      font-family: Arial, sans-serif;
      background-color: #fff;
      padding: 50px; /* Increase the padding to make the popup larger */
      border-radius: 5px;
    }
    .popup-title {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .popup-info {
      margin-bottom: 5px;
    }
    .popup-button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 8px 12px;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

      new maplibregl.Popup()
        .setLngLat(e.lngLat)
        .setHTML(popupContent)
        .addTo(map);

      const styleElement = document.createElement('style');
      styleElement.type = 'text/css';
      styleElement.appendChild(document.createTextNode(customStyles));
      document.head.appendChild(styleElement);
    },

  },
  mounted() {
    const key = '7HAWfyw9xM3MO7mHYE0w';
    const initialState = { lng: 107.60981, lat: -6.914744, zoom: 12 }

    const map = new maplibregl.Map({
      container: 'map',
      style: `https://api.maptiler.com/maps/hybrid/style.json?key=${key}`,
      center: [initialState.lng, initialState.lat],
      zoom: initialState.zoom,
      hash: true
    });

    map.on('load', function () {
      map.addSource('avaliable_areas', {
        'type': 'geojson',
        'data': { "type": "FeatureCollection", "features": [{ "type": "Feature", "id": 1, "geometry": { "type": "Polygon", "coordinates": [[[111.55072191, -3.0271876], [111.52542145, -2.98086716], [111.49028192, -2.94998578], [111.43405867, -2.92471856], [111.38908007, -2.92191106], [111.35815728, -2.90787343], [111.28787822, -2.93454477], [111.20213777, -2.98928921], [111.3497238, -3.00894039], [111.55072191, -3.0271876]]] }, "id": "7d5a22a0-85ad-4604-8867-75f1b3d6e4f6", "properties": { "name": "Area A", "Price": "200", "Diameter": "2 Hectare" } }, { "type": "Feature", "id": 2, "geometry": { "type": "Polygon", "coordinates": [[[107.69021356, -7.66918242], [107.71454986, -7.6658935], [107.78313399, -7.68014529], [107.83623138, -7.70535881], [107.83623138, -7.7327631], [107.69021356, -7.66918242]]] }, "id": "3b712b43-838c-49ec-9d79-268d311ac642", "properties": { "name": "Area B", "Price": "100", "Diameter": "1 Hectare" } }] },
      });

      map.addLayer({
        'id': 'polygons',
        'type': 'fill',
        'source': 'avaliable_areas',
        'layout': {},
        'paint': {
          'fill-color': '#FFAA01',
          'fill-opacity': 0.5
        }
      });

      map.addLayer({
        'id': 'outline',
        'type': 'line',
        'source': 'avaliable_areas',
        'layout': {},
        'paint': {
          'line-color': '#F3A040',
          'line-width': 2
        }
      });

      map.on('click', 'polygons', function (e) {
  this.popupInfo = {
    name: e.features[0].properties.name,
    diameter: e.features[0].properties.Diameter,
    price: e.features[0].properties.Price,
  };

  const coordinates = e.features[0].geometry.coordinates[0];
const centerLng = coordinates.reduce((sum, coord) => sum + coord[0], 0) / coordinates.length;
const centerLat = coordinates.reduce((sum, coord) => sum + coord[1], 0) / coordinates.length;

const zoom = 11; // Sesuaikan dengan kebutuhan
const pitch = 60; // Sesuaikan dengan kebutuhan

let initialBearing = 0; // Initial bearing angle
const duration = 6000; // Durasi animasi dalam milidetik
const startTime = performance.now(); // Timestamp when animation starts

// Create a function for the animation
// Create a function for the animation with interpolation
function animate() {
  const currentTime = performance.now();
  const elapsedTime = currentTime - startTime;

  if (elapsedTime < duration) {
    const progress = elapsedTime / duration;
    
    // Interpolate center, zoom, pitch, and bearing
    const interpolatedCenterLng = centerLng;
    const interpolatedCenterLat = centerLat;
    const interpolatedZoom = zoom;
    const interpolatedPitch = pitch;
    const interpolatedBearing = initialBearing + (progress * 360);

    map.easeTo({
      center: [interpolatedCenterLng, interpolatedCenterLat],
      zoom: interpolatedZoom,
      pitch: interpolatedPitch,
      bearing: interpolatedBearing,
    });

    // Request the next frame of animation
    requestAnimationFrame(animate);
  } else {
    // Animation is complete
    map.easeTo({
      center: [centerLng, centerLat],
      zoom: zoom,
      pitch: pitch,
      bearing: initialBearing + (progress * 360), // Rotate back to the initial bearing
    });
  }
}

// Start the animation
requestAnimationFrame(animate);

  const popupContent = `
    <div class="custom-popup-content w-auto h-auto">
      <div class="popup-title">${this.popupInfo.name}</div>
      <div class="popup-info"><strong>Diameter:</strong> ${this.popupInfo.diameter}</div>
      <div class="popup-info"><strong>Price:</strong> ${this.popupInfo.price}</div>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="showPopupWithIndex('next')">Next</button>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" @click="showPopupWithIndex('previous')">Previous</button>
    </div>
  `;

  const customStyles = `
    .custom-popup-content {
      font-family: Arial, sans-serif;
      background-color: #fff;
      radius
      padding: 100px; /* Increase the padding to make the popup larger */
      border-radius: 5px;
    }
    .popup-title {
      font-weight: bold;
      font-size: 18px;
      margin-bottom: 10px;
    }
    .popup-info {
      margin-bottom: 5px;
    }
    .popup-button {
      background-color: #007bff;
      color: #fff;
      border: none;
      padding: 9px 12px;
      border-radius: 5px;
      cursor: pointer;
      margin-right: 10px;
    }
  `;

  new maplibregl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(popupContent)
    .addTo(map);

  const styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(customStyles));
  document.head.appendChild(styleElement);
}.bind(this));


      map.on('error', function (err) {
        throw new Error("To load the map, you must replace YOUR_MAPTILER_API_KEY_HERE first, see README");
      });
    });
  }
}
</script>

<style scoped>
@import url(https://cdn.maptiler.com/maplibre-gl-js/v2.2.0-pre.2/maplibre-gl.css);

.navbar {
  background-color: #435334;
  color: #fff;
  padding: 25px;
}

.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh - 77px);
}

#map {
  position: fixed;
  top: 65px;
  left: 0;
  width: 100%;
  height: calc(100vh - 50px);
  z-index: 0;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 700;
}

.zoom-button {
  padding: 10px 20px;
}

.toggle-button {
  padding: 10px 20px;
}
</style>