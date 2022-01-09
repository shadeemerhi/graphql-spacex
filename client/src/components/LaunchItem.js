import React from "react";

import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

const LaunchItem = ({ item }) => {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>
                        <span
                            className={classNames({
                                "text-success": item.launch_success,
                                "text-danger": !item.launch_success,
                            })}
                        >
                            {item.mission_name}
                        </span>
                    </h4>
                    <p>
                        <Moment format="YYYY-MM-DD HH:mm">
                            {item.launch_date_local}
                        </Moment>
                    </p>
                </div>
                <div className="col-md-3">
                    <Link
                        to={`/launches/${item.flight_number}`}
                        className="btn btn-primary"
                    >
                        Details
                    </Link>
                    {/* <button className="btn btn-primary">Details</button> */}
                </div>
            </div>
        </div>
    );
};

export default LaunchItem;
