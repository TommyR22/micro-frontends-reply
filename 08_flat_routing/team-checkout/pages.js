class CheckoutCart extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/">&lt; home</a> -
      <a href="/checkout/pay">pay &gt;</a>
      <h1>🛒 Cart</h1>
      <a href="/product/taycan">
        Taycan<br>
        <img src="http://localhost:3004/imgs/taycan.png" width="100">
      </a>`;
  }
}
window.customElements.define("checkout-cart", CheckoutCart);

class CheckoutPay extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/checkout/cart">&lt; cart</a> -
      <a href="/checkout/success">buy now &gt;</a>
      <h1>💵 Pay</h1>`;
  }
}
window.customElements.define("checkout-pay", CheckoutPay);

class CheckoutSuccess extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <a href="/">home &gt;</a>
      <h1>🥳 Success</h1>`;
  }
}
window.customElements.define("checkout-success", CheckoutSuccess);
