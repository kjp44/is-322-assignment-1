const productList = document.querySelector(".product-list");

const renderProducts = arr => {
  return arr.map(item => {
    const product = document.createElement("div");
    product.innerHTML = `
            <div>${item.brand}</div>
            <div>${item.price}</div>
            <div>${item.weight}</div>
            <div>${item.gripSize}</div>
            <div>${item.color}</div>
            <img src=${item.url} />
        `;
    productList.append(product);
    return product;
  });
};

renderProducts(tennisItemArray);
