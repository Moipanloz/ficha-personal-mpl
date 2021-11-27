import React from "react";

const SongLyric = ({ title, lyrics }) => {
  return (
    <div style={{ width: "50%" }}>
      <h3>{title}</h3>
      <blockquote style={{ whiteSpace: "pre-wrap" }}>{lyrics}</blockquote>
    </div>
  );
};

export default SongLyric;
