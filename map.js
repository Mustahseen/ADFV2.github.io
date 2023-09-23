const apiKey = "3199961a1db6540d9bb6d68370f2cde6";
const userId = "642f15efff8d760007133151";
const polyId = "64302d80176fe647b64424ce";

// const searchBox = document.getElementById("search-box");
// const searchButton = document.getElementById("search-button");

// console.log(searchBox.value);
// // const city = "Ridge Spring";
// const apiKey_OW = `7647b0013bcbde6e4dd409d68ca0f70f`;
// const currentWeatherCity_ApiURL = `https://api.openweathermap.org/data/2.5/weather?&units=imperial&q=`;

// async function getCoordinate(city) {
//   fetch(currentWeatherCity_ApiURL + city + `&appid=${apiKey_OW}`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
// }

// searchButton.addEventListener("click", () => {
//   getCoordinate(searchBox.value);
// });

const lat = -81.71086128571427;
const lon = 33.844481428571434;
const lat2 = -81.70626128571435;
const lon2 = 33.845481428571433;
const lat3 = -81.71296128571426;
const lon3 = 33.846281428571431;
const startDate = "1500336000";
const endDate = "1508976000";
const stateCode = "US-SC";

const apiUrl = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const pgApiUrl = `https://api.agromonitoring.com/agro/1.0/polygons?user_id=${userId}&appid=${apiKey}`;

const satImageApiUrl = `https://api.agromonitoring.com/agro/1.0/image/search?start=0&end=1&&polyid=${polyId}&coords=${lon},${lat}&appid=${apiKey}`;

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzdGFoc2VlbiIsImEiOiJjbGdsMms5eWswMjY4M2dwaHByN3JzdnBkIn0.SiEKKThwKQyoP5GbaJ-4Ug";

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/satellite-streets-v12", // style URL
  center: [lat, lon], // starting position [lng, lat]
  pitch: 40,
  bearing: 61,
  zoom: 15, // starting zoom
});

// Different Map Styles
// const layerList = document.getElementById("menu");
// const inputs = layerList.getElementsByTagName("input");

// for (const input of inputs) {
//   input.onclick = (layer) => {
//     const layerId = layer.target.id;
//     map.setStyle("mapbox://styles/mapbox/" + layerId);
//   };
// }

// Add the control to the map.
const geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
});

document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
console.log(document.getElementById("geocoder").value);

// document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
// console.log(document.getElementById("geocoder").value);
// Zoom and pan control on screen
// map.addControl(new mapboxgl.NavigationControl());

// map.on("load", () => {
//   addMarkers(map);
//   map.addSource("places", {
//     type: "geojson",
//     data: {
//       type: "FeatureCollection",
//       features: [
//         {
//           type: "Feature",
//           properties: {
//             description:
//               "<strong>Lot 1</strong><p>Peach type = Clingstone, <br> Variety = Gold Prince, <br> Area = 5 Acre, <br> Age =~ 5 years, <br> Trees =~ 750</p>",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [lat, lon],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               "<strong>Lot 2</strong><p>Peach type = Freestone, <br> Variety = Summer Gold, <br> Area = 4.5 Acre, <br> Age =~ 7 years, <br> Trees =~ 700</p>",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [lat2, lon2],
//           },
//         },
//         {
//           type: "Feature",
//           properties: {
//             description:
//               "<strong>Lot 3</strong><p>Peach type = Semi-freestone, <br> Variety = Blaze Prince, <br> Area = 9 Acre, <br> Age =~ 3 years, <br> Trees =~ 1400</p>",
//           },
//           geometry: {
//             type: "Point",
//             coordinates: [lat3, lon3],
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

//   // Create a popup, but don't add it to the map yet.
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

//   //   fechSatelliteDataAndMetadata(map);
// });

// // map.on("style.load", () => {
// //   map.addSource("mapbox-dem", {
// //     type: "raster-dem",
// //     url: "mapbox://mapbox.mapbox-terrain-dem-v1",
// //     tileSize: 512,
// //     maxzoom: 14,
// //   });
// //   // add the DEM source as a terrain layer with exaggerated height
// //   map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
// // });

// // Markers
// function addMarkers(map) {
//   const marker1 = new mapboxgl.Marker({
//     color: "red",
//   })
//     .setLngLat([lat, lon])
//     .setPopup(new mapboxgl.Popup().setHTML("<h3>Titan Farm, Lot 1</h3>"))
//     .addTo(map);

//   const marker2 = new mapboxgl.Marker({
//     color: "blue",
//   })
//     .setLngLat([lat2, lon2])
//     .setPopup(new mapboxgl.Popup().setHTML("<h3>Titan Farm, Lot 2</h3>"))
//     .addTo(map);

//   const marker3 = new mapboxgl.Marker({
//     color: "green",
//   })
//     .setLngLat([lat3, lon3])
//     .setPopup(new mapboxgl.Popup().setHTML("<h3>Titan Farm, Lot 3</h3>"))
//     .addTo(map);
// }

// // Map camera rotation

// map.on("style.load", () => {
//   map.setFog({}); // Set the default atmosphere style

//   // Add terrain
//   map.addSource("mapbox-dem", {
//     type: "raster-dem",
//     url: "mapbox://mapbox.mapbox-terrain-dem-v1",
//     tileSize: 512,
//     maxzoom: 5,
//   });
//   map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });
// });

// function updateCameraPosition(position, altitude, target) {
//   const camera = map.getFreeCameraOptions();

//   camera.position = mapboxgl.MercatorCoordinate.fromLngLat(position, altitude);
//   camera.lookAtPoint(target);

//   map.setFreeCameraOptions(camera);
// }

// let animationIndex = 0;
// let animationTime = 0.0;

// // wait for the terrain to load before starting animations
// map.once("idle", () => {
//   // linearly interpolate between two altitudes/positions based on time
//   const lerp = (a, b, t) => {
//     if (Array.isArray(a) && Array.isArray(b)) {
//       const result = [];
//       for (let i = 0; i < Math.min(a.length, b.length); i++)
//         result[i] = a[i] * (1.0 - t) + b[i] * t;
//       return result;
//     } else {
//       return a * (1.0 - t) + b * t;
//     }
//   };

//   const animations = [
//     {
//       duration: 60000.0,
//       animate: (phase) => {
//         const start = [lat2, lon2];
//         const end = [lat3, lon3];
//         const alt = [7.0, 6.0];

//         // interpolate camera position while keeping focus on a target lat/lng
//         const position = lerp(start, end, phase);
//         const altitude = lerp(alt[0], alt[1], phase);
//         const target = [lat, lon];

//         updateCameraPosition(position, altitude, target);
//       },
//     },
//   ];

//   let lastTime = 0.0;
//   function frame(time) {
//     animationIndex %= animations.length;
//     const current = animations[animationIndex];

//     if (animationTime < current.duration) {
//       // Normalize the duration between 0 and 1 to interpolate the animation
//       const phase = animationTime / current.duration;
//       current.animate(phase);
//     }

//     // Elasped time since last frame, in milliseconds
//     const elapsed = time - lastTime;
//     animationTime += elapsed;
//     lastTime = time;

//     if (animationTime > current.duration) {
//       animationIndex++;
//       animationTime = 0.0;
//     }

//     window.requestAnimationFrame(frame);
//   }

//   window.requestAnimationFrame(frame);
// });
