import React from "react";
import { Link } from "react-router-dom";

export default class Index extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Index page!</h1>

        <Link to="/about">About</Link><br/>
        <Link to="/now">Now</Link>
      </div>
    )
  }
}