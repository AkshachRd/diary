function generateYear(year)
{
    let months = [];

    for (let i = 0; i < 12; ++i)
    {
        const daysInMonth = new Date(year, i + 1, 0).getDate();

        let days = [];
        for (let j = 0; j < daysInMonth; ++j)
        {
            days.push({
                "id": null,
                "heading": null,
                "text": null
            });
        }

        months.push(days);
    }

    return {
        "year": year,
        "months": months
    };
}

function getMonthName(month)
{
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return monthNames[month];
}

function getDateName(date)
{
    return getMonthName(date.getMonth()) + " " + date.getDate() + " / " + date.getFullYear();
}

export {getMonthName, generateYear, getDateName};