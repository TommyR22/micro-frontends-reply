const template = product => {
  return `
    <a href="/">&lt; home</a> -
    <a href="/checkout/cart">view cart &gt;</a>
    <h1>${product.name}</h1>
    <img src="http://localhost:3004/imgs/${product.img}" width="200">
  `;
};

// 718
class DecideProduct718 extends HTMLElement {
  connectedCallback() { // entry point component
    this.innerHTML = template({
      name: "Porsche 718",
      img: "718.png"
    });
  }
}
window.customElements.define(
  "decide-product-718",
  DecideProduct718
);

// 911
class DecideProduct911 extends HTMLElement {
  connectedCallback() { // entry point component
    this.innerHTML = template({
      name: "Porsche 911",
      img: "911.png"
    });
  }
}
window.customElements.define("decide-product-911", DecideProduct911);

// Taycan
class DecideProductTaycan extends HTMLElement {
  connectedCallback() { // entry point component
    this.innerHTML = template({
      name: "Porsche Taycan",
      img: "taycan.png"
    });
  }
}
window.customElements.define("decide-product-taycan", DecideProductTaycan);
