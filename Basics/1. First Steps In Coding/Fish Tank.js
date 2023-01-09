function FishTank([arg1, arg2, arg3, arg4])  {
    let lenght = Number(arg1);
    let width = Number(arg2);
    let height = Number(arg3);
    let percent = parseFloat(arg4);

    let volume_of_the_aqua = lenght * width * height;
    let volume_in_liters = volume_of_the_aqua / 1000;
    let occupied_space = percent / 100;
    let liters_needed = volume_in_liters * (1 - occupied_space);
    console.log(liters_needed)
}