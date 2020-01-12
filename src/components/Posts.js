import React, { useEffect, useState } from "react";
import { homeRoute } from "../helperconstants";
import { homeAuthRoute } from "../helperconstants";
import CircleAvatar from "./CircleAvatar";
import RenderHtml from "./RenderHtml";
import {Link} from 'react-router-dom';
export default function Posts() {
  const token = localStorage.getItem("token");
  const route = token !== null ? homeAuthRoute : homeRoute;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(route, {
      headers: {
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        console.log(data);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="container card  mt-5 ">
      {posts.map(post => (
        <div key={post.pk} className="post">
          <div className="row  pb-3">
            <CircleAvatar avatarURL={post.profile_img}></CircleAvatar>
            <p className="text-justify pb-2 author"> {post.author} </p>{" "}
            <p className="text-justify pl-2">
              {" "}
              posted on {new Date(post.date_posted).toDateString()}{" "}
            </p>
          </div>
          <div id="post-content">
            <p className="post-title pl-15"> {post.title}</p> <br></br>
            <RenderHtml gist={post.gist}></RenderHtml>  
            <div className="row">
            <Link className ="text-muted" to="/"> Read more </Link>
              </div>
          </div>

          <hr />
        </div>
      ))}
    </div>
  );
}
