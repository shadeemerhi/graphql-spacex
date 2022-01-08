import React from "react";

const LaunchItem = ({ item }) => {
    return (
        <div className="card card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>{item.mission}</h4>
                    <p>Date: {item.launch_date_local}</p>
                </div>
                <div className="col-md-3">
                  <button className="btn btn-primary">
                    Details
                  </button>
                </div>
            </div>
            {item.mission_name}
        </div>
    );
};

export default LaunchItem;
