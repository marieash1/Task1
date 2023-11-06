const ingridients:string[]=["Mayyonise","ketchup","onions","chicken"];
const ingridients1:string[]=["Beef","tomatoes","Mayyonise","ketchup","onions","chicken"];
const ingridients2:string[]=["Chicken slices","olives","jalepenos","Mayyonise","ketchup","onions","chicken"];
function sandwich(arr:string[]):void{
    console.log("The sandwich should have these ingridients:");
for(let i:number=0;i<arr.length;i++){
    console.log(arr[i]);
}
}
sandwich(ingridients);
sandwich(ingridients1);
sandwich(ingridients2);
