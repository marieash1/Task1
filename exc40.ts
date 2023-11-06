function make_album(artistn:string,albumt:string, num_tracks?:number):{name:string,title:string, num?:number}{
 const album : {name:string,title:string, num?:number}={ 
    name:artistn,
    title:albumt};
    if(num_tracks!=undefined){
        album.num=num_tracks;
    }
 return (album);
}
const myalbum1= make_album("Airjit Singh","Ashqui2");
console.log(myalbum1);
const myalbum2= make_album("Taylor Swift","Blank Space");
console.log(myalbum2);
const myalbum3= make_album("Selena Gomez","The heart wants what it wants",3);
console.log(myalbum3);