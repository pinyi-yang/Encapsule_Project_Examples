const arccore = require('@encapsule/arccore');
const holism = require('holism');

// call the holism app server factory to create a new instance
var factoryResponse = holism.server.create({
  name: "Hello World Server",
  description: "Single Page Server Exmaple",
  version: "0.0.1",
  config: {
    files: {/* dictionary of static resource registrations */ },
    services: {/* array of HTTP service filter registrations */}
  },
  integrations: { /* app integration filters descriptor object */}
});

//Ensure that no error occured in factory
if (factoryResponse.error) {
  throw new Error(factoryResponse.error); // GAME OVER, Thank you for playing
}

//De-reference the Holism app server instance.
var holismServer = factoryResponse.result; //! holism page, should this be factoryResponse?

holismServer.listen(8000);
