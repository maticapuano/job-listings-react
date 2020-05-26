import React from "react";
import "./SearchItem.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const SearchItem = (props: {
  term: string;
  removeSearch: (term: string) => void;
}) => {
  return (
    <div className="search-item">
      <div className="search-text">{props.term}</div>
      <div
        className="remove-button"
        onClick={() => props.removeSearch(props.term)}
      >
        <FontAwesomeIcon icon={faTimes} />
      </div>
    </div>
  );
};

export default SearchItem;
