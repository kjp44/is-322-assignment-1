const productList = document.querySelector(".product-list");

const priceDropdown = document
  .querySelector(".price-dropdown")
  .addEventListener("change", determineOptionAction);

const sortLowestToHighest = arr => {
  return arr.sort((a, b) => {
    return a.price - b.price;
  });
};

const filterBy = (arr, value, less = false) => {
  return arr.filter(item => (less ? item.price < value : item.price > value));
};

const removeAllChilds = () => {
  while (productList.hasChildNodes()) {
    productList.removeChild(productList.firstChild);
  }
};

const renderProducts = arr => {
  return arr.map(item => {
    const product = document.createElement("div");
    product.className =
      "card col-12 col-sm-6 col-md-4 justify-content-center align-items-center";
    product.innerHTML = `
            <div class="justify-content-center">
                <div class="text-center p-4">Brand: ${item.brand}</div>
                <div class="text-center">Price: $${item.price}</div>
                <div class="text-center p-4">Weight: ${item.weight}</div>
                <div class="text-center pb-4">Grip Size: ${item.gripSize}</div>
                <div class="text-center">Color: ${item.color}</div>
                <div class="justify-content-center align-items-center">
                <img class="p-4" src=${
                  item.url
                } style="object-fit: contain; width: 200px; height: 200px" />
                </div>
            </div>
        `;
    productList.append(product);
    return product;
  });
};

function determineOptionAction() {
  const selected = this.value;
  let result = [];
  switch (selected) {
    case "lowest to highest":
      result = sortLowestToHighest(tennisItemArray);
      break;
    case "lower than 200":
      result = filterBy(tennisItemArray, 200, true);
      break;
    case "higher than 200":
      result = filterBy(tennisItemArray, 200);
      break;
    default:
      result = tennisItemArray;
  }

  removeAllChilds();

  renderProducts(result);
}

determineOptionAction();
