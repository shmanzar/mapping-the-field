<template>
    <div id="mapbox-container"></div>

</template>


<script>
import mapboxgl from "mapbox-gl";

export default {
name: 'MapboxMap',
data() {
return {
  mb: null,
  marker1: null,
  marker2: null

}
},
props: {
map: Object,
// colorScale: Function,
// colorVar: String,
// colorDomain: Array

},
computed: {
//mapbox's own data-driven color styling
    mapboxFillColorSpec() {
return [
  "to-color", [
    "at", 
    [
      "index-of", 
      [
        "get", 
        this.colorVar
      ],
      [
        "literal",
        this.colorDomain
      ]
    ], 
    [
      "literal", 
      this.colorScale.range()
    ]
  ]
]
},

},
methods: {
setColorVar() {
this.mb.setPaintProperty('countries', 'fill-color', this.mapboxFillColorSpec)
},

},

mounted() {
// https://dev.to/hmintoh/how-to-mapbox-with-vue-js-2a34
mapboxgl.accessToken = process.env.VUE_APP_MAPBOX_TOKEN;

this.mb = new mapboxgl.Map({
  container: "mapbox-container",
  style: "mapbox://styles/smanzar/cki6j8dxf3o2p19trqspv7hoh",
  center: [-74.005966, 40.674129],
  zoom: 9,
  maxBounds: [
    [-74.513397,40.487693],
    [-73.656464,40.947232],
  ],
});
// Create a default Marker and add it to the map.
this.marker1 = new mapboxgl.Marker()
.setLngLat([-74.02504943180675, 40.63651311677057])
.addTo(this.mb);

this.marker2 = new mapboxgl.Marker()
.setLngLat([-73.9932981, 40.7336716])
.addTo(this.mb);

document.querySelector('.btn-br').addEventListener('click', () => {

this.mb.flyTo({
// These options control the ending camera position: centered at
// the target, at zoom level 9, and north up.
center: [-74.02504943180675, 40.63651311677057],
zoom: 16,
bearing: 0,

// this animation is considered essential with respect to prefers-reduced-motion
essential: true
});
});

document.querySelector('.btn-gv').addEventListener('click', () => {

this.mb.flyTo({
// These options control the ending camera position: centered at
// the target, at zoom level 9, and north up.
center: [-73.9932981, 40.7336716],
zoom: 16,
bearing: 0,

// this animation is considered essential with respect to prefers-reduced-motion
essential: true
});
});



// this.mb.on('load', () => {
//   this.mb.addSource("countryPaths", {
//     type: "geojson",
//     data: this.map
//   });

//   this.mb.addLayer({
//     id: 'countries',
//     type: 'fill',
//     source: 'countryPaths',
//     paint: {
//       "fill-opacity": 0.5,
//       "fill-color": this.mapboxFillColorSpec
//     }
//   })
// })
}
}
</script>
