import React from "react";

const SongArtist = ({ artist }) => {
  return (
    <div style={{ width: "50%" }}>
      <h3>{artist.strArtist}</h3>
      <img
        style={{ maxWidth: "100%" }}
        src={artist.strArtistThumb}
        alt={artist.strArtist}
      />
      <p>
        {artist.intBornYear} - {artist.intDiedYear || "Presente"}
      </p>
      <p>{artist.strCountry}</p>
      <p>
        {artist.strGenre} - {artist.strStyle}
      </p>
      <a href={`http://${artist.strWebsite}`} target="_blank" rel="noreferrer">
        Sitio web oficial
      </a>
      <p>{artist.strBiographyEN}</p>
    </div>
  );
};

export default SongArtist;
