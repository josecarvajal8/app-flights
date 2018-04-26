import Sugar from 'sugar'
export const Convert = {
    converDateWeekDay: (date: any) => {
        return Sugar.Date.format(new Date(date))
    },
    converTextCap: (text: string) => {
        return Sugar.String.capitalize(text)
    },
    convertDateDash: (date: any) => {
        return Sugar.Date.format(new Date(date), '{MM}-{dd}-{yyyy}')
    },
    checkArray: (data: any) => {
        console.log(Array.isArray(data))
        return Array.isArray(data)
    }
}