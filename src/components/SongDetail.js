import React from "react";
import Message from "./Message";
import SongArtist from "./SongArtist";
import SongLyric from "./SongLyric";

const SongDetail = ({ search, lyric, bio }) => {
  if (!lyric || !bio) return null;

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {lyric.err || lyric.name === "AbortError" ? (
        <Message
          color="#dc3545"
          message={`Error: no existe la canción '${search.song}'`}
        />
      ) : (
        <SongLyric title={search.song} lyrics={lyric.lyrics} />
      )}

      {!bio.artists ? (
        <Message
          color="#dc3545"
          message={`Error: no existe el artista '${search.artist}'`}
        />
      ) : (
        <SongArtist artist={bio.artists[0]} />
      )}
    </div>
  );
};

export default SongDetail;
