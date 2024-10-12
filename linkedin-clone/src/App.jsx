import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import { getUserAuth } from "./redux/actions";
import { connect } from "react-redux";
import RequireAuth from "./components/RequireAuth";

const App = (props) => {
  useEffect(() => {
    props.getUserAuth();
  }, [props]);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Header />
                <Home />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserAuth: () => dispatch(getUserAuth()),
  };
};

export default connect(null, mapDispatchToProps)(App);
