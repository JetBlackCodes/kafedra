import React from "react";
import Header from "./components/Header";
import TechnologiesBlock from "./components/TechnologiesBlock";
import DisciplinesBlock from "./components/DisciplinesBlock";
import LectorsBlock from "./components/LectorsBlock";

function App() {
  return (
    <>
      <Header />  
      <DisciplinesBlock />
      <TechnologiesBlock />
      <LectorsBlock />
    </>
  );
}

export default App;
