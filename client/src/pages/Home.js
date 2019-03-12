import React from "react";
import auth from "../utils/auth";

export const Home = props => {
  return (
    <div>
      <h1>Home</h1>
      <button
        onClick={() => {
          auth.logout(() => {
            this.props.history.push("/");
          });
        }}
      >
        Logout
      </button>
    </div>
  );
};