import { fetchtopalbums } from "./Components/Api/api" ;
import { fetchnewalbums } from "./Components/Api/api";
import {fetchsongs} from "./Components/Api/api"
import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
export const BACK_ENDPOINT = "https://qtify-backend-labs.crio.do";

function App() {
  const [data, setData] = useState({});
  const generatedata = (key, source) => {
    source().then((res) => {
      setData((prevState) => {
        return { ...prevState, [key]: res };
      });
    });
  };

  useEffect(() => {
    generatedata("topAlbums", fetchtopalbums);
    generatedata("newAlbums", fetchnewalbums);
    generatedata("songs", fetchsongs);
  }, []);
  const { topAlbums = [], newAlbums = [] ,songs=[]} = data;

console.log("Stateleveldata" ,data)
  return (
    <>
   <StyledEngineProvider>
    <Navbar/>
      
<Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
</StyledEngineProvider>
    </>
  );
}

export default App;
