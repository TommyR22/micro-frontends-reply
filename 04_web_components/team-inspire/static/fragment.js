// in a real application this data would be fetched from Team Inspire's API
const recos = {
  911: ["taycan", "718"],
  taycan: ["718", "911"],
  718: ["911", "taycan"]
};

class InspireRecommendations extends HTMLElement {
  connectedCallback() {
    const sku = this.getAttribute("sku");
    this.innerHTML = `
      <div class="inspire_fragment">
        <h2 class="inspire_headline">Recommendations</h2>
        <div class="inspire_recommendations">
          ${recos[sku]
            .map(
              reco => `<a href="http://localhost:3001/product/${reco}">
                         <img src="http://localhost:3003/imgs/${reco}.png" />
                       </a>`
            )
            .join("\n")}
        </div>
      </div>
    `;
  }
}
window.customElements.define(
  "inspire-recommendations",
  InspireRecommendations
);
