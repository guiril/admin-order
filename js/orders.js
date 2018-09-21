var checkOrders = document.querySelector('#check-all-orders');

$(document).ready(function () {

  // 單筆訂單狀態按鈕
  $('.orders-event-trigger').click(function () {
    $('html').one('click', function () {
      $('.orders-event-select').removeClass('opened');
    });
    $(this).parents('.orders-event-select').toggleClass('opened');
    event.stopPropagation();
  });

  // 表格欄位
  $('.edit-section-trigger').click(function () {
    $(this).parent().toggleClass('opened');
    event.stopPropagation();
  })

  // 單筆訂單狀態按鈕
  $('.orders-status-trigger').click(function () {
    $('html').one('click', function () {
      $('.orders-status-select').removeClass('opened');
    });
    $(this).parents('.orders-status-select').toggleClass('opened');
    event.stopPropagation();
  });

  $('.orders-status-option').click(function () {
    var btn = $(this).parent().siblings('.orders-status-trigger');

    $(this).parents('.orders-status-select').removeClass('opened');
    btn.text($(this).text());

    if ($(this).text() == 'Paid') {
      btn.css('background', '#7ED321');
      $(this).parents('tr').css('text-decoration', 'none');
      $(this).parents('tr').css('color', '#000000');
    } else if ($(this).text() == 'Unpaid') {
      btn.css('background', '#9B9B9B');
      $(this).parents('tr').css('text-decoration', 'none');
      $(this).parents('tr').css('color', '#9B9B9B');
    } else if ($(this).text() == 'Shipping') {
      btn.css('background', '#F5A623');
      $(this).parents('tr').css('text-decoration', 'none');
      $(this).parents('tr').css('color', '#000000');
    } else if ($(this).text() == 'Done') {
      btn.css('background', '#4A90E2');
      $(this).parents('tr').css('text-decoration', 'line-through');
      $(this).parents('tr').css('color', '#9B9B9B');
    };

  });

});


checkOrders.addEventListener('click', function () {
  let item = document.getElementsByName('orders');

  if (checkOrders.checked == false) {
    for (let i = 0; i < item.length; i++) {
      item[i].checked = false;
    }
  } else if (checkOrders.checked == true) {
    for (let i = 0; i < item.length; i++) {
      item[i].checked = true;
    }
  };

});