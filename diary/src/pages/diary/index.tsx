import React from "react";
import {Calendar} from "entities/calendar";
import {Header} from "entities/header";

const Diary = () => {
    return (
        <div className="App">
            <Calendar/>
            <Header/>
        </div>
    );
};

export default Diary;