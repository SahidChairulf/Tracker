<!-- <template> 
    <div ref="globeDiv">
        <div>
            asass
        </div>
    </div>
    
  </template>
  
  <script>
  import Globe from "globe.gl";
  import { ref, onMounted } from "vue";
  
  export default {
    setup() {
      const globeDiv = ref(null);
  
      onMounted(() => {
        const myGlobe = Globe();
        myGlobe(globeDiv.value).globeImageUrl(
          "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        );
      });
  
      return {
        globeDiv,
      };
    },
  };
  </script> -->
<template>
  <div id="earth_div" class="bg-gray-900"></div>
</template>
<script>
function initialize() {
  var earth = new WE.map('earth_div');
  WE.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(earth);

  var marker = WE.marker([50.9759239, -1.1605128]).addTo(earth);
  marker.bindPopup("<b>Deeper Blue</b><br /><span style='font-size:10px;color:#999'>Innovation Place Douglas Road Godalming Surrey GU7 1JX </span>", { maxWidth: 120, closeButton: false }).openPopup();

  var marker2 = WE.marker([12.9749974, 77.612144]).addTo(earth);
  marker2.bindPopup("<b>Deeper Blue Asia Pacific</b><br><span style='font-size:10px;color:#999'>Prestige Meridian 1, Unit 501, No.29, M.G. Road, Bangalore 560001</span>", { maxWidth: 150, closeButton: false }).openPopup();


  // Start a simple rotation animation
  var before = null;
  requestAnimationFrame(function animate(now) {
    var c = earth.getPosition();
    var elapsed = before ? now - before : 0;
    before = now;
    earth.setCenter([c[0], c[1] + 0.2 * (elapsed / 30)]);
    requestAnimationFrame(animate);
  });

}
window.onload = initialize;
</script>