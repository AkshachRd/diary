import './MonthSection.css';
import {Month} from "../../types/month";
import {getMonthName} from "../../services/generateYear";
import DayCard from "../dayCard/DayCard";
import React from "react";

interface MonthSectionProps
{
    yearNum: number;
    monthNum: number;
    month: Month;
    selectedDayDate: Date;
    setSelectedDayDate: React.Dispatch<React.SetStateAction<Date>>;
}

function MonthSection({yearNum, monthNum, month, selectedDayDate, setSelectedDayDate}: MonthSectionProps)
{
    return (
        <div className="month-section">
            <div className="month-section__days" style={{gridTemplateColumns: "1fr ".repeat(month.length)}}>
                {
                    month.map((day, dayNum) =>
                        <DayCard
                            yearNum={yearNum}
                            monthNum={monthNum}
                            dayNum={dayNum + 1}
                            selected={selectedDayDate.getMonth() === monthNum
                                ? selectedDayDate.getDate() === dayNum + 1
                                : false}
                            onClick={() => setSelectedDayDate(new Date(yearNum, monthNum, dayNum + 1))}
                        />
                    )
                }
            </div>
            <span className="month-section__name">{getMonthName(monthNum)}</span>
        </div>
    )
}

export default MonthSection;