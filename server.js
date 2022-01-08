const express = require("express");
const { graphqlHTTP } = require("express-graphql");

const schema = require('./schema');

const app = express();

const schema = new GraphQLSchema({
    query,
});

app.use(
    "/graphql",
    graphqlHTTP({
        schema,
        graphiql: true,
    })
);

const PORT = 4000;

app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});
