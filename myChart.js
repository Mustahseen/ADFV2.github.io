const ctx_1 = document.getElementById("myChart");

new Chart(ctx_1, {
  type: "polarArea",
  data: {
    labels: [
      "EVI(max)",
      "EVI(mean)",
      "EVI(median)",
      "EVI(min)",
      "EVI(deviation)",
    ],
    datasets: [
      {
        label: ["The Enhanced Vegetation Index (EVI)"],
        data: [0.95, 0.44, 0.43, 0.16, 0.09],
        borderWidth: 1,
        backgroundColor: [
          "rgba(255, 99, 132, 0.4)",
          "rgba(75, 192, 192, 0.4)",
          "rgba(255, 205, 86, 0.4)",
          "rgba(201, 203, 207, 0.4)",
          "rgba(54, 162, 235, 0.4)",
        ],
        hoverBorderWidth: 2.5,
        hoverBackgroundColor: [
          "rgba(255, 99, 132, 0.8)",
          "rgba(75, 192, 192, 0.8)",
          "rgba(255, 205, 86, 0.8)",
          "rgba(201, 203, 207, 0.8)",
          "rgba(54, 162, 235, 0.8)",
        ],
        hoverBorderColor: "rgb(0, 0, 0)",
      },
    ],
  },
  options: {
    responsive: true,
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
