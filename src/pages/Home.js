import React from "react";
import Main from "../components/Main";
import requests from "../Requests";
import Row from "../components/Row";

const Home = () => {
  return (
    <>
      <Main />
      <Row rowID="1" title="Up Coming" fetchURL={requests.requestUpComing} />
      <Row
        rowID="2"
        title="Now Playing"
        fetchURL={requests.requestNowPlaying}
      />
      <Row rowID="3" title="Trending" fetchURL={requests.requestTrending} />
      <Row rowID="4" title="Top Rated" fetchURL={requests.requestTopRated} />
      <Row rowID="5" title="Popular" fetchURL={requests.requestPopular} />
    </>
  );
};

export default Home;
