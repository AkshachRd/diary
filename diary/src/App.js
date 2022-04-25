import './App.css';
import Header from "./components/Header";
import YearSection from "./components/YearSection";
import {generateYear} from "./generateYear";
import React from "react";

const years = [generateYear(new Date().getFullYear())];

function App()
{
  return (
      <div className="App">
          {
             <React.Fragment>
                 <div className="App__container">
                     {
                         years.map((year, i) => (
                             <YearSection key={i} year={year["year"]} months={year["months"]}/>
                         ))
                     }
                 </div>
                 <Header/>
             </React.Fragment>
          }
      </div>
  );
}

export default App;
