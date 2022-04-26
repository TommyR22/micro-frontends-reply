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
        this.dispatchEvent(new CustomEvent("checkout:item_added")); // NEW
    });
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);




