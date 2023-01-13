function areaOfFigures([arg1, arg2, arg3])  {
    let type = arg1;
    let n = parseFloat(arg2);
    let n2 = parseFloat(arg3);

    if (type == 'square') {
        console.log((n * n).toFixed(3));
    }
    else if (type == 'rectangle') {
        console.log((n * n2).toFixed(3));
    }
    else if (type == 'circle') {
        console.log((Math.PI * n * n).toFixed(3));
    }
    else {
        console.log((n * n2 / 2).toFixed(3));
    }
}