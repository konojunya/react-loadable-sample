import React from "react";
import _ from "lodash";
import { Link } from "react-router-dom";

export default class About extends React.Component {
  render() {
    return (
      <div>
        <h1>This is About page!</h1>
        <p>Age: {_.add(10 + 11)}</p>

        <Link to="/">Index</Link><br/>
        <Link to="/now">Now</Link>
      </div>
    )
  }
}