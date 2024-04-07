import React from "react";
import { DocumentDisplay } from "../../../components";
import { useParams } from "react-router-dom";

const Publications = () => {
  const {title} = useParams();
  return (
    <DocumentDisplay title="Publications" params={title}/>
  );
};

export default Publications;
