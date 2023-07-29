import React, { useState } from "react";
import logo from "./assets/logo.png";
import "./App.scss";
import { SearchNormal1 } from "iconsax-react";
import { trendsData, suggestionData } from "./fakerData";
import { Link } from "react-router-dom";

const App: React.FC = () => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const toggleSuggestions = () => {
    setShowSuggestions((prevState) => !prevState);
  };

  return (
    <div className="homepage">
      <div className="logo">
        <img src={logo} alt="logo" width={80} />
      </div>
      <div className="search-container">
        <div
          className={`search-bar ${showSuggestions ? "active" : ""}`}
          onClick={toggleSuggestions}
        >
          <input type="text" placeholder="Search" />
          <Link to={"/search-results"}>
            <SearchNormal1 color="gray" size={30} />
          </Link>
          {showSuggestions && (
            <div className="suggestion-container">
              <h1>Latest Trends</h1>
              <div className="trend-box">
                {trendsData.map((trend, index) => (
                  <Link
                    key={index}
                    to={"/search-results"}
                    className="trend-item"
                  >
                    <img src={trend.url} alt={trend.title} />
                    {trend.title}
                  </Link>
                ))}
              </div>
              <h2>Popular suggestions</h2>
              <div className="suggestion-box">
                {suggestionData.map((suggestion, index) => (
                  <Link
                    key={index}
                    to={"/search-results"}
                    className="suggestion-item"
                  >
                    {suggestion}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
