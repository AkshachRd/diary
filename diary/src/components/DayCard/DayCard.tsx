import pencil from './pencil_icon.svg';
import './DayCard.css';
import CSS from 'csstype';
import {Day} from "../../generateYear";

interface DayCardProps extends Day
{
    year: number;
    monthNum: number;
    dayNum: number;
    style: CSS.Properties | undefined;
}

function DayCard({year, monthNum, dayNum, id, heading, text, style}: DayCardProps)
{
    return (
        <div className="day-card" style={style}>
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