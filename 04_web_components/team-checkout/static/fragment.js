const prices = {
  718: 60000,
  911: 54000,
  taycan: 100000,
};

class CheckoutBuy extends HTMLElement {
  connectedCallback() {
    const sku = this.getAttribute("sku");
    this.innerHTML = `
	  <a class="custom__button">$ ${prices[sku]}</a>
    `;
    this.querySelector("a").addEventListener("click", () => {
      alert("Thank you ❤️");
    });
  }
  disconnectedCallback() {
    this.querySelector("a").removeEventListener("click");
  }
}
window.customElements.define("checkout-buy", CheckoutBuy);
