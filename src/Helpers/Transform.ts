import Sugar from 'sugar'
export const Convert = {
    converDateWeekDay: (date: any) => {
        return Sugar.Date.format(new Date(date))
    },
    converTextCap: (text: string) => {
        return Sugar.String.capitalize(text)
    },
    convertDateDash: (date: any) => {
        return Sugar.Date.format(date, '{MM}-{dd}-{yyyy}')
    },
    checkArray: (data: any) => {
        return Array.isArray(data)
    },
    minToH: (mins: any) => {
        let h = Math.floor(mins / 60)
        let m = mins % 60
        h = h < 10 ? '0' + h : h
        m = m < 10 ? '0' + m : m
        return `${h}:${m}`
    }
}