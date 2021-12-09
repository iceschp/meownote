import React , { useState, usestate}from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import { FaMusic } from "react-icons/fa";
import Spotify from "./components/Spotify";

export const App = ({ darkModeDefault = false }) => {
  const [darkMode, setDarkMode] = useState(darkModeDefault);
  const [buttonPopup, setButtonPopup] = useState(false);

  console.log(darkModeDefault)

  return (
    <Router>
      <SelectedProjectProvider>
        <ProjectsProvider>
          <main
            data-testid="application"
            className={darkMode ? 'darkmode' : undefined}
          >
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Content />
          </main>
        </ProjectsProvider>
      </SelectedProjectProvider>
    
      <button className="spotify__button" onClick={() => setButtonPopup(true)} title="Open tab">
          <FaMusic />
      </button>
      <Spotify trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h2>✨ Spotify Playlist ☕️</h2>
        <iframe src="https://open.spotify.com/embed/playlist/59LUwJVpBHWjxyKDDuz4Ld" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </Spotify>
      
    </Router>
  );
};

export default App;
