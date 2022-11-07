console.log(module);
function errorHandler(error) {
    const { name, message, stack } = error;
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


// module.exports = errorHandler;
// module.export.errorHandler = errorHandler;

function two() {
    console.log("two");
}

// module.exports.errorHandler = errorHandler;
// module.exports.two = two;
module.exports = {
    errorHandler,
    two,
}

console.log(module);