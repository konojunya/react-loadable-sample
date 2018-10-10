import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";

export default class Now extends React.Component {
  render() {
    return (
      <div>
        <h1>This is Now page!</h1>
        <p>now: {moment().format("YYYY/MM/DD HH:mm:ss")}</p>

        <Link to="/">Index</Link><br/>
        <Link to="/about">About</Link>
      </div>
    )
  }
}