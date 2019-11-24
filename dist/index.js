"use strict";
// function isAnagram(stringA: string, stringB: string): boolean {
//   const sanatizeString = function(str: string): string {
//     return str
//       .toLowerCase()
//       .replace(/[^a-z][^0-9]/g, "")
//       .split("")
//       .sort()
//       .join("");
//   };
//   return sanatizeString(stringA) === sanatizeString(stringB);
// }
// function isAnagram(stringA: string, stringB: string): void {
//   function createCharMap(text: string) {
//     let charMap = {};
//     for (let char of text) {
//       if (charMap.hasOwnProperty()) {
//         charMap[char]++;
//       } else {
//         charMap[char] = 1;
//       }
//     }
//     return charMap;
//   }
//   if (stringA.length === stringB.length) {
//     let stringAMap = createCharMap(stringA);
//     let stringBMap = createCharMap(stringB);
//     for (let char in stringAMap) {
//       if (stringAMap[char] !== stringBMap[char]) {
//         return false;
//       }
//       return true;
//     }
//   } else {
//     return false;
//   }
// }
console.log(isAnagram("silent", "listen"));
