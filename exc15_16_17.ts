//Solution of Question 15, 16,17
const guest_list1:string[]=["Shaista","Hamna","Saad","Fahad"];
console.log(`Thank you for accepting my invitation ${guest_list1[0]}`);
console.log(`Thank you for accepting my invitation ${guest_list1[1]}`);
console.log(`Thank you for accepting my invitation ${guest_list1[3]}`);
console.log(`${guest_list1[2]} will not able to join us`);


guest_list1[2]="Fiza";
console.log("Replace List");
for(let i:number=0;i<4;i++){
    console.log(`Be my guest for dinner today ${guest_list1[i]}`);
    }
//add element in the beginning
guest_list1.unshift("Ali");

//add element in the middle
guest_list1.splice(3,0,"Sarah");

//add element in the end
guest_list1.push("Hammad");
console.log("Updated List");
for(let i:number=0;i<guest_list1.length;i++){
    console.log(`Be my guest for dinner today ${guest_list1[i]}`);
    }
//Remove guest;

console.log("Guest Removed");
    let rem_guest1=guest_list1.pop();
    console.log(`Sorry for cancelling invitation ${rem_guest1}`);
    let rem_guest2=guest_list1.pop();
    console.log(`Sorry for cancelling invitation ${rem_guest2}`);
    let rem_guest3=guest_list1.pop();
    console.log(`Sorry for cancelling invitation ${rem_guest3}`);
    let rem_guest4=guest_list1.pop();
    console.log(`Sorry for cancelling invitation ${rem_guest4}`);
    let rem_guest5=guest_list1.pop();
    console.log(`Sorry for cancelling invitation ${rem_guest5}`);

    console.log("Updated List");
for(let i:number=0;i<guest_list1.length;i++){
    console.log(`You're still on invitation list ${guest_list1[i]}`);
    }
    console.log("Guest Removed");
    let rem_guest6=guest_list1.pop();
    console.log(`Sorry for cancelling invitation ${rem_guest6}`);
    let rem_guest7=guest_list1.pop();
    console.log(`Sorry for cancelling invitation ${rem_guest7}`);
    console.log("Array:");
    console.log(guest_list1)