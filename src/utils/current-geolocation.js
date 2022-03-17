const getCoordinates = () => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
    })
}

export const getAddress = async () => {
    const position = await getCoordinates()
    let lat =  position.coords.latitude
    let lon = position.coords.longitude

    return {lat, lon}
}