import React from "react";

const Spinner = () => {
  return (
    <div className="d-flex mt-5 flex-column justify-content-center">
      <div className="spinner-border mt-5 mb-2" role="status">
        <span className="sr-only">Loading...</span>
      </div>
      <p className="text-center">
        Please, wait. We are searching for the best offers...
      </p>
    </div>
  );
};

export default Spinner;
