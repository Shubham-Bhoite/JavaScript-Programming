async function harry() {
    let rahuriWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("27 Deg")
            }, 2000)
    })

    let kashtiWeather = new Promise((resolve, reject) => {
            setTimeout(() => {
                    resolve("21 Deg")
            }, 5000)
    })

    // rahuriWeather.then(alert)
    // kashtiWeather.then(alert)
    console.log("Fetching rahuri Weather Please wait ...")
    let rahuriW = await rahuriWeather
    console.log("Fetched rahuri Weather: " + rahuriW)
    console.log("Fetching kashti Weather Please wait ...")
    let kashtiW = await kashtiWeather
    console.log("Fetched kashti Weather: " + kashtiW)
    return [rahuriW, kashtiW]
}

const cherry = async () => {
    console.log("Hey I am doremon and I am waiting ")
}

const main1 = async () => {
    console.log("Welcome to weather control room")
    let a = await harry()
    let b = await cherry()

}
main1()
