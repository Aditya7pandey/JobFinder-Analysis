import React from 'react'
import { useEffect, useRef } from "react";

const companyData = [
  { name: "SDE" },
  { name: "Data Scientist" },
  { name: "Software Developer" },
  { name: "Cyber security analyst" },
  { name: "AI engineer" },
  { name: "Devops engineer" },
  { name: "ML engineer" },
  { name: "Data engineer" },
];

function Tags() {
const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    let scrollInterval = setInterval(() => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1;

        // Reset when we reach halfway (original list width)
        if (
          scrollContainer.scrollLeft >=
          scrollContainer.scrollWidth / 2
        ) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 16); // 60fps ~ 16ms

    return () => clearInterval(scrollInterval);
  }, []);

  // Duplicate the list to simulate infinite scroll
  const duplicatedList = [...companyData, ...companyData];

  return (
    <div
      ref={scrollRef}
      className="overflow-x-hidden whitespace-nowrap w-full bg-gray-50 py-4"
    >
      <div className="flex w-max space-x-4 px-4 m-10">
        {duplicatedList.map((company, index) => (
          <div
            key={index}
            className="min-w-[200px] bg-white rounded-xl shadow p-4 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-lg font-semibold text-gray-800">{company.name}</h3>
            {/* <p className="text-sm text-gray-500">Top Hiring</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tags