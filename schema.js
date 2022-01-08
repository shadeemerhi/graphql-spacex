const axios = require("axios");

const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLInt,
    GraphQLList,
    GraphQLString,
    GraphQLBoolean,
} = require("graphql");

const LaunchType = new GraphQLObjectType({
    name: "Launch",
    fields: () => ({
        flight_number: { type: GraphQLInt },
        mission_name: { type: GraphQLString },
        launch_year: { type: GraphQLString },
        launch_date_local: { type: GraphQLString },
        launch_success: { type: GraphQLBoolean },
        rocket: { type: RocketType },
    }),
});

const RocketType = new GraphQLObjectType({
    name: "Rocket",
    fields: () => ({
        rocket_id: { type: GraphQLString },
        rocket_name: { type: GraphQLString },
        rocket_type: { type: GraphQLString },
    }),
});

// Root query
const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: () => ({
        launches: {
            type: new GraphQLList(LaunchType),
            resolve(parent, args) {
                return axios
                    .get("https://api.spacexdata.com/v3/launches")
                    .then((res) => res.data);
            },
        },
    }),
});

const schema = new GraphQLSchema({
    query: RootQuery,
});

module.exports = schema;