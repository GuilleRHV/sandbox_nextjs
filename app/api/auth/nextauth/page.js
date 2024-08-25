import React from "react";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";
import swaggerDocument from "./swagger.json";

const SwaggerPage = () => {
  return (
    <div style={{ padding: "20px" }}>
      <SwaggerUI spec={swaggerDocument} />
    </div>
  );
};

export default SwaggerPage;
