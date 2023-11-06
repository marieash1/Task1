// Q#18 solution
var fav_places = ["Maldives", "Disneyland", "Newyork", "Dubai", "Japan"];
for (var i = 0; i < fav_places.length; i++) {
    console.log(fav_places[i]);
}
fav_places.sort();
console.log("Sorted Array: ");
for (var i = 0; i < fav_places.length; i++) {
    console.log(fav_places[i]);
}
console.log("Orignal Array:");
var fav_places1 = ["Maldives", "Disneyland", "Newyork", "Dubai", "Japan"];
for (var i = 0; i < fav_places.length; i++) {
    console.log(fav_places1[i]);
}
fav_places.sort();
console.log("Reverse Sorted Array: ");
for (var i = fav_places.length - 1; i >= 0; i--) {
    console.log(fav_places[i]);
}
console.log("Orignal Array:");
var fav_places2 = ["Maldives", "Disneyland", "Newyork", "Dubai", "Japan"];
for (var i = 0; i < fav_places2.length; i++) {
    console.log(fav_places2[i]);
}
console.log("Reversed ordered Array:");
for (var i = fav_places2.length - 1; i >= 0; i--) {
    console.log(fav_places2[i]);
}
console.log("Orignal Array:");
for (var i = 0; i < fav_places2.length; i++) {
    console.log(fav_places2[i]);
}
fav_places2.sort();
console.log("Manually Sorted Array: ");
var fav_places3 = ["Disneyland", "Dubai", "Japan", "Maldives", "Newyork"];
for (var i = 0; i < fav_places3.length; i++) {
    console.log(fav_places3[i]);
}
console.log("Manually Reverse Sorted Array: ");
var fav_places4 = ["Newyork", "Maldives", "Japan", "Dubai", "Disneyland"];
for (var i = 0; i < fav_places4.length; i++) {
    console.log(fav_places4[i]);
}
