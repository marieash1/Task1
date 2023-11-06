var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magician = ["Zuru", "Alien", "Mars"];
var copymag = __spreadArray([], magician, true);
function show_magician(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
function make_great(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        var res = ("The Great ".concat(arr1[i]));
        arr1[i] = res;
    }
}
make_great(copymag);
show_magician(copymag);
show_magician(magician);
