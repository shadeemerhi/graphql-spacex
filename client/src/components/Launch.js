import React from "react";

import { gql, useQuery } from "@apollo/client";
import { useParams, Link } from "react-router-dom";

import classNames from "classnames";

const LAUNCH_QUERY = gql`
    query LaunchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                rocket_type
            }
        }
    }
`;

const Launch = () => {
    let { flight_number } = useParams();
    flight_number = parseInt(flight_number);

    const { loading, error, data } = useQuery(LAUNCH_QUERY, {
        variables: { flight_number },
    });
    console.log("INSIDE FLIGHT", loading, error, data);

    if (loading) return <h1 className="display-5 my-3">LOADING...</h1>;
    if (error)
        return (
            <h1 className="display-5 my-3">
                THERE WAS AN ERROR: {error.message}
            </h1>
        );

    return (
        <div>
            <Link to="/" className="btn btn-primary">
                Back
            </Link>
            {data.launch.mission_name}
        </div>
    );
};

export default Launch;
