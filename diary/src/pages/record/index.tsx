import { FormEvent, useState } from "react";
import "./styles.scss";
import { getDateName } from "shared/utils";
import {
    useAppLocation,
    useAppDispatch,
    useAppSelector,
    useNavigateToMain
} from "shared/hooks";
import { changeDayContent, setDayId, selectDay } from "entities/calendar";
import { getGUID } from "shared/utils/getGUID";
import { useParams } from "react-router-dom";

const Record = () => {
    const navigateToMain = useNavigateToMain();
    const {
        state: { date }
    } = useAppLocation();
    const { id } = useParams();

    const day = useAppSelector((state) => selectDay(state, date));
    const dispatch = useAppDispatch();

    const [title, titleSet] = useState(day.heading);
    const [text, textSet] = useState(day.text);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        if (title && text) {
            if (!day.id) {
                dispatch(
                    setDayId({
                        date,
                        id: id ?? getGUID()
                    })
                );
            }
            dispatch(
                changeDayContent({
                    date: date,
                    heading: title,
                    text: text
                })
            );
        }

        navigateToMain();
    };

    return (
        <div className="record">
            <form onSubmit={handleSubmit} className="record__container">
                <div className="record__header">
                    <input
                        required={true}
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => titleSet(e.target.value)}
                        className="record__input record__input_title"
                    />
                    <span className="record__date">{getDateName(date)}</span>
                </div>
                <textarea
                    required={true}
                    placeholder="Type here..."
                    value={text}
                    onChange={(e) => textSet(e.target.value)}
                    className="record__input record__input_text"
                />
                <div className="record__buttons">
                    <button
                        className="record__input record__input_cancel"
                        onClick={navigateToMain}
                    >
                        Cancel
                    </button>
                    <input
                        type="submit"
                        value="Apply"
                        className="record__input record__input_submit"
                    />
                </div>
            </form>
        </div>
    );
};

export default Record;
