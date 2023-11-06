//Solution of Question 15, 16,17
var guest_list1 = ["Shaista", "Hamna", "Saad", "Fahad"];
console.log("Thank you for accepting my invitation ".concat(guest_list1[0]));
console.log("Thank you for accepting my invitation ".concat(guest_list1[1]));
console.log("Thank you for accepting my invitation ".concat(guest_list1[3]));
console.log("".concat(guest_list1[2], " will not able to join us"));
guest_list1[2] = "Fiza";
console.log("Replace List");
for (var i = 0; i < 4; i++) {
    console.log("Be my guest for dinner today ".concat(guest_list1[i]));
}
//add element in the beginning
guest_list1.unshift("Ali");
//add element in the middle
guest_list1.splice(3, 0, "Sarah");
//add element in the end
guest_list1.push("Hammad");
console.log("Updated List");
for (var i = 0; i < guest_list1.length; i++) {
    console.log("Be my guest for dinner today ".concat(guest_list1[i]));
}
//Remove guest;
console.log("Guest Removed");
var rem_guest1 = guest_list1.pop();
console.log("Sorry for cancelling invitation ".concat(rem_guest1));
var rem_guest2 = guest_list1.pop();
console.log("Sorry for cancelling invitation ".concat(rem_guest2));
var rem_guest3 = guest_list1.pop();
console.log("Sorry for cancelling invitation ".concat(rem_guest3));
var rem_guest4 = guest_list1.pop();
console.log("Sorry for cancelling invitation ".concat(rem_guest4));
var rem_guest5 = guest_list1.pop();
console.log("Sorry for cancelling invitation ".concat(rem_guest5));
console.log("Updated List");
for (var i = 0; i < guest_list1.length; i++) {
    console.log("You're still on invitation list ".concat(guest_list1[i]));
}
console.log("Guest Removed");
var rem_guest6 = guest_list1.pop();
console.log("Sorry for cancelling invitation ".concat(rem_guest6));
var rem_guest7 = guest_list1.pop();
console.log("Sorry for cancelling invitation ".concat(rem_guest7));
console.log("Array:");
console.log(guest_list1);
