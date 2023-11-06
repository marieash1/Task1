function make_album(artistn, albumt, num_tracks) {
    var album = {
        name: artistn,
        title: albumt
    };
    if (num_tracks != undefined) {
        album.num = num_tracks;
    }
    return (album);
}
var myalbum1 = make_album("Airjit Singh", "Ashqui2");
console.log(myalbum1);
var myalbum2 = make_album("Taylor Swift", "Blank Space");
console.log(myalbum2);
var myalbum3 = make_album("Selena Gomez", "The heart wants what it wants", 3);
console.log(myalbum3);
