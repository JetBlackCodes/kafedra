import React from "react";
import Header from "./components/Header";
import TechnologiesBlock from "./components/TechnologiesBlock";
import DisciplinesBlock from "./components/DisciplinesBlock";
import LectorsBlock from "./components/LectorsBlock";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Header />  
      <DisciplinesBlock />
      <TechnologiesBlock />
      <LectorsBlock />
      <Contacts />  
    </>
  );
}

export default App;
