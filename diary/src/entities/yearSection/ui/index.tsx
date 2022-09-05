import "./styles.scss";
import { MonthSection } from "entities/monthSection";
import { useEffect, useRef, useState } from "react";
import { Year } from "shared/types/year";

interface YearSectionProps extends Year {}

export const YearSection = ({ yearNum, months }: YearSectionProps) => {
    const [offset, setOffset] = useState(0);
    const yearRef = useRef<HTMLSpanElement>(null);
    const lineRef = useRef<HTMLHRElement>(null);

    useEffect(() => {
        const onScroll = () => {
            if (!yearRef.current) throw new Error("yearRef is not assigned");
            if (!lineRef.current) throw new Error("yearRef is not assigned");

            if (offset >= 60) {
                yearRef.current.style.position = "fixed";
            } else {
                yearRef.current.style.position = "static";
            }

            setOffset(window.scrollY);
        };
        window.removeEventListener("scroll", onScroll);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [offset]);

    return (
        <div className="year-section">
            <div className="year-section__container">
                <span ref={yearRef} className="year-section__year">
                    {yearNum}
                </span>
                <hr ref={lineRef} className="year-section__line" />
            </div>
            {months.map((month, monthNum) => {
                const firstDayShift = new Date(yearNum, monthNum, 1).getDay();
                const lastDayShift = new Date(
                    yearNum,
                    monthNum + 1,
                    0
                ).getDay();

                return (
                    <MonthSection
                        key={monthNum}
                        year={yearNum}
                        monthNum={monthNum}
                        month={month}
                        firstDayShift={
                            firstDayShift - 1 === -1 ? 6 : firstDayShift - 1
                        }
                        lastDayShift={
                            lastDayShift - 1 === -1 ? 6 : lastDayShift - 1
                        }
                    />
                );
            })}
        </div>
    );
};
