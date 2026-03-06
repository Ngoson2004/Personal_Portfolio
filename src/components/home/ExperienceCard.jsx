import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    <Col lg="4">
      <div className="px-5 text-center py-4">
        <img className=" bg-white mb-4" src={data.companylogo} alt="" />
        <p className="lead">
          {data.role}
          <br />
          {data.date}
        </p>
      </div>
    </Col>
  );
}

export default ExperienceCard;