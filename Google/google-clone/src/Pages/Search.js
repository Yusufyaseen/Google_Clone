import React, { useState } from "react";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { actionTypes } from "../reducer";
import { useParams } from "react-router-dom";

function Search({ hideButtons = false, searchId2 }) {
  const { searchId } = useParams();
  const [input, setInput] = useState("");
  const history = useHistory();
  const [{}, dispatch] = useStateValue();

  const search = (e) => {
    e.preventDefault();

    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/" + input);
  };
  return (
    <form className="search">
      <div className="search__input">
        <SearchIcon className="search__icon" />
        <input
          value={searchId2}
          value={searchId}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <MicIcon />
      </div>
      {!hideButtons ? (
        <div className="search__buttons">
          <Button type="submit" onClick={search} variant="outlined">
            Google Search
          </Button>
          <a
            className="feel"
            href="https://www.google.com/doodles"
            alt="https://www.google.com/doodles"
          >
            <Button variant="outlined">I’m Feeling Lucky</Button>
          </a>
        </div>
      ) : (
        <div className="search__buttons">
          <Button
            className="search__buttonsHidden"
            type="submit"
            onClick={search}
            variant="outlined"
          >
            Google Search
          </Button>
          <Button className="search__buttonsHidden" variant="outlined">
            I’m Feeling Lucky
          </Button>
        </div>
      )}
    </form>
  );
}

export default Search;
