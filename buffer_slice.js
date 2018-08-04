var numbers = new Buffer("123456789");
console.log(numbers.toString());
var slice = numbers.slice(3, 6);
console.log(slice.toString());
slice[0] = '#'.charCodeAt(0);   
// so what i think this is doing is a string is an array of characters so '#' is the 0th element and charcode returns a value
// but why use the code? assume that the buffer type casts to int when initialised so we need to store integer byte codes for 
// the character?
slice[slice.length-1] = '#'.charCodeAt(0);
console.log(slice.toString());
console.log(numbers.toString());