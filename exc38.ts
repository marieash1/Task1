function City(cname:string, country?:string):void{
if(country==null){
    console.log(`${cname} is in Pakistan`);
}
else{
    console.log(`${cname} is in ${country}`);
}
}
City("London", "UK");
City("Karachi");