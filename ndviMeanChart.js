var ndvi_dataset = [
  0.357695985, 0.03068585, 0.191833873, 0.104453521, 0.302369076, 0.239283323,
  0.057809594, 0.038028885,
];

var evi_dataset = [
  0.239283323, 0.057809594, 0.038028885, 0.30418994, 0.331356185, 0.357695985,
  0.03068585, 0.191833873,
];

var dswi_dataset = [
  0.520830252, 0.338300724, 0.288031326, 0.492641088, 0.368869269, 0.239283323,
  0.057809594, 0.038028885,
];

var ndwi_dataset = [
  0.104453521, 0.302369076, 0.239283323, 0.057809594, 0.038028885, 0.357695985,
  0.03068585, 0.191833873,
];

var chart_labels = [
  "8/21/2022",
  "8/19/2022",
  "8/18/2022",
  "8/16/2022",
  "4/12/2022",
  "3/27/2022",
  "3/11/2022",
  "2/23/2022",
];

// var ctx = document.getElementById("mixedChart");

// var config = {
//   type: "bar",
//   data: {
//     labels: chart_labels,
//     datasets: [
//       {
//         label: "Mean NDVI Indices (2020-2022)",
//         data: ndvi_dataset,
//         backgroundColor: "#ea335d",
//         borderWidth: 1,
//         type: "bar",
//         order: 2,
//       },
//     ],
//     options: {
//       responsive: true,
//     },
//   },
//   options: {
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: {
//           display: false,
//         },
//         stacked: true,
//         ticks: {
//           font: {
//             size: 6,
//           },
//         },
//       },
//       y: {
//         grid: {
//           display: false,
//         },
//         beginAtZero: true,
//         stacked: true,
//         ticks: {
//           font: {
//             size: 14,
//           },
//         },
//       },
//     },
//   },
// };

// var ndvi_chart = new Chart(ctx, config);

// $("#ndvi-btn").click(function () {
//   var data = ndvi_chart.config.data;
//   data.datasets[0].data = ndvi_dataset;
//   data.labels = chart_labels;
//   ndvi_chart.update();
// });

// $("#evi-btn").click(function () {
//   var data = ndvi_chart.config.data;
//   data.datasets[0].data = evi_dataset;
//   data.labels = chart_labels;
//   ndvi_chart.update();
// });

// $("#dswi-btn").click(function () {
//   var data = ndvi_chart.config.data;
//   data.datasets[0].data = dswi_dataset;
//   data.labels = chart_labels;
//   ndvi_chart.update();
// });

// $("#ndwi-btn").click(function () {
//   var data = ndvi_chart.config.data;
//   data.datasets[0].data = ndwi_dataset;
//   data.labels = chart_labels;
//   ndvi_chart.update();
// });

const ctx = document.getElementById("forecast");

const forecast = new Chart(ctx, {
  type: "bar",
  data: {
    labels: chart_labels,
    datasets: [
      {
        label: "NDVI",
        data: ndvi_dataset,
        borderWidth: 1,
        backgroundColor: "rgba(115, 29, 132, 0.4)",
        borderColor: "rgb(0,0,0)",
      },
      {
        label: "EVI",
        data: evi_dataset,
        borderWidth: 1,
        backgroundColor: "rgba(145, 69, 142, 0.4)",
        borderColor: "rgb(0,0,0)",
      },
      {
        label: "DSWI",
        data: dswi_dataset,
        borderWidth: 1,
        backgroundColor: "rgba(175, 109, 152, 0.4)",
        borderColor: "rgb(0,0,0)",
      },
      {
        label: "NDWI",
        data: ndwi_dataset,
        borderWidth: 1,
        backgroundColor: "rgba(205, 149, 162, 0.4)",
        borderColor: "rgb(0,0,0)",
      },
    ],
    options: {
      responsive: true,
    },
  },
  options: {
    // scales: {
    //   y: {
    //     beginAtZero: true,
    //   },
    // },
    plugins: {
      legend: {
        labels: {
          // This more specific font property overrides the global property
          font: {
            size: 18,
            weight: 600,
          },
        },
      },
    },
  },
});

function toggleData(value) {
  const showValue = forecast.isDatasetVisible(value);
  if (showValue === true) {
    forecast.hide(value);
  }
  if (showValue === false) {
    forecast.show(value);
  }
}

// $("#ndvi-btn").click(function toggleData() {
//   const data = forecast.config.data;
//   data.datasets[0].data = ndvi_dataset;
//   data.labels = chart_labels;
//   forecast.update();
// });

// $("#evi-btn").click(function toggleData() {
//   const data = forecast.config.data;
//   data.datasets[1].data = evi_dataset;
//   data.labels = chart_labels;
//   forecast.update();
// });

// $("#dswi-btn").click(function toggleData() {
//   const data = forecast.config.data;
//   data.datasets[2].data = dswi_dataset;
//   data.labels = chart_labels;
//   forecast.update();
// });

// $("#ndwi-btn").click(function toggleData() {
//   const data = forecast.config.data;
//   data.datasets[3].data = ndwi_dataset;
//   data.labels = chart_labels;
//   forecast.update();
// });
