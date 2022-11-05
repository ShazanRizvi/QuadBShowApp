import React, { useReducer } from "react";
import ShowsContext from "./showsContext";
import ShowsReducer from "./showsReducer";
import axios from "axios";
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from "../types";

const ShowsState = (props) => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  //Searching shows request
  const searchShows = async (searchTerm) => {
    dispatch({ type: SET_LOADING });
    //axios request
    const { data } = await axios.get(
      `https://api.tvmaze.com/search/shows?q=${searchTerm}`
    );
    console.log(data);
    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  //Request for single shows

  const getSingleShow = async (id) => {
    dispatch({ type: SET_LOADING });
    //axios request
    const { data } = await axios.get(`https://api.tvmaze.com/shows/${id}`);
    console.log(data);
    dispatch({
      type: SET_SINGLE_SHOW,
      payload: data,
    });
  };
  //Request for single show
  const clearSingleShow = async () => {
      dispatch({ type: CLEAR_SINGLE_SHOW });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
        getSingleShow,
        clearSingleShow
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
