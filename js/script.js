//1. **Matnni tepa va pastki registrdagi harflar sonini hisoblang.**
// - Berilgan matndagi harflarni tepa (upper case) va pastki (lower case) registrdagi harflarga ajratib,
// ularning sonini qaytaruvchi funksiya yozing.

// let str = "saLoM dunYO";
// function upperAndLower(arg) {
//   let upper = 0;
//   let lower = 0;
//   for (const element of arg) {
//     if (element == element.toUpperCase() && element != element.toLowerCase()) {
//       upper++;
//     } else if (
//       element != element.toUpperCase() &&
//       element == element.toLowerCase()
//     ) {
//       lower++;
//     }
//   }
//   return { upper, lower };
// }
// console.log(upperAndLower(str)); //4,6

//2. **Palindrom so‘zlarni ajratish.**
// - Berilgan matndan palindrom so‘zlarni ajratib oladigan funksiya yozing.
// let str = "arra olma nok alla";
// function palindromElement(arg) {
//   let a = arg.split(" ");
//   let res = [];
//   for (const element of a) {
//     if (element == element.split("").reverse().join("")) {
//       res.push(element);
//     }
//   }
//   return res;
// }
// console.log(palindromElement(str));

// 3. **Takroriy raqamlarni aniqlash.**
//  - Berilgan sonlar massivida qaysi raqamlar bir necha marta uchraganini aniqlovchi funksiya yozing.
// let arr = [1, 2, 5, 3, 6, 5, 8, 8, 9];
// function findNumbers(arg) {
//   let res = arg.filter(function (value, index) {
//     return index == arg.indexOf(value) && index !== arg.lastIndexOf(value);
//   });
//   return res;
// }
// console.log(findNumbers(arr));

// 5. **Fibonacci qatorining n-elementini topish.**
//    - Fibonacci qatorining n-elementini topuvchi rekursiv funksiya yozing.
// function fibonacci(n) {
//   if (n <= 0) {
//     return 0;
//   } else if (n === 1) {
//     return 1;
//   } else {
//     return fibonacci(n - 1) + fibonacci(n - 2); // Rekursiv chaqiruv
//   }
// }
// console.log(fibonacci(8));

// 6. **Raqamlar yig‘indisini aniqlash.**
//  - Berilgan ixtiyoriy raqamning raqamlarini yig‘indisini topuvchi funksiya yozing.
// let n = 844;
// function addNumbers(arg) {
//   let ar = String(arg);
//   let res = ar.split("");
//   let sum = 0;
//   for (const element of res) {
//     sum += Number(element);
//   }
//   return sum;
// }
// console.log(addNumbers(n));

//  8. **Matndagi so‘zlarni teskari qilish.**
//  - Matn ichidagi har bir so‘zni teskari qilib, yangi matn hosil qiluvchi funksiya yozing.

// let str = "hello world";
// function reverseElement(arg) {
//   let res = arg.split(" ");
//   res = res.map((element) => {
//     return element.split("").reverse().join("");
//   });
//   return res.join(" ");
// }
// console.log(reverseElement(str));

// 9. **Oddiy sonlarni filtrlash.**
// - Berilgan massivdan faqat tub sonlarni ajratib oluvchi funksiya yozing.
let arr = [1, 2, 6, 7, 5, 9, 17];
