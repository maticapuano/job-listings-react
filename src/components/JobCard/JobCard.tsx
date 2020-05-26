import React from "react";
import "./JobCard.scss";
import { JobInfo } from "../../App";

const JobCard = (props: {
  job: JobInfo;
  src: string;
  searchList: string[];
  setSearchList: (term: string) => void;
}) => {
  let cardClasses = "job-card";
  if (props.job.featured) cardClasses += " featured";

  const checkSearch = (index: number): boolean => {
    let include = false;
    const term = props.searchList[index];

    if (props.job.languages && props.job.languages.includes(term))
      include = true;
    if (props.job.role === term) include = true;
    if (props.job.tools && props.job.tools.includes(term)) include = true;
    if (props.job.level === term) include = true;

    if (include) {
      if (index === props.searchList.length - 1) {
        return true;
      } else return checkSearch(index + 1) && true;
    } else {
      return false;
    }
  };

  const showCard = (): boolean => {
    if (props.searchList.length < 1) {
      return true;
    } else {
      return checkSearch(0);
    }
  };

  if (showCard())
    return (
      <div className={cardClasses}>
        <div className="left">
          <div className="job-image">
            {/* does not work !?
            Error: Cannot find module '../../shared/images/.....svg'
          <img src={props.job.logo} alt="icon" /> 
          <img src={require(props.job.logo)} alt="icon" /> */}
            <img src={props.src} alt="icon" />
          </div>
          <div className="company-info">
            <div className="top-row">
              <div className="company-name">{props.job.company}</div>
              {props.job.new ? <div className="status new">new!</div> : ""}
              {props.job.featured ? (
                <div className="status featured">featured</div>
              ) : (
                ""
              )}
            </div>
            <div className="middle-row">{props.job.position} </div>
            <div className="bottom-row">
              {props.job.postedAt} &nbsp; • &nbsp; {props.job.contract} &nbsp; •
              &nbsp; {props.job.location}
            </div>
          </div>
        </div>
        <hr />
        <div className="tags">
          <div
            className="tag-item"
            onClick={() => props.setSearchList(props.job.level)}
          >
            {props.job.level}
          </div>
          <div
            className="tag-item"
            onClick={() => props.setSearchList(props.job.role)}
          >
            {props.job.role}
          </div>
          {props.job.tools?.map((tool: string, index: number) => {
            return (
              <div
                key={index}
                className="tag-item"
                onClick={() => props.setSearchList(tool)}
              >
                {tool}
              </div>
            );
          })}
          {props.job.languages?.map((lang: string, index: number) => {
            return (
              <div
                key={index}
                className="tag-item"
                onClick={() => props.setSearchList(lang)}
              >
                {lang}
              </div>
            );
          })}
        </div>
      </div>
    );
  else {
    return <React.Fragment />;
  }
};

export default JobCard;
