import {FormEvent, useState} from "react";
import "./Record.css";
import {getDateName} from "../../generateYear";
import {useParams} from "react-router-dom";

interface RecordProps
{
    onChange: (date: Date, title: string, text: string) => void;
}

function Record({ onChange }: RecordProps)
{
    let params = useParams();
    const yearNum = Number(params.year);
    const monthNum = Number(params.month) - 1;
    const dayNum = Number(params.day);

    const [title, titleSet] = useState("");
    const [text, textSet] = useState("");

    const useRecord = (e: FormEvent) => {
        onChange(new Date(yearNum, monthNum, dayNum), title, text);
        e.preventDefault();
    }

    return (
        <div className="record">
            <form onSubmit={useRecord} className="record__container">
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
                <input type="submit" value="Apply" className="record__input record__input_submit"/>
            </form>
        </div>
    );
}

export default Record;