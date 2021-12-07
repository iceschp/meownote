import React , { useState, usestate}from "react";
import { Header } from "./components/layout/Header";
import { Content } from "./components/layout/Content";
import { ProjectsProvider, SelectedProjectProvider } from "./context";
import { Navbar } from "./components/Homepage/Navbar";

export const App = () => {
  // { darkModeDefault = false }
  // const [darkMode, setDarkMode] = useState(darkModeDefault);

  // console.log(darkModeDefault)

  // return (
  //   <SelectedProjectProvider>
  //     <ProjectsProvider>
  //       <main
  //         data-testid="application"
  //         className={darkMode ? 'darkmode' : undefined}
  //       >
  //         <Header darkMode={darkMode} setDarkMode={setDarkMode} />
  //         <Content />
  //       </main>
  //     </ProjectsProvider>
  //   </SelectedProjectProvider>
  // );
  const x = 1;
  return(
    <div>
    <Navbar/>
      <h1>test</h1>
    </div>
  )
};

export default App;
