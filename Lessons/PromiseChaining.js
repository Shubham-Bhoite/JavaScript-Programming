let p1 = new Promise((resolve, reject) =>{
    setTimeout(() =>{
        console.log("Resolved after 3 seconds")
        resolve(22)
    }, 3000)
})

p1.then((value) =>{
    console.log(value)
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("Promise 2")
        }, 2000)
    })
}).then((value) => {
    console.log("We are done")
    return 2
}).then((value)=>{
    console.log("kay haal hai bhai!")
})