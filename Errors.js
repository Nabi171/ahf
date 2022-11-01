async function getData() {
    try {
        undefined.find();
    } catch (error) {
        errHandler(error);
    }

}
getData();

function errHandler(error) {
    const { name, nessage, stack } = error;
    logger.error(
        {
            name,
            message,
            stack,
        }

    );
    console.log("internal server error");
}
console.log("Done!");