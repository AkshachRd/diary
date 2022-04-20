import './MonthSection.css';
import DayCard from "./DayCard";

function monthSection({month, days, firstDayShift, lastDayShift})
{
    const daysNumber = days.length + firstDayShift + (6 - lastDayShift);
    const rowsNumber = (daysNumber / 7 >> 0);
    const monthTableStyle = {
        gridTemplateRows: '1fr '.repeat(rowsNumber + 1)
    };
    const monthTableStart = {
        gridColumnStart: firstDayShift + 1
    }

    return (
        <div className="month-section">
            <span className="month-section__month">{month}</span>
            <div className="month-section__table" style={monthTableStyle}>
                {
                    days.map((day, i) => (
                        <DayCard
                            key={i}
                            dayNum={i + 1}
                            heading={day["heading"]}
                            text={day["text"]}
                            style={i === 0 ? monthTableStart : null}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default monthSection;