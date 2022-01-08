import React, { useState } from "react";

import { gql, useQuery } from "@apollo/client";

import Launches from "./Launches";

const LaunchWrapper = () => {
    const [show, setShow] = useState(true);

    return (
        <>
            <h1 className="display-5 my-3">Launches</h1>
            <button className="btn btn-primary" onClick={() => setShow(!show)}>
                {show ? "Hide" : "Show"}
            </button>
            {show && <Launches />}
        </>
    );
};

export default LaunchWrapper;
