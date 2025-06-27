import React from 'react'

function JobCards({engineer,company,locations,description,link}) {
  return (
        <div className="space-y-4 m-4">

            <div className="bg-white rounded-xl p-5 shadow hover:shadow-lg transition border border-gray-100"
            >
              <h4 className="text-lg font-bold text-gray-900">{engineer}</h4>
              <p className="text-sm text-gray-600">{company} · {locations} · on-performance</p>
              <p className="text-sm text-gray-500 mt-2">
                {description}
              </p>
              <div className="mt-3 flex justify-end">
                <a
                  href={link}
                  className="text-blue-600 hover:underline text-sm font-medium"
                >
                  View & Apply →
                </a>
              </div>
            </div>

        </div>
  )
}

export default JobCards