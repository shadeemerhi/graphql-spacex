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

    const {
        mission_name,
        launch_year,
        launch_success,
        launch_date_local,
        rocket: { rocket_name, rocket_type },
    } = data.launch;
    return (
        <div>
            <h2 className="diplay-4 my-3">
                <span className="text-dark">Mission: </span>
                {mission_name}
            </h2>
            <h4 className="mb-3">Launch Details</h4>
            <ul className="list-group">
                <li className="list-group-item">
                    Flight Number: {flight_number}
                </li>
                <li className="list-group-item">Launch Year: {launch_year}</li>
                <li className="list-group-item">
                    Launch Success:{" "}
                    <span
                        className={classNames({
                            "text-success": launch_success,
                            "text-danger": !launch_success,
                        })}
                    >
                        {launch_success ? "Yes" : "No"}
                    </span>
                </li>
            </ul>
            <h4 className="my-3">Rocket Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Rocket Name: {rocket_name}</li>
                <li className="list-group-item">Rocket Type: {rocket_type}</li>
            </ul>
            <Link to="/" className="btn btn-primary my-3">
                Back
            </Link>
        </div>
    );
};

export default Launch;
