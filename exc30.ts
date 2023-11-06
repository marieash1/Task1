//Q#30
let employee: string[] = ["Admin", "Eric", "Sarah","Shean","Zara"];
for (var i = 0; i < employee.length; i++) {
    if(employee[i]=="Admin"){
        console.log(" Hello admin, would you like to see a status report");
    }
    else
    {
        console.log(`Hello ${employee[i]},Thank u for logging in`);
    }
}