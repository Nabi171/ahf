const myPromise = new Promise((resolve, reject) => {
    const user = { id: 1 };
    if (!user) {
        reject("something went wrong!");
    } else {
        setTimeout(() => {
            resolve("successfully got the data")
        }, 1000)
    }





});

myPromise.then(res => console.log(res))
    .catch(err => console.log(err));

console.log("done");