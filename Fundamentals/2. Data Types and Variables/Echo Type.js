function echoType(arg1) {
    if (typeof arg1 == "string" || typeof arg1 == "number") {
        console.log(typeof arg1);
        console.log(arg1);
    }
    else {
        console.log(typeof arg1);
        console.log('Parameter is not suitable for printing');
    }   
}