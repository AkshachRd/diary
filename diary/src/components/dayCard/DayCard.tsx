import './DayCard.css';
import {useEffect, useRef} from "react";

interface DayCardProps
{
    yearNum: number;
    monthNum: number;
    dayNum: number;
    selected: boolean;
    onClick: () => void
}

function DayCard({yearNum, monthNum, dayNum, selected, onClick}: DayCardProps)
{
    const dayCardRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!dayCardRef.current) throw Error("dayCardRef is not assigned");
        if (selected) dayCardRef.current.scrollIntoView({behavior: "smooth", inline: "center"});
    }, [selected]);

    return (
        <div className="day-card" onClick={onClick}>
            <div ref={dayCardRef} className="day-card__container"
                 style={{borderLeft: selected ? "5px solid #000000" : "3px solid #000000"}}
            />
        </div>
    )
}

export default DayCard;