import React, { useEffect } from "react";
import { useState } from "react";
import {useNavigate} from "react-router-dom"
import { useDispatch } from "react-redux";
import { setApiOneData, setApiTwoData } from "../features/Data/DataSlice";
import {PacmanLoader} from "react-spinners"

function Search() {
  let [roles, setRoles] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loader,setLoader] = useState(false)

    const API_ID = import.meta.env.VITE_API_ID;
    const API_KEY = import.meta.env.VITE_API_KEY;

    const TOP_COMPANIES_URL = "http://api.adzuna.com/v1/api/jobs/gb/top_companies"
    const JOB_LISTING_URL ="https://api.adzuna.com/v1/api/jobs/in/search/1"

    useEffect(()=>{
      const role = localStorage.getItem("role")
      if(!role) return
      console.log(role)
      topCompanies(role);
      jobListing(role);
    },[])

    const topCompanies = async(role)=>{
      // let role = localStorage.getItem("role")
      let response = await fetch(`${TOP_COMPANIES_URL}?app_id=${API_ID}&app_key=${API_KEY}&what=${role}`)
      let jsonResponse = await response.json();
      let arr = jsonResponse.leaderboard;
      dispatch(setApiOneData(arr.results)) 
    }

    const jobListing = async(role)=>{
      // let role = localStorage.getItem("role")
      let response = await fetch(`${JOB_LISTING_URL}?app_id=${API_ID}&app_key=${API_KEY}&what=${role}&results_per_page=${20}`)
      let jsonResponse = await response.json();
      let arr = jsonResponse;
      dispatch(setApiTwoData(arr.results))
    }

  function handleInput(event){
    setRoles(event.target.value);
  }

  async function handleSubmit(event){
    event.preventDefault();
    localStorage.setItem("role",roles)
    setLoader(true)
    await topCompanies(roles)
    await jobListing(roles);
    navigate('/search')
  }

  return (
    <div >
      <form className="w-full flex flex-col sm:flex-row items-center gap-3" onSubmit={handleSubmit}>
        <input
          value={roles}
          onChange={handleInput}
          type="text"
          placeholder="Enter job role (e.g., Software Engineer)"
          className="w-full sm:w-2/3 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition" type="submit">
          {
            loader ? <div className="w-full text-left"><PacmanLoader color="white" size={12} /></div> : "Search Jobs"
          }

        </button>
      </form>
    </div>
  );
}

export default Search;
