import React, { createRef, useEffect } from "react";
import "./SearchBar.scss";
import SearchItem from "../SearchItem/SearchItem";

const SearchBar = (props: {
  searchList: string[];
  removeSearch: (term: string) => void;
  clearSearch: () => void;
  searchBarResize: (size: number) => void;
  show: boolean;
}) => {
  const ref = createRef<HTMLDivElement>();

  const updateSize = () => {
    if (ref.current) {
      props.searchBarResize(ref.current.clientHeight - 60);
    }
  };

  useEffect(() => {
    updateSize();
  });

  window.addEventListener("resize", updateSize);

  if (props.show)
    return (
      <div ref={ref} className="search-bar">
        <div className="search-items-container">
          {/* Render Search Keywords  */}
          {props.searchList.map((term: string, index: number) => {
            return (
              <SearchItem
                key={index}
                term={term}
                removeSearch={props.removeSearch}
              />
            );
          })}
        </div>

        {/* Clear Button */}
        {props.searchList.length > 0 ? (
          <div className="clear-button" onClick={() => props.clearSearch()}>
            <div className="clear-text">clear</div>
          </div>
        ) : (
          ""
        )}
      </div>
    );
  else return <React.Fragment />;
};

export default SearchBar;
