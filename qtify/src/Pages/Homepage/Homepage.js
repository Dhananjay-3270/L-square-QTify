import React from "react";
import { useState } from "react";
import Hero from "../../Components/Hero/Hero";
import Section from "../../Components/Section/Section";
import { useOutletContext } from "react-router-dom";
import { fetchgenres } from "../../Components/Api/api";
function Homepage() {
  const { data } = useOutletContext();
  const { newAlbums, topAlbums ,songs} = data;


  return (
    <div>
      <Hero/>
  <Section  tittle="Top Albums" data = {topAlbums} type ="album"  />
  <Section  tittle="New Albums" data = {newAlbums} type ="album"  />
  <Section  tittle="Songs" data = {songs} filtersource={fetchgenres} type="songs"  />
    </div>
  );
}

export default Homepage;
