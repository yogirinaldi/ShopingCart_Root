let products = [];
let shopNames = [];

$("#addNow").on("click", function () {
  products = [
    {
      productId: "1",
      productImage: "assets/img/products/chrome-book-11.jpg",
      productName: "HP Chromebook 11",
      productPrice: 1000000,
      productStock: 10,
      quantity: 1,
      shopName: "HP",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "2",
      productImage: "assets/img/products/asus-transformer.jpg",
      productName: "Asus Transformer",
      productPrice: 1900000,
      productStock: 10,
      quantity: 1,
      shopName: "ASUS",
      checked: "checked",
      off: 200000,
      totalPrice: 0,
    },
    {
      productId: "3",
      productImage: "assets/img/products/chrome-book-14.jpg",
      productName: "HP Chromebook 14",
      productPrice: 1600000,
      productStock: 10,
      quantity: 1,
      shopName: "HP",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "4",
      productImage: "assets/img/products/chrome-book-asus.jpg",
      productName: "Asus Chromebook",
      productPrice: 1600000,
      productStock: 5,
      quantity: 1,
      shopName: "ASUS",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "5",
      productImage: "assets/img/products/ipad-air.jpg",
      productName: "iPad Air",
      productPrice: 1100000,
      productStock: 3,
      quantity: 1,
      shopName: "Apple",
      checked: "checked",
      off: 300000,
      totalPrice: 0,
    },
    {
      productId: "6",
      productImage: "assets/img/products/ipad-mini.jpg",
      productName: "iPad Mini",
      productPrice: 850000,
      productStock: 3,
      quantity: 1,
      shopName: "Apple",
      checked: "checked",
      off: 250000,
      totalPrice: 0,
    },
    {
      productId: "7",
      productImage: "assets/img/products/lenovo-yoga.jpg",
      productName: "Lenovo Yoga",
      productPrice: 2500000,
      productStock: 8,
      quantity: 1,
      shopName: "Lenovo",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "8",
      productImage: "assets/img/products/mi-pad-2.jpg",
      productName: "Mi Pad 2",
      productPrice: 500000,
      productStock: 10,
      quantity: 1,
      shopName: "Xiaomi",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "9",
      productImage: "assets/img/products/surface-pro.jpg",
      productName: "Surface Pro",
      productPrice: 2500000,
      productStock: 10,
      quantity: 1,
      shopName: "Microsoft",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "10",
      productImage: "assets/img/products/acer-aspire-3.png",
      productName: "Aspire 3",
      productPrice: 1500000,
      productStock: 15,
      quantity: 1,
      shopName: "Acer",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "11",
      productImage: "assets/img/products/mi-notebook-pro.jpg",
      productName: "Mi Notebook Pro",
      productPrice: 1500000,
      productStock: 9,
      quantity: 1,
      shopName: "Xiaomi",
      checked: "checked",
      off: 100000,
      totalPrice: 0,
    },
    {
      productId: "12",
      productImage: "assets/img/products/predator-helios-300.jfif",
      productName: "Predator Helios 300",
      productPrice: 3500000,
      productStock: 3,
      quantity: 1,
      shopName: "Acer",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "13",
      productImage: "assets/img/products/Surface-Laptop-3-3.jpg",
      productName: "Surface Laptop 3",
      productPrice: 1500000,
      productStock: 5,
      quantity: 1,
      shopName: "Microsoft",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "14",
      productImage: "assets/img/products/thinkbook-14s-yoga.png",
      productName: "Thinkbook 14s",
      productPrice: 2500000,
      productStock: 5,
      quantity: 1,
      shopName: "Lenovo",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
    {
      productId: "15",
      productImage: "assets/img/products/zenbook-14x.png",
      productName: "Zenbook 14X Space Edition",
      productPrice: 6500000,
      productStock: 2,
      quantity: 1,
      shopName: "ASUS",
      checked: "checked",
      off: 0,
      totalPrice: 0,
    },
  ];

  products.forEach((item) => {
    item.totalPrice = item.quantity * item.productPrice;
    //shopNames.push({ shopName: item.shopName });
  });

  // let filtered = shopNames.filter(
  //   (obj) => !shopNames[obj.shopName] && (shopNames[obj.shopName] = true)
  // );

  localStorage.setItem("productInCart", JSON.stringify(products));
  window.location.reload();
});

const formatRupiah = (money) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(money);
};

function displayCart() {
  let htmlHead = "";
  let htmlIsi = "";
  let cartItem = JSON.parse(localStorage.getItem("productInCart"));
  let shopNameItem = [];

  cartItem.forEach((item) => {
    shopNameItem.push({ shopName: item.shopName });
  });

  let filtered = shopNameItem.filter(
    (obj) => !shopNameItem[obj.shopName] && (shopNameItem[obj.shopName] = true)
  );

  filtered.forEach((item) => {
    htmlHead += `
    <div id="${item.shopName}" class="tableHeading">
                  <table>
                    <tr>
                      <td style="padding-bottom: 3%">
                        <div class="form-check" style="position: relative">
                          <input
                            name="${item.shopName}"
                            class="form-check-input"
                            type="checkbox"
                            value="0"
                            id="flexCheckDefault"
                            onClick="changeCheckedShopNameCart(this)"
                          />
                        </div>
                      </td>
                      <td>
                        <label style="margin-left:10px;">${item.shopName}</label>
                      </td>
                    </tr>
                  </table>
                  </div>`;
  });
  document.querySelector(".displayCart").innerHTML = htmlHead;

  cartItem.forEach((item) => {
    if (item.off == 0) {
      htmlIsi = `
    <table class="tableList">
                    <tr>
                      <td style="padding-bottom: 3%; padding-left: 10px;">
                        <div class="form-check" style="position: relative">
                          <input
                            name="cbCart${item.shopName}"
                            class="form-check-input cbCartList"
                            type="checkbox"
                            value="${item.productId}"
                            id="flexCheckDefault"
                            
                            onClick="changeChecked(this,'${item.shopName}')" 
                            ${item.checked}
                          />
                        </div>
                      </td>
                      <td>
                        <div class="media cartList">
                          <div class="media-left">
                            <a href="#">
                              <img
                                class="media-object"
                                src="${item.productImage}"
                              />
                            </a>
                          </div>
                          <div class="media-body">
                            <input type="hidden" value="${item.productId}" />
                            <h2 class="h4 media-heading">${
                              item.productName
                            }</h2>
                            <p>Stok: ${item.productStock}</p>
                            <p class="price">${formatRupiah(
                              item.productPrice - item.off
                            )} </p>
                          </div>
                          <div class="controls">
                            <div class="input-group">
                              <span class="input-group-btn">
                                <button
                                  class="btn btn-default btn-sm"
                                  type="button"
                                  data-action="minus"
                                >
                                  <i class="ion-minus-round"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                class="form-control input-sm"
                                placeholder="Qty"
                                value="${item.quantity}"
                                readonly=""
                              />
                              <span class="input-group-btn">
                                <button
                                  class="btn btn-default btn-sm"
                                  type="button"
                                  data-action="plus"
                                >
                                  <i class="ion-plus-round"></i>
                                </button>
                              </span>
                            </div>
                            <!-- /input-group -->

                            <a href="#remove" class="removeItem">
                              <i class="ion-trash-b"></i> Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>`;
    } else {
      htmlIsi = `
    <table class="tableList">
                    <tr>
                      <td style="padding-bottom: 3%; padding-left: 10px;">
                        <div class="form-check" style="position: relative">
                          <input
                            name="cbCart${item.shopName}"
                            class="form-check-input cbCartList"
                            type="checkbox"
                            value="${item.productId}"
                            id="flexCheckDefault"
                            
                            onClick="changeChecked(this,'${item.shopName}')" 
                            ${item.checked}
                          />
                        </div>
                      </td>
                      <td>
                        <div class="media cartList">
                          <div class="media-left">
                            <a href="#">
                              <img
                                class="media-object"
                                src="${item.productImage}"
                              />
                            </a>
                          </div>
                          <div class="media-body">
                            <input type="hidden" value="${item.productId}" />
                            <h2 class="h4 media-heading">${
                              item.productName
                            }</h2>
                            <p>Stok: ${item.productStock}</p>
                            <p class="price">${formatRupiah(
                              item.productPrice - item.off
                            )} <s style="color:red;">${formatRupiah(
        item.productPrice
      )}</s></p>
                          </div>
                          <div class="controls">
                            <div class="input-group">
                              <span class="input-group-btn">
                                <button
                                  class="btn btn-default btn-sm"
                                  type="button"
                                  data-action="minus"
                                >
                                  <i class="ion-minus-round"></i>
                                </button>
                              </span>
                              <input
                                type="text"
                                class="form-control input-sm"
                                placeholder="Qty"
                                value="${item.quantity}"
                                readonly=""
                              />
                              <span class="input-group-btn">
                                <button
                                  class="btn btn-default btn-sm"
                                  type="button"
                                  data-action="plus"
                                >
                                  <i class="ion-plus-round"></i>
                                </button>
                              </span>
                            </div>
                            <!-- /input-group -->

                            <a href="#remove" class="removeItem">
                              <i class="ion-trash-b"></i> Remove
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </table>`;
    }

    document
      .querySelector("#" + item.shopName)
      .insertAdjacentHTML("beforeend", htmlIsi);
    checkChecked(item.shopName);
  });
}
if (JSON.parse(localStorage.getItem("productInCart")) != null) {
  displayCart();
}

function totalPrice() {
  let totalDisc = 0;
  let totalItem = 0;
  let subTotal = 0;
  let btnCheckout = true;
  let cartItem = JSON.parse(localStorage.getItem("productInCart"));

  if (cartItem != null) {
    cartItem.forEach((item) => {
      if (item.checked == "checked") {
        subTotal += item.totalPrice;
        totalItem += 1;
        if (item.off != 0) {
          totalDisc += item.off * item.quantity;
        }
        btnCheckout = false;
      }
    });
  }

  document.querySelector(
    ".totalItem"
  ).innerHTML = `<p>Subtotal (${totalItem} items)</p>`;

  document.querySelector(".subTotal").innerHTML = `<p><b>${formatRupiah(
    subTotal
  )}</b></p>`;

  document.querySelector(".totalDisc").innerHTML = `<p><b>-${formatRupiah(
    totalDisc
  )}</b></p>`;

  document.querySelector(
    ".totalSum"
  ).innerHTML = `<h3 class="no-margin">${formatRupiah(
    subTotal - totalDisc
  )}</h3>`;

  document.getElementById("btnCheckOut").disabled = btnCheckout;
}

if (JSON.parse(localStorage.getItem("productInCart")) != null) {
  totalPrice();
}

function changeChecked(ele, shopName) {
  let cartItem = JSON.parse(localStorage.getItem("productInCart"));
  let objIndex = cartItem.findIndex((obj) => obj.productId == ele.value);
  if (ele.checked == true) {
    cartItem[objIndex].checked = "checked";
  } else {
    cartItem[objIndex].checked = "unchecked";
  }
  localStorage.setItem("productInCart", JSON.stringify(cartItem));
  checkChecked(shopName);
  totalPrice();
}

function checkChecked(shopName) {
  let cartItem = JSON.parse(localStorage.getItem("productInCart"));
  let status_shopName = true;
  let status_All = true;
  cartItem.forEach((item) => {
    if (item.shopName == shopName) {
      if (item.checked == "unchecked") {
        status_shopName = false;
      }
    }
    if (item.checked == "unchecked") {
      status_All = false;
    }
  });

  var cbCartShopName = document.getElementsByName(shopName);
  cbCartShopName[0].checked = status_shopName;

  var cbCartAll = document.getElementsByName("cbCartAll");
  cbCartAll[0].checked = status_All;
}

function changeCheckedShopNameCart(ele) {
  var checkboxes = document.getElementsByName("cbCart" + ele.name);
  let cartItem = JSON.parse(localStorage.getItem("productInCart"));
  if (ele.checked == true) {
    for (let i = 0; i < cartItem.length; i++) {
      if (cartItem[i].shopName == ele.name) {
        cartItem[i].checked = "checked";
      }
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItem));
    for (const box of checkboxes) {
      box.checked = true;
    }
  } else {
    for (let i = 0; i < cartItem.length; i++) {
      if (cartItem[i].shopName == ele.name) {
        cartItem[i].checked = "unchecked";
      }
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItem));
    for (const box of checkboxes) {
      box.checked = false;
    }
  }
  checkChecked(ele.name);
  totalPrice();
}

function changeCheckedAll(ele) {
  var checkboxes = document.getElementsByTagName("input");
  let cartItem = JSON.parse(localStorage.getItem("productInCart"));
  if (cartItem == null) {
    cartItem = [];
  }

  if (ele.checked == true) {
    for (let i = 0; i < cartItem.length; i++) {
      cartItem[i].checked = "checked";
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItem));
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = true;
      }
    }
  } else {
    for (let i = 0; i < cartItem.length; i++) {
      cartItem[i].checked = "unchecked";
    }
    localStorage.setItem("productInCart", JSON.stringify(cartItem));
    for (let i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type == "checkbox") {
        checkboxes[i].checked = false;
      }
    }
  }
  totalPrice();
}

$(document).ready(function () {
  //Remove
  $(".checkout-cart").on("click", 'a[href="#remove"]', function () {
    let cartItem = JSON.parse(localStorage.getItem("productInCart"));
    let productId = $(this)
      .parents(".media")
      .children(".media-body")
      .find("input")
      .val();
    let shopName = $(this).parents(".tableHeading").attr("id");

    let objIndex = cartItem.findIndex((obj) => obj.productId == productId);
    cartItem.splice(objIndex, 1);
    let shopNameIndex = cartItem.findIndex((obj) => obj.shopName == shopName);
    //localStorage.setItem("productInCart", JSON.stringify(cartItem));
    if (cartItem.length == 0) {
      localStorage.removeItem("productInCart");
      window.location.reload();
    } else {
      localStorage.setItem("productInCart", JSON.stringify(cartItem));
    }
    checkChecked(shopName);
    totalPrice();

    $(this).parents(".tableList").fadeOut("300");
    if (shopNameIndex == -1) {
      $(this).parents(".tableHeading").fadeOut("300");
    }
  });
  //Remove

  //removeSelected
  $("#removeSelected").on("click", function () {
    let cartItem = JSON.parse(localStorage.getItem("productInCart"));
    if (cartItem != null) {
      cartItem.forEach((item) => {
        if (item.checked != "checked") {
          products.push(item);
        }
      });

      if (products.length == 0) {
        localStorage.removeItem("productInCart");
      } else {
        localStorage.setItem("productInCart", JSON.stringify(products));
      }
      window.location.reload();
    }
  });
  //removeSelected

  $(".checkout-cart").on(
    "click",
    '.input-group button[data-action="plus"]',
    function () {
      let cartItem = JSON.parse(localStorage.getItem("productInCart"));
      let productId = $(this)
        .parents(".media")
        .children(".media-body")
        .find("input")
        .val();

      let objIndex = cartItem.findIndex((obj) => obj.productId == productId);

      if (
        parseInt($(this).parents(".input-group").find("input").val()) <
        cartItem[objIndex].productStock
      ) {
        $(this)
          .parents(".input-group")
          .find("input")
          .val(
            parseInt($(this).parents(".input-group").find("input").val()) + 1
          );

        cartItem[objIndex].quantity += 1;
        cartItem[objIndex].totalPrice =
          cartItem[objIndex].quantity * cartItem[objIndex].productPrice;
        localStorage.setItem("productInCart", JSON.stringify(cartItem));
        totalPrice();
      }
    }
  );
  $(".checkout-cart").on(
    "click",
    '.input-group button[data-action="minus"]',
    function () {
      let cartItem = JSON.parse(localStorage.getItem("productInCart"));
      let productId = $(this)
        .parents(".media")
        .children(".media-body")
        .find("input")
        .val();

      let objIndex = cartItem.findIndex((obj) => obj.productId == productId);
      if (parseInt($(this).parents(".input-group").find("input").val()) > 1) {
        $(this)
          .parents(".input-group")
          .find("input")
          .val(
            parseInt($(this).parents(".input-group").find("input").val()) - 1
          );

        cartItem[objIndex].quantity -= 1;
        cartItem[objIndex].totalPrice =
          cartItem[objIndex].quantity * cartItem[objIndex].productPrice;
        localStorage.setItem("productInCart", JSON.stringify(cartItem));
        totalPrice();
      }
    }
  );
});
