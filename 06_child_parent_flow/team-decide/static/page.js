(function editions() {
  const platinum = document.querySelector(".decide_editions input");
  const image = document.querySelector(".decide_image");
  const buyButton = document.querySelector("checkout-buy");

  platinum.addEventListener("change", e => {
    const edition = e.target.checked ? "platinum" : "standard";
    buyButton.setAttribute("edition", edition);
    image.src = image.src.replace(/(standard|platinum)/, edition);
  });
  
  // NEW 
  const element = document.querySelector(".decide_thanks");
  const element_details = document.querySelector(".decide_details");
  const element_recos = document.querySelector(".decide_recos");

  buyButton.addEventListener("checkout:item_added", e => {
    element.classList.add("decide_thanks--confirm");
	element_details.classList.add("decide_details--confirm");
	element_recos.classList.add("decide_recos--confirm");
  });
  
})();
