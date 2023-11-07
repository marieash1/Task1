function describe_city(city, country) {
    if (country === void 0) { country = "unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("New York"); // Using the default country
describe_city("Paris", "France");
