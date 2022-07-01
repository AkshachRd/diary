function daysInYear(yearNum: number): number
{
    return ((yearNum % 4 === 0 && yearNum % 100 > 0) || yearNum % 400 === 0) ? 366 : 365;
}

export {daysInYear}