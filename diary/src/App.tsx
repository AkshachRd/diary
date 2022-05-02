import './App.css';
import Header from "./components/header/Header";
import React from "react";
import {Calendar} from "./components/calendar/Calendar";

function App()
{
  return (
      <div className="App">
          <Calendar/>
          <Header/>
      </div>
  );
}

export default App;