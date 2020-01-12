import React from "react";

export default function CircleAvatar({ avatarURL }) {
    const styles ={
        avatarStyle:{
            float:'left'
        }
    }
  const defaultURL =
    "https://cdn0.iconfinder.com/data/icons/iconshock_guys/512/andrew.png";
  const URL =
    avatarURL === undefined || avatarURL === null ? defaultURL : avatarURL;
  return (
    <div>
      <img className="avatar text-left " src={URL} alt="avatar" style={styles.avatarStyle}></img>
    </div>
  );
}
