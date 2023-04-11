function gramophone(arg1, arg2, arg3) {
    let albumName = arg1.length;
    let bandName = arg2.length;
    let songName = arg3.length;
    let time = (albumName * bandName) * songName / 2;
    let rotations = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotations} times.`);
}