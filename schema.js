const axios = require("axios");

const { getLaunches, getLaunch, getRockets, getRocket } = require("./services");

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
            resolve: () => getLaunches(),
        },
        launch: {
            type: LaunchType,
            args: {
                flight_number: { type: GraphQLInt },
            },
            resolve: (parent, args) => getLaunch(args.flight_number),
        },
        rockets: {
            type: new GraphQLList(RocketType),
            resolve: () => getRockets(),
        },
        rocket: {
            type: RocketType,
            args: {
                rocket_id: { type: GraphQLString },
            },
            resolve: (parent, args) => getRocket(args.rocket_id),
        },
    }),
});

const schema = new GraphQLSchema({
    query: RootQuery,
});

module.exports = schema;
