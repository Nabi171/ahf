async function getData() {
    try {
        undefined.find();

        const emailError = new Error("Email already exists");
        throw emailError;
    }
    catch (error) {
        errHandler(error);
    }

}
getData();

function errHandler(error) {
    const { name, nessage, stack } = error;
    console.log(name, message);
    // logger.error(
    //     {
    //         name,
    //         message,
    //         stack,
    //     }

    // );
    // console.log("internal server error");
}
console.log("Done!");