var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ["6 JUN", "7 JUN", "8 JUN", "9 JUN", "10 JUN", "11 JUN", "12 JUN", "13 JUN"],
    datasets: [{
      label: "TOTAL REVENUE",
      backgroundColor: 'transparent',
      borderColor: '#7ED321',
      data: [7500, 7000, 5500, 7500, 5800, 6200, 7600, 7500]
    },
    {
      label: "TOTAL COST",
      backgroundColor: 'transparent',
      borderColor: '#D0021B',
      data: [500, 500, 2800, 3000, 2500, 500, 900, 2000]
    },
    {
      label: "NET INCOME",
      backgroundColor: 'transparent',
      borderColor: '#4A90E2',
      data: [6100, 5300, 2000, 4000, 3800, 5200, 6500, 5000]
    }]
  },

  // Configuration options go here
  options: {
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          max: 8000,
          min: 0,
          stepSize: 1000
        }
      }]
    },
    elements: {
      line: {
        tension: 0
      }
    }
  }
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})