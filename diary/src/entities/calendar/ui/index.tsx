import { useAppSelector } from "shared/hooks";
import { YearSection } from "entities/yearSection";
import React from "react";
import "./styles.scss";

export const Calendar = () => {
    const calendar = useAppSelector((state) => state);

    return (
        <div className="calendar">
            {calendar.map((year, i) => (
                <YearSection
                    key={i}
                    yearNum={year["yearNum"]}
                    months={year["months"]}
                />
            ))}
        </div>
    );
};
