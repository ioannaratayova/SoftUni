function songs(arr) {
    let numOfSongs = Number(arr.shift());
    let type = arr.pop();
    let array = [];

    class Song {
        constructor(songType, nameOfSong, timeSong) {
            this.typeList = songType,
            this.name = nameOfSong,
            this.time = timeSong
        }
    }

    for (let i = 0; i < numOfSongs; i++) {
        let currentEl = arr[i].split("_");
        let songType = currentEl[0];
        let nameOfSong = currentEl[1];
        let timeSong = currentEl[2];

        let s = new Song(songType, nameOfSong, timeSong);
        array.push(s);
    }
    if (type == 'all') {
        for (let song of array){
            console.log(song.name)
        }
    }
    else {
        for (let song of array){
            if (type == song.typeList){
                console.log(song.name);
            }
        }
    }
}