class InspirePages extends HTMLElement {
  connectedCallback() { // entry point component
    console.log("inspire-pages connectedCallback");
    this.innerHTML = `
      <h1>Porsche</h1>
      <ul>
        <li><a href="/product/taycan">Taycan</a></li>
        <li><a href="/product/718">718</a></li>
        <li><a href="/product/911">911</a></li>
      </ul>
    `;
  }
}

window.customElements.define("inspire-pages", InspirePages);
