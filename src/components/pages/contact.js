import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { component } from 'react';
import contactImg from "../../../static/assets/images/contact/contact.jpg";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div 
        className="left-column"
        style={{
          background: "url(" + contactImg + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />

      <div className="right-column">
        <div className="contact-bullet-points">
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="phone" />
            </div>
            <div className="text">
              510-417-6757
            </div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="envelope-open-text" />
            </div>
            <div className="text">
              GRuizSalas@icloud.com
            </div>
          </div>
          <div className="bullet-point-group">
            <div className="icon">
              <FontAwesomeIcon icon="thumbtack" />
            </div>
            <div className="text">
              OAKLAND, CA
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
}