// challenge 2 transform string
const transformString = (str) => {
  let length = str.length;
  if (length % 3 === 0 && length % 5 === 0) {
    str = str.split("").reverse().join(""); // reverse the string
    str = str
      .split("")
      .map((c) => c.charCodeAt(0))
      .join(" "); // convert to ascii
  } else if (length % 3 === 0) {
    str = str.split("").reverse().join(""); // reverse the string
  } else if (length % 5 === 0) {
    str = str
      .split("")
      .map((c) => c.charCodeAt(0))
      .join(" "); // convert to ascii
  }
  return str; // return the transformed string
};
//Example 
console.log(transformString("hello")); // 104 101 108 108 111
