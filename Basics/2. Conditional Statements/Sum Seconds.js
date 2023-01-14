function SumSeconds([arg1, arg2, arg3])  {
    let timeFirst = Number(arg1);
    let timeSecond = Number(arg2);
    let timeThird = Number(arg3);
    let all = timeFirst + timeSecond + timeThird;
    let min = Math.floor(all / 60);
    let sec = all % 60;

    if (sec < 10) {
        console.log(`${min}:0${sec}`);
    }
    else {
        console.log(`${min}:${sec}`);
    }
}