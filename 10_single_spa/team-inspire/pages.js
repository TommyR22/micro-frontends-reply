import singleSpaSvelte from "single-spa-svelte"; 					// https://single-spa.js.org/docs/ecosystem-svelte
import Homepage from "./Homepage.svelte";

const svelteLifecycles = singleSpaSvelte({							// Calls the adapter with the root component and a function that retrieves the DOM to render it in
  component: Homepage,
  domElementGetter: () => document.getElementById("app-inspire")
});

export const { bootstrap, mount, unmount } = svelteLifecycles;		// export the lifecycle functions returned by adapter call
