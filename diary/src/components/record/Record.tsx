import {FormEvent, useState} from "react";
import "./Record.css";
import {getDateName} from "../../services/generateYear";
import {useParams} from "react-router-dom";
import {useNavigateToMain} from "../../services/navigate";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {changeDayContent, changeDayId, selectDay} from "../calendar/calendarSlice";
import {guidGenerator} from "../../services/guidGenerator";

function Record()
{
    const params = useParams();
    const yearNum = Number(params.year);
    const monthNum = Number(params.month) - 1;
    const dayNum = Number(params.day);
    const navigateToMain = useNavigateToMain();

    const date = new Date(yearNum, monthNum, dayNum);

    const day = useAppSelector((state) => selectDay(state, date));
    const dispatch = useAppDispatch();

    const [title, titleSet] = useState(day.heading);
    const [text, textSet] = useState(day.text);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (title || text)
        {
            if (!day.id) {
                dispatch(changeDayId({
                    date: date,
                    id: guidGenerator()
                }));
            }
            dispatch(changeDayContent({
                date: date,
                heading: title,
                text: text
            }));
        }

        navigateToMain();
    }

    return (
        <div className="record">
            <form onSubmit={handleSubmit} className="record__container">
                <div className="record__header">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => titleSet(e.target.value)}
                        className="record__input record__input_title"
                    />
                    <span
                        className="record__date">{getDateName(new Date(yearNum, monthNum, dayNum))}</span>
                </div>
                <textarea
                    placeholder="Type here..."
                    value={text}
                    onChange={(e) => textSet(e.target.value)}
                    className="record__input record__input_text"
                />
                <div className="record__buttons">
                    <button className="record__input record__input_cancel" onClick={navigateToMain}>Cancel</button>
                    <input type="submit" value="Apply" className="record__input record__input_submit"/>
                </div>
            </form>
        </div>
    );
}

export default Record;