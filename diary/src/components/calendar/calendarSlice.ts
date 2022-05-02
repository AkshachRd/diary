import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Year} from "../../types/year";
import {generateYear} from "../../services/generateYear";
import {RootState} from "../../app/store";

interface ChangeDayIdPayload
{
    date: Date;
    id: string;
}

interface ChangeDayContentPayload
{
    date: Date;
    heading: string;
    text: string;
}

type CalendarState = Array<Year>;

const initialState: CalendarState = [generateYear(new Date().getFullYear())];

const calendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        changeDayId: (state, action: PayloadAction<ChangeDayIdPayload>) => {
            const date = action.payload.date;

            const year = state.find(
                (year) => year.yearNum === date.getFullYear()
            );
            if (!year) throw Error("Targeted year isn't exist");

            year.months[date.getMonth()][date.getDate() - 1].id = action.payload.id;
        },
        changeDayContent: (state, action: PayloadAction<ChangeDayContentPayload>) => {
            const date = action.payload.date;

            const year = state.find(
                (year) => year.yearNum === date.getFullYear()
            );
            if (!year) throw Error("Targeted year isn't exist");

            year.months[date.getMonth()][date.getDate() - 1].heading = action.payload.heading;
            year.months[date.getMonth()][date.getDate() - 1].text = action.payload.text;
        }
    }
});

export const {changeDayId, changeDayContent} = calendarSlice.actions;
export const selectDay = (state: RootState, date: Date) => {
    const year = state.find(
        (year) => year.yearNum === date.getFullYear()
    );
    if (!year) throw Error("Targeted year isn't exist");
    return year.months[date.getMonth()][date.getDate() - 1];
}
export default calendarSlice.reducer;