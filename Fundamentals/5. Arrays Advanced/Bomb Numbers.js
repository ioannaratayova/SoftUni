function solve(arr, off){
    let bomb = off[0];
    let power = off[1];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == bomb){
            for (let j = i - power; j <= i + power; j++){
                arr[j] = 0;
            }
        }
    }
    let tapata_suma = 0
    for (num of arr){
        tapata_suma += num
    }
    console.log(tapata_suma)
}