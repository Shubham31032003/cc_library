import React, { useState } from "react";
import { Nav } from "./nav";
import { Welcome_box } from "./Welcome_container";
import PdfDownloader from "./pdf_downloader";
import { Gallery } from "./Gallery";
import { MessageFromFounder } from "./messgae_from_founder";
import { Footer } from "./footer";



function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if(mode==="light")
    {
      setMode("dark")
      document.body.style.backgroundColor="black";
    }
    else
    {
      setMode("light")
      document.body.style.backgroundColor="white";
    }
  };

  return (
    <div>
      <Nav brand="Career Catalyst Library" mode={mode} toggle={toggleMode} />
      <Welcome_box heading="Welcome to Our Library" mode={mode} toggle={toggleMode}/>
      <PdfDownloader mode={mode} toggle={toggleMode}/>
      <Gallery heading="Welcome to Our Library" mode={mode} toggle={toggleMode}/>
      <MessageFromFounder mode={mode} toggle={toggleMode} />
      <Footer mode={mode} toggle={toggleMode}/>
      
    </div>
  );
}

export default App;
