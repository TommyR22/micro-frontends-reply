---
chapter: 10
---

# Single SPA

App shell 		--> 	single-spa.js	--> [website](https://single-spa.js.org/)
Team Inspire  	--> 	Svelte.js
Team Decide   	--> 	React.js
Team Checkout 	--> 	Vue.js

The main difference is that it does not use Web Components as the component format. Instead,
the teams expose their micro frontends as a Javascript object that adheres to a specific interface.

The single-spa root config consists of the following:

* The root HTML file that is shared by all single-spa applications.
* The JavaScript that calls singleSpa.registerApplication().

Your root config exists only to start up the single-spa applications.

In contrast to our Web Component-based prototype, single-spa uses a JavaScript inter-
face as the contract between app shell and team application.

```
export async function boostrap() {...}
export async function mount() {...}
export async function unmount() {...}
```

These functions (bootstrap, mount, unmount) are similar to the Custom Elements life-
cycle functions (constructor, connectedCallback, disconnectedCallback). Single-
spa calls bootstrap when a micro frontend becomes active for the first time. It invokes
(un)mount every time the application is (de)activated.

NOTE: In the example code, each team has a Rollup-based build process to
generate the pages.min.js file in the ES module format. However, there is
nothing Rollup-specific. You can do the same with Webpack or Gulp.