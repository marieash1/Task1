var ingridients = ["Mayyonise", "ketchup", "onions", "chicken"];
var ingridients1 = ["Beef", "tomatoes", "Mayyonise", "ketchup", "onions", "chicken"];
var ingridients2 = ["Chicken slices", "olives", "jalepenos", "Mayyonise", "ketchup", "onions", "chicken"];
function sandwich(arr) {
    console.log("The sandwich should have these ingridients:");
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
sandwich(ingridients);
sandwich(ingridients1);
sandwich(ingridients2);
