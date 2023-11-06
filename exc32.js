var current_users = ["Marie", "Sanan", "user001", "anaya2", "basil"];
var new_users = ["Sanan", "Basil", "Uniqlo", "me2", "zara"];
for (var i = 0; i < new_users.length; i++) {
    var user_found = false;
    for (var j = 0; j < current_users.length; j++) {
        if (new_users[i].toLowerCase() === current_users[j].toLowerCase()) {
            console.log("User already exists ".concat(new_users[i]));
            user_found = true;
            break;
        }
    }
    if (!user_found) {
        console.log("User name available");
    }
}
