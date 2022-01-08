import React from "react";
import { gql, useQuery } from "@apollo/client";

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
    if (error) return <h1 className="display-5 my-3">THERE WAS AN ERROR</h1>;

    return (
        <div>
            <h1 className="display-5 my-3">Launches</h1>
        </div>
    );
};

export default Launches;
