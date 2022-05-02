import YearSection from "../yearSection/YearSection";
import React from "react";
import "./Calendar.css";
import {useAppSelector} from "../../app/hooks";

function Calendar()
{
   const calendar = useAppSelector((state) => state) ;

    return (
        <div className="calendar">
            {
                calendar.map((year, i) => (
                    <YearSection key={i} yearNum={year["yearNum"]} months={year["months"]}/>
                ))
            }
        </div>
    )
}

export {Calendar}