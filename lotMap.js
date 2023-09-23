// const apiKey = "3199961a1db6540d9bb6d68370f2cde6";
// const userId = "642f15efff8d760007133151";
// const polyId = "64302d80176fe647b64424ce";   //Only Data Acquisition Land
// const polyId = "650b11ef64f6659260c8ce76";   //Entire Titan Farm

const lat = -81.71086128571427;
const lon = 33.844481428571434;
const startDate = "1500336000"; // Jan 10, 2018 - 1515542400
const endDate = "1508976000"; // Aug 23, 2022 - 1661212800
const stateCode = "US-SC";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzdGFoc2VlbiIsImEiOiJjbGdsMms5eWswMjY4M2dwaHByN3JzdnBkIn0.SiEKKThwKQyoP5GbaJ-4Ug";

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/satellite-v9", // style URL
  center: [lat, lon], // starting position [lng, lat]
  zoom: 18,
  pitch: 60, // pitch in degrees
  bearing: -60, // bearing in degrees
});

const size = 120;

// This implements `StyleImageInterface`
// to draw a pulsing dot icon on the map.
const pulsingDot = {
  width: size,
  height: size,
  data: new Uint8Array(size * size * 4),

  // When the layer is added to the map,
  // get the rendering context for the map canvas.
  onAdd: function () {
    const canvas = document.createElement("canvas");
    canvas.width = this.width;
    canvas.height = this.height;
    this.context = canvas.getContext("2d");
  },
  //
  // Call once before every frame where the icon will be used.
  render: function () {
    const duration = 1000;
    const t = (performance.now() % duration) / duration;

    const radius = (size / 2) * 0.3;
    const outerRadius = (size / 2) * 0.7 * t + radius;
    const context = this.context;

    // Draw the outer circle.
    context.clearRect(0, 0, this.width, this.height);
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, outerRadius, 0, Math.PI * 2);
    context.fillStyle = `rgba(255, 200, 200, ${1 - t})`;
    context.fill();

    // Draw the inner circle.
    context.beginPath();
    context.arc(this.width / 2, this.height / 2, radius, 0, Math.PI * 2);
    context.fillStyle = "rgba(255, 100, 100, 1)";
    context.strokeStyle = "white";
    context.lineWidth = 2 + 4 * (1 - t);
    context.fill();
    context.stroke();

    // Update this image's data with data from the canvas.
    this.data = context.getImageData(0, 0, this.width, this.height).data;

    // Continuously repaint the map, resulting
    // in the smooth animation of the dot.
    map.triggerRepaint();

    // Return `true` to let the map know that the image was updated.
    return true;
  },
};

R1T1_lat = -81.71302;
R1T1_lon = 33.84515;

R2T5_lat = -81.71292;
R2T5_lon = 33.84514;

R3T10_lat = -81.71266;
R3T10_lon = 33.84522;

R4T12_lat = -81.71251;
R4T12_lon = 33.8452;

R5T15_lat = -81.71237;
R5T15_lon = 33.84522;

R6T20_lat = -81.71211;
R6T20_lon = 33.84529;

R6T25_lat = -81.71186;
R6T25_lon = 33.84542;

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker({
  scale: 0.6,
})
  .setLngLat([R1T1_lat, R1T1_lon])
  .setPopup(new mapboxgl.Popup().setHTML("<h3>Row-1, Tree-1</h3>")) // add popup
  .addTo(map);

const marker2 = new mapboxgl.Marker({
  scale: 0.6,
})
  .setLngLat([R2T5_lat, R2T5_lon])
  .setPopup(new mapboxgl.Popup().setHTML("<h3>Row-1, Tree-2</h3>")) // add popup
  .addTo(map);

const marker3 = new mapboxgl.Marker({
  scale: 0.6,
})
  .setLngLat([R3T10_lat, R3T10_lon])
  .setPopup(new mapboxgl.Popup().setHTML("<h3>Row-1, Tree-3</h3>")) // add popup
  .addTo(map);

const marker4 = new mapboxgl.Marker({
  scale: 0.6,
})
  .setLngLat([R4T12_lat, R4T12_lon])
  .setPopup(new mapboxgl.Popup().setHTML("<h3>Row-1, Tree-4</h3>")) // add popup
  .addTo(map);

const marker5 = new mapboxgl.Marker({
  scale: 0.6,
})
  .setLngLat([R5T15_lat, R5T15_lon])
  .setPopup(new mapboxgl.Popup().setHTML("<h3>Row-2, Tree-1</h3>")) // add popup
  .addTo(map);

const marker6 = new mapboxgl.Marker({
  scale: 0.6,
})
  .setLngLat([R6T20_lat, R6T20_lon])
  .setPopup(new mapboxgl.Popup().setHTML("<h3>Row-2, Tree-2</h3>")) // add popup
  .addTo(map);

const marker7 = new mapboxgl.Marker({
  scale: 0.6,
})
  .setLngLat([R6T25_lat, R6T25_lon])
  .setPopup(new mapboxgl.Popup().setHTML("<h3>Row-2, Tree-3</h3>")) // add popup
  .addTo(map);

map.on("load", () => {
  map.addImage("pulsing-dot", pulsingDot, { pixelRatio: 2 });

  map.addSource("dot-point", {
    type: "geojson",
    data: {
      type: "FeatureCollection",
      features: [
        {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [lat, lon], // icon position [lng, lat]
          },
          properties: {
            title: "Advent Digi-Node",
          },
        },
      ],
    },
  });
  map.addLayer({
    id: "layer-with-pulsing-dot",
    type: "symbol",
    source: "dot-point",
    layout: {
      "icon-image": "pulsing-dot",
    },
  });

  // Add a data source containing GeoJSON data.
  map.addSource("titan-farm", {
    type: "geojson",
    data: {
      type: "Feature",
      geometry: {
        type: "Polygon",
        // These coordinates outline titan-farm.
        coordinates: [
          [
            [-81.713231, 33.845076],
            [-81.711083, 33.84319],
            [-81.710656, 33.843451],
            [-81.710586, 33.843818],
            [-81.709953, 33.844199],
            [-81.710084, 33.845146],
            [-81.710436, 33.84649],
            [-81.713231, 33.845076],
          ],
        ],
      },
    },
  });

  //   // Add a new layer to visualize the polygon.
  map.addLayer({
    id: "titan-farm",
    type: "fill",
    source: "titan-farm", // reference the data source
    layout: {},
    paint: {
      "fill-color": "#0080ff", // blue color fill
      "fill-opacity": 0.1,
    },
  });
  // Add a black outline around the polygon.
  map.addLayer({
    id: "outline",
    type: "line",
    source: "titan-farm",
    layout: {},
    paint: {
      "line-color": "#000",
      "line-width": 3,
    },
  });
});

// // Add a scale control to the map
// map.addControl(new mapboxgl.ScaleControl());

// map.on("load", () => {
//   map.addSource("places", {
//     type: "geojson",
//     data: {
//       type: "FeatureCollection",
//       features: [
//         {
//           type: "Feature",
//           properties: {
//             description:
//               "<strong>Advent Digi-Node-1</strong><p>Lat = -81.71, <br> Lon = 33.84, <br> Battery = 95% </p>",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [lat, lon],
//           },
//         },
//       ],
//     },
//   });

//   map.addLayer({
//     id: "places",
//     type: "circle",
//     source: "places",
//     paint: {
//       "circle-color": "#4264fb",
//       "circle-radius": 6,
//       "circle-stroke-width": 2,
//       "circle-stroke-color": "#ffffff",
//     },
//   });

//   const popup = new mapboxgl.Popup({
//     closeButton: false,
//     closeOnClick: false,
//   });

//   map.on("mouseenter", "places", (e) => {
//     // Change the cursor style as a UI indicator.
//     map.getCanvas().style.cursor = "pointer";

//     // Copy coordinates array.
//     const coordinates = e.features[0].geometry.coordinates.slice();
//     const description = e.features[0].properties.description;

//     // Ensure that if the map is zoomed out such that multiple
//     // copies of the feature are visible, the popup appears
//     // over the copy being pointed to.
//     while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
//       coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
//     }

//     // Populate the popup and set its coordinates
//     // based on the feature found.
//     popup.setLngLat(coordinates).setHTML(description).addTo(map);
//   });

//   map.on("mouseleave", "places", () => {
//     map.getCanvas().style.cursor = "";
//     popup.remove();
//   });
// });
