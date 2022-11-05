import React, { useState, useContext } from "react";
import ShowsContext from "../context/shows/showsContext";
import AlertsContext from "../context/alerts/alertsContext";
import Alert from "./Alert";

const Search = () => {
  const [searchTerm, setSearchterm] = useState("");
  const showsContext = useContext(ShowsContext);
  const { searchShows } = showsContext;

  const { alert, setAlert } = useContext(AlertsContext);

  const handleChange = (e) => {
    setSearchterm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm === "") {
      setAlert("Please Enter something!", "danger");
    } else {
      searchShows(searchTerm);
    }
  };

  return (
    <>
    {alert?<Alert message={alert.message} type={alert.type} />:null}
      
      <form>
        <div class="container-sm mb-3 input-group">
          <input
            type="text"
            value={searchTerm}
            onChange={handleChange}
            class="form-control"
            id="exampleInputEmail1"
            placeholder="Search your favorite shows!"
          />
          <button type="button" class="btn btn-dark" onClick={handleSearch}>
            Search
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
