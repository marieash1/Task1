// Q#18 solution
const fav_places:string[]=["Maldives","Disneyland","Newyork","Dubai","Japan"];
for(let i:number=0;i<fav_places.length;i++){
    console.log(fav_places[i]);
}
fav_places.sort();
console.log("Sorted Array: ");
for(let i:number=0;i<fav_places.length;i++){
    console.log(fav_places[i]);
}
console.log("Orignal Array:");
const fav_places1:string[]=["Maldives","Disneyland","Newyork","Dubai","Japan"];
for(let i:number=0;i<fav_places.length;i++){
    console.log(fav_places1[i]);
}
fav_places.sort();
console.log("Reverse Sorted Array: ");
for(let i:number=fav_places.length-1;i>=0;i--){
    console.log(fav_places[i]);
}
console.log("Orignal Array:");
const fav_places2:string[]=["Maldives","Disneyland","Newyork","Dubai","Japan"];
for(let i:number=0;i<fav_places2.length;i++){
    console.log(fav_places2[i]);
}
console.log("Reversed ordered Array:");
for(let i:number=fav_places2.length-1;i>=0;i--){
    console.log(fav_places2[i]);
}
console.log("Orignal Array:");
for(let i:number=0;i<fav_places2.length;i++){
    console.log(fav_places2[i]);
}
fav_places2.sort();
console.log("Manually Sorted Array: ");
const fav_places3:string[]=["Disneyland","Dubai","Japan","Maldives","Newyork"];
for(let i:number=0;i<fav_places3.length;i++){
    console.log(fav_places3[i]);
}
console.log("Manually Reverse Sorted Array: ");
const fav_places4:string[]=["Newyork","Maldives","Japan","Dubai","Disneyland"];
for(let i:number=0;i<fav_places4.length;i++){
    console.log(fav_places4[i]);
}