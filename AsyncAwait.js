const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success");
    }, 1000);
});


async function getData() {
    // const res=[]

    const res = await promise;
    console.log(res);
}

getData();
