import React, { useState } from "react";
import { gql, useQuery } from "@apollo/client";

import LaunchItem from "./LaunchItem";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        launches {
            flight_number
            mission_name
            launch_date_local
            launch_success
        }
    }
`;

const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCHES_QUERY);

    console.log("HERE IS DATA", loading, error, data);

    if (loading) return <h1 className="display-5 my-3">LOADING...</h1>;
    if (error) return <h1 className="display-5 my-3">THERE WAS AN ERROR: {error.message}</h1>;

    return (
        <>
            {data.launches.map((item, index) => (
                <LaunchItem key={index} item={item} />
            ))}
        </>
    );
};

export default Launches;
