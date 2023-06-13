function movies(input) {
    let movieData = {};

    for (let i = 0; i < input.length; i++) {
        if (input[i].startsWith("addMovie")) {
            let movieName = input[i].substring(9);
            movieData[movieName] = {};
        }
        else if (input[i].includes("directedBy")) {
            let [movieName, director] = input[i].split(" directedBy ");
            if (movieData.hasOwnProperty(movieName)) {
                movieData[movieName].director = director;
            }
        }
        else if (input[i].includes("onDate")) {
            let [movieName, date] = input[i].split(" onDate ");
            if (movieData.hasOwnProperty(movieName)) {
                movieData[movieName].date = date;
            }
        }
    }

    for (let movie in movieData) {
        if (movieData[movie].hasOwnProperty("director") && movieData[movie].hasOwnProperty("date")) {
            console.log(JSON.stringify({name: movie, director: movieData[movie].director, date: movieData[movie].date}));
        }
    }
}