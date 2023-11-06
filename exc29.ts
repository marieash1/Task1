let favorite_fruits: string[] = ["cherry", "kiwi", "mango"];

for (let i: number = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] == "cherry") {
        console.log("Cherry found");
    } else if (favorite_fruits[i] == "kiwi") {
        console.log("Kiwi found");
    } else if (favorite_fruits[i] == "banana") {
        console.log("Banana found");
    } else if (favorite_fruits[i] == "mango") {
        console.log("Mango found");
    } else if (favorite_fruits[i] == "pear") {
        console.log("Pear found");
    } else {
        console.log("Not found");
    }
}
