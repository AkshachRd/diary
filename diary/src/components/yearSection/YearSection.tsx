import './YearSection.css';
import MonthSection from '../monthSection/MonthSection';
import {Year} from "../../types/year";
import React from "react";

interface YearSectionProps extends Year
{
    selectedDayDate: Date;
    setSelectedDayDate: React.Dispatch<React.SetStateAction<Date>>;
}

function YearSection({yearNum, months, selectedDayDate, setSelectedDayDate}: YearSectionProps)
{
    return (
        <div className="year-section">
            <div className="year-section__container">
            {
                months.map((month, monthNum) => {
                    const yearEnd = monthNum === 11;

                    return (
                        <div className="year-section__month">
                            <MonthSection
                                key={monthNum}
                                yearNum={yearNum}
                                monthNum={monthNum}
                                month={month}
                                selectedDayDate={selectedDayDate}
                                setSelectedDayDate={setSelectedDayDate}
                            />
                            {!yearEnd && <div className="year-section__month-border"/>}
                        </div>
                    )
                })
            }
            </div>
            <span className="year-section__year">{yearNum}</span>
        </div>
    )
}

export default YearSection;