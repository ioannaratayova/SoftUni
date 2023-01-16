function worldSwimmingRecord([arg1, arg2, arg3])  {
    let rekord_sekundi = parseFloat(arg1);
    let razstoqnie_m = parseFloat(arg2);
    let wreme_za_metyr = parseFloat(arg3);
  
    let Ivan_trqbwa_prepluwa = razstoqnie_m * wreme_za_metyr;
    let zabawqne = (Math.floor(razstoqnie_m / 15)) * 12.5;
    let obshto_wreme = Ivan_trqbwa_prepluwa + zabawqne;
    if (obshto_wreme < rekord_sekundi) {
      console.log(`Yes, he succeeded! The new world record is ${(obshto_wreme).toFixed(2)} seconds.`);
    }
    else {
      console.log(`No, he failed! He was ${(obshto_wreme - rekord_sekundi).toFixed(2)} seconds slower.`)
    }
  }