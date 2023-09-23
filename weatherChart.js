const ctx_1 = document.getElementById("myChart2");

new Chart(ctx_1, {
  type: "bar",
  data: {
    datasets: [
      {
        type: "line",
        data: [91, 87, 84, 79, 82, 81, 77],
        borderWidth: 5,
        tension: 0.4,
        label: ["Soil Temperature Variation (F)"],
      },
      {
        type: "bar",
        label: ["Soil Temperature Variation (F)"],
        data: [91, 87, 84, 79, 82, 81, 77],
        backgroundColor: "rgba(145, 169, 42, 0.4)",
        borderColor: "rgb(0,0,0)",
      },
    ],
    labels: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
  },
  options: {
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
