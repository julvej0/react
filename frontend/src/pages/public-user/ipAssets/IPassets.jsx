import React from "react";
import { DocumentDisplay } from "../../../components";
import { useParams } from "react-router-dom";

const IPassets = () => {
  const {title} = useParams();
  return (
    <DocumentDisplay title="IP Assets" params={title}/>
  );
};

export default IPassets;
