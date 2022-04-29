import {Year} from "./types/Year";
import {Day} from "./types/Day";
import {Month} from "./types/Month";

function generateYear(year: number): Year
{
    let months: Array<Month> = [];

    for (let i = 0; i < 12; ++i)
    {
        const daysInMonth = new Date(year, i + 1, 0).getDate();

        let days: Array<Day> = [];
        for (let j = 0; j < daysInMonth; ++j)
        {
            days.push({
                "id": null,
                "heading": "",
                "text": ""
            });
        }

        months.push(days);
    }

    return {
        "yearNum": year,
        "months": months
    };
}

function getMonthName(month: number): string
{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month];
}

function getDateName(date: Date): string
{
    return getMonthName(date.getMonth()) + " " + date.getDate() + " / " + date.getFullYear();
}

export {getMonthName, generateYear, getDateName};
