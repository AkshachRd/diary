import YearSection from "../yearSection/YearSection";
import React, {useState} from "react";
import "./Calendar.css";
import {useAppSelector} from "../../app/hooks";

function Calendar()
{
    const calendar = useAppSelector((state) => state);
    const [selectedDayDate, setSelectedDayDate] = useState(new Date());

    const selectDay = (e: React.WheelEvent<HTMLDivElement>) => {
        e.preventDefault();
        if (e.deltaX === 0)
        {
            if (e.deltaY > 0)
            {
                setSelectedDayDate(new Date(selectedDayDate.setDate(selectedDayDate.getDate() + 1)));
            }
            else
            {
                setSelectedDayDate(new Date(selectedDayDate.setDate(selectedDayDate.getDate() - 1)));
            }
        }
    };

    return (
        <div className="calendar" onWheel={selectDay}>
            {
                calendar.map((year, i) => (
                    <YearSection
                        key={i}
                        yearNum={year["yearNum"]}
                        months={year["months"]}
                        selectedDayDate={selectedDayDate}
                        setSelectedDayDate={setSelectedDayDate}
                    />
                ))
            }
        </div>
    )
}

export {Calendar}