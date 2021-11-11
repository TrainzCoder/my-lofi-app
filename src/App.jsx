import React from "react";
import Home from "./containers/Home";
import ErrorPage from "./containers/ErrorPage";

const screenWidth = window.innerWidth;

const App = () => {
  return <>{screenWidth > 1024 ? <Home /> : <ErrorPage />}</>;
};

export default App;
