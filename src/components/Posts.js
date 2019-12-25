import React, { useEffect } from "react";
import { homeRoute } from "../helperconstants";
import { homeAuthRoute } from "../helperconstants";

export default function Posts() {
  const route =
    localStorage.getItem("token") !== null ? homeAuthRoute : homeRoute;
  const token = localStorage.getItem("token");
  console.log(token);

  useEffect(() => {
    fetch(route, {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(data => console.log(data));
  }, [route, token]);
  return <div></div>;
}
