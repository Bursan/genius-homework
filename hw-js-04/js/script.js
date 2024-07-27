// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm("Батьки дозволили?");
//   }
// }

// Відповідь №1
// function checkAge(age) {
//   age > 18 ? true : confirm("Батьки дозволили?");
// }
// checkAge(prompt("Введіть вік:"));

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.

// Відповідь №2
// const min = (a, b) => {
//   minNumber = a > b ? b : a;
//   return alert(`Меньше число ${minNumber}`);
// };
// min(prompt("Введіть перше число:"), prompt("Введіть друге число:"));

// --- 3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
// if (confirm(question)) yes();
// else no();
// }
// ask(
// "Ви згодні?",
// function() { alert("Ви погодились."); },
// function() { alert("Ви скасували виконання."); }
// );

// Відповідь №3
// const ask = (question, yes, no) => {
//   confirm(question) ? yes() : no();
// };
// ask(
//   "Ви згодні?",
//   () => {
//     alert("Ви погодились.");
//   },
//   () => {
//     alert("Ви скасували виконання.");
//   }
// );
