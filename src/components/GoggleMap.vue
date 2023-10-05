<template>
  <div class="navbar">
    <!-- Navbar content -->
  </div>
  <div class="map-wrap">
    <a href="https://www.maptiler.com" class="watermark">
      <img src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" />
    </a>
    <div class="map" ref="mapContainer"></div>
    <button @click="zoomToCity"
      class="zoom-to-city-button rounded-full text-base bg-[#9EB384] text-gray-900 hover:text-gray-200 absolute top-5 left-5 hover:bg-[#435334]">
      Lihat Detail Kota
    </button>
    

    <button @click="toggleInfoBox" data-modal-target="staticModal" data-modal-toggle="staticModal"
      class="zoom-to-city-button toggle-button rounded-full text-base bg-[#9EB384] text-gray-900 hover:text-gray-200 absolute bottom-5 right-5 hover:bg-[#435334]">
      Information
    </button>
    <!-- Main modal -->
<div id="staticModal" data-modal-backdrop="static" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="relative w-full max-w-2xl max-h-full">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                    Static modal
                </h3>
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="staticModal">
                    <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                    </svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6 info-box-right">
             
            </div>
            <div class="p-6 space-y-6 right-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-arrow-right-square-fill" viewBox="0 0 16 16">
                <path d="M0 14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12zm4.5-6.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5a.5.5 0 0 1 0-1z"/>
              </svg>
              <span class="hidden">arrow</span>
            </div>
            <!-- Modal footer -->
            <div class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button data-modal-hide="staticModal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                <button data-modal-hide="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
            </div>
        </div>
    </div>
</div>
  </div>

</template>

<script>
import { Map } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';

export default {
  name: 'Map',

  data() {
    return {
      showInfoBox: false
    }
  },

  setup() {
    const mapContainer = shallowRef(null);
    const map = shallowRef(null);
    const initialState = { lng: 107.60981, lat: -6.914744, zoom: 12 };
    const apiKey = 'A6n9i2KWbntxzdZIQKze';

    // // Data informasi kota
    // const cityInfo = {
    //   name: 'Bandung',
    //   lat: -6.914744,
    //   lng: 107.60981,
    // };

    onMounted(() => {
      map.value = markRaw(
        new Map({
          container: mapContainer.value,
          style: `https://api.maptiler.com/maps/hybrid/style.json?key=${apiKey}`,
          center: [initialState.lng, initialState.lat],
          zoom: initialState.zoom,
        })
      );

      map.value.on('load', function () {
        map.value.addSource('cat_teritories', {
          'type': 'geojson',
          'data': { "type": "FeatureCollection", "features": [{ "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[111.55072191, -3.0271876], [111.52542145, -2.98086716], [111.49028192, -2.94998578], [111.43405867, -2.92471856], [111.38908007, -2.92191106], [111.35815728, -2.90787343], [111.28787822, -2.93454477], [111.20213777, -2.98928921], [111.3497238, -3.00894039], [111.55072191, -3.0271876]]] }, "id": "7d5a22a0-85ad-4604-8867-75f1b3d6e4f6", "properties": { "name": "Area A", "Price": "200", "Diameter": "2 Hectare" } }, { "type": "Feature", "geometry": { "type": "Polygon", "coordinates": [[[107.69021356, -7.66918242], [107.71454986, -7.6658935], [107.78313399, -7.68014529], [107.83623138, -7.70535881], [107.83623138, -7.7327631], [107.69021356, -7.66918242]]] }, "id": "3b712b43-838c-49ec-9d79-268d311ac642", "properties": { "name": "Area B", "Price": "100", "Diameter": "1 Hectare" } }] },
        });

        map.value.addLayer({
          'id': 'polygons',
          'type': 'fill',
          'source': 'cat_teritories',
          'layout': {},
          'paint': {
            'fill-color': '#FFAA01',
            'fill-opacity': 0.5
          }
        });

        map.value.addLayer({
          'id': 'outline',
          'type': 'line',
          'source': 'cat_teritories',
          'layout': {},
          'paint': {
            'line-color': '#F3A040',
            'line-width': 2
          }
        });

        map.value.on('click', 'polygons', function (e) {
          const infoBoxRight = document.querySelector('.info-box-right');
          infoBoxRight.innerHTML = 
          `<h2>Informasi</h2>
          <div>
          <strong>Name:</strong> ${e.features[0].properties.name}
           </div>
          <div>
            <strong>Diameter:</strong> ${e.features[0].properties.Diameter}
          </div>
          <div>
          <strong>Price:</strong> ${e.features[0].properties.Price}
          </div>`;
        });


      });
    });

    const zoomToCity = () => {
    const cityCoordinates = [111.35815728, -2.90787343]; // Replace with your city's coordinates

    map.value.flyTo({
    center: cityCoordinates,
    zoom: 10,
    essential: true,
    speed: 1.5, // Animation speed (adjust as needed)
    });
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

  methods: {
    toggleInfoBox() {
      this.showInfoBox = !this.showInfoBox;
    }
  }
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
