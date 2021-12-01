const prices = {
  718: { standard: 60000, platinum: 75000 },
  911: { standard: 54000, platinum: 65000 },
  taycan: { standard: 100000, platinum: 124000 },
};

class CheckoutBuy extends HTMLElement {
  static get observedAttributes() {
    return ["sku", "edition"];
  }
  connectedCallback() {
    this.render();
  }
  attributeChangedCallback() {
    this.render();
  }
  render() {
    const sku = this.getAttribute("sku");
    const edition = this.getAttribute("edition") || "standard";
    this.innerHTML = `
      <a class="custom__button">$ ${prices[sku][edition]}</a>
    `;
    this.querySelector("a").addEventListener("click", () => {
      this.dispatchEvent( // NEW
        new CustomEvent("checkout:item_added", {
          bubbles: true,
          detail: { sku, edition },
        })
      ); 
    });
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);


// NEW Web Components
class CheckoutMinicart extends HTMLElement {
  connectedCallback() {
    this.items = [];
    window.addEventListener("checkout:item_added", (e) => {
      this.items.push(e.detail);
      this.render();
    });
    this.render();
  }
  render() {
    const text =
      this.items.length === 0
        ? "Your cart is empty."
        : `You've picked ${this.items.length}:`;
    const porsche = this.items
      .map(
        ({ sku, edition }) =>
          `<img src="http://localhost:3003/imgs/${sku}_${edition}.png" />`
      )
      .join("");
    this.innerHTML = `${text} ${porsche}`;
  }
}
window.customElements.define("checkout-minicart", CheckoutMinicart);