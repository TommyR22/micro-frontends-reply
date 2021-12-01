# Sample Code - Micro Frontends Reply

This is the example code copied by Manning book [Micro Frontends in Action](https://www.manning.com/books/micro-frontends-in-action?a_aid=mfia&a_bid=5f09fdeb).

## Local machine

### Prerequisites

1. Clone [this git repository](https://github.com/tommyr22/micro-frontends-reply) or [download & extract the zip](https://github.com/tommyr22/micro-frontends-reply
2. Make sure you have [Node.js](https://nodejs.org/) (v12 or newer) installed.

   ```
   $ node -v
   v14.4.0
   ```

3. Go into the main directory and install all required dependencies.

   ```
   cd micro-frontends-reply
   npm install
   ```


### Running the code

All examples involve starting up multiple applications which are owned by different teams. There is an NPM run for each directory. You can start examples like this: `npm run [name_of_example]`.

The following command will start example #2:

```
npm run 02_iframe
```

The script **starts all applications** and **shows a combined log output**.<br>
_NOTE: Nginx stdout do not work on Windows_.

![console output](console.png)

It **waits until the servers are ready** and **opens the example page** in your default browser.

![example running in your browser](browser.png)

You can stop the example by hitting `[CMD]` + `C` in your terminal.

**NOTE:** The code should run on all platforms. However, if you're having troubles feel free to [create an issue](https://github.com/naltatis/micro-frontends-in-action-code/issues).

## Folder structure and ports

Each example has its own folder (e.g. `02_iframe`). Each example folder contains a subfolder that contains the actual application (e.g. `cdn`, `decide`, `inspire`).

Different port numbers are used to indicate ownership. This following table shows which teams owns which application. Make sure ports 3000 to 3003 are not allocated by another process on your machine.

| Port   | Team          | Responsibility                         |
| ------ | ------------- | -------------------------------------- |
| `3000` | - shared -    | infrastructure (web-server, app shell) |
| `3001` | Team Decide   | product page                           |
| `3002` | Team Inspire  | homepage, search, recommendations      |
| `3003` | Team Checkout | cart, checkout process                 |

## List of all examples

Here is a list of all run commands with a reference to the chapter they belong to.

| run script                                                                                          | name                                                                 | 
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | 
| `npm run 01_pages_links`                                                                            | Pages & Links                                                        |
| `npm run 02_iframe`                                                                                 | iFrames                                                              | 
| `npm run 03_ajax`                                                                                   | Namespaces                                                           | 
| `npm run 04_web_components`                                                                         | Client-side Composition                                              |
| `npm run 05_parent_child_flow`                                                                      | Parent-Child Communication                                           |
| `npm run 06_child_parent_flow`                                                                      | Child-Parent Communication                                           |
| `npm run 07_fragment_fragment_flow`                                                                 | Fragment-Fragment Communication                                      | 
| `npm run 08_flat_routing`                                                                           | Client-side Routing (Flat)                                           | 
| `npm run 09_two_level_routing`                                                                      | Client-side Routing (Two-Tiered)                                     | 
| `npm run 10_single_spa`                                                                             | Single SPA                                                           | 



## Useful links
https://the-tractor.store/
https://luigi-project.io/
https://microfrontends.info/microfrontends/
https://micro-frontends.zeef.com/elisabeth.engel?ref=elisabeth.engel&share=ee53d51a914b4951ae5c94ece97642fc