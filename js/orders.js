// 選擇執行項目
var selectAllBox = document.querySelector('#check-all-orders');
var ordersEvent = document.querySelector('.orders-event-options');

// 全選
function selectAll() {
  let item = document.getElementsByName('orders');

  if (selectAllBox.checked == false) {
    for (let i = 0; i < item.length; i++) {
      item[i].checked = false;
    }
  } else if (selectAllBox.checked == true) {
    for (let i = 0; i < item.length; i++) {
      item[i].checked = true;
    }
  };
};

// 選擇其他操作
function selectEvent(e) {
  let currentEl = e.target.textContent;
  let item = document.getElementsByName('orders');

  if (currentEl == 'Select All') {
    for (let i = 0; i < item.length; i++) {
      selectAllBox.checked = true;
      item[i].checked = true;
    };
  } else if (currentEl == 'Unselect All') {
    for (let i = 0; i < item.length; i++) {
      selectAllBox.checked = false;
      item[i].checked = false;
    };
  }

};

selectAllBox.addEventListener('click', selectAll, false);
ordersEvent.addEventListener('click', selectEvent, false);

// 隱藏 & 顯示欄位
var customer = document.querySelector('#check-section-order-customer');
var productList = document.querySelector('#check-section-order-productList');
var orderTotal = document.querySelector('#check-section-order-total');
var addToCart = document.querySelector('#check-section-order-addToCart');
var checkOut = document.querySelector('#check-section-order-checkout');
var address = document.querySelector('#check-section-order-address');
var orderStatus = document.querySelector('#check-section-order-status');

function hideColumn() {
  let column;

  if (this == customer) {
    column = document.querySelectorAll('.orders-customer');
  } else if (this == productList) {
    column = document.querySelectorAll('.orders-product-list');
  } else if (this == orderTotal) {
    column = document.querySelectorAll('.orders-total');
  } else if (this == addToCart) {
    column = document.querySelectorAll('.orders-add-to-cart');
  } else if (this == checkOut) {
    column = document.querySelectorAll('.orders-check-out');
  } else if (this == address) {
    column = document.querySelectorAll('.orders-address');
  } else if (this == orderStatus) {
    column = document.querySelectorAll('.orders-status');
  };

  if (this.checked == true) {
    for (let i = 0; i < column.length; i++) {
      column[i].style.display = '';
    };
  } else {
    for (let i = 0; i < column.length; i++) {
      column[i].style.display = 'none';
    };
  };

};

customer.addEventListener('click', hideColumn, false);
productList.addEventListener('click', hideColumn, false);
orderTotal.addEventListener('click', hideColumn, false);
addToCart.addEventListener('click', hideColumn, false);
checkOut.addEventListener('click', hideColumn, false);
address.addEventListener('click', hideColumn, false);
orderStatus.addEventListener('click', hideColumn, false);

// 下拉選單
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