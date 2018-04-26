const IP = '10.0.1.36'
export const Services = {
    oneWayTrip: (origin, destiny, date) => {
        return fetch(`http://${IP}:6080/flights?destiny=${destiny}&origin=${origin}&date=${date}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                return error
            })
    },
    multyTrip: (data) => {
        return fetch(`http://${IP}:6080/multiTrip`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then((res) => res.json())
            .then((res) => {
                return res
            }).catch((error) => {
                return error
            })
    },
    roudTrip: (origin, destiny, date, returningDate) => {
        return fetch
            (`http://${IP}:6080/roundTrip?destiny=${destiny}&origin=${origin}&date=${date}&returnDate=${returningDate}`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                return error
            })
    },
    getAirports: () => {
        return fetch(`http://${IP}:6080/getAirports/`)
            .then((response) => response.json())
            .then((responseJson) => {
                return responseJson
            })
            .catch((error) => {
                return error
            })
    }
}