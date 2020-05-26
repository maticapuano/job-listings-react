import React, { useState } from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/JobCard/JobCard";
import data from "./shared/data/data.json";

import Account from "./shared/images/account.svg";
import EyeCam from "./shared/images/eyecam-co.svg";
import FaceIt from "./shared/images/faceit.svg";
import Insure from "./shared/images/insure.svg";
import Loop from "./shared/images/loop-studios.svg";
import Manage from "./shared/images/manage.svg";
import MyHome from "./shared/images/myhome.svg";
import Photosnap from "./shared/images/photosnap.svg";
import Shortly from "./shared/images/shortly.svg";
import TheAir from "./shared/images/the-air-filter-company.svg";

const images = [
  Photosnap,
  Manage,
  Account,
  MyHome,
  Loop,
  FaceIt,
  Shortly,
  Insure,
  EyeCam,
  TheAir,
];

export interface JobInfo {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  role: string;
  level: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  languages?: string[];
  tools?: string[];
}

const App = () => {
  const [searchList, setSearchList] = useState<string[]>([]);

  const removeSearch = (term: string) => {
    const temp = [...searchList];
    setSearchList(temp.filter((t) => t !== term));
    setMargin("40px");
  };

  const addSearch = (term: string) => {
    if (!searchList.includes(term)) {
      const temp = [...searchList];
      temp.push(term);
      setSearchList(temp);
    }
  };

  const clearSearch = () => {
    setSearchList([]);
  };

  const [margin, setMargin] = useState("40px");

  const searchBarResize = (size: number): void => {
    const newmargin = 40 + size;
    setMargin(newmargin + "px");
  };

  return (
    <div className="container">
      <header style={{ marginBottom: margin }} className="banner">
        <SearchBar
          show={searchList.length > 0}
          searchBarResize={searchBarResize}
          removeSearch={removeSearch}
          searchList={searchList}
          clearSearch={clearSearch}
        />
      </header>
      <main className="job-list">
        {data.map((job: JobInfo) => {
          return (
            <JobCard
              key={job.id}
              job={job}
              src={images[job.id - 1]}
              searchList={searchList}
              setSearchList={addSearch}
            />
          );
        })}
      </main>
      <footer className="attribution">
        Challenge by &nbsp; Frontend Mentor Coded by{" "}
        <a href="https://www.github.com/maticapuano">Matias Capuano</a>.
      </footer>
    </div>
  );
};

export default App;
