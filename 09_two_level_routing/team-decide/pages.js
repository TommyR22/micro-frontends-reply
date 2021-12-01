const products = {
  porsche: { name: "Porsche 718", img: "718.png" },
  fendt: { name: "Porsche 911", img: "911.png" },
  eicher: { name: "Porsche Taycan", img: "taycan.png" }
};

class DecidePages extends HTMLElement {
  connectedCallback() {
    this.render(window.location);
    this.unlisten = window.appHistory.listen(location =>
      this.render(location)
    );
  }
  render(location) {
    console.log("route change (second level / decide)");
    const match = location.pathname.match("/product/(.*)");
    const product = match && products[match[1]];
    if (product) {
      this.innerHTML = `
        <a href="/">&lt; home</a> -
        <a href="/checkout/cart">view cart &gt;</a>
        <h1>${product.name}</h1>
        <img src="http://localhost:3004/imgs/${product.img}" width="200">
      `;
    }
  }
  disconnectedCallback() {
    this.unlisten();
  }
}

window.customElements.define("decide-pages", DecidePages);
