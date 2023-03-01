import React from "react";

const SupportOptions = ({ item }) => {
  return <option value={item.id}>{item.name}</option>;
};

export default SupportOptions;
