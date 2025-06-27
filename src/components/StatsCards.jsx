import React from "react";

function StatsCards({data}) {
  return (

      <div className="bg-white rounded-xl p-6 shadow hover:shadow-md transition text-center">
  <p className="text-gray-500 text-sm">Top Hiring</p>

  <div className="mt-4 overflow-x-auto">
    <div className="flex flex-nowrap sm:justify-center gap-4">
      {Array.isArray(data) && data.length > 0 ? (
        data.map((arr1, outerIndex) => (
          <div
            key={outerIndex}
            className="min-w-[180px] sm:min-w-[200px] bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-800">
              {arr1.canonical_name}
            </h3>
          </div>
        ))
      ) : (
        <span className="text-gray-500">No company data</span>
      )}
    </div>
  </div>
</div>

  
  );
}

export default StatsCards;
