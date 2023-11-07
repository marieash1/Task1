function make_shirt(size: string = "large", message: string = "I love TypeScript") {
    console.log(`Shirt Size: ${size}, Message: ${message}`);
}

//default message
make_shirt();
make_shirt("medium");
make_shirt("small", "Hello World");
