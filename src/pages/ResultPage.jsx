import React from "react";
import StatsCards from "../components/StatsCards";
import JobResults from "../components/JobResults";
import { useSelector } from "react-redux";
import { setApiOneData, setApiTwoData } from "../features/Data/DataSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function ResultPage() {

   const dispatch = useDispatch();

    const API_ID = import.meta.env.VITE_API_ID;
    const API_KEY = import.meta.env.VITE_API_KEY;

  const TOP_COMPANIES_URL =
    "http://api.adzuna.com/v1/api/jobs/gb/top_companies";
  const JOB_LISTING_URL = "https://api.adzuna.com/v1/api/jobs/in/search/1";

  useEffect(() => {
    const role = localStorage.getItem("role");
    if (!role) return;
    console.log(role);
    topCompanies(role);
    jobListing(role);
  }, []);

  const topCompanies = async (role) => {
    // let role = localStorage.getItem("role")
    let response = await fetch(
      `${TOP_COMPANIES_URL}?app_id=${API_ID}&app_key=${API_KEY}&what=${role}`
    );
    let jsonResponse = await response.json();
    let arr = jsonResponse.leaderboard;
    // console.log(arr)
    dispatch(setApiOneData(arr));
  };

  const jobListing = async (role) => {
    // let role = localStorage.getItem("role")
    let response = await fetch(
      `${JOB_LISTING_URL}?app_id=${API_ID}&app_key=${API_KEY}&what=${role}&results_per_page=${20}`
    );
    let jsonResponse = await response.json();
    let arr = jsonResponse;
    dispatch(setApiTwoData(arr.results));
  };

  const apiOneData = useSelector((state)=> state.data.apiOneData)

  const apiTwoData = useSelector((state) => state.data.apiTwoData);

  

  return (
    <div className="min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8 py-10 overflow-x-hidden">
  {/* Title */}
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 text-center">
    Job Market Insights for “{localStorage.getItem("role")}”
  </h2>

  {/* Market Stats Cards */}
  <StatsCards data={apiOneData} />

  {/* Job Listings Section */}
  <JobResults />
</div>
  );
}

export default ResultPage;
