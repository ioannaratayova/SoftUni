function skiTrip(input) {
    let stays = (Number(input[0]) - 1);
    let type = input[1];
    let score = input[2];
    let price;
 
    switch(type){
        case "room for one person":
            price = stays * 18;
            if(score === "positive"){
                price =  price * 1.25;
            } else if(score === "negative"){
                price = price * 0.90;
            }
            console.log(price.toFixed(2));
        break;
        case "apartment":
            if(stays < 10){
                price = (stays * 25) * 0.70;
                if(score === "positive"){
                    price = price * 1.25;
                } else if(score === "negative"){
                    price = price * 0.90;
                }
            } else if(stays > 10 && stays < 15){
                price =(price * 25) * 0.65;
                if(score === "positive"){
                    price = price * 1.25;
                }else if(score === "negative"){
                    price = price * 0.90;
                }
            } else if (stays > 15) {
                price = (stays * 25) * 0.50;
                if(score === "positive"){
                    price = price * 1.25;
                }else if(score === "negative"){
                    price = price * 0.90;
                }
            }
        console.log(price.toFixed(2));
        break;
        case "president apartment":
            if(stays < 10){
                price = (stays * 35) * 0.90;
                if(score === "positive"){
                    price = price * 1.25;
                }else if(score === "negative"){
                    price = price * 0.90;
                }
            } else if(stays > 10 && stays < 15){
                price =(price * 35) * 0.85;
                if(score === "positive"){
                    price = price * 1.25;
                }else if(score === "negative"){
                    price = price * 0.90;
                }
            } else if (stays > 15){
                price = (stays* 35) * 0.80;
                if(score === "positive"){
                    price = price * 1.25;
                } else if(score === "negative"){
                    price = price * 0.90;
                }
            }
            console.log(price.toFixed(2));
        break;
        default:
        break;
    }
}