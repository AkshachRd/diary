import './App.css';
import Header from "./components/header/Header";
import YearSection from "./components/yearSection/YearSection";
import React from "react";
import {Year} from "./types/year";

interface AppProps
{
    years: Array<Year>;
}

function App({ years }: AppProps)
{
  return (
      <div className="App">
      {
          <React.Fragment>
              <div className="App__container">
              {
                  years.map((year, i) => (
                      <YearSection key={i} yearNum={year["yearNum"]} months={year["months"]}/>
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