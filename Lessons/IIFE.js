//IIFE (Immediately Invoked Function Expression)

let a = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Hey, bro")
      }, 3000)
    })
  }
  
  (async () => {
    let b = await a()
    console.log(b)
    let c = await a()
    console.log(c)
    let d = await a()
    console.log(d)
  })()
  
  

  