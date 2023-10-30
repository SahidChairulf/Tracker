<template>
  <div>
    <div ref="map" style="height: 750px; z-index: 0px;" class="w-full relative">
      <!-- Tombol Pindah Lokasi -->
      <button @click="toggleLocation" :disabled="scanning" style="z-index: 1;" class="absolute bottom-10 left-10 bg-green-500 hover:bg-green-800 font-bold uppercase text-white px-4 py-2 rounded">
        {{ currentLocation === 1 ? 'Pindah ke Lokasi 2' : 'Pindah ke Lokasi 1' }}
      </button>
      <!-- Tombol Scan Area -->
      <button  :disabled="scanning" style="z-index: 1;" class="absolute bottom-20 left-10 bg-blue-500 hover:bg-blue-800 font-bold uppercase text-white px-4 py-2 rounded">
        Scan Area
      </button>
      <!-- Animasi hasil pemindaian -->
      <div v-if="scanning" class="absolute top-10 left-10 bg-blue-500 animate-pulse p-2 rounded transition duration-500">
        <p class="text-white font-semibold">Pemindaian...</p>
      </div>
    </div>
  </div>
</template>

<script>
import maplibregl from 'maplibre-gl'

export default {
  data() {
    return {
      map: null,
      currentLocation: 1,
      locations: [
        [107.6176, -6.9175], // Lokasi 1
        [107.51419142, -7.54135495]  // Lokasi 2
      ],
      markers: [], // Menggunakan array untuk menyimpan objek marker
      scanning: false, // Menandakan apakah sedang dilakukan pemindaian
    };
  },
  methods: {
    toggleLocation() {
      if (!this.scanning) {
        // Hapus semua marker yang ada
        this.removeMarkers();

        // Toggle between the two locations
        this.currentLocation = this.currentLocation === 1 ? 2 : 1;

        // Tambahkan marker sesuai lokasi saat ini
        const marker = new maplibregl.Marker()
          .setLngLat(this.locations[this.currentLocation - 1])
          .addTo(this.map);

        const popupContent = document.createElement("div");
        popupContent.className = "p-2 bg-white shadow-md rounded";
        popupContent.innerHTML = `<p class="text-lg font-semibold">Lokasi ${this.currentLocation}</p>`;

        const popup = new maplibregl.Popup({ offset: 25 })
          .setDOMContent(popupContent);

        marker.setPopup(popup);

        this.markers.push(marker);

        this.map.flyTo({
          center: this.locations[this.currentLocation - 1],
          zoom: 14,
          pitch: 60
        });
      }
    },
    scanLocation() {
      if (!this.scanning) {
        // Mulai animasi pemindaian
        this.scanning = true;

        // Simulasi hasil scan AI dengan nilai yang digenerate secara acak
        setTimeout(() => {
          const area = this.generateRandomValue(500, 5000); // Misalnya, nilai acak untuk area dalam m2 antara 500 dan 5000
          const harga = this.generateRandomValue(1000000, 5000000); // Misalnya, nilai acak untuk harga dalam Rupiah antara 1.000.000 dan 5.000.000
          const luas = this.generateRandomValue(10, 100);
          const kepadatan = Math.random() * 100; // Misalnya, nilai acak untuk luas lokasi dalam hektar antara 10 dan 100

          // Menampilkan hasil scan AI
          alert(`Hasil Pemindaian:\nArea: ${area} m2\nHarga: Rp ${harga}\nLuas Lokasi: ${luas} Ha\nBerhasil: ${kepadatan}%`);

          // Hentikan animasi pemindaian
          this.scanning = false;
        }, 2000);
      }
    },
    removeMarkers() {
      // Hapus semua marker yang ada
      for (const marker of this.markers) {
        marker.remove();
      }
      this.markers = [];
    },
    generateRandomValue(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  },
  mounted() {
    this.map = new maplibregl.Map({
      container: this.$refs.map,
      style: 'https://api.maptiler.com/maps/fe934f8f-2117-474c-95a4-1545dd573e72/style.json?key=SqVscEbtkOixWsSNLgYT',
      center: this.locations[0], // Set the initial center to Lokasi 1
      zoom: 12 // Anda bisa menyesuaikan level zoom sesuai kebutuhan
    });
  }
};
</script>
