const input = document.getElementById("count");
const btn = document.querySelector("button");

btn.onclick = () => {
  console.log(typeof input.value);
};

btn.onmouseenter = () => {
  console.log("el mouse esta arriba de mi");
};

/*
    ejemplo
*/

const container = document.getElementById("cart");
const total = document.getElementById("total").firstChild;

function deleteItem(event) {
  event.target.parentNode.remove();
}

function getTotal() {
  const priceItems = [...document.getElementsByClassName("price")];
  const total = priceItems.reduce(
    (acc, item) => (acc += parseInt(item.innerText)),
    0
  );
  return total;
}

function addItem() {
  const price = input.value;
  const div = document.createElement("div");
  const button = document.createElement("button");
  button.innerText = "picale";
  button.onclick = deleteItem;
  div.innerHTML = `
  <div class="item">
    <div>name</div>
    <div class="price">${price}</div>
  </div>
    `;
  div.appendChild(button);
  container.appendChild(div);
  total.innerText = `MXN $${getTotal()}.00`;
}

btn.onclick = addItem;
