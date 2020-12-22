import React, { Component } from 'react';
import aboutImg from "../../../static/assets/images/auth/img1.jpg";

export default class AboutDetail extends Component {
  render() {
    return (
      <div>
          <h1>about me</h1>
          <div
            className="left-column"
            style={{
              backgroundImage: `url(${aboutImg})`
            }}
          />
      </div>
    );
  }
}