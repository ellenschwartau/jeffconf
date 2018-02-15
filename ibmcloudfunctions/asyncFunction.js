function main(params) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve({ message: "Hello, this is async!" });
        }, 2000); // , 5 * 60 * 1000); // this is going to be killed
    });
}