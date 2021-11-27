import React, { useState, useEffect } from "react";
import Loader from "./Loader";
import SongDetail from "./SongDetail";
import SongForm from "./SongForm";
import { helpHttp } from "../helpers/helperHttp";

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyric, setLyric] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      const { artist, song } = search;
      let artistUrl = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songUrl = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistUrl),
        helpHttp().get(songUrl),
      ]);

      setBio(artistRes);
      setLyric(songRes);

      setLoading(false);
    };

    fetchData();
  }, [search]);

  const heandleSearch = (data) => {
    setSearch(data);
  };

  return (
    <div>
      <h2>SongSearch</h2>
      {loading && <Loader />}
      <SongForm heandleSearch={heandleSearch} />
      <hr />
      {search && !loading && (
        <SongDetail search={search} bio={bio} lyric={lyric} />
      )}
    </div>
  );
};

export default SongSearch;
