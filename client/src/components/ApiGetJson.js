import React from "react";
import { useEffect, useState } from "react";
import Item from "./Item";

const ApiGetJson = () => {
  const [info, setInfo] = useState({ interests: [] });

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("/users");
      const body = await response.json();
      setInfo(body);
    };
    fetchUsers();
  }, []);

  return (
    <div style={{ marginLeft: "40px", marginTop: "40px" }}>
      <h2>Name : {info.name}</h2>
      <h2>Age : {info.age}</h2>
      <h2>Email : {info.email}</h2>
      <h2>interests : </h2>
      {info.interests.map((item) => (
        <Item item={item} key={Math.random()} />
      ))}
    </div>
  );
};

export default ApiGetJson;
