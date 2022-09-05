import "./styles.scss";
import { DayCard } from "entities/dayCard";
import { getMonthName } from "shared/utils/dates";
import { Month } from "shared/types/month";
import { useEffect, useRef } from "react";

interface MonthSectionProps {
    year: number;
    monthNum: number;
    month: Month;
    firstDayShift: number;
    lastDayShift: number;
}

export const MonthSection = ({
    year,
    monthNum,
    month,
    firstDayShift,
    lastDayShift
}: MonthSectionProps) => {
    const daysNumber = month.length + firstDayShift + (6 - lastDayShift);
    const rowsNumber = (daysNumber / 7) >> 0;
    const monthTableStyle = {
        gridTemplateRows: "1fr ".repeat(rowsNumber + 1)
    };
    const monthTableStart = {
        gridColumnStart: firstDayShift + 1
    };

    const monthRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!monthRef.current) throw Error("monthRef is not assigned");

        if (new Date().getMonth() === monthNum) {
            monthRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [monthNum]);

    return (
        <div ref={monthRef} className="month-section">
            <span className="month-section__month">
                {getMonthName(monthNum)}
            </span>
            <div className="month-section__table" style={monthTableStyle}>
                {month.map((day, i) => (
                    <DayCard
                        key={i}
                        yearNum={year}
                        monthNum={monthNum}
                        dayNum={i + 1}
                        id={day["id"]}
                        heading={day["heading"]}
                        text={day["text"]}
                        style={i === 0 ? monthTableStart : undefined}
                    />
                ))}
            </div>
        </div>
    );
};

export default MonthSection;
