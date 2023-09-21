<template>
  <div class="navbar">
    <!-- Navbar content -->
  </div>
  <div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark">
      <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" />
    </a>
    <div class="map" ref="mapContainer"></div>
    <button
      @click="zoomToCity"
      class="zoom-to-city-button rounded-full text-base bg-[#9EB384] text-gray-900 hover:text-gray-200 absolute top-5 left-5 hover:bg-[#435334]"
    >
      Lihat Detail Kota
    </button>
  </div>
</template>

<script>
import { Map } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';

export default {
  name: 'Map',
  setup() {
    const mapContainer = shallowRef(null);
    const map = shallowRef(null);
    const marker = shallowRef(null); // Added marker reference
    const popup = shallowRef(null); // Added popup reference

    const initialState = { lng: 107.60981, lat: -6.914744, zoom: 12 };
    const apiKey = 'A6n9i2KWbntxzdZIQKze';

    // Data informasi kota
    const cityInfo = {
      name: 'Bandung',
      lat: -6.914744,
      lng: 107.60981,
    };

    onMounted(() => {
      map.value = markRaw(
        new Map({
          container: mapContainer.value,
          style: `https://api.maptiler.com/maps/hybrid/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
        })
      );

      // Add a marker to the map
      marker.value = markRaw(
        new maplibregl.Marker()
          .setLngLat([cityInfo.lng, cityInfo.lat])
          .addTo(map.value)
      );

      // Create a popup with city description
      popup.value = markRaw(new maplibregl.Popup().setHTML(`Detail Kota: ${cityInfo.name}<br>Lat: ${cityInfo.lat}, Lng: ${cityInfo.lng}`));

      // Attach the popup to the marker
      marker.value.setPopup(popup.value);
    });

    // Method for zooming to the city and showing the popup
    const zoomToCity = () => {
      map.value.flyTo({
        center: [cityInfo.lng, cityInfo.lat],
        zoom: 15,
        essential: true,
      });

      // Open the popup when zooming to the city
      popup.value.addTo(map.value);
    };

    onUnmounted(() => {
      map.value?.remove();
    });

    return {
      map,
      mapContainer,
      apiKey,
      zoomToCity,
    };
  },
};
</script>


<style scoped>
.navbar {
  background-color: #435334;
  color: #fff;
  padding: 25px;
}

.map-wrap {
  position: relative;
  width: 100%;
  height: calc(100vh - 77px);
  /* Sesuaikan dengan tinggi navbar */
}

.map {
  position: fixed;
  top: 65px;
  /* Sesuaikan dengan tinggi navbar */
  left: 0;
  width: 100%;
  height: calc(100vh - 50px);
  /* Sesuaikan dengan tinggi navbar */
  z-index: 0;
}

.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 700;
}

/* Tambahkan styling khusus untuk tombol "Lihat Detail Kota" */
.zoom-to-city-button {
  padding: 10px 20px;
  /* Animasi perubahan warna latar belakang */
}</style>

