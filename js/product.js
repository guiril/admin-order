var checkProducts = document.querySelector('#check-all-products');
var newProdBtn = document.querySelector('#addNewProduct');
var closeBtn = document.querySelector('.close-icon');
var newSpecBtn = document.querySelector('#addNewSpecification');
var specList = document.querySelector('.info-specification');

// 新增產品
function addNewProd() {
  let addNew = document.querySelector('.add-new-product');
  addNew.style.display = 'block';
}

// 關閉表單
function closeProd() {
  let addNew = document.querySelector('.add-new-product');
  addNew.style.display = 'none';
}

// 新增產品細節欄位
function addNewSpec() {
  specList.innerHTML += ' <div class="spec-groups"><div class="spec-size"><label title="Size">Size</label><select><option value="L">L</option><option value="M">M</option><option value="S">S</option></select></div><div class="spec-color"><label title="Color">Color</label><input type="text" value="Gray"></div><div class="spec-inventory"><label title="Inventory">Inventory</label><input type="text" value="15"></div></div>';
}

checkProducts.addEventListener('click', function () {
  let item = document.getElementsByName('products');

  if (checkProducts.checked == false) {
    for (let i = 0; i < item.length; i++) {
      item[i].checked = false;
    }
  } else if (checkProducts.checked == true) {
    for (let i = 0; i < item.length; i++) {
      item[i].checked = true;
    }
  };

});

newProdBtn.addEventListener('click', addNewProd, false);
closeBtn.addEventListener('click', closeProd, false);
newSpecBtn.addEventListener('click', addNewSpec, false);

$(document).ready(function () {

  $('.products-status-trigger').click(function () {
    $('html').one('click', function () {
      $('.products-status-select').removeClass('opened');
    });
    $(this).parents('.products-status-select').toggleClass('opened');
    event.stopPropagation();
  });

  $('.products-status-option').click(function () {
    var btn = $(this).parent().siblings('.products-status-trigger');

    $(this).parents('.products-status-select').removeClass('opened');
    btn.text($(this).text());

    if ($(this).text() == 'PUBLISHED') {
      btn.css('background', '#7ED321');
      $(this).parents('tr').css('color', '#000000');
    } else if ($(this).text() == 'UNPUBLISHED') {
      btn.css('background', '#9B9B9B');
      $(this).parents('tr').css('color', '#9B9B9B');
    };

  });

});