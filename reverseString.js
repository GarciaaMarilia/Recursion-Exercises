function reverseString(string) {
 if (string.length <= 1) {
  return string;
 } else {
  return reverseString(string.slice(1)).concat(reverseString(string[0]));
 }
}

console.log(reverseString("Mari"));
