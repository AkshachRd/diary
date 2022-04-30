import pencil from './pencil_icon.svg';
import './DayCard.css';
import CSS from 'csstype';
import {Day} from "../../types/day";
import {useNavigateToRecord} from "../../services/navigate";

interface DayCardProps extends Day
{
    yearNum: number;
    monthNum: number;
    dayNum: number;
    style: CSS.Properties | undefined;
}

function DayCard({yearNum, monthNum, dayNum, id, heading, text, style}: DayCardProps)
{
    const navigateToRecord = useNavigateToRecord(new Date(yearNum, monthNum, dayNum));

    return (
        <div className="day-card" style={style} onClick={navigateToRecord}>
            <div className="day-card__container">
                <span className="day-card__num">{dayNum}</span>
            </div>

            {
                id ?
                <div className="day-card__paragraph">
                    <div className="day-card__heading">{heading}</div>
                    <div className="day-card__text">{text}</div>
                </div>
                :
                <div className="day-card__img">
                    <img src={pencil} alt="Pencil Icon"/>
                </div>
            }
        </div>
    )
}

export default DayCard;