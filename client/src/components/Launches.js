import React from "react";
import { gql, useQuery } from "@apollo/client";

const LAUNCHES_QUERY = gql`
    query LaunchesQuery {
        flight_number
        mission_name
        launch_date_local
        launch_success
    }
`;

const Launches = () => {
    return <div>
      <h1 className="display-4 my-3">
        Hello
      </h1>
      <button className="btn btn-success">
        Hello
      </button>
    </div>;
};

export default Launches;
