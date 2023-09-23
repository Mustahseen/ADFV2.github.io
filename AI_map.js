const apiKey = "3199961a1db6540d9bb6d68370f2cde6";
const userId = "642f15efff8d760007133151";
// const polyId = "64302d80176fe647b64424ce";
const polyId = "650b29847a336691be3e1d30"; //Entire Titan Farm

const apiKey_OW = `7647b0013bcbde6e4dd409d68ca0f70f`;
// Import necessary libraries
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);

// const mapboxgl = require("mapbox-gl");
// const axios = require("axios");

const lat = -81.71086128571427;
const lon = 33.844481428571434;
const lat2 = -81.70626128571435;
const lon2 = 33.845481428571433;
const lat3 = -81.71296128571426;
const lon3 = 33.846281428571431;
const startDate = "1500336000";
const endDate = "1508976000";
const city = "Ridge Spring";

// const NDVI_start_date = "1515560400"; // Jan 10, 2018
const NDVI_start_date = "1660521600"; // Aug 15, 2022
const NDVI_end_date = "1661227200"; // Aug 23, 2022
const stateCode = "US-SC";

const usgsToken = `8PeLxIxGMZhIZiMTXTD51l3hZsmoB6mArY_gHJfewmU6z!AE1EGerHMkRfusCIov`;
// NDVI Data
const ndvi_API = `https://api.agromonitoring.com/agro/1.0/ndvi/history?polyid=${polyId}&start=1515626647&end=1661293447&appid=${apiKey}&units=imperial`;
// Sat Image Data

const openWeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey_OW}`;
const apiUrl = `https://api.agromonitoring.com/agro/1.0/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
const pgApiUrl = `https://api.agromonitoring.com/agro/1.0/polygons?user_id=${userId}&appid=${apiKey}`;
const ndviAPI = `https://api.agromonitoring.com/agro/1.0/ndvi/history?start=${NDVI_start_date}&end=${NDVI_end_date}&polyid=${polyId}&appid=${apiKey}`;
const satImageApiUrl = `https://api.agromonitoring.com/agro/1.0/image/search?start=${NDVI_start_date}&end=${NDVI_end_date}&&polyid=${polyId}&appid=${apiKey}`;

mapboxgl.accessToken =
  "pk.eyJ1IjoibXVzdGFoc2VlbiIsImEiOiJjbGdsMms5eWswMjY4M2dwaHByN3JzdnBkIn0.SiEKKThwKQyoP5GbaJ-4Ug";

const map = new mapboxgl.Map({
  container: "map", // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: "mapbox://styles/mapbox/dark-v11", // style URL
  center: [lat, lon], // starting position [lng, lat]
  // pitch: 40,
  // bearing: 61,
  zoom: 12, // starting zoom
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

// Zoom and pan control on screen
// map.addControl(new mapboxgl.NavigationControl());

//  Rain Layer
// const rainLayer = new RainLayer({
//   id: "rain",
//   source: "rainviewer",
//   scale: "noaa",
// });
// map.addLayer(rainLayer);

// // You can get the HTML text for the legend
// const legendHTML = rainLayer.getLegendHTML();

// // You can receive radar data refresh events
// // data.timestamp - Unix timestamp in seconds (UTC) when the data was generated
// rainLayer.on("refresh", (data) => {
//   console.log(data.timestamp);
// });

// Show addLayer

////////////////////NDVI Map Contour////////////////////////

function fetchNDVI_ImageData() {
  fetch(satImageApiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // const NDVImapSection = document.querySelector("#map");
      // const currentNdviImageURL = data[3].image.ndwi;
      //   const html = `
      //   <p>${currentNdviImageURL}</p>
      // `;

      //   NDVImapSection.innerHTML = html;

      map.on("load", () => {
        map.addSource("image", {
          type: "Polygon",
          url: data[0].image.ndwi,
          coordinates: [
            [-81.697676, 33.856626],
            [-81.729906, 33.861003],
            [-81.729568, 33.832439],
            [-81.69396, 33.83272],
            [-81.697676, 33.856626],
          ],
        });
        map.addLayer({
          id: "radar-layer",
          type: "raster",
          source: "image",
          paint: {
            "raster-fade-duration": 0,
          },
        });
      });

      // NDVImapSection.innerHTML = image;
      // createNDVIPlot(data);

      // // Process the NDVI data and create contours
      // const contours = processNDVIData(data);

      // // Add the contour data as a GeoJSON source
      // map.addSource("ndvi-contours", {
      //   type: "geojson",
      //   data: contours,
      // });

      // // Add a contour layer to the map
      // map.addLayer({
      //   id: "ndvi-contours",
      //   type: "line",
      //   source: "ndvi-contours",
      //   paint: {
      //     "line-color": "red", // Adjust the contour line color
      //     "line-width": 2, // Adjust the contour line width
      //   },
      // });
    })
    .catch((error) => {
      console.error("Error loading NDVI data:", error);
    });
}

fetchNDVI_ImageData();

map.on("load", () => {
  map.addSource("radar", {
    type: "image",
    url: currentNdviImageURL,
    coordinates: [
      [
        [-81.729952, 33.849036],
        [-81.718941, 33.83701],
        [-81.706834, 33.835292],
        [-81.69095, 33.841593],
        [-81.68667, 33.852416],
        [-81.703981, 33.863581],
        [-81.733528, 33.861957],
        [-81.729952, 33.849036],
      ],
    ],
  });
  map.addLayer({
    id: "radar-layer",
    type: "raster",
    source: "radar",
    paint: {
      "raster-fade-duration": 0,
    },
  });
});

// Function to process NDVI data (customize this as needed)
// function processNDVIData(data) {
//   // Process and transform the data into GeoJSON format
//   // Customize this function to match the structure of the Agromonitoring data.
//   // You may need to extract coordinates and NDVI values from the response.
//   const features = data.map((item) => ({
//     type: "Feature",
//     geometry: {
//       type: "Point",
//       coordinates: [item.lon, item.lat], // Replace with the correct coordinates
//     },
//     properties: {
//       ndvi: item.ndvi, // Replace with the NDVI property from your data
//     },
//   }));

//   return {
//     type: "FeatureCollection",
//     features: features,
//   };
// }

// Function to create the NDVI plot on the map
// function createNDVIPlot(data) {
//   // Loop through the NDVI data and create map markers or custom visualization
//   data.forEach((item) => {
//     // Replace with your custom logic to visualize NDVI data on the map
//     const marker = new mapboxgl.Marker({
//       color: getColorForNDVI(item.ndvi), // Customize this function to map NDVI values to colors
//     })
//       .setLngLat([item.lon, item.lat])
//       .addTo(map);
//   });
// }

// Function to map NDVI values to colors (customize as needed)
// function getColorForNDVI(ndvi) {
//   // Replace this logic with your own color mapping
//   if (ndvi >= 0.8) return "green";
//   if (ndvi >= 0.6) return "yellow";
//   if (ndvi >= 0.4) return "orange";
//   return "red";
// }

///////////////////////////////////////////////////

// Fetch temperature data from OpenWeather API (replace with your desired location and parameters)
// fetch(openWeatherAPI)
//   .then((response) => response.json())
//   .then((data) => {
//     // Process temperature data and create contours
//     console.log(data);

//     const temperature = data.main.temp;

//     // Create a GeoJSON feature for temperature data
//     const temperatureFeature = {
//       type: "Feature",
//       geometry: {
//         type: "Point",
//         coordinates: [data.coord.lon, data.coord.lat],
//       },
//       properties: {
//         temperature: temperature,
//       },
//     };

//     // Add the temperature data as a GeoJSON source
//     map.addSource("temperature-data", {
//       type: "geojson",
//       data: temperatureFeature,
//     });

//     // Add a contour layer to the map
//     map.addLayer({
//       id: "temperature-contours",
//       type: "line",
//       source: "temperature-data",
//       paint: {
//         "line-color": "red", // Customize the contour line color
//         "line-width": 20, // Customize the contour line width
//       },
//     });
//   })
//   .catch((error) => {
//     console.error("Error loading temperature data:", error);
//   });
