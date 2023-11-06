function Shirt1(size?:string): void{
    if(size=="small"){
    console.log(`Size: ${size} and message "I love Pakistan`);
   }
   else if(size=="medium"){
    console.log(`Size: ${size} and message "I love Typescript`);
   }
   else{}
   console.log(`Size: large and message "I love Typescript`);
}
Shirt1("none");
Shirt1(" ");