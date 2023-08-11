const func1 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Initializing Network, Please Wait...")
      }, 1000);
    })
  }
  const func2 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Connecting to server....")
      }, 4000);
    })
  }
  const func3 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Retreiving Username...")
      }, 3000);
    })
  }
  const func4 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Username Found: @arjun_kadam_98")
      }, 3000);
    })
  }
  const func5 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Trying a combination of 4.5 Thousands passwords...")
      }, 3000);
    })
  }
  const funcT = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Failed to get password")
      }, 3000);
    })
  }
  const funcS = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Trying Again")
      }, 1000);
    })
  }
  const func6 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Password Found Successfully: arjun1221")
      }, 2000);
    })
  }
  const func7 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Connecting to Instagram...")
      }, 1000);
    })
  }
  const func8 = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("$-> Successfully Hacked")
      }, 1000);
    })
  }
  const run = async () => {
    let a = await func1()
    document.querySelector("#content").innerHTML += (a)
    let b = await func2()
    document.querySelector("#content2").innerHTML += (b)
    let c = await func3()
    document.querySelector("#content3").innerHTML += (c)
    let d = await func4()
    document.querySelector("#content4").innerHTML += (d)
    let e = await func5()
    document.querySelector("#content5").innerHTML += (e)
    let eT = await funcT()
    document.querySelector("#contentT").innerHTML += (eT)
    let eS = await funcS()
    document.querySelector("#contentS").innerHTML += (eS)
    let f = await func6()
    document.querySelector("#content6").innerHTML += (f)
    let g = await func7()
    document.querySelector("#content7").innerHTML += (g)
    let h = await func8()
    document.querySelector("#content8").innerHTML += (h)
  }
  run()
  