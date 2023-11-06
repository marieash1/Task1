let word:string= "Mazda";
console.log("Is car == 'Mazda'? I predict True.");
console.log(word=="Mazda");
console.log("Is car == 'BMW'? I predict False.");
console.log(word=="BMW");

let word2:string= "c";
console.log("Is letter == 'c'? I predict True.");
console.log(word2=="c");
console.log("Is letter == 'C'? I predict False.");
console.log(word2=="C");

let num1:number= 5;
console.log("Is number == 10? I predict False.")
console.log(num1 == 10);
console.log("Is number != 7? I predict True.")
console.log(num1 != 7);
console.log("Is number > 1? I predict True.")
console.log(num1 > 20);
console.log("Is number > 10? I predict False.")
console.log(num1 > 10);
console.log("Is number <= 10? I predict True.")
console.log(num1 <= 10);
console.log("Is number >= 6? I predict False.")
console.log(num1 >=6);

let number1:number=12;
console.log("Is number > 1 and number < 20? I predict True.")
console.log(num1 > 1 && num1 < 20);
console.log("Is number < 1 and number < 20? I predict False.")
console.log(num1 < 1 && num1 < 20);
console.log("Is number > 1 or number < 20? I predict False.")
console.log(num1 > 10 || num1 < 20);
console.log("Is number < 1 or number < 20? I predict False.")
console.log(num1 < 1 || num1 < 20);

const array:number[]=[1,2,3,4];
console.log("Is number 5 is in array? I predict false");
for(let i:number=0; i<array.length;i++){
    console.log(array[i]==5);
}
console.log("Is number 3 is in array? I predict false");
for(let i:number=0; i<array.length;i++){
    console.log(array[i]==3);
}