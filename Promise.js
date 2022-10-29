const myPromise = new Promise((resolve, reject) => {
    const user = null;
    if (!user) {
        reject("something went wrong!");
    } else {
        setTimeout(() => {
            resolve("successfully git hte data")
        }, 1000)
    }





});