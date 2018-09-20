$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(document).ready(function () {
  // 運算週期選單
  $('.period-select').each(function () {
    var classes = $(this).attr('class');
    var template = '<div class="' + classes + '">';

    template += '<span class="custom-period-trigger">' + $(this).attr('placeholder') + '</span>';
    template += '<div class="custom-period-options">';

    $(this).find('option').each(function () {
      template += '<span class="custom-period-option" data-value="' + $(this).attr('value') + '">' + $(this).html() + '</span>';
    });

    template += '</div></div>';

    $(this).after(template);
  });
  // 點選加入class
  $('.custom-period-trigger').on('click', function () {
    $('html').one('click', function () {
      $('.period-select').removeClass('opened');
    });
    $(this).parents('.period-select').toggleClass('opened');
    event.stopPropagation();
  });
  // 改變選單文字
  $('.custom-period-option').on('click', function () {
    // $(this).parents('.change-data-period').find('select').val($(this).data('value'));
    $(this).parents('.custom-period-options').find('.custom-period-option').removeClass("selection");
    $(this).addClass('selection');
    $(this).parents('.period-select').removeClass('opened');
    $(this).parents('.period-select').find('.custom-period-trigger').text($(this).text());
  });

});

// 訂單圖表
var ctx = document.getElementById('myChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',
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