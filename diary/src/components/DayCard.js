import pencil from './pencil_icon.svg';
import './DayCard.css';

function DayCard({year, month, dayNum, heading, text, style})
{
    return (
        <div className="day-card" style={style}>
            <div className="day-card__container">
                <span className="day-card__num">{dayNum}</span>
            </div>

            {
                heading || text ?
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