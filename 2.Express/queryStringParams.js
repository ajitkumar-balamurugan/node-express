const express = require("express");
const app = express();
const { products } = require("./data.js");
const port = 5000;
app.listen(5000, () => console.log("Server listening on port " + port));

app.get("/api/query", (req, res) => {
  const theQuery = req.query;
  //   console.log(theQuery);
  const { search, limit } = theQuery;
  let sortedProducts = [...products];
  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }
  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }
  if (sortedProducts.length < 1) {
    return res.send("No products found");
  }
  //   console.log(sortedProducts);
  return res.send(sortedProducts);
});
// Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
//     at new NodeError (node:internal/errors:393:5)
//     at ServerResponse.setHeader (node:_http_outgoing:644:11)
//     at ServerResponse.header (C:\Users\ajitk\OneDrive\Desktop\Tutorial\self-tutorial\Nodejs-Tutorial\Express\node_modules\express\lib\response.js:794:10)
//     at ServerResponse.send (C:\Users\ajitk\OneDrive\Desktop\Tutorial\self-tutorial\Nodejs-Tutorial\Express\node_modules\express\lib\response.js:174:12)
//     at ServerResponse.json (C:\Users\ajitk\OneDrive\Desktop\Tutorial\self-tutorial\Nodejs-Tutorial\Express\node_modules\express\lib\response.js:278:15)
//     at ServerResponse.send (C:\Users\ajitk\OneDrive\Desktop\Tutorial\self-tutorial\Nodejs-Tutorial\Express\node_modules\express\lib\response.js:162:21)
//     at C:\Users\ajitk\OneDrive\Desktop\Tutorial\self-tutorial\Nodejs-Tutorial\Express\app.js:24:7
//     at Layer.handle [as handle_request] (C:\Users\ajitk\OneDrive\Desktop\Tutorial\self-tutorial\Nodejs-Tutorial\Express\node_modules\express\lib\router\layer.js:95:5)
//     at next (C:\Users\ajitk\OneDrive\Desktop\Tutorial\self-tutorial\Nodejs-Tutorial\Express\node_modules\express\lib\router\route.js:144:13)
//     at Route.dispatch (C:\Users\ajitk\OneDrive\Desktop\Tutorial\self-tutorial\Nodejs-Tutorial\Express\node_modules\express\lib\router\route.js:114:3)
