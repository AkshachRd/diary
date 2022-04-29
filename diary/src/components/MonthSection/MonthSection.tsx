import './MonthSection.css';
import DayCard from "../DayCard/DayCard";
import {getMonthName} from "../../generateYear";
import {Month} from "../../types/Month";

interface MonthSectionProps
{
    year: number;
    monthNum: number;
    month: Month;
    firstDayShift: number;
    lastDayShift: number;
}

function monthSection({year, monthNum, month, firstDayShift, lastDayShift}: MonthSectionProps)
{
    const daysNumber = month.length + firstDayShift + (6 - lastDayShift);
    const rowsNumber = (daysNumber / 7 >> 0);
    const monthTableStyle = {
        gridTemplateRows: '1fr '.repeat(rowsNumber + 1)
    };
    const monthTableStart = {
        gridColumnStart: firstDayShift + 1
    }

    return (
        <div className="month-section">
            <span className="month-section__month">{getMonthName(monthNum)}</span>
            <div className="month-section__table" style={monthTableStyle}>
                {
                    month.map((day, i) => (
                        <DayCard
                            key={i}
                            year={year}
                            monthNum={monthNum}
                            dayNum={i + 1}
                            id={day["id"]}
                            heading={day["heading"]}
                            text={day["text"]}
                            style={i === 0 ? monthTableStart : undefined}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default monthSection;