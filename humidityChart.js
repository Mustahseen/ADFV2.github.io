const ctx_2 = document.getElementById("myChart3");

new Chart(ctx_2, {
  type: "bar",
  data: {
    datasets: [
      {
        type: "line",
        data: [41, 39, 48, 49, 61, 65, 58],
        borderWidth: 5,
        tension: 0.4,
        label: ["Humidity Variation (%)"],
      },
      {
        type: "bar",
        label: ["Humidity Variation (%)"],
        data: [41, 39, 48, 49, 61, 65, 58],
        backgroundColor: "rgba(115, 29, 132, 0.6)",
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
