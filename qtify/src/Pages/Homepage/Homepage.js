import React from "react";
import { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import { useOutletContext } from "react-router-dom";
function Homepage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums } = data;
console.log( "TOp",topAlbums)

  return (
    <div>
      <Hero/>
  <Section  tittle="Top Albums" data = {topAlbums} type="album"  />
    </div>
  );
}

export default Homepage;
