function songs(arr) {
    
    let array = arr;

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    let songs = [];

    let numberOfSongs = array.shift();

    let typeOfPlaylist = array.pop();

    for (let el of array) {
        let [type, name, time] = el.split("_");
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeOfPlaylist == "all") {
        songs.forEach((s) => console.log(s.name));
    } else {
        let filtered = songs.filter((el) => el.type == typeOfPlaylist);
        filtered.forEach((s) => console.log(s.name));
    }
}