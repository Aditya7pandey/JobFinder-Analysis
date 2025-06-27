import React, { useEffect } from "react";
import Search from "../components/Search";
import Tags from "../components/Tags";
import { useState } from "react";

function LandingPage() {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6 text-black">
      {/* Hero Section */}
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Discover Your Next Career Move
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Get real-time job market insights and find live opportunities tailored
          to your role.
        </p>

        {/* Search Bar */}
        <Search />

        {/* Popular Tags */}
        <Tags />
      </div>
    </div>
  );
}

export default LandingPage;
