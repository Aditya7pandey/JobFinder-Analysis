import React from "react";
import JobCards from "./JobCards";
import { useSelector } from "react-redux";
import { RotateLoader } from "react-spinners";

function JobResults() {
  const apiTwoData = useSelector((state) => state.data.apiTwoData);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 my-4">
  <h2 className="text-xl font-semibold text-gray-800 mt-4 mb-10">
    Live Job Listings
  </h2>

  {apiTwoData && apiTwoData.length > 0 ? (
    <div className="space-y-4">
      {apiTwoData.map((dataArray, index) => (
        <JobCards
          key={index}
          engineer={dataArray.title}
          company={dataArray.company.display_name}
          locations={dataArray.location.display_name}
          description={dataArray.description}
          link={dataArray.redirect_url}
        />
      ))}
    </div>
  ) : (
    <h1 className="text-center text-gray-600 text-lg mt-10"><RotateLoader /></h1>
  )}
</div>

  );
}

export default JobResults;
