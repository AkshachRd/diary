interface Year
{
    yearNum: number;
    months: Array<Month>;
}

type Month = Array<Day>;

interface Day
{
    id: string | null;
    heading: string;
    text: string;
}

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

function getYear(years: Array<Year>, yearNum: number): Year | null
{
    const result = years.find(
        (year) => year.yearNum === yearNum
    );

    if (!result)
    {
        return null;
    }

    return result;
}

export {getMonthName, generateYear, getDateName, getYear};
export type { Day, Month, Year };
