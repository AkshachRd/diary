import './YearSection.css';
import MonthSection from '../MonthSection/MonthSection';
import {useEffect, useRef, useState} from "react";
import {Year} from "../../types/Year";

interface YearSectionProps extends Year {}

function YearSection({yearNum, months}: YearSectionProps)
{
    const [offset, setOffset] = useState(0);
    const yearRef = useRef<HTMLSpanElement>(null);
    const lineRef = useRef<HTMLHRElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (!yearRef.current) throw Error("yearRef is not assigned");
            if (!lineRef.current) throw Error("yearRef is not assigned");

            if (offset >= 60)
            {
                yearRef.current.style.transform = 'translateY(30vh)';

                lineRef.current.style.gridColumn = "1 / 3";
                lineRef.current.style.gridRowStart = "1";
            }
            else
            {
                yearRef.current.style.transform = 'translateY(0)';

                lineRef.current.style.gridColumn = "2 / 3";
            }

            setOffset(window.pageYOffset);
        };
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, [offset]);

    return (
        <div className="year-section">
            <div className="year-section__container">
                <span ref={yearRef} className="year-section__year">{yearNum}</span>
                <hr ref={lineRef} className="year-section__line"/>
            </div>
            {
                months.map((month, monthNum) => {
                const firstDayShift = new Date(yearNum, monthNum, 1).getDay();
                const lastDayShift = new Date(yearNum, monthNum + 1, 0).getDay();

                return (
                    <MonthSection
                        key={monthNum}
                        year={yearNum}
                        monthNum={monthNum}
                        month={month}
                        firstDayShift={firstDayShift - 1 === -1 ? 6 : firstDayShift - 1}
                        lastDayShift={lastDayShift - 1 === -1 ? 6 : lastDayShift - 1}
                    />
                )})
            }
        </div>
    )
}

export default YearSection;