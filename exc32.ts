const current_users :string[]=["Marie","Sanan","user001","anaya2","basil"];
const new_users :string[]=["Sanan","Basil","Uniqlo","me2","zara"];

for(let i:number = 0;i<new_users.length;i++){
    let user_found=false;
 for (let j:number = 0;j<current_users.length;j++){
    if(new_users[i].toLowerCase()=== current_users[j].toLowerCase()){
        console.log(`User already exists ${new_users[i]}`);
        user_found=true;
        break;
    }
}
if(!user_found){
            console.log("User name available");
    }
 }
