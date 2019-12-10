import React from "react";

export default function NoOfResultsDisplay(props) {
  return (
    <div className="row m-0">
      <div className="col p-0">
        <p className="noOfResults">
          <b>{props.noOfResults} results</b>
        </p>
      </div>
    </div>
  );
}
