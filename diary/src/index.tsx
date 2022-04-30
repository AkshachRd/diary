import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Record from "./components/record/Record";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {generateYear} from "./services/generateYear";

const years = [generateYear(new Date().getFullYear())];

const changeRecord = (date: Date, title: string, text: string) => {
    alert(`${date.toDateString()}\n${title}\n${text}`)
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App years={years} />} />
                <Route path="/:year/:month/:day" element={<Record onChange={changeRecord} />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
