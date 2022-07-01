function getDaysInMonth(yearNum: number, monthNum: number): number
{
    return new Date(yearNum, monthNum + 1, 0).getDate();
}

export {getDaysInMonth}