import {useState} from "react";
import "./Record.css";
import {getDateName} from "./generateYear";

function Record({date})
{
    const [title, titleSet] = useState("");
    const [text, textSet] = useState("");

    const handleRecord = (e) => {
        alert(title + " " + text);
        e.preventDefault();
    }

    return (
        <div className="record">
            <form onSubmit={handleRecord} className="record__container">
                <div className="record__header">
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={(e) => titleSet(e.target.value)}
                        className="record__input record__input_title"
                    />
                    <span
                        className="record__date">{getDateName(date)}</span>
                </div>
                <textarea
                    placeholder="Type here..."
                    value={text}
                    onChange={(e) => textSet(e.target.value)}
                    className="record__input record__input_text"
                />
                <input type="submit" value="Apply" className="record__input record__input_submit"/>
            </form>
        </div>
    );
}

export default Record;