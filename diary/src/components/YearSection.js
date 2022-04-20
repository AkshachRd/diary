import './YearSection.css';
import MonthSection from './MonthSection';
import {useEffect, useRef, useState} from "react";
import {getMonthName} from "../generateYear";

function YearSection({year, months})
{
    const [offset, setOffset] = useState(0);
    const refYear = useRef(null);
    const refLine = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (offset >= 60)
            {
                refYear.current.style.transform = 'translateY(30vh)';

                refLine.current.style.gridColumn = "1 / 3";
                refLine.current.style.gridRowStart = 1;
            }
            else
            {
                refYear.current.style.transform = 'translateY(0)';

                refLine.current.style.gridColumn = "2 / 3";
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
                <span ref={refYear} className="year-section__year">{year}</span>
                <hr ref={refLine} className="year-section__line"/>
            </div>
            {
                months.map((days, month) => {
                const firstDayShift = new Date(year, month, 1).getDay();
                const lastDayShift = new Date(year, month + 1, 0).getDay();

                return (
                    <MonthSection
                        key={month}
                        month={getMonthName(month)}
                        days={days}
                        firstDayShift={firstDayShift - 1 === -1 ? 6 : firstDayShift - 1}
                        lastDayShift={lastDayShift - 1 === -1 ? 6 : lastDayShift - 1}
                    />
                )})
            }
        </div>
    )
}

export default YearSection;