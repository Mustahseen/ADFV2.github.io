const chart_labels = ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00"];
const temp_dataset = ["1", "8", "10", "10", "9", "7"];
const rain_dataset = ["0", "0", "6", "32", "7", "2"];
const ctx = document.getElementById("forecast").getContext("2d");
const forecast_chart = new Chart(ctx, {
  type: "bar",
  data: {
    datasets: [
      {
        type: "bar",
        labels: chart_labels,
        label: "Precipitation (%)",
        yAxisID: "y-axis-1",
        data: rain_dataset,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          position: "left",
          id: "y-axis-0",
        },
        {
          position: "right",
          id: "y-axis-1",
        },
      ],
    },
  },
});

// const forecast_chart = new Chart(ctx, config);

function toggleData(value) {
  console.log();
  // forecast_chart.isDatasetVisible();
}

// $("#ndvi-btn").click(function () {
//   const data = forecast_chart.config.data;
//   data.datasets[0].data = temp_dataset;
//   data.datasets[1].data = rain_dataset;
//   data.labels = chart_labels;
//   forecast_chart.update();
// });

// $("#evi-btn").click(function () {
//   var chart_labels = [
//     "00:00",
//     "03:00",
//     "06:00",
//     "09:00",
//     "12:00",
//     "15:00",
//     "18:00",
//     "21:00",
//   ];
//   const temp_dataset = ["5", "3", "4", "8", "10", "11", "10", "9"];
//   const rain_dataset = ["0", "0", "1", "4", "19", "19", "7", "2"];
//   const data = forecast_chart.config.data;
//   data.datasets[0].data = temp_dataset;
//   data.datasets[1].data = rain_dataset;
//   data.labels = chart_labels;
//   forecast_chart.update();
// });
