var newProdBtn = document.querySelector('#addNewProduct');
var cancelBtn = document.querySelector('.icon-cancel');
var newSpecBtn = document.querySelector('#addNewSpecification');
var specList = document.querySelector('.specification');

// 新增產品
function addNewProd() {
  let box = document.querySelector('.add-box');
  box.style.display = 'block';
}

// 關閉表單
function cancelProd() {
  let box = document.querySelector('.add-box');
  box.style.display = 'none';
}

// 新增產品細節欄位
function addNewSpec() {
  specList.innerHTML += '<label title="Size">Size<select><option value="L">L</option><option value="M">M</option><option value="S">S</option></select></label><label title="Color">Color<input type="text" value="Gray"></label><label title="Inventory">Inventory<input type="text" value="15"></label>';
}

newProdBtn.addEventListener('click', addNewProd, false);
cancelBtn.addEventListener('click', cancelProd, false);
newSpecBtn.addEventListener('click', addNewSpec, false);