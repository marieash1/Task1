function City(cname, country) {
    if (country == null) {
        console.log("".concat(cname, " is in Pakistan"));
    }
    else {
        console.log("".concat(cname, " is in ").concat(country));
    }
}
City("London", "UK");
City("Karachi");
