import React, { useState } from "react";
import Maincomponent2 from "./Maincomponent2";

export default function Async() {
  const [Fordata, setForData] = useState([]);
  const [Isloading, setIsloading] = useState(false);
  async function noname() {
    setIsloading(true)
    const response = await fetch("https://swapi.dev/api/films/");
    const movielist = await response.json();
    const moviedata = movielist.results.map((movieda) => {
      return {
        id: movieda.episode_id,
        title: movieda.title,
      }
    });
    setForData(moviedata);
    setIsloading(false);
  }
  return (
    <div>
      <button onClick={noname}>To Fetch data</button>
      <br/>
      {Isloading && <h1>Loading ....</h1>}
      {!Isloading && <maincomponent2 data={Fordata} />}
    </div>
  );
}