function solve(args) {
    let typeOfTicket = "";
    let index = 0;
    let totalTickets = 0;
    let student = 0;
    let standart = 0;
    let kid = 0;

    while (true) {
        let nameOfMovie = args[index];
        if (nameOfMovie == 'Finish') {
            break;
        }
        index++
        let freeSeats = Number(args[index]);
        let totalSeats = freeSeats;
        
        while (typeOfTicket != 'End' && freeSeats != 0) {
            index++
            typeOfTicket = args[index];
            if (typeOfTicket == 'student') {
                student += 1;
                freeSeats -= 1;
                totalTickets += 1;
            }
            else if (typeOfTicket == 'standard') {
                standart += 1;
                freeSeats -= 1;
                totalTickets += 1;
            }
            else if (typeOfTicket == 'kid') {
                kid += 1;
                freeSeats -= 1;
                totalTickets += 1;
            }
        }
        if (freeSeats == 0){
            console.log(`${nameOfMovie} - 100.00% full.`);
        }
        else{
            console.log(`${nameOfMovie} - ${(((totalSeats - freeSeats) / totalSeats) * 100).toFixed(2)}% full.`);
        }
        index++;
        typeOfTicket = '';
    }
    console.log(`Total tickets: ${totalTickets}`);
    console.log(`${((student / totalTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standart / totalTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kid / totalTickets) * 100).toFixed(2)}% kids tickets.`);
}