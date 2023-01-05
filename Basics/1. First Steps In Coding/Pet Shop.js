function PetShop([arg1, arg2])  {
    let numberOfdogFood = parseFloat(arg1);
    let numberOfcatFood = parseFloat(arg2);
    let foodForDoggie = numberOfdogFood * 2.50;
    let foodForkittie = numberOfcatFood * 4;
    let all = foodForDoggie + foodForkittie;
    console.log(all + ' lv.');
 }