import pencil from "./img/pencil_icon.svg";
import "./styles.scss";
import CSS from "csstype";
import { Day } from "shared/types";
import { useNavigateToRecord } from "shared/hooks";
import { getGUID } from "shared/utils";

interface DayCardProps extends Day {
    yearNum: number;
    monthNum: number;
    dayNum: number;
    style: CSS.Properties | undefined;
}

export const DayCard = ({
    yearNum,
    monthNum,
    dayNum,
    id,
    heading,
    text,
    style
}: DayCardProps) => {
    const navigateToRecord = useNavigateToRecord(
        id ?? getGUID(),
        new Date(yearNum, monthNum, dayNum)
    );

    return (
        <div className="day-card" style={style} onClick={navigateToRecord}>
            <div className="day-card__container">
                <span className="day-card__num">{dayNum}</span>
            </div>

            {id ? (
                <div className="day-card__paragraph">
                    <div className="day-card__heading">{heading}</div>
                    <div className="day-card__text">{text}</div>
                </div>
            ) : (
                <div className="day-card__img">
                    <img src={pencil} alt="Pencil Icon" />
                </div>
            )}
        </div>
    );
};
