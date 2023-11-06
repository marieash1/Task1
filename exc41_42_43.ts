const magician:string[]=["Zuru","Alien","Mars"];
const copymag:string[]=[...magician];
function show_magician(arr:string[]):void{
    for(let i:number=0;i<arr.length;i++){
        console.log(arr[i]);
    }
}
function make_great(arr1:string[]):void{
    for(let i:number=0;i<arr1.length;i++){
        const res= (`The Great ${arr1[i]}`);
        arr1[i]=res;
    }
}
make_great(copymag);
show_magician(copymag);
show_magician(magician); 