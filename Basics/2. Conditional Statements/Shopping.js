function shopping([arg1, arg2, arg3, arg4])  {
    let budget_Petyr = parseFloat(arg1);
    let br_videokarti = Number(arg2);
    let br_procesori = Number(arg3);
    let br_RAM = Number(arg4);
    
    let cena_wideokarti = br_videokarti * 250;
    let edin_procesor = cena_wideokarti * 0.35;
    let cena_procesor = edin_procesor * br_procesori;
    let edin_RAM = cena_wideokarti * 0.10;
    let cena_RAM = br_RAM * edin_RAM;
    let all = cena_RAM + cena_procesor + cena_wideokarti;
    if (br_videokarti > br_procesori) {
        all -= all * 0.15;
    }
    if (all <= budget_Petyr) {
        console.log(`You have ${(budget_Petyr - all).toFixed(2)} leva left!`);
    }
    else {
        console.log(`Not enough money! You need ${(all - budget_Petyr).toFixed(2)} leva more!`)
    }
}