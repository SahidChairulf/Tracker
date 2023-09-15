<template>
    <div class="navbar">
      <!-- Navbar content -->
    </div>
  <div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark">
      <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" />
    </a>
    <div class="map" ref="mapContainer"></div>
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

    const initialState = { lng: 	107.609810, lat: 	-6.914744, zoom: 12 };
    const apiKey = 'A6n9i2KWbntxzdZIQKze';

    onMounted(() => {
      map.value = markRaw(
        new Map({
          container: mapContainer.value,
          style: `https://api.maptiler.com/maps/hybrid/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
        })
      );
    });

    onUnmounted(() => {
      map.value?.remove();
    });

    return {
      map,
      mapContainer,
      apiKey,
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
  height: calc(100vh - 77px); /* Sesuaikan dengan tinggi navbar */
}

.map {
  position: fixed;
  top: 65,2px; /* Adjust for the fixed navigation bar's height */
  left: 0;
  width: 100%;
  height: calc(100vh - 50px); /* Adjust for the fixed navigation bar's height */
  z-index: 0;
}


.watermark {
  position: absolute;
  left: 10px;
  bottom: 10px;
  z-index: 700;
}
</style>
