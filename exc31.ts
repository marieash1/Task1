let user: string[] = ["Admin", "Eric", "Sarah","Shean","Zara"];
for (let i:number = 0; i < user.length; i++) {
    if(user[i]!=null){
        console.log("User found");
    }
    else
    {
        console.log("We need to find new user");
    }
}
user.pop();
user.pop();
user.pop();
user.pop();
user.pop();
let userfound= false;
for (let i:number = 0; i < user.length; i++) {
    if(user[i]!=null && user[i]!=undefined){
        console.log("User found");
        userfound= true;
    }}
    if(!userfound)
    {
        console.log("We need to find new user");
    }
